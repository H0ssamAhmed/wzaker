import React, { useEffect, useState } from 'react'

const Azkar = ({ azkarTime }) => {
    const [azkar, setAzkar] = useState('')
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json')
            .then((res) => res.json())
            .then((data) => {
                if (azkarTime === "morning") {
                    let azkary = []
                    for (let i = 1; i < data['أذكار الصباح'].length; i++) {
                        azkary.push(data['أذكار الصباح'][i]);
                    }
                    setAzkar(azkary)
                }
                else if (azkarTime === "evening") {
                    setAzkar(data['أذكار المساء'])
                }
                else if (azkarTime === "tsabeh") {
                    setAzkar(data['تسابيح'])
                }


            })
    }, [])

    return (
        <>
            <div className=' flex flex-wrap items-start justify-center gap-4'>
                {azkar === '' ? <h1 className=' text-center text-[20px]'>جاري التحميل...</h1> :

                    azkar && azkar.filter(zekr => zekr.category !== 'stop').map((zekr, index) => {

                        return (
                            <CardComponent zekr={zekr} index={index} />

                        )
                    })}
            </div >
        </>
    )
}

export default Azkar


function CardComponent({ zekr, index }) {
    const [count, setCount] = useState(parseInt(zekr.count));
    const handelDone = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div onClick={() => handelDone(index)} key={index} className='h-[350px] select-none w-[240px] flex-col text-white flex items-center justify-center rounded overflow-hidden relative'>
            <div className={`${count === 0 ? 'opacity-0' : 'opacity-100'} transition duration-700 bg-gray-700  p-4 h-full w-full`}>
                <p className=' bg-primary py-1 px-2 rounded w-fit mb-4'>{count} مرة</p>
                <p>{zekr.content}</p>
            </div>

            <div className={`${count !== 0 ? 'opacity-0' : 'opacity-100'} transition duration-700 bg-gray-900 p-4  absolute  w-full h-full flex justify-center items-center flex-col`}>
                <h1>احسنت صنعاٌ </h1>
                <p>جزاك الله خيراً وتقبل منا ومنكم صالح الاعمال</p>
            </div>
        </div>
    );
}