import { useCounter, useFetch } from "../../hooks"

//components
import { LoadingQuote, Quote } from "../examples"

export const Layout = () => {

  const { incremental, counter } = useCounter(1)
  const urlBase = 'https://www.breakingbadapi.com/api/quotes'
  const { data, isLoading, hasError } = useFetch(`${ urlBase }/${ counter }`)
  const { quote, author } = !!data && data[0]

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {
        isLoading
          ? <LoadingQuote />
          : <Quote
              author={ author }
              quote={ quote }
            />
      }

      <button
        disabled={ isLoading }
        onClick={ () => incremental() }
        className="btn btn-primary"
      >
        Next quote
      </button>
      
    </>
  )
}

