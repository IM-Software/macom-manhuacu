import { useEffect } from 'react'
import './styles.scss'

export const Card = ({ infos }) => {

    useEffect(() => {
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
                <div className="discount">
                    <div className='text'>
                        <h3 className="title">Desconto oferecido</h3>
                        <p>{infos.discountDescription}</p>
                    </div>
                    <div className='logo'>
                        <img src={infos.img} alt="Logo" />
                    </div>
                </div>
                {infos.type === 'irmao' &&
                    <div className="responsible">
                        <h3 className='title'>Nome do maçon responsável : {infos.responsible}</h3>
                        <h3 className='title'>Pertence a loja {infos.belongs}</h3>
                    </div>
                }
                <div className="service">
                    <h3 className='title'>Detalhes do serviço</h3>
                    <p>{infos.service}</p>
                </div>
                <div className="contact">
                    <h3 className='title'>Informação de contato</h3>
                    <p>Telefone/whatsapp : {infos.contact.number}</p>
                    <p>Rua {infos.contact.address.street}, Número {infos.contact.address.number}, Bairro {infos.contact.address.burg}, Cidade {infos.contact.address.city}</p>
                    <p>Rede social: <a className='social' href={infos.contact.socialNetwork} rel="noopener" target='blank'> {infos.contact.socialNetwork}</a></p>
                </div>
            </div>
            <div className="buttons">
                <a href={`https://wa.me/${infos.linkWpp}`} rel="noopener" target='blank'>
                    <div className='wpp'><i className="fa-brands fa-whatsapp"></i></div>
                </a>
                <a href={`https://www.google.com/maps/search/?api=1&query=${infos.contact.address.city},${infos.contact.address.state},${infos.contact.address.street},${infos.contact.address.number},${infos.contact.address.burg}`} rel="noopener" target='blank'>
                    <div className='map'><i className="fa-solid fa-map-pin"></i></div>
                </a>
            </div>
        </div>
    )
}