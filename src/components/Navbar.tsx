import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
    const {theme, toggleTheme} = useTheme()
    const [logBtn, setLogBtn] = useState(true)

    const handleLogin = (chosen: boolean) => {
        if(chosen){  
            setLogBtn(false);
        }else if(!chosen){
            setLogBtn(true);
        }
        
    }

    return (  
        <div className="Navbar">
            <div className="relative flex gap-2">
                <button onClick={toggleTheme} className="toggleBtn">{theme}</button>

                <button onClick={() => handleLogin(logBtn)} className="loginBtn">Login</button>

                {!logBtn && (
                    <div id="option" className="absolute right-0 top-10 bg-white flex justify-center items-center rounded-full px-5 py-3 gap-2 shadow-md">
                        <Link to={"/adminLogin"} className="adminOpt">Admin</Link>
                        <Link to={"/studentLogin"} className="stuOpt">Student</Link>
                    </div>
                )}
            </div>
        
            
        </div>
    );
}
 
export default Navbar;