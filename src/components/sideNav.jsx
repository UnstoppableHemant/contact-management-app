import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const SideNav = () => {
    const [dashActive, setDashActive] = useState(false);
    const navigate = useNavigate();
    const path = window.location.pathname;

    useEffect(() => {
        path.includes("/dashboard") ? setDashActive(true) : setDashActive(false)
        console.log(path);
    }, [path])
    return (
        <div className='w-60 text-center bg-sky-400'>
            <h2 className={`text-2xl font-bold my-2 py-3 mx-4 rounded-lg bg-white ${dashActive ? '' : 'bg-green-500 underline'}`} onClick={() => navigate("/")}>Contacts</h2>
            <h2 className={`text-2xl font-bold my-2 py-3 mx-4 rounded-lg bg-white ${dashActive ? 'bg-green-500 underline' : ''}`} onClick={() => navigate("/dashboard")}>Dashboard</h2>
        </div>
    )
}

export default SideNav