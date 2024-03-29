"use strict";
//boolean
let isOpen;
isOpen = true;
//string
let message;
message = `Foo ${isOpen}`;
//number (int, float, hexadecimal, binario)
let total;
total = 20.3;
//array (type[])
let items;
items = [1, 2.3, 0xfff];
//array (Array<type>) Generic
let totals;
totals = [0, 2, 3];
//tuple
let title;
title = [1, 'foo'];
//enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
//any (qualquer coisa) NÃO É LEGAL!
let coisa;
coisa = ['2'];
//void (vazio)
function logger() {
    console.log('foo');
}
//never
function error() {
    throw new Error("error");
}
//object
let cart;
cart = [{ key: 'fi' }];
// Type inference
let message2 = "mensagem definida"; //redundante
message2 = "string nova";
window.addEventListener("click", (e) => {
    console.log(e.target);
});
