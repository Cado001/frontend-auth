import { useNavigate } from "react-router-dom"


export default function Login(){
    const navigate = useNavigate()
const handleForSubmit = (e) => {
    e.preventDefault ()
    const FormData = {
        email: e.target.email.value,
        password: e.target.password.value
    }

    localStorage.setItem('myUser', JSON.stringify(FormData))
    navigate('/')
}

return (

    <div>
        <h1>Login</h1>
        <form action="submit"  onSubmit={(e) => handleForSubmit(e)}>
            <label htmlFor="">
                <span>Email:</span>
                <input type="email" name='email' />
            </label>
            <br />
            <label htmlFor="">
                <span>Password:</span>
                <input type="password" name="password" />
            </label>
            <br />
            <button type="submit">Login</button>
        </form>
    </div>
)




}