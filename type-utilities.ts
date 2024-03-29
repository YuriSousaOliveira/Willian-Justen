type Todo = {
    title: string
    description: string
    completed: boolean
}


// Readonly
const todo: Readonly<Todo> = {
    title: 'Assistir Dark de Novo',
    description: 'Relembrar os detalhes',
    completed: false
}

console.log(todo)

//todo.completed = true;
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate }
}

const todo2: Todo = updateTodo(todo, { completed: true })

console.log(todo2)

//PICK
type TodoPreview = Pick<Todo, "title" | "completed">

const todo3: TodoPreview = {
    title: "Fechar Fortnite",
    completed: true
}

console.log(todo3)

//OMIT
type TodoPreview2 = Omit<Todo, "description">

const todo4: TodoPreview2 = {
    title: "Fechar Fortnite",
    completed: true
}

console.log(todo4)