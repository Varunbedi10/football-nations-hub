console.log("App file loaded ✓");
// DOM Elements
let player1Select;
let player2Select;
let player1Preview;
let player2Preview;
let chartPlaceholder;
let chartWrapper;
let playerModal;

let radarChart = null;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // assign DOM elements now that DOM is available
    player1Select = document.getElementById('player1Select');
    player2Select = document.getElementById('player2Select');
    player1Preview = document.getElementById('player1Preview');
    player2Preview = document.getElementById('player2Preview');
    chartPlaceholder = document.getElementById('chartPlaceholder');
    chartWrapper = document.getElementById('chartWrapper');
    const playerModalEl = document.getElementById('playerModal');
    if (playerModalEl && window.bootstrap && typeof window.bootstrap.Modal === 'function') {
        playerModal = new bootstrap.Modal(playerModalEl);
    } else {
        playerModal = null;
    }

    populateSelects();
    setupMarkerListeners();
    setupNavigation();
});

// Populate select dropdowns
function populateSelects() {
    if (!player1Select || !player2Select) return;

    console.log("Players array:", players);
    console.log("Total players:", players.length);

    players.forEach((player, index) => {
        console.log("Adding player to dropdown:", index, player?.name);

        try {
            const option1 = new Option(`${player.flag} ${player.name}`, player.id);
            const option2 = new Option(`${player.flag} ${player.name}`, player.id);
            player1Select.add(option1);
            player2Select.add(option2);
        } catch (error) {
            console.error("❌ Error while adding player at index:", index, player);
            console.error(error);
        }
    });

    player1Select.addEventListener('change', updateComparison);
    player2Select.addEventListener('change', updateComparison);
}

        // Setup map marker listeners
        function setupMarkerListeners() {
            document.querySelectorAll('.country-marker').forEach(marker => {
                marker.addEventListener('click', function() {
                    const playerId = this.dataset.player;
                    const player = players.find(p => p.id === playerId);
                    if (player) {
                        showPlayerModal(player);
                    }
                });
            });
        }

        // Setup smooth scroll navigation
        function setupNavigation() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                    
                    // Update active nav
                    document.querySelectorAll('.nav-pills-custom .nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    this.classList.add('active');
                });
            });
        }

        // Show player modal
function showPlayerModal(player) {
    const imgEl = document.getElementById('modalPlayerImg');
    const flagEl = document.getElementById('modalPlayerFlag');
    const nameEl = document.getElementById('modalPlayerName');
    const posEl = document.getElementById('modalPlayerPosition');
    const clubEl = document.getElementById('modalPlayerClub');
    const countryEl = document.getElementById('modalPlayerCountry');
    const bioEl = document.getElementById('modalPlayerBio');
    const funfactEl = document.getElementById('modalPlayerFunfact');

    const achBallonDor = document.getElementById('achBallonDor');
    const achUCL = document.getElementById('achUCL');
    const achWorldCup = document.getElementById('achWorldCup');
    const statsContainer = document.getElementById('modalPlayerStats');

    if (imgEl) imgEl.src = player.image;
    if (flagEl) flagEl.textContent = player.flag;
    if (nameEl) nameEl.textContent = player.name;
    if (posEl) posEl.textContent = player.position;
    if (clubEl) clubEl.textContent = player.club;
    if (countryEl) countryEl.textContent = player.country;
    if (bioEl) bioEl.textContent = player.bio;
    if (funfactEl) funfactEl.textContent = player.funFact;

    if (player.achievements) {
        if (achBallonDor) achBallonDor.textContent = `${player.achievements.ballonDor}x`;
        if (achUCL) achUCL.textContent = `${player.achievements.ucl}x`;
        if (achWorldCup) achWorldCup.textContent = `${player.achievements.worldCup}x`;
    }

    // Stats Bars Rendering
    if (statsContainer) {
        const statColors = {
            goals: 'goals',
            pace: 'pace',
            dribbling: 'dribbling',
            passing: 'passing',
            physical: 'physical'
        };

        statsContainer.innerHTML = Object.entries(player.stats).map(([key, value]) => `
            <div class="stat-bar-container">
                <div class="stat-bar-header">
                    <span class="stat-bar-label">${key.charAt(0).toUpperCase() + key.slice(1)}</span>
                    <span class="stat-bar-value">${value}</span>
                </div>
                <div class="stat-bar">
                    <div class="stat-bar-fill stat-bar-${statColors[key]}" style="width: ${value}%"></div>
                </div>
            </div>
        `).join('');
    }

    playerModal.show();
}

// Update comparison
function updateComparison() {
    const p1 = player1Select ? players.find(p => p.id === player1Select.value) : null;
    const p2 = player2Select ? players.find(p => p.id === player2Select.value) : null;
            
            // Update previews
    if (p1) {
        if (player1Preview) player1Preview.style.display = 'flex';
        const p1Img = document.getElementById('player1Img'); if (p1Img) p1Img.src = p1.image;
        const p1Name = document.getElementById('player1Name'); if (p1Name) p1Name.textContent = p1.name;
        const p1Info = document.getElementById('player1Info'); if (p1Info) p1Info.textContent = `${p1.position} • ${p1.club}`;
    } else {
        if (player1Preview) player1Preview.style.display = 'none';
    }
            
    if (p2) {
        if (player2Preview) player2Preview.style.display = 'flex';
        const p2Img = document.getElementById('player2Img'); if (p2Img) p2Img.src = p2.image;
        const p2Name = document.getElementById('player2Name'); if (p2Name) p2Name.textContent = p2.name;
        const p2Info = document.getElementById('player2Info'); if (p2Info) p2Info.textContent = `${p2.position} • ${p2.club}`;
    } else {
        if (player2Preview) player2Preview.style.display = 'none';
    }
            
            // Update chart
    if (p1 && p2) {
        if (chartPlaceholder) chartPlaceholder.style.display = 'none';
        if (chartWrapper) chartWrapper.style.display = 'block';
        updateChart(p1, p2);
        updateStatsSummary(p1, p2);
    } else {
        if (chartPlaceholder) chartPlaceholder.style.display = 'flex';
        if (chartWrapper) chartWrapper.style.display = 'none';
    }
}

        // Update radar chart
function updateChart(p1, p2) {
    const radarEl = document.getElementById('radarChart');
    if (!radarEl) return;
    const ctx = radarEl.getContext('2d');

    if (radarChart) {
        radarChart.destroy();
    }
    radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Goals', 'Pace', 'Dribbling', 'Passing', 'Physical'],
            datasets: [
                {
                    label: p1.name,
                    data: [p1.stats.goals, p1.stats.pace, p1.stats.dribbling, p1.stats.passing, p1.stats.physical],
                    borderColor: '#22c55e',
                    backgroundColor: 'rgba(34, 197, 94, 0.2)',
                    borderWidth: 2,
                    pointBackgroundColor: '#22c55e'
                },
                {
                    label: p2.name,
                    data: [p2.stats.goals, p2.stats.pace, p2.stats.dribbling, p2.stats.passing, p2.stats.physical],
                    borderColor: '#eab308',
                    backgroundColor: 'rgba(234, 179, 8, 0.2)',
                    borderWidth: 2,
                    pointBackgroundColor: '#eab308'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        color: '#9ca3af',
                        backdropColor: 'transparent'
                    },
                    grid: {
                        color: '#1f2937'
                    },
                    angleLines: {
                        color: '#1f2937'
                    },
                    pointLabels: {
                        color: '#9ca3af',
                        font: { size: 12 }
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#f9fafb',
                        padding: 20
                    }
                }
            }
        }
    });
}

// Update stats summary
function updateStatsSummary(p1, p2) {
    const stats = ['Goals', 'Pace', 'Dribbling', 'Passing', 'Physical'];
    const summaryContainer = document.getElementById('statsSummary');
    if (!summaryContainer || !p1 || !p2) return;

    summaryContainer.innerHTML = stats.map(stat => {
        const key = stat.toLowerCase();
        const a = p1.stats[key];
        const b = p2.stats[key];
        const winner = a > b ? p1 : a < b ? p2 : null;
        return `
            <div class="stat-item">
                <div class="stat-item-label">${stat}</div>
                <div class="stat-item-winner">${winner ? winner.flag : '🤝'}</div>
            </div>
        `;
    }).join('');
}

// Reset comparison
function resetComparison() {
    if (player1Select) player1Select.value = '';
    if (player2Select) player2Select.value = '';
    if (player1Preview) player1Preview.style.display = 'none';
    if (player2Preview) player2Preview.style.display = 'none';
    if (chartPlaceholder) chartPlaceholder.style.display = 'flex';
    if (chartWrapper) chartWrapper.style.display = 'none';
    if (radarChart) {
        radarChart.destroy();
        radarChart = null;
    }
}

        
