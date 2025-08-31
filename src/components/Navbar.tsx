import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [logBtn, setLogBtn] = useState(true)

    const handleLogin = (chosen: boolean) => {
        if(chosen){  
            setLogBtn(false);
        }else if(!chosen){
            setLogBtn(true);
        }
        
    }

    return (  
        <div className="flex justify-end bg-[rgb(28,68,120)] p-5">
            <div className="relative">
                <button onClick={() => handleLogin(logBtn)} className="loginBtn">Login</button>

                {!logBtn && (
                    <div id="option" className="absolute right-0 top-10 bg-white flex justify-center items-center rounded-full px-5 py-3 gap-2 shadow-md">
                        <Link to={"/adminLogin"} className="cursor-pointer bg-[rgb(28,68,120)] text-white px-5 py-2 rounded-s-full hover:bg-blue-200 hover:text-[rgb(28,68,120)] duration-150">Admin</Link>
                        <Link to={"/studentLogin"} className="cursor-pointer bg-[rgb(28,68,120)] text-white px-5 py-2 rounded-e-full hover:bg-blue-200 hover:text-[rgb(28,68,120)] duration-150 rounded-e-full">Student</Link>
                    </div>
                )}
            </div>
        
            
        </div>
    );
}
 
export default Navbar;