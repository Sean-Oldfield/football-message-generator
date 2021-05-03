const competitions = [
    'Premier League',
    'UEFA Champions League',
    'UEFA Europa League',
    'FA Cup',
    'League Cup'
];

const teams = [
    'Liverpool FC',
    'Manchester United',
    'Manchester City',
    'Everton',
    'Arsenal',
    'Spurs',
    'Chelsea',
    'Newport County'
];

const players = {
    'Liverpool FC': ['Mo Salah', 'Sadio Mane'],
    'Manchester United': ['Bruno Fernandes', 'Marcus Rashford'],
    'Manchester City': ['Sergio Aguero', 'Gabriel Jesus'],
    'Everton': [ 'Richarlison', 'Dominic Calvert-Lewin'],
    'Arsenal': [ 'Pierre-Emerick Aubameyang', 'Alexandre Lacazette'],
    'Spurs': ['Harry Kane', 'Heung-Min Son'],
    'Chelsea': ['Timo Werner', 'Olivier Giroud'],
    'Newport County': ['Padraig Amond', 'Joss Labadie']
};

const competitionWinnerMessage = () => {
    let competition = competitions[Math.floor(Math.random() * competitions.length)];
    let team = teams[Math.floor(Math.random() * teams.length)];
    let player = players[team][Math.floor(Math.random() * players[team].length)];
    let numOfGoals = Math.floor(Math.random() * 40);

    console.log(`The winners of the ${competition} are ${team}!`);
    console.log(`The player of the tournament was ${player}.`);
    console.log(`${player} scored ${numOfGoals} goals to take home the golden boot.`);
}

competitionWinnerMessage();
