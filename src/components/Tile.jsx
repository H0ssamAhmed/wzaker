import React from 'react'

const Tile = ({ data }) => {
    return (
        <>
            <p className='noto-naskh md:text-[40px] text-center py-6 my-6 rounded-[10px] bg-gray-600'>{data.text}</p>
            <div className=' flex justify-start items-center flex-wrap gap-4'>
                <p className='noto-naskh text-[20px]'>|{data.surah.name}</p>
                <p className='noto-naskh text-[20px]'>|رقم السورة : {data.surah.number}</p>
                <p className='noto-naskh text-[20px]'>|عدد اياتها : {data.surah.numberOfAyahs}</p>
                <p className='noto-naskh text-[20px]'>|الصفحة : {data.page}</p>
                <p className='noto-naskh text-[20px]'>| ترتيب الأية في السورة : {data.numberInSurah}</p>
            </div>
        </>
    )
}

export default Tile