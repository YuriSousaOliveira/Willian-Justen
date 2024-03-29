//accountInfo
//charInfo

type AccountInfo = {
    id: number | string 
    name: string
    email?: string
}

const account: AccountInfo = {
    id: 1,
    name: 'Yuri',
    email: 'yuri.sousa42@hotmail.com'
}

type CharInfo = {
    nickname: string
    level: number
}

const char: CharInfo = {
    nickname: 'YuriiOh',
    level: 23
}

//intersection
type PlayerInfo = AccountInfo & CharInfo


const player: PlayerInfo = {
    id: '25',
    name: 'Tati',
    nickname: 'TatiMarciana',
    level: 25
}