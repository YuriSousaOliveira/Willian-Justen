// S => State
// T => Type
// K => Key
// V => Value
// E => Element

type numOrStr = number | string

//React.FC<Props, States>

function useState<S extends numOrStr = string>() {
    let state: S

    function getState() {
        return state
    }

    function setState(newState: S) {
        state = newState
    }

    return { getState, setState }
}

const newState = useState<numOrStr>()
newState.setState('Foo')
console.log(newState.getState())

newState.setState(123)
console.log(newState.getState())