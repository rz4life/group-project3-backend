import axios from 'axios'
import { useState} from 'react'

const Signup = () =>{

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cardname, setCardname] = useState('')
    const [expdate, setExpdate] = useState('')
    const [cardnumber, setcardNumber] = useState('')
    const [useraddress, setUserAddress] = useState('')
    const [userCity, setUserCity] = useState('')
    const [userZipcode, setUserZipcode] = useState('')
    const [nextpage, setNextpage] = useState('firstpage')

    const submitform = (e) =>{
        e.preventDefault()
        setNextpage('firstpage')

    }

    return(
        <div className = 'signuppage'>

            <div>
                <form onSubmit = {submitform}>
                {
                    
                    nextpage === 'firstpage' ?
                    <div>
                        <h3>Create a New Account</h3>

                <div className = 'input'>
                    <input  placeholder = 'Name' value = {name} onChange = {(e) =>(setName(e.target.value))}/>
                </div>

                <div className = 'input'>   
                    <input placeholder = 'Email' value = {email} onChange = {(e) =>(setEmail(e.target.value))}/>
                </div>

                <div className = 'input'>      
                    <input placeholder = 'Password' type = 'password' value = {password} onChange = {(e) =>(setPassword(e.target.value))}/>
                </div>

                <div className = 'input'>      
                    <button onClick = {() =>(setNextpage('secondpage'))}> Continue</button>
                </div>
                    </div>
                :

                <div>
                 <h3>Enter Card Info</h3>
                <div className = 'input'>      
                    <input placeholder = 'Card Name'  value = {cardname} onChange = {(e) =>(setCardname(e.target.value))}/>
                </div>

                <div className = 'input'>      
                    <input placeholder = 'Card Number'  value = {cardnumber} onChange = {(e) =>(setcardNumber(e.target.value))}/>
                </div>

                <div className = 'input'>      
                    <input placeholder = 'Exp date'  value = {expdate} onChange = {(e) =>(setExpdate(e.target.value))}/>
                </div>

                <div className = 'input'>      
                    <input placeholder = 'Address'  value = {useraddress} onChange = {(e) =>(setUserAddress(e.target.value))}/>
                </div>

                <div className = 'input'>      
                    <input placeholder = 'City'  value = {userCity} onChange = {(e) =>(setUserCity(e.target.value))}/>
                </div>

                <div className = 'input'>      
                    <input placeholder = 'Zip Code'  value = {userZipcode} onChange = {(e) =>(setUserZipcode(e.target.value))}/>
                </div>

                <div className = 'input'>
                    <input type = 'submit' value = 'Sign up'/>
                </div>

                </div>
                }



                </form>
            </div>


        </div>
    )

}

export default Signup