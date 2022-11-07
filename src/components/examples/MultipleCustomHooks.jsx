import { useCounter } from "../../hooks/useCounter"
import { useFetch } from "../../hooks/useFetch"

export const MultipleCustomHooks = () => {

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
          ? (
            <div className="alert alert-info text-center">Loading...</div>
          )
          : (
      <blockquote className="blockquote text-end">
        <p className="mb-4">{ quote }</p>
        <footer className="blockquote-footer">
          { author }
        </footer>
      </blockquote>
          )
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
