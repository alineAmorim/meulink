import { FaExternalLinkAlt } from "react-icons/fa";
import { FaRegHandPointDown } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import './home.css';
import Menu from "../../components/Menu";

function Home() {
    return (
        <div className="container-home">

            <div className="logo">
                <div className="icon-link"> <FaExternalLinkAlt /></div>
                <h1>ShortenLink</h1>
                <span><FaRegHandPointDown /> Cole seu link para encurtar <FaRegHandPointDown /></span>
            </div>

            <div className="area-input">
                <div>
                    <FiLink size={24} color="#FFF"/>
                    <input
                        type="text"
                        placeholder="Cole seu link aqui..."
                    />
                </div>
                <button>Encurtar link</button>
            </div>

            <Menu />


        </div>
    );
}

export default Home;
