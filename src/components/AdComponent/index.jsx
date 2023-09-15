import { useEffect } from 'react';

export const AdComponent = (props) => {
    const { dataAdSlot } = props

    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({})
        }
        catch (e) {
        }
    }, [])

    return (
        <>
            <ins className="adsbygoogle"
                style={{ display: "block", backgroundColor: 'white', width: '150px', height: '150px' }}
                data-ad-client="ca-pub-8370142655030136"
                data-ad-slot={dataAdSlot}
                data-ad-format="auto"
                data-full-width-responsive="true">
            </ins>
        </>
    )
}