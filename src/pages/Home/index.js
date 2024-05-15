import { FaExternalLinkAlt } from "react-icons/fa";
import { FaRegHandPointDown } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { useState } from "react";

import './home.css';
import Menu from "../../components/Menu";
import LinkItem from "../../components/LinkItem";

import api from '../../services/api'
import { saveLink } from "../../services/storeLinks";

function Home() {

    const [link, setLink] = useState('');
    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false)

    async function handleShortLink() {

        try {
            const response = await api.post('/shorten', {
                long_url: link
            })

           setData(response.data)

           saveLink('@encurtaLink', response.data)
           setLink()

           setShowModal(true)
        } catch {
            alert('erro')
         
        }
        setLink('')
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
                    <FiLink size={24} color="#FFF" />
                    <input
                        placeholder="Cole seu link aqui..."
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />
                </div>
                <button onClick={handleShortLink}>Encurtar link</button>
            </div>

            <Menu />

            {showModal && (
                <LinkItem
                    closeModal={() => setShowModal(false)}
                    content={data}
                    
                />
            )}



        </div>
    );
}

export default Home;
