"use strict";
function logDetails(uid, item) {
    console.log(`UID: ${uid} TITLE: ${item}.`);
}
logDetails(123, 'sapato');
logDetails('123', 'sapato');
function logInfo(uid, user) {
    console.log(`UID: ${uid} USER: ${user}.`);
}
logInfo(123, 'Yuri');
logInfo('123', 'Yuri');
function renderPlatform(platform) {
    return platform;
}
renderPlatform("Linux");
