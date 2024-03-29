interface Game {
    title: string
    description: string
    readonly genre: string
    platform?: string[]
    getSimilars?: (title: string) => void
}

const tlou: Game = {
    title: 'The Last Of Us',
    description: 'Game',
    genre: 'Action',
    platform: ['PS5', 'PS4'],
    getSimilars: (title: string) => {
        console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`)
    }
}

console.log(tlou.genre)
if (tlou.getSimilars)
    tlou.getSimilars(tlou.title);

interface DLC extends Game {
    originalGame: Game
    newContent: string[]
}

const leftBehind: DLC = {
    title: 'The Last Of Us',
    description: 'Game',
    genre: 'Action',
    platform: ['PS5', 'PS4'],
    originalGame: tlou,
    newContent: ['Multiplayer', 'New Game']
}

class CreateGame implements Game{
    title: string
    description: string
    genre: string

    constructor(t: string, d: string, g: string) {
        this.title = t
        this.description = d
        this.genre = g
    }
}