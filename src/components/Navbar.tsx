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
        <div className={`${theme == "Light" ? "Navbar" : "darkNavbar"}`}>
            <div className="relative flex gap-2">
                <button onClick={toggleTheme} className={theme == "Light" ? "lightBtn" : "darkBtn"}>{theme}</button>

                <button onClick={() => handleLogin(logBtn)} className={theme == "Light" ? "loginBtn" : "loginBtnDark"}>Login</button>

                {!logBtn && (
                    <div id="option" className="absolute right-0 top-10 bg-white flex justify-center items-center rounded-full px-5 py-3 gap-2 shadow-md">
                        <Link to={"/adminLogin"} className={theme == "Light" ? "adminOpt" : "adminOptDark"}>Admin</Link>
                        <Link to={"/studentLogin"} className={theme == "Light" ? "stuOpt" : "stuOptDark"}>Student</Link>
                    </div>
                )}
            </div>
        
            
        </div>
    );
}
 
export default Navbar;