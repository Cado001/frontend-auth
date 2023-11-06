import { useEffect, useState } from "react"

export default function Home(){
const [loggedIn, setLoggedIn] = useState(false)
    useEffect(() => {
        const userLS = localStorage.getItem('myUser')
        console.log('userLS ->',userLS)

        if (userLS) {
            setLoggedIn(true)
        }

    }, [])

   return(
    <>
    <h1>Welcome to the Home Page</h1>
    {loggedIn && <button onClick={() => localStorage.clear()}>Logout</button>}
    
    </>
   )
}