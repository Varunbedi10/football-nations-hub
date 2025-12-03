console.log("App file loaded ✓");

// DOM Elements
let player1Select, player2Select, player1Preview, player2Preview, chartPlaceholder, chartWrapper, playerModal;
let radarChart = null;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    player1Select = document.getElementById('player1Select');
    player2Select = document.getElementById('player2Select');
    player1Preview = document.getElementById('player1Preview');
    player2Preview = document.getElementById('player2Preview');
    chartPlaceholder = document.getElementById('chartPlaceholder');
    chartWrapper = document.getElementById('chartWrapper');

    const playerModalEl = document.getElementById('playerModal');
    if (playerModalEl && window.bootstrap?.Modal) {
        playerModal = new bootstrap.Modal(playerModalEl);
    }

    populateSelects();
    setupMarkerListeners();
    setupNavigation();
});

// Populate dropdown menu
function populateSelects() {
    if (!players || !Array.isArray(players)) {
        return console.error("❌ Players array not loaded");
    }

    players.forEach(player => {
        player1Select.add(new Option(`${player.flag} ${player.name}`, player.id));
        player2Select.add(new Option(`${player.flag} ${player.name}`, player.id));
    });

    player1Select.addEventListener("change", updateComparison);
    player2Select.addEventListener("change", updateComparison);
}

// Marker Click Listeners → open modal
function setupMarkerListeners() {
    document.querySelectorAll('.country-marker').forEach(marker => {
        marker.addEventListener("click", () => {
            const playerId = marker.dataset.player;
            const player = players.find(p => p.id === playerId);
            if (player) showPlayerModal(player);
        });
    });
}

// Smooth navigation
function setupNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", e => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute("href"))?.scrollIntoView({ behavior: "smooth" });

            document.querySelectorAll('.nav-pills-custom .nav-link')
                .forEach(link => link.classList.remove('active'));
            anchor.classList.add('active');
        });
    });
}

// Show Player Modal
function showPlayerModal(player) {
    document.getElementById('modalPlayerImg').src = player.image;
    document.getElementById('modalPlayerFlag').textContent = player.flag;
    document.getElementById('modalPlayerName').textContent = player.name;
    document.getElementById('modalPlayerPosition').textContent = player.position;
    document.getElementById('modalPlayerClub').textContent = player.club;
    document.getElementById('modalPlayerCountry').textContent = player.country;
    document.getElementById('modalPlayerBio').textContent = player.bio;
    document.getElementById('modalPlayerFunfact').textContent = player.funFact;

    // Achievements
    if (player.achievements) {
        achBallonDor.textContent = player.achievements.ballonDor + "x";
        achUCL.textContent = player.achievements.ucl + "x";
        achWorldCup.textContent = player.achievements.worldCup + "x";
    }

    // Stats Bars
    const statsContainer = document.getElementById("modalPlayerStats");
    statsContainer.innerHTML = "";
    Object.entries(player.stats).forEach(([key, value]) => {
        statsContainer.innerHTML += `
            <div class="stat-bar-container">
                <div class="stat-bar-header">
                    <span>${key.toUpperCase()}</span>
                    <span>${value}</span>
                </div>
                <div class="stat-bar">
                    <div class="stat-bar-fill" style="width:${value}%"></div>
                </div>
            </div>`;
    });

    // ⭐ NEW: Load Tutorials into Modal
    const tutorialContainer = document.getElementById("modalPlayerTutorials");
    if (player.tutorials && player.tutorials.length > 0) {
        tutorialContainer.innerHTML = `
            <h5 style="font-family:'Oswald',sans-serif;margin-top:20px;">Tutorials</h5>
            ${player.tutorials.map(t =>
                `<div class="tutorial-item">
                    <p class="fw-bold">${t.title} <span class="text-muted small">(${t.difficulty})</span></p>
                    <iframe width="100%" height="200" src="${t.video}" frameborder="0" allowfullscreen></iframe>
                </div>`
            ).join("")}
        `;
    } else {
        tutorialContainer.innerHTML = `<p class="text-muted">No tutorials available</p>`;
    }

    playerModal.show();
}

// Comparison & Radar Chart
function updateComparison() {
    const p1 = players.find(p => p.id === player1Select.value);
    const p2 = players.find(p => p.id === player2Select.value);

    updatePreview(p1, player1Preview, 'player1Img', 'player1Name', 'player1Info');
    updatePreview(p2, player2Preview, 'player2Img', 'player2Name', 'player2Info');

    if (p1 && p2) {
        chartPlaceholder.style.display = "none";
        chartWrapper.style.display = "block";
        updateChart(p1, p2);
        updateStatsSummary(p1, p2);
    } else {
        chartPlaceholder.style.display = "flex";
        chartWrapper.style.display = "none";
    }
}

function updatePreview(player, previewEl, imgId, nameId, infoId) {
    if (!player) return previewEl.style.display = "none";
    previewEl.style.display = "flex";
    document.getElementById(imgId).src = player.image;
    document.getElementById(nameId).textContent = player.name;
    document.getElementById(infoId).textContent = `${player.position} • ${player.club}`;
}

// Radar Chart
function updateChart(p1, p2) {
    if (radarChart) radarChart.destroy();
    const ctx = document.getElementById("radarChart").getContext("2d");
    radarChart = new Chart(ctx, {
        type: "radar",
        data: {
            labels: ["Goals", "Pace", "Dribbling", "Passing", "Physical"],
            datasets: [
                {
                    label: p1.name, data: Object.values(p1.stats),
                    borderColor: "#22c55e", backgroundColor: "rgba(34,197,94,0.3)"
                },
                {
                    label: p2.name, data: Object.values(p2.stats),
                    borderColor: "#eab308", backgroundColor: "rgba(234,179,8,0.3)"
                }
            ]
        }
    });
}

// Stats Winner
function updateStatsSummary(p1, p2) {
    const stats = ["goals", "pace", "dribbling", "passing", "physical"];
    document.getElementById("statsSummary").innerHTML = stats.map(stat =>
        `<div class="stat-item">
            <div class="stat-item-label">${stat.toUpperCase()}</div>
            <div class="stat-item-winner">
                ${p1.stats[stat] === p2.stats[stat] ? "🤝" :
                    p1.stats[stat] > p2.stats[stat] ? p1.flag : p2.flag}
            </div>
        </div>`
    ).join("");
}

// Reset
function resetComparison() {
    player1Select.value = "";
    player2Select.value = "";
    player1Preview.style.display = "none";
    player2Preview.style.display = "none";
    radarChart?.destroy();
    chartPlaceholder.style.display = "flex";
    chartWrapper.style.display = "none";
}
