import './styles.scss'
import { Card } from '../../components/Card'
import { useEffect, useState } from 'react'
import storesJson from '../../json/stores.json'


export const List = () => {
    const stores = storesJson
    const [filteredStores, setFilteredStores] = useState(stores)
    const [currentFilter, setCurrentFilter] = useState(0)
    const [currentSegmentFilter, setCurrentSegmentFilter] = useState('')
    const [filterSegments, setFilterSegments] = useState([])
    const [showOptions, setShowOptions] = useState(false)

    const handleChangeSelect = (option) => {
        setCurrentSegmentFilter(option)
        setShowOptions(!showOptions)
    }

    const handleButton = (index) => {
        if (currentFilter === index) {
            setCurrentFilter(0)
        } else {
            setCurrentFilter(index)
        }
    }

    useEffect(() => {
        const filters = ['', 'irmao', 'parceiro']
        let filtered = stores
        if (currentSegmentFilter !== '') {
            filtered = filtered.filter((store) => store.segment === currentSegmentFilter)
        }
        if (currentFilter !== 0) {
            filtered = filtered.filter((store) => store.type.toLowerCase() === filters[currentFilter].toLowerCase())
        }
        setFilteredStores(filtered)
    }, [currentSegmentFilter, currentFilter, stores])

    useEffect(() => {
        const uniqueSegments = new Set()
        stores.forEach((store) => {
            uniqueSegments.add(store.segment)
        })

        const uniqueSegmentsArray = [...uniqueSegments]
        setFilterSegments(uniqueSegmentsArray)
    }, [stores])

    return (
        <div className='list'>
            <div className="controls">
                <p className='title'>Selecione a categoria desejada</p>
                <div className="buttons">
                    <div className="dropdown-container">
                        <div className="dropdown" onClick={() => setShowOptions(!showOptions)}>
                            <p>{currentSegmentFilter || 'Todos'}</p>
                            <i className="fa-solid fa-angle-down"></i>
                        </div>
                        {showOptions && (
                            <ul className="options">
                                <li onClick={() => handleChangeSelect('')}>
                                    Todos
                                </li>
                                {filterSegments.map((option, index) => (
                                    <li key={index} onClick={() => handleChangeSelect(option)}>
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        )}
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
    )
}