import './error.css';
import { TbError404 } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

function Error(){
    return(
        <div className='container-error'>
            <h1 className='texto-error'>Error</h1>

            <TbError404 size={500}/>

            <h1 className='texto-error'>Página não encontrada</h1>
<Link to="/">
            <a><FaHome size={19} color='#122941' />Home</a>
            </Link>
        </div>
    )
}

export default Error;