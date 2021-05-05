import {Link} from 'react-router-dom'

const Navbar = (props) =>{


    return(
        <nav>

            <Link to = '/'> Home</Link>
            {' | -- |'} {' -- | '}
            <Link to = '/signup' className = 'navtext'> Signup</Link>
            {' | -- |'} {' -- | '}
            <Link to = '/login' className = 'navtext'> Login</Link> 
        
        </nav>
    )



}

export default Navbar
