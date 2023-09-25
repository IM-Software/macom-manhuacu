import './styles.scss'

export const Card = ({ infos = null }) => {

    if (infos.service.length > 125) {
        infos.service = infos.service.substring(0, 125) + '...'
    }

    infos.linkWpp = infos.contact.number.replace(/[()]/g, '').replace(/\s/g, '').replace(/-/g, '')
    infos.linkWpp = `55${infos.linkWpp}`


    if (infos.contact.socialNetwork.startsWith('https://')) {
        infos.socialLink = infos.contact.socialNetwork
        infos.contact.socialNetwork = infos.contact.socialNetwork.replace(/^https:\/\//, '')
    }

    if (infos.contact.socialNetwork.startsWith('@')) {
        const username = infos.contact.socialNetwork.substring(1)
        infos.socialLink = `https://www.instagram.com/${username}`
    }

    infos.wppDiscountMassage = infos.discountDescription.toLowerCase()
    if (infos.wppDiscountMassage.startsWith("desconto")) {
        infos.wppDiscountMassage = infos.wppDiscountMassage.slice("desconto".length).trim()
    }
    if (infos.wppDiscountMassage.startsWith("descontos")) {
        infos.wppDiscountMassage = infos.wppDiscountMassage.slice("descontos".length).trim()
    }

    return (
        <div className='card'>
            <div className='header'>
                <h3 className='name'>{infos.name}</h3>
                {infos.segment &&
                    <div className='segment'><p>{infos.segment}</p></div>
                }
            </div>
            <div className="content">
                <div className="discount">
                    <div className='text'>
                        <h3 className="title">Desconto oferecido</h3>
                        <p>{infos.discountDescription}</p>
                    </div>
                    {infos.img &&
                        <div className='logo'>
                            <img src={infos.img} alt="Logo" />
                        </div>
                    }
                </div>
                {infos.type === 'irmao' &&
                    <div className="responsible">
                        <h3 className='title'>Nome do maçom responsável</h3>
                        <span>{infos.responsible}</span>
                        <h3 className='title'>Pertence a loja</h3>
                        <span>{infos.storeBelongs}</span>
                    </div>
                }
                <div className="service">
                    <h3 className='title'>Detalhes do serviço</h3>
                    <p>{infos.service}</p>
                </div>
                <div className="contact">
                    <h3 className='title'>Informação de contato</h3>
                    <p>Telefone/whatsapp : {infos.contact.number}</p>
                    <h3 className='title'>Endereço da empresa</h3>
                    <p>{infos.contact.address}</p>
                </div>
            </div>
            <div className="buttons">
                {infos.socialLink ? (
                    <div className='buttons__text'>
                        <label>Rede Social</label>
                        <p><a className='social' href={infos.socialLink} rel="noopener" target='blank'> {infos.contact.socialNetwork}</a></p>
                    </div>
                ) : <div />}
                <div className='buttons__btn'>
                    <a href={`https://api.whatsapp.com/send/?phone=${infos.linkWpp}&text=Olá, vim através do app Irmão compra de irmão, verifiquei que você tem parceria e um desconto ${infos.wppDiscountMassage}, gostaria de conversar mais sobre`} rel="noopener" target='blank'>
                        <div className='wpp'><i className="fa-brands fa-whatsapp"></i></div>
                    </a>
                    <a href={`https://www.google.com/maps/search/?api=1&query=${infos.contact.address}`} rel="noopener" target='blank'>
                        <div className='map'><i className="fa-solid fa-map-pin"></i></div>
                    </a>
                </div>
            </div>
        </div>
    )
}