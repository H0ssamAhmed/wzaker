import { click } from '@testing-library/user-event/dist/click'
import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import Tile from '../../components/Tile'

const Home = () => {

    const { audio, handleAudiourl } = useFetch()
    const [data, setData] = useState([])
    const [Num, setNum] = useState(parseInt(Math.random() * 6236))
    const [loading, setLoading] = useState(true)
    const [IsAdded, setIsAdded] = useState(false)
    // عدد ايات القران الكريم 6236
    const change = () => {
        setNum(parseInt(Math.random() * 6236));
    }
    useEffect(() => {
        fetch(`https://api.alquran.cloud/v1/ayah/${Num}`).then((res) => res.json()).then((data) => {
            setData(data.data)
            handleAudiourl((data?.data?.surah.number - 1), (data?.data?.numberInSurah))
            setLoading(false)
            setIsAdded(false)
        })
    }, [Num])

    const addToFavorite = (data) => {
        let ayat = []
        const localData = {
            data: data,
            audio: audio
        }
        if (localStorage.getItem("favouritesAyat")) {
            let prevousAyat = JSON.parse(localStorage.getItem("favouritesAyat"));
            prevousAyat.push(localData)
            localStorage.setItem('favouritesAyat', JSON.stringify(prevousAyat));
        } else {
            ayat.push(localData)
            localStorage.setItem('favouritesAyat', JSON.stringify(ayat))
        }
        setIsAdded(true)
    }

    return (
        <div className='noto-naskh'>
            {loading ? <h1 className=' text-center text-[20px]'>جاري التحميل...</h1> :
                <div>
                    <p className='border border-b-gray-100 border-transparent w-fit text-[20px] my-6'>بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
                    <Tile data={data} />

                    <div className=' flex items-center justify-start flex-wrap mt-4 gap-4'>
                        <button onClick={change} className='py-2 px-4 rounded bg-primary hover:bg-primary/30 transition text-white'> التالي</button>
                        <button onClick={() => addToFavorite(data)} className={`py-2 px-4 rounded text-white transition bg-gray-400 ${IsAdded && "cursor-not-allowed bg-gray-700"}`}>اضف اللي المفضلة</button>
                        <audio className='w-full' controls src={audio}></audio>
                    </div>
                </div>}
        </div>
    )
}

export default Home


