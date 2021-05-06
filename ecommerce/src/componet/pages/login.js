import axios from 'axios'
import { useState} from 'react'

const Login = () =>{

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
        <div className = 'loginpage'>
                <div>

                    <form >
                            <h3>Login to your Account</h3>
                            <div className = 'input'>
                        
                                <input placeholder = 'email' value = {email} onChange = {(e) =>(setEmail(e.target.value))}/>
                            </div>

                            <div className = 'input'>
                        
                                <input placeholder = 'password' type = 'password' value = {password} onChange = {(e) =>(setPassword(e.target.value))}/>
                            </div>

                            <div className = 'input'>
                                <input type = 'submit' value = 'Login!'/>
                            </div>

                    </form>
                </div>
        </div>
    )

}

export default Login