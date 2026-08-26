// Cero Aporte Mag - Interactive Scripts

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Reportaje 1 - Timeline
    const timelineContainer = document.getElementById("interactive-timeline");
    if (timelineContainer) {
        const events = [
            { year: "1995", title: "Abandono escolar", desc: "A los 14 años, María deja la escuela para ayudar económicamente a su familia." },
            { year: "2010", title: "Intento fallido", desc: "Intenta volver a un liceo nocturno, pero los horarios laborales se lo impiden." },
            { year: "2024", title: "El retorno", desc: "Se inscribe en un programa flexible de nivelación de estudios para adultos (CEIA)." },
            { year: "2026", title: "Graduación", desc: "María proyecta recibir su licencia de enseñanza media, abriendo puertas a mejores oportunidades laborales." }
        ];

        events.forEach((ev, idx) => {
            let el = document.createElement("div");
            el.className = "timeline-item";
            el.innerHTML = `<h4>${ev.year}: ${ev.title}</h4><p>${ev.desc}</p>`;
            el.addEventListener("click", () => {
                document.querySelectorAll(".timeline-item").forEach(i => i.classList.remove("active"));
                el.classList.add("active");
            });
            timelineContainer.appendChild(el);
        });
    }

    // 2. Reportaje 2 - Chart.js & Card Sorting
    const ctx = document.getElementById("educationChart");
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['2019', '2020 (Pandemia)', '2021', '2023', '2025'],
                datasets: [{
                    label: 'Matrícula de Adultos (Miles)',
                    data: [140, 110, 105, 125, 135],
                    backgroundColor: '#FF3F20',
                    borderColor: '#1A1817',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: { beginAtZero: true, grid: { color: '#333' } },
                    x: { grid: { color: '#333' } }
                },
                plugins: {
                    legend: { labels: { color: '#FFF' } }
                }
            }
        });
    }

    const sortContainer = document.getElementById("card-sorting-container");
    if (sortContainer) {
        const cards = [
            { text: "Baja retención de estudiantes", type: "desafio" },
            { text: "Horarios flexibles (CEIA)", type: "politica" },
            { text: "Estigma social", type: "desafio" },
            { text: "Validación de oficios", type: "politica" }
        ];

        cards.forEach(card => {
            let el = document.createElement("div");
            el.className = "sort-card";
            el.innerText = card.text;
            el.addEventListener("click", () => {
                el.classList.add("revealed");
                el.classList.add(card.type);
                el.innerText = card.type === "desafio" ? "⚠️ Desafío" : "💡 Política Propuesta";
                setTimeout(() => { el.innerText = card.text; }, 2000);
            });
            sortContainer.appendChild(el);
        });
    }

    // 3. Reportaje 3 - Glossary Game
    const words = document.querySelectorAll(".highlight-word");
    const defBox = document.getElementById("definition-box");
    
    if (words.length > 0 && defBox) {
        words.forEach(word => {
            word.addEventListener("click", () => {
                words.forEach(w => w.classList.remove("active"));
                word.classList.add("active");
                defBox.innerHTML = `<strong>${word.innerText}:</strong> ${word.getAttribute("data-def")}`;
            });
        });
    }
});
