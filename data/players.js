const players = [
    {
        id: "messi",
        name: "Lionel Messi",
        country: "Argentina",
        flag: "🇦🇷",
        image: "assets/images/Messi.jpeg",
        position: "Forward",
        club: "Inter Miami",
        bio: "Eight-time Ballon d'Or winner and World Cup champion.",
        funFact: "Messi has scored in 19 consecutive La Liga seasons.",
        stats: { goals: 98, pace: 85, dribbling: 96, passing: 92, physical: 65 },
        achievements: {
        ballonDor: 8, ucl: 4, worldCup: 1    // Messi
        },
    },
    {
        id: "ronaldo",
        name: "Cristiano Ronaldo",
        country: "Portugal",
        flag: "🇵🇹",
        image: "assets/images/Ronaldo.jpg",
        position: "Forward",
        club: "Al Nassr",
        bio: "Five-time Ballon d'Or winner.",
        funFact: "All-time top scorer in UCL history.",
        stats: { goals: 95, pace: 87, dribbling: 88, passing: 82, physical: 78 },
        achievements: {
        ballonDor: 5, ucl: 5, worldCup: 0    // Ronaldo
        },
    },
    {
        id: "mbappe",
        name: "Kylian Mbappé",
        country: "France",
        flag: "🇫🇷",
        image: "assets/images/Mbappe.jpeg",
        position: "Forward",
        club: "Real Madrid",
        bio: "World Cup winner at 19.",
        funFact: "1st teenager since Pelé to score in a WC final.",
        stats: { goals: 88, pace: 97, dribbling: 92, passing: 80, physical: 76 },
        achievements: {
        ballonDor: 0, ucl: 0, worldCup: 1    // Mbappé
        },
    },
    {
        id: "haaland",
        name: "Erling Haaland",
        country: "Norway",
        flag: "🇳🇴",
        image: "assets/images/Haaland.jpeg",
        position: "Striker",
        club: "Manchester City",
        bio: "Broke PL goal record in debut season.",
        funFact: "His father also played PL football.",
        stats: { goals: 94, pace: 89, dribbling: 80, passing: 72, physical: 88 },
        achievements: {
        ballonDor: 0, ucl: 1, worldCup: 0    // Haaland
        },
    },
    {
        id: "debruyne",
        name: "Kevin De Bruyne",
        country: "Belgium",
        flag: "🇧🇪",
        image: "assets/images/Kevin.jpeg",
        position: "Midfielder",
        club: "Manchester City",
        bio: "Master playmaker.",
        funFact: "Sold by Chelsea after only 9 mins played.",
        stats: { goals: 72, pace: 76, dribbling: 86, passing: 95, physical: 78 },
        achievements: {
        ballonDor: 0, ucl: 1, worldCup: 0    // De Bruyne
        },
    },
    {
        id: "salah",
        name: "Mohamed Salah",
        country: "Egypt",
        flag: "🇪🇬",
        image: "assets/images/Salah.jpeg",
        position: "Forward",
        club: "Liverpool",
        bio: "Egyptian King.",
        funFact: "Built hospitals & schools in hometown.",
        stats: { goals: 89, pace: 90, dribbling: 90, passing: 82, physical: 75 },
        achievements: {
        ballonDor: 0, ucl: 1, worldCup: 0    // Salah
        },
    },
    {
        id: "modric",
        name: "Luka Modrić",
        country: "Croatia",
        flag: "🇭🇷",
        image: "assets/images/Modric.jpeg",
        position: "Midfielder",
        club: "Real Madrid",
        bio: "2018 Ballon d'Or winner.",
        funFact: "Played football among sheep.",
        stats: { goals: 65, pace: 74, dribbling: 90, passing: 94, physical: 66 },
        achievements: {
        ballonDor: 1, ucl: 5, worldCup: 0    // Modrić
        },
    },
    {
        id: "neymar",
        name: "Neymar Jr",
        country: "Brazil",
        flag: "🇧🇷",
        image: "assets/images/Neymar.jpg",
        position: "Forward",
        club: "Al Hilal",
        bio: "Flair & skill icon.",
        funFact: "Most expensive transfer ever.",
        stats: { goals: 85, pace: 91, dribbling: 94, passing: 86, physical: 62 },
        achievements: {
        ballonDor: 0, ucl: 1, worldCup: 0    // Neymar
        },
    },
    {
        id: "lewandowski",
        name: "Robert Lewandowski",
        country: "Poland",
        flag: "🇵🇱",
        image: "assets/images/Robert.avif",
        position: "Striker",
        club: "Barcelona",
        bio: "5 goals in 9 minutes record.",
        funFact: "Fastest Bundesliga hat-trick — 5 mins.",
        stats: { goals: 93, pace: 78, dribbling: 86, passing: 80, physical: 82 },
        achievements: {
        ballonDor: 0, ucl: 1, worldCup: 0    // Lewandowski
        },
    },
    {
        id: "kane",
        name: "Harry Kane",
        country: "England",
        flag: "ENG",
        image: "assets/images/Harry.jpeg",
        position: "Striker",
        club: "Bayern Munich",
        bio: "England all-time top scorer.",
        funFact: "Rejected by Arsenal academy.",
        stats: { goals: 91, pace: 70, dribbling: 82, passing: 86, physical: 83 },
        achievements: {
        ballonDor: 0, ucl: 0, worldCup: 0    // Kane
        },
    },
    {
        id: "son",
        name: "Son Heung-min",
        country: "South Korea",
        flag: "🇰🇷",
        image: "assets/images/Son.jpeg",
        position: "Forward",
        club: "Tottenham Hotspur",
        bio: "Asia GOAT.",
        funFact: "Exempted from military service after Asian Games.",
        stats: { goals: 84, pace: 92, dribbling: 86, passing: 80, physical: 69 },
        achievements: {
        ballonDor: 0, ucl: 0, worldCup: 0    // Son
        },
    }
];

console.log("Players file loaded ✓", players.length);
