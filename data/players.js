const players = [
    {
        id: "messi",
        name: "Lionel Messi",
        countryCode: "AR",
        country: "Argentina",
        flag: "🇦🇷",
        image: "assets/images/Messi.jpg",
        position: "Forward",
        club: "Inter Miami",
        bio: "Eight-time Ballon d'Or winner and World Cup champion.",
        funFact: "Messi has scored in 19 consecutive La Liga seasons.",
        stats: { goals: 98, pace: 85, dribbling: 96, passing: 92, physical: 65 },
        achievements: { ballonDor: 8, ucl: 4, worldCup: 1 },
        tutorials: [
            {
                title: "Dribbling Like Messi",
                video: "https://www.youtube.com/embed/vUrl1dm2GD8",
                difficulty: "Intermediate"
            }
        ]
    },
    {
        id: "ronaldo",
        name: "Cristiano Ronaldo",
        countryCode: "PR",
        country: "Portugal",
        flag: "🇵🇹",
        image: "assets/images/Ronaldo.jpg",
        position: "Forward",
        club: "Al Nassr",
        bio: "Five-time Ballon d'Or winner and UCL all-time top scorer.",
        funFact: "He scored 50+ goals in 6 consecutive seasons.",
        stats: { goals: 95, pace: 87, dribbling: 88, passing: 82, physical: 78 },
        achievements: { ballonDor: 5, ucl: 5, worldCup: 0 },
        tutorials: [
            {
                title: "Shooting Like Ronaldo",
                video: "https://www.youtube.com/embed/q-ZWEYyPVdY",
                difficulty: "Advanced"
            }
        ]
    },
    {
        id: "mbappe",
        name: "Kylian Mbappé",
        countryCode: "FR",
        country: "France",
        flag: "🇫🇷",
        image: "assets/images/Mbappe.jpg",
        position: "Forward",
        club: "Real Madrid",
        bio: "World Cup winner at age 19.",
        funFact: "Fastest modern football sprinting speed.",
        stats: { goals: 88, pace: 97, dribbling: 92, passing: 80, physical: 76 },
        achievements: { ballonDor: 0, ucl: 0, worldCup: 1 },
        tutorials: [
            {
                title: "Speed Training Like Mbappé",
                video: "https://www.youtube.com/embed/r9whrAfs4k0",
                difficulty: "Beginner"
            }
        ]
    },
    {
        id: "haaland",
        name: "Erling Haaland",
        countryCode: "NO",
        country: "Norway",
        flag: "🇳🇴",
        image: "assets/images/Haaland.jpg",
        position: "Striker",
        club: "Manchester City",
        bio: "Premier League single-season goal record holder.",
        funFact: "His father also played for Man City.",
        stats: { goals: 94, pace: 89, dribbling: 80, passing: 72, physical: 88 },
        achievements: { ballonDor: 0, ucl: 1, worldCup: 0 },
        tutorials: [
            {
                title: "Finishing Like Haaland",
                video: "https://www.youtube.com/embed/WrJX--gbFDw",
                difficulty: "Advanced"
            }
        ]
    },
    {
        id: "debruyne",
        name: "Kevin De Bruyne",
        countryCode: "BE",
        country: "Belgium",
        flag: "🇧🇪",
        image: "assets/images/Kevin.jpg",
        position: "Midfielder",
        club: "Manchester City",
        bio: "Elite playmaker known for unmatched passing vision.",
        funFact: "Chelsea sold him after just 9 minutes of league play.",
        stats: { goals: 72, pace: 76, dribbling: 86, passing: 95, physical: 78 },
        achievements: { ballonDor: 0, ucl: 1, worldCup: 0 },
        tutorials: [
            {
                title: "Passing Like De Bruyne",
                video: "https://www.youtube.com/embed/9UGrD9miQ0g",
                difficulty: "Intermediate"
            }
        ]
    },
    {
        id: "salah",
        name: "Mohamed Salah",
        countryCode: "EG",
        country: "Egypt",
        flag: "🇪🇬",
        image: "assets/images/salah.jpg",
        position: "Forward",
        club: "Liverpool",
        bio: "The Egyptian King of Liverpool.",
        funFact: "He helped fund hospitals & schools in his hometown.",
        stats: { goals: 89, pace: 90, dribbling: 90, passing: 82, physical: 75 },
        achievements: { ballonDor: 0, ucl: 1, worldCup: 0 },
        tutorials: [
            {
                title: "Left Foot Finishing Like Salah",
                video: "https://www.youtube.com/embed/HGU3r0fb3Z8",
                difficulty: "Intermediate"
            }
        ]
    },
    {
        id: "modric",
        name: "Luka Modrić",
        countryCode: "HR",
        country: "Croatia",
        flag: "🇭🇷",
        image: "assets/images/Modric.jpg",
        position: "Midfielder",
        club: "Real Madrid",
        bio: "2018 Ballon d'Or winner.",
        funFact: "He trained as a child in war refugee camps.",
        stats: { goals: 65, pace: 74, dribbling: 90, passing: 94, physical: 66 },
        achievements: { ballonDor: 1, ucl: 5, worldCup: 0 },
        tutorials: [
            {
                title: "Ball Control Like Modrić",
                video: "https://www.youtube.com/embed/K9YlbG0B-2I",
                difficulty: "Beginner"
            }
        ]
    },
    {
        id: "neymar",
        name: "Neymar Jr",
        countryCode: "BR",
        country: "Brazil",
        flag: "🇧🇷",
        image: "assets/images/Neymar.jpg",
        position: "Forward",
        club: "Al Hilal",
        bio: "Brazilian maestro of flair and skills.",
        funFact: "Most expensive transfer in history (€222M).",
        stats: { goals: 85, pace: 91, dribbling: 94, passing: 86, physical: 62 },
        achievements: { ballonDor: 0, ucl: 1, worldCup: 0 },
        tutorials: [
            {
                title: "Skill Moves Like Neymar",
                video: "https://www.youtube.com/embed/ss7QM407d1o",
                difficulty: "Intermediate"
            }
        ]
    },
    {
        id: "lewandowski",
        name: "Robert Lewandowski",
        countryCode: "PL",
        country: "Poland",
        flag: "🇵🇱",
        image: "assets/images/Robert.avif",
        position: "Striker",
        club: "Barcelona",
        bio: "One of the most complete strikers ever.",
        funFact: "Scored 5 goals in 9 minutes.",
        stats: { goals: 93, pace: 78, dribbling: 86, passing: 80, physical: 82 },
        achievements: { ballonDor: 0, ucl: 1, worldCup: 0 },
        tutorials: [
            {
                title: "Positioning Like Lewandowski",
                video: "https://www.youtube.com/embed/6wN2KG42yY4",
                difficulty: "Beginner"
            }
        ]
    },
    {
        id: "kane",
        name: "Harry Kane",
        countryCode: "ENG",
        country: "England",
        flag: "🇪🇬",
        image: "assets/images/Harry.jpg",
        position: "Striker",
        club: "Bayern Munich",
        bio: "England all-time top goal scorer.",
        funFact: "Rejected by Arsenal academy.",
        stats: { goals: 91, pace: 70, dribbling: 82, passing: 86, physical: 83 },
        achievements: { ballonDor: 0, ucl: 0, worldCup: 0 },
        tutorials: [
            {
                title: "Finishing Like Kane",
                video: "https://www.youtube.com/embed/06LGadZ4YMg",
                difficulty: "Intermediate"
            }
        ]
    },
    {
        id: "son",
        name: "Son Heung-min",
        countryCode: "KR",
        country: "South Korea",
        flag: "🇰🇷",
        image: "assets/images/Son.jpg",
        position: "Forward",
        club: "Tottenham Hotspur",
        bio: "Asia's greatest ever footballer.",
        funFact: "Won Asian Games → exempt from 21-month army training.",
        stats: { goals: 84, pace: 92, dribbling: 86, passing: 80, physical: 69 },
        achievements: { ballonDor: 0, ucl: 0, worldCup: 0 },
        tutorials: [
            {
                title: "Pace & Finish Like Son",
                video: "https://www.youtube.com/embed/9iCVI6yVWPM",
                difficulty: "Intermediate"
            }
        ]
    }
];

console.log("⚽ Players Loaded →", players.length);
