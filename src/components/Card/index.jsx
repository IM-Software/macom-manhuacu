import { useEffect } from 'react'
import './styles.scss'

export const Card = ({infos}) => {

    useEffect(() =>{
        infos.service = infos.service.substring(0, 190)
        infos.linkWpp = infos.contact.number.replace(/[()]/g, '').replace(/\s/g, '').replace(/-/g, '')
        infos.linkWpp = `+55${infos.linkWpp}`
    }, [infos])

    return (
        <div className='card'>
            <div className='header'>
                <h3 className='name'>{infos.name}</h3>
                <div className='segment'><p>{infos.segment}</p></div>
            </div>
            <div className="content">
                <div className="text">
                    <div className="details">
                        <h3 className='title'>Detalhes do serviço</h3>
                        <p>{infos.service}</p>
                    </div>
                    <div className="responsible">
                        <h3 className='title'>Nome do maçon responsável : {infos.responsible}</h3>
                        <h3 className='title'>Pertence a loja {infos.belongs}</h3>
                    </div>
                    <div className="discount">
                        <h3 className="title">Desconto oferecido</h3>
                        <p>{infos.discountDescription}</p>
                    </div>
                    <div className="contact">
                        <h3 className='title'>Informação de contato</h3>
                        <p>Telefone/whatsapp : {infos.contact.number}</p>
                        <p>{infos.contact.address}</p>
                        <p className='social'>Rede social: {infos.contact.socialNetwork}</p>
                    </div>
                </div>
                <div className='logo'>
                    <img src={infos.img} alt="Logo" />
                </div>
            </div>
            <div className="buttons">
                <a href={`https://wa.me/${infos.linkWpp}`} rel="noopener" target='blank'>
                    <div className='wpp'><i class="fa-brands fa-whatsapp"></i></div>
                </a>
                <div className='map'><i class="fa-solid fa-map-pin"></i></div>
            </div>
        </div>
    )
}