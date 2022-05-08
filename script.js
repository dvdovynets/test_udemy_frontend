/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

let numberOfFilms = +prompt("How many films you have already watched?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i = 0; i < 2; i++) {
  let lastWathedMovie = prompt("What was the last movie you watched?", "");
  let lastMovieRating = prompt("Please rate that movie?", "");
  if (lastWathedMovie === ''|| 
      lastWathedMovie.length > 50 || 
      lastWathedMovie.length === 0 || 
      lastWathedMovie == null) {
    console.log("Error");
    i--;
    continue;
  } else {
    personalMovieDB.movies[lastWathedMovie] = lastMovieRating;
    console.log("Done");
  }
}

if (personalMovieDB.count < 10) {
  console.log("Not so many movies watched");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("You are a regular viewer");
} else if (personalMovieDB.count > 50) {
  console.log("You are a cinemaddict");
} else {
  console.log("Error");
}

console.log(personalMovieDB);
