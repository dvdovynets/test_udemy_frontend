/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("How many films you have already watched?", "");

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
          numberOfFilms = +prompt("How many films you have already watched?", "");
        }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let lastWathedMovie = prompt("What was the last movie you watched?", "");
    let lastMovieRating = prompt("Please rate that movie?", "");
    if (lastWathedMovie == null || 
        lastWathedMovie == ''|| 
        lastWathedMovie.length > 50 || 
        lastWathedMovie.length === 0) {
      console.log("Error");
      i--;
      continue;
    } else {
      personalMovieDB.movies[lastWathedMovie] = lastMovieRating;
      console.log("Done");
    }
  }
}

rememberMyFilms();

function detectPersonelLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Not so many movies watched");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("You are a regular viewer");
  } else if (personalMovieDB.count > 50) {
    console.log("You are a cinemaddict");
  } else {
    console.log("Error");
  }
}

detectPersonelLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const favoriteGenre = prompt(`What is your favorite genre number ${i}?`, "");

    if (favoriteGenre == null || favoriteGenre.length === 0) {
      i--;
      continue;
    } else {
      personalMovieDB.genres.push(favoriteGenre);
    }
  }
}
