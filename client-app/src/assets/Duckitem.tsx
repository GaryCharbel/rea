import { Ducks } from './demo'

interface Props{
    duck: Ducks
}


export default function DuckItem({duck}:Props){
    return(
        <div key={duck.name}>
        <span> {duck.name} </span>
        <button onClick={() => duck.makeSound(duck.name + 'quack')}> MAKE SOUND </button>
        </div>
    )
}