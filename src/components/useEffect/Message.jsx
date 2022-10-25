import { useEffect } from "react"

export const Message = () => {

  useEffect(() => {
    console.log('mensaje montado')
  
    return () => {
      console.log('mensaje desmontado')
    }
  }, [])
  


  return (
    <>
      el usuario ya existe
    </>
  )
}
