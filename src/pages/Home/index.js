import { FaExternalLinkAlt } from "react-icons/fa";
import { FaRegHandPointDown } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { useState } from "react";

import './home.css';
import Menu from "../../components/Menu";
import LinkItem from "../../components/LinkItem";

function Home() {

    const [link, setLink] = useState('');
    const [showModal, setShowModal] = useState(false)

    function handleShortLink(){
        // alert('meu link ' + link)
        setShowModal(true)
    }


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
                        placeholder="Cole seu link aqui..."
                        value={link}
                        onChange={ (e) => setLink(e.target.value)}
                    />
                </div>
                <button onClick={handleShortLink}>Encurtar link</button>
            </div>

            <Menu />

            { showModal && (
                <LinkItem />
            )}
            


        </div>
    );
}

export default Home;
