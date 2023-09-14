import './styles.scss'
import logo from '../../assets/logo.png'
import coin from '../../assets/coin.png'
import { Card } from '../../components/Card'
import { useState, useEffect } from 'react'
import storesJson from '../../json/stores.json'


export const Home = () => {
    const stores = storesJson
    const [filteredStores, setFilteredStores] = useState(stores)
    const filters = ['', 'irmao', 'parceiro']
    const [currentFilter, setCurrentFilter] = useState(0)
    const [currentSegmentFilter, setCurrentSegmentFilter] = useState('')
    const [filterSegments, setFilterSegments] = useState([])

    const handleChangeSelect = (event) => {
        console.log(event.target.value)
        setCurrentSegmentFilter(event.target.value)
    }

    const handleButton = (index) => {
        if (currentFilter === index) {
            setCurrentFilter(0)
        } else {
            setCurrentFilter(index)
        }
    }

    useEffect(() => {
        let filtered = stores
        console.log(currentSegmentFilter)
        console.log(currentFilter)
        if (currentSegmentFilter !== '') {
            filtered = filtered.filter((store) => store.segment === currentSegmentFilter)
        }
        if (currentFilter !== 0) {
            filtered = filtered.filter((store) => store.type === filters[currentFilter])
        }
        setFilteredStores(filtered)
    }, [currentSegmentFilter, currentFilter, stores, filters])

    useEffect(() => {
        const uniqueSegments = new Set()
        stores.forEach((store) => {
            uniqueSegments.add(store.segment)
        })

        const uniqueSegmentsArray = [...uniqueSegments]
        setFilterSegments(uniqueSegmentsArray)
    }, [stores])

    return (
        <div className='home'>
            <div className='container'>
                <div className="header">
                    <h2>uma Iniciativa Maçonaria de Manhuaçu</h2>
                    <div className="images">
                        <img className='logo' src={logo} alt="logo" />
                        <img className='coin' src={coin} alt="" srcset="" />
                    </div>
                </div>
                <div className='list'>
                    <div className="controls">
                        <p>Selecione a categoria desejada</p>
                        <div className="buttons">
                            <div className="custom-select">
                                <select name='filter' onChange={handleChangeSelect}>
                                    <option value="" defaultValue={true}></option>
                                    {filterSegments.map((filter, index) =>
                                        <option key={index} value={filter}>{filter}</option>
                                    )}
                                </select>
                            </div>
                            <div className="filters">
                                <button className={`buttonOne ${currentFilter === 1 ? 'active' : ''}`} onClick={() => handleButton(1)}>Irmaos</button>
                                <button className={`buttonTwo ${currentFilter === 2 ? 'active' : ''}`} onClick={() => handleButton(2)}>Parceiros</button>
                            </div>
                        </div>
                    </div>
                    <div className="adverts">
                        {filteredStores.map((store, index) =>
                            <Card key={index} infos={store} />
                        )}
                    </div>
                </div>
            </div>
            <div className='ads'>
                <div className='ad'>Anuncio</div>
                <div className='ad'>Anuncio</div>
                <div className='ad'>Anuncio</div>
            </div>
        </div>
    )
}