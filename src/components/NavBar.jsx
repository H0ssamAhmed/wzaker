import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
    const [path, setPath] = useState(window.location.pathname)

    useEffect(() => {
        document.addEventListener("click", () => setPath(window.location.pathname))
        return () => { window.removeEventListener('click', () => setPath(window.location.pathname)) }
    }, [window.location.pathname])

    return (
        <div className='flex gap-4 min-h-16 w-full justify-center md:justify-start  select-none py-4 bg-background flex-wrap items-center cairo-cairo  text[40px] '>
            <Link to='/' className={`  text-[40px] kufam-kufam px-2 text-primary transition rounded`} >وذكر</Link>
            <Link to='/favorite' className={`${path === "/favorite" ? "text-white bg-primary" : " text-white "} px-2 hover:text-white hover:bg-primary transition rounded`} >الأيات المفضلة</Link>
            <Link to='/quran' className={`${path === "/quran" ? "text-white bg-primary" : "text-white"}  px-2 hover:text-white hover:bg-primary transition rounded`} >القرأن الكريم</Link>
            <Link to='/morningAzkar' className={`${path === "/morningAzkar" ? "text-white bg-primary" : "text-white"}  px-2 hover:text-white hover:bg-primary transition rounded`} >أذكار الصباح</Link>
            <Link to='/eveningAzkar' className={`${path === "/eveningAzkar" ? "text-white bg-primary" : "text-white"}  px-2 hover:text-white hover:bg-primary transition rounded`} >أذكار المساء</Link>
            <Link to='/tsabeh' className={`${path === "/tsabeh" ? "text-white bg-primary" : "text-white"}  px-2 hover:text-white hover:bg-primary transition rounded`} >تسابيح</Link>
        </div>
    )
}

export default NavBar