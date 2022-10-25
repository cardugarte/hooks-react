// import { useState } from "react"
// const [first, setfirst] = useState(second)

import { useCounter } from "../../hooks/useCounter"

const CounterWithCustomHook = () => {

  const { counter, incremental, decrement, reset } = useCounter()

  return (
    <div>
      <h2>Counter with hooks: { counter }</h2>
      <hr />
      <button
        className="btn btn-primary"
        onClick={ () => incremental(2) }
      >+1</button>
      <button
        className="btn btn-primary"
        onClick={ reset }
      >Reset</button>
      <button
        className="btn btn-primary"
        onClick={ () => decrement(2) }
      >-1</button>
    </div>
  )
}

export default CounterWithCustomHook
