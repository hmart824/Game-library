const baseUrl = `https://api.rawg.io/api`;
const key = `key=bef892605937470db41e81a497c8b119`;
const gamesPerPage = 20;

const getMonth = ()=>{
    const month = new Date().getMonth() + 1;
    if(month < 10){
        return `0${month}`;
    }else{
        return month;
    }
};
const getday = ()=>{
    const Day = new Date().getDate();
    if(Day < 10){
        return `0${Day}`;
    }else{
        return Day;
    }
};

const currentYear = new Date().getFullYear();
const currentMonth = getMonth();
const currentDay = getday();

const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 2}-${currentMonth}-${currentDay}`;

const popularGames = `/games?${key}&dates=${lastYear},${currentDate}&odering=-added&page_size=${gamesPerPage}`;
const upcomingGames = `/games?${key}&dates=${currentDate},${nextYear}&odering=-added&page_size=${gamesPerPage}`;
const newGames = `/games?${key}&dates=${lastYear},${currentDate}&odering=-released&page_size=${gamesPerPage}`;
const bestGames = `/games?${key}&page_size=${gamesPerPage}`;

//Genres
const actionGames = `/games?genres=action&${key}&page_size=${gamesPerPage}`;
const shooterGames = `/games?genres=shooter&${key}&page_size=${gamesPerPage}`;
const adventureGames = `/games?genres=adventure&${key}&page_size=${gamesPerPage}`;
const rolePlayingGames = `/games?genres=role-playing-games-rpg&${key}&page_size=${gamesPerPage}`;
const strategyGames = `/games?genres=strategy&${key}&page_size=${gamesPerPage}`;
const puzzleGames = `/games?genres=puzzle&${key}&page_size=${gamesPerPage}`;
const racingGames = `/games?genres=racing&${key}&page_size=${gamesPerPage}`;
const sportsGames = `/games?genres=sports&${key}&page_size=${gamesPerPage}`;



export const popularGamesURL = (page)=> `${baseUrl}${popularGames}&page=${page}`;
export const upcomingGamesURL = (page)=> `${baseUrl}${upcomingGames}&page=${page}`;
export const newGamesURL = (page)=> `${baseUrl}${newGames}&page=${page}`;
export const bestGamesURL = (page)=> `${baseUrl}${bestGames}&page=${page}`;

//Genres URL
export const actionGamesURL = (page)=> `${baseUrl}${actionGames}&page=${page}`;
export const shooterGamesURL = (page)=> `${baseUrl}${shooterGames}&page=${page}`;
export const adventureGamesURL = (page)=> `${baseUrl}${adventureGames}&page=${page}`;
export const rolePlayingGamesURL = (page)=> `${baseUrl}${rolePlayingGames}&page=${page}`;
export const strategyGamesURL = (page)=> `${baseUrl}${strategyGames}&page=${page}`;
export const puzzleGamesURL = (page)=> `${baseUrl}${puzzleGames}&page=${page}`;
export const racingGamesURL = (page)=> `${baseUrl}${racingGames}&page=${page}`;
export const sportsGamesURL = (page)=> `${baseUrl}${sportsGames}&page=${page}`;

// https://api.rawg.io/api/games?search=g&search_precise=true&search_exact=true&key=bef892605937470db41e81a497c8b119

export const searchGamesURL = (title , page)=> `${baseUrl}/games?search=${title}&search_precise=true&search_exact=true&${key}&page_size=10&page=${page}`;
