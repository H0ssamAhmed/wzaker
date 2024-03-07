import React from 'react'
import Azkar from '../../components/Azkar'

const EveningAzkar = () => {
    return (
        <div className='container'>
            <h1 className=' text-[20px] py-4 kufam-kufam'>أذكار المساء</h1>
            <Azkar azkarTime="evening" />
        </div>
    )
}

export default EveningAzkar