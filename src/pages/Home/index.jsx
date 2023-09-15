import './styles.scss'
import logo from '../../assets/logo.png'
import coin from '../../assets/coin.png'
import logoPhone from '../../assets/headerimg-phone.png'
import { List } from '../../components/List'
import { AdComponent } from '../../components/AdComponent'

export const Home = () => {
    return (
        <div className='home'>
            <div className='container'>
                <div className="header">
                    <h2>uma Iniciativa Maçonaria de Manhuaçu</h2>
                    <div className="images">
                        <img className='logo' src={logo} alt="logo" />
                        <img className='logoPhone' src={logoPhone} alt="Logo" />
                        <img className='coin' src={coin} alt="" srcset="" />
                    </div>
                </div>
                <List/>
            </div>
            <div className='ads'>
                <AdComponent dataAdSlot='4147874316' className='ad'/>
            </div>
        </div>
    )
}