import { useEffect, useState } from "react"

const Header = () => {
  const [dashName, setDashName] = useState('');
  const path = window.location.pathname;
  useEffect(()=>{
    path.includes("/dashboard") ? setDashName('Dashboard') : setDashName('Contact')
    console.log(path);
},[path])
  return (
    <div className='w-full text-center bg-sky-400 shadow-xl z-10 p-5'>
        <h2 className='text-2xl font-bold'>{dashName} Page</h2>
    </div>
  )
}

export default Header