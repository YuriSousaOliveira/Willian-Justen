// @Component
// @Selector
// @useState("DADOS")

// Class decorator
// Factory
function loggerD(prefix: string) {
    return (target: any) => {
        console.log(`${prefix} - ${target}`)
    } 
}

@loggerD("awesome")
class Foo {}

// decorator - anotar a versão da API
function setAPIVersion(apiVersion: string) {
    return (constructor: any) => {
        return class extends constructor {
            version = apiVersion
        }
    }
}

@setAPIVersion('2.0.0')
class API {}

console.log(new API())

// Property decorator
function minLength(length: number) {
    return (target: any, key: string) => {
        let val = target[key]

        const getter = () => val;

        const setter = (value: string) => {
            if (value.length < length) {
                console.log(`Error: Você não pode criar ${key} menor que ${length} caracteres`)
            } else {
                val = value
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        })
    }
}

class Movie {
    // validação - se for menor que 5 - error
    @minLength(5)
    title: string

    constructor(t: string) {
        this.title = t
    }
}

const movie = new Movie("Mario");
console.log(movie.title)

// Method decorator
function delay(ms: number) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any) {
            console.log(`Esperando ${ms}...`)
            setTimeout(() => {
                originalMethod.apply(this, args);
            }, ms);

            return descriptor;
        }
    }
}

class Greeter {
    greeting: string

    constructor(g: string) {
        this.greeting = g
    }

    // epserar um tempo e ai vai rodar o método(ms)
    @delay(2000)
    greet() {
        console.log(`Hello! ${this.greeting}`)
    }
}

const pessoinha = new Greeter("Pessoinha");
pessoinha.greet();

// Parameter decorator
// Acessor decorator
