import { useState, useEffect } from 'react';
import './links.css';
import { FiArrowLeft, FiLink, FiTrash, FiExternalLink} from 'react-icons/fi';
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


import { getLinkSave, deleteLink } from '../../services/storeLinks'
import LinkItem from '../../components/LinkItem'


function Links() {
  const [myLinks, setMyLinks] = useState([]);
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [emptyList, setEmptyList] = useState(false);

  useEffect(() => {
    async function getLinks() {
      const result = await getLinkSave('@encurtaLink')
      if (result.length === 0) {
        setEmptyList(true)
      }

      setMyLinks(result);
    }

    getLinks();
  }, [])

  function handleOpenLink(link) {
    setData(link)
    setShowModal(true)
  }

  async function handleDelete(id) {
    const result = await deleteLink(myLinks, id)
   
    if(result.length === 0) {
      setEmptyList(true)
    }

    setMyLinks(result)

  }

  function clearLinks(){
    setMyLinks([]);
    setEmptyList(true);
    localStorage.clear();
  }

  function openLink(urlEncurtada){
    window.open(urlEncurtada, '_blank').focus();
  }

  return (
    <div className='links-container'>
      <div className='links-header'>
        <Link to="/">
          <FiArrowLeft size={38} color='#FFF' />
        </Link>

        <h1>Meus Links</h1>
      </div>

      {emptyList && (
        <div className='links-item'>
          <h2 className='empty-text'>
            Lista vazia
          </h2>
          </div>


      )}


      {myLinks.map(link => (
        <div key={link.id} className='links-item'>
          <button className='link' onClick={() => handleOpenLink(link)}>
            <FiLink size={18} color='#FFF' />
            {link.long_url}
          </button>
          <button title="Excluir" className='link-icon' onClick={() => handleDelete(link.id)}>
            <FiTrash size={24} color='#FF5454' />
          </button>
          <button title="Visitar" className='link-icon' onClick={() => openLink(link.link)}>
            <FiExternalLink size={24} color='#FF5454' />
          </button>
        </div>

      ))}

      {showModal && (
        <LinkItem
          closeModal={() => setShowModal(false)}
          content={data}
        />
      )

      }

{!emptyList && (
        <div className='links-button'>
          <button className='button-clear' onClick={clearLinks}><FaRegTrashAlt /> Limpar links</button>
        </div>


      )}





    </div>
  );
}

export default Links;