import React, { useEffect, useState } from 'react'
import Azkar from '../../components/Azkar'

const MorningAzkar = () => {
    return (
        <div className='container'>
            <h1 className=' text-[20px] py-4 kufam-kufam'>أذكار الصباح</h1>
            <Azkar azkarTime="morning" />
        </div>
    )
}

export default MorningAzkar

