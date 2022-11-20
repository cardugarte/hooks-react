import { useMemo } from "react"
import { useState } from "react"
import { useCounter } from "../../hooks"

const heavyStuff = ( iterationNumber = 5000 ) => {
  for(let i = 0; i < iterationNumber; i++) {
    console.log('Ahí vamos...')
  }
  return `${ iterationNumber } iteraciones realizadas`
}

export const MemoHook = () => {

  const { counter, incremental } = useCounter(4000)
  const [show, setShow] = useState(true)
  const memorizedValue = useMemo( () => heavyStuff(counter), [counter])



  return (
    <>
      <h1>Counter: <small>{ counter }</small></h1>
      <hr />
      <h4>{ memorizedValue }</h4>
      <button
        className="btn btn-primary"
        onClick={ () => incremental() }
      >
        +1
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={ () => setShow(!show) }
      >
        Hide/Show {JSON.stringify(show)}
      </button>

    </>
  )
}
