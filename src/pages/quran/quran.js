import React, { useContext, useState } from 'react'
import { PlayerContext } from '../../context/playerContext'
const Quran = () => {
    const [surahs, setSurahs] = useState('')
    const { setSrc } = useContext(PlayerContext)
    fetch(`https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json`).then((res) => res.json()).then((data) => setSurahs(data))
    return (
        <>
            <h1 className=' text-[20px] py-4 text-center kufam-kufam'> &#10627; {' '} القرأن الكريم {' '}&#10628;</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2'>
                {surahs === "" ? <h1 className='text-center text-[20px]'>جاري التحميل...</h1> : surahs?.map((surah, index) => {
                    return (
                        <div key={index}
                            className='group bg-gray-500 w-full min-h-24 p-4 rounded rounded-tl-[30px] hover:z-30 rounded-br-[30px] transition-all hover:rounded hover:bg-primary text-white duration-500 lg:hover:scale-150'>
                            <div className=' flex items-center justify-between'>

                                <h1 className='kufam-kufam '>{surah.number_of_surah}.{surah.name_translations.ar}</h1>
                                <h1 className='noto-naskh '>{surah.name}</h1>
                            </div>
                            <h2 className='text-sm my-4'>مكان النزول :<strong>{surah.place === 'Mecca' ? "مكة المكرمة" : "المدينة المنورة"}</strong></h2>
                            <div className='flex items-center justify-between'>
                                <p>عدد الايات {surah.number_of_ayah}</p>
                                <div onClick={() => setSrc(surah.recitation)} className='relative group-hover:border-white cursor-pointer transition-all rounded-full overflow-hidden  w-6 h-6 flex items-center justify-center border border-primary' >
                                    <span className='start w-full h-full group-hover:bg-white   bg-primary block'></span>
                                </div>
                            </div>
                        </div>)
                })}

            </div>

        </>
    )
}

export default Quran