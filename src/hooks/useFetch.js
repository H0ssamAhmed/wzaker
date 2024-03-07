import React, { useEffect, useState } from 'react'

const useFetch = () => {
    const [surahNum, setSurahNum] = useState(1)
    const [ayahNum, setAyahNum] = useState(1)
    const [audio, setAudio] = useState('')


    const handleAudiourl = (surahNum, ayahNum) => {
        setSurahNum(surahNum)
        setAyahNum(ayahNum)
    }

    useEffect(() => {
        fetch(`https://api.alquran.cloud/v1/quran/ar.alafasy`)
            .then((res) => res.json())
            .then((data) => setAudio(data.data.surahs[surahNum].ayahs[ayahNum - 1].audio))
    }, [surahNum, ayahNum])
    return { audio, handleAudiourl }
}

export default useFetch