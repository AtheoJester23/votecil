const Admin = () => {
    function revealPass(){
        let pass = document.getElementById("adminPass") as HTMLInputElement
        pass.type = pass.type == "password" ? "text" : "password" 
    }

    return (  
        <div className="adminLogin">
            <form className="flex flex-col gap-[20px]">
                <h1 className="loginHeaders">Login as Admin</h1>
                
                <div className="flex flex-col w-full gap-3">
                    <div className="inputs">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" className="textInput bg-white" placeholder="Admin Username"/>
                    </div>
                    <div className="inputs flex flex-col gap-1">
                        <label htmlFor="adminPass">Password</label>
                        <input type="password" id="adminPass" name="adminPass" className="textInput bg-white" placeholder="*******"/>
                        <div className="flex gap-2 items-center">
                            <input onClick={()=> revealPass()} type="checkbox" name="showPass" id="showPass" />
                            <p>Show Password</p>
                        </div>
                    </div>

                    <button className="login mt-3">Login</button>
                </div>
                
            </form>
        </div>
    );
}
 
export default Admin;