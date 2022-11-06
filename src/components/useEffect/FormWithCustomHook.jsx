import { useForm } from "../../hooks/useForm"

const FormWithCustomHook = () => {

  const { formState, username, email, password, onInputChange, onResetForm } = useForm({
    username: '',
    email: '',
    password: ''
  })


  return (
    <>
      <h2>Form with custom hook</h2>
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

      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={ password }
        onChange={ onInputChange }
      />

      <button
        onClick={onResetForm}
        className="btn btn-primary mt-2"
      >
        Clean
      </button>
    </>
  )
}

export default FormWithCustomHook
