"use strict";
// Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
// Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
// альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
// Каждый альбом имеет следующую структуру:
// {
//   title: "Название альбома",
//   artist: "Исполнитель",
//   year: "Год выпуска"
// }
// Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
// вывода их в консоль в формате:
// "Название альбома - Исполнитель (Год выпуска)"

const musics = [
    {
        title: "The Eminem Show",
        artist: "Eminem",
        year: "2002" },
    {
        title: "Revival",
        artist: "Eminem",
        year: "2017" },
    {
        title: "Kamikaze",
        artist: "Eminem",
        year: "2018" },
]

const musicCollection = {
  musics,
  *[Symbol.iterator] () {
    for (let i = 0; i < this.musics.length; i++) {
      yield `${this.musics[i].title} - ${this.musics[i].artist} (${this.musics[i].year})`;
    }
  }
}

for (const music of musicCollection) {
  console.log(music);
}