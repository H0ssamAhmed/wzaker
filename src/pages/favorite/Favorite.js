import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Tile from '../../components/Tile';

const Favorite = () => {
    const [stored, setStored] = useState(null)
    const [loading, setLoding] = useState(true)
    useEffect(() => {
        setStored(JSON.parse(localStorage.getItem("favouritesAyat")))
        setLoding(false)

    }, [])
    const removeFromFavorite = (orderInAll, orderInSurah) => {
        let newData = stored.filter((item) => item.data.surah.number !== orderInAll && item.data.numberInSurah !== orderInSurah)
        localStorage.setItem('favouritesAyat', JSON.stringify(newData));
        setStored(newData);
    }
    return (
        <div className="container">
            {loading && <h1 className=' text-center'>جاري التحميل...</h1>}
            {stored?.length === 0 &&
                <div className='text-center h-48 flex flex-col items-center justify-center gap-8 mt-8'>
                    <h1 className='text-[40px]'>لقد حذفت جميع الايات المفضلة</h1>
                    <h4 className='text-[20px]'>ارجع الي الصفحة الرئيسية وأضف من جديد</h4>
                    <Link to='/' className=' bg-gray-500 transition hover:bg-gray-600 p-2 rounded'>الصفحة الرئسية</Link>
                </div>}
            {stored === null
                ? <div className='text-center h-48 flex flex-col items-center justify-center gap-8 mt-8'>
                    <h1 className='text-[40px]'>لا توجد أيات في المفضلة</h1>
                    <h4 className='text-[20px]'>ارجع الي الصفحة الرئيسية و بإضافة الايات</h4>

                    <Link to='/' className=' bg-gray-500 transition hover:bg-gray-600 p-2 rounded'>الصفحة الرئسية</Link>
                </div>
                : stored?.length !== 0 &&
                <>
                    <div className=' flex flex-col'>
                        {stored.map((ayah, index) => {
                            return (
                                <div key={index} className='border-b rounded-[10px] pb-4 border-b-primary md:border-transparent'>
                                    <Tile data={ayah.data} />
                                    <div className=' flex items-center flex-wrap justify-start mt-4 gap-4'>
                                        <audio src={ayah.audio} controls />
                                        <button
                                            onClick={() => removeFromFavorite(ayah.data.surah.number, ayah.data.numberInSurah)}
                                            className=' py-1 px-2 rounded text-white bg-red-800 hover:bg-red-700 transition'>حذف من المفضلة</button>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </>
            }
        </div >
    )
}

export default Favorite