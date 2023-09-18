import './styles.scss'
import logoFooter from '../../assets/logo-footer.png'


export const Footer = () => {
    return (
        <div className='footer'>
            <div className='text'>
                <h3>O projeto tem como objetivo estimular negócios entre irmãos Maçons, fortalecendo a rede da família maçônica de Manhuaçu e região. Fazendo com que os serviços e produtos dos irmãos e parceiros sejam consumidos de forma prioritária, antes de buscar a terceiros</h3>
                <p>Todos os direitos reservados 2023/2024</p>
            </div>
            <div className='logo'>
                <img src={logoFooter} alt="Logo" />
            </div>
            <div className='support'>
                <div className='container'>
                    <h3>Quer sua empresa cadastrada ou tem alguma dúvida ? entre em contato pelo whatsapp abaixo</h3>
                    <a href={`https://wa.me/+553186053210`} rel="noopener" target='blank'>
                        <button className='button-normal'>
                            <i className="fa-brands fa-whatsapp"></i>
                            <h3>Suporte parcerias</h3>
                        </button>
                    </a>
                    <a href={`https://wa.me/+553186053210`} rel="noopener" target='blank'>
                        <button className='button-phone'>
                            <i className="fa-brands fa-whatsapp"></i>
                            <h3>parcerias</h3>
                        </button>
                    </a>
                </div>
                <div className="rights">
                    <p>made By</p>
                    <a href="https://www.imdesenv.com" rel="noopener" target='blank'>
                        <p className='developer'>IM Software</p>
                    </a>
                </div>
            </div>
        </div>
    )
}