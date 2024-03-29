//boolean
let isOpen: boolean
isOpen = true

//string
let message: string
message = `Foo ${isOpen}`

//number (int, float, hexadecimal, binario)
let total: number
total = 20.3

//array (type[])
let items: number[]
items = [1, 2.3, 0xfff]

//array (Array<type>) Generic
let totals: Array<number>
totals = [0, 2, 3]

//tuple
let title: [number, string]
title = [1, 'foo']

//enum
enum Colors {
    white = '#fff',
    black = '#000'
}

//any (qualquer coisa) NÃO É LEGAL!
let coisa: any
coisa = ['2']

//void (vazio)
function logger(): void {
    console.log('foo')
}

//null | undefined
type Bla = string | undefined

//never
function error(): never {
    throw new Error("error");
}

//object
let cart: object
cart = [{key: 'fi'}]

// Type inference
let message2: string = "mensagem definida" //redundante
message2 = "string nova"

window.addEventListener("click", (e) => {
    console.log(e.target);
})