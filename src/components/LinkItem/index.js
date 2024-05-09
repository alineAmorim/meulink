import './link-item.css'
import { FiX, FiClipboard } from 'react-icons/fi';

function LinkItem() {
    return (
        <div className='modal-container'>
            <div className='modal-header'>
                <h2>Link Encurtado</h2>
                <button>
                    <FiX size={28} color='#000' />
                </button>
            </div>
            <span>
                urlInformada
            </span>
            <button className='modal-link'>
                urlEncurtada
                <FiClipboard size={20} color='#FFF'/>
            </button>
        </div>
    )
}

export default LinkItem;