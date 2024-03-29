"use strict";
const tlou = {
    title: 'The Last Of Us',
    description: 'Game',
    genre: 'Action',
    platform: ['PS5', 'PS4'],
    getSimilars: (title) => {
        console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
    }
};
console.log(tlou.genre);
if (tlou.getSimilars)
    tlou.getSimilars(tlou.title);
const leftBehind = {
    title: 'The Last Of Us',
    description: 'Game',
    genre: 'Action',
    platform: ['PS5', 'PS4'],
    originalGame: tlou,
    newContent: ['Multiplayer', 'New Game']
};
class CreateGame {
    constructor(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
}
