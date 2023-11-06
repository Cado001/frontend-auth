import { useNavigate } from "react-router-dom"


export default function Signup(){
    const navigate = useNavigate()
const handleForSubmit = (e) => {
    e.preventDefault ()
    const FormData = {
        email: e.target.email.value,
        password: e.target.password.value
    }
    navigate('/')
}

return (

    <div>
        <h1>Sign Up</h1>
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
            <button>Sign Up</button>
        </form>
    </div>
)




}