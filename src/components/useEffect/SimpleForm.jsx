import { useEffect, useState } from "react"
import { Message } from "./Message"

const SimpleForm = () => {

  const [simpleForm, setsimpleForm] = useState({
    username: 'Carlos',
    email: 'soycarlosdugarte@gmail.com'
  })

  const { username, email } = simpleForm

  const onInputChange = ({ target }) => {
    const { name, value } = target
    setsimpleForm({
      ...SimpleForm,
      [ name ]: value
    })
  }

  useEffect(() => {
    // console.log('useEffect')
 
  }, [])


  useEffect(() => {
    // console.log('useEffect simpleform')
  }, [simpleForm])


  useEffect(() => {
    // console.log('useEffect email')
  }, [email])
  


  return (
    <>
      <h2>Simple form</h2>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={ username }
        onChange={ onInputChange }
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="email"
        name="email"
        value={ email }
        onChange={ onInputChange }
      />

      {
        (username === 'Carlos2') && <Message />
      }

    </>
  )
}

export default SimpleForm
