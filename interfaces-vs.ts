//Interfaces

//definição
interface GameI {
    title?: string
}

interface DLCI {
    extra?: string
}

//interserção | extend
interface GameCollection extends GameI, DLCI {}

//implements
class CreateGameI implements GameCollection {}

//deckar função
interface getSimilars {
    (title: string): void
}

// ======================= Diferenças ========================= //
//interface ID extends number {}

//não consegue definir tuples na interface
interface Tuple {
    0: number
    1: number
}

[0, 1, 2] as Tuple

//Pode ter multiplas declarações e ele une mesmo nome
interface JQuery {
    a: string
}

interface JQuery {
    b: string
}

const $: JQuery = {
    a: "bla",
    b: "foo"
}

//vantagem: quando tiver criando libs, prefira Interfaces, por que são mais extensiveis!

//criando objetos/classes (POO)