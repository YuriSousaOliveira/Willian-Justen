// type alias
type Uid = number | string

function logDetails(uid: Uid, item: string) {
    console.log(`UID: ${uid} TITLE: ${item}.`)
}

logDetails(123, 'sapato')
logDetails('123', 'sapato')

function logInfo(uid: Uid, user: string) {
    console.log(`UID: ${uid} USER: ${user}.`)
}

logInfo(123, 'Yuri')
logInfo('123', 'Yuri')

type Platform = 'Windows' | 'Linux' | 'Mac Os'

function renderPlatform(platform: Platform) {
    return platform;
}

renderPlatform("Linux");


