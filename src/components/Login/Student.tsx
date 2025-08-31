import stuLogPic from '../../assets/6974903_4428.jpg'

const Student = () => {
    function showPass(){
        let visibility = document.getElementById("stuPass") as HTMLInputElement
        visibility.type = visibility.type === "password" ? "text" : "password";
    }

    return (  
        <div className="studentLogin">
            <div className="loginContainer">
                <div className="pictureContainer">
                    <img src={stuLogPic} alt="Just an art for login" width="85%"/>
                </div>

                <div className='stuLogCont'>
                    <form className='stuLogForm'>
                        <h1 className='loginHeaders'>Login as a Student User</h1>
                    
                        <div className='flex flex-col w-full gap-3'>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="stuNum">Student Number</label>
                                <input type="text" name='stuNum' id='stuNum' className='textInput' placeholder='Ex. 2025500110'/>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label htmlFor="stuPass">Password</label>
                                <input type="password" name='stuPass' id='stuPass' className='textInput' placeholder="*********"/>
                            
                                <div className='flex gap-2'>
                                    <input type="checkbox" onClick={() => showPass()}/>
                                    <label htmlFor="showPass">Show password</label>
                                </div>
                            
                                <button className='login'>Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Student;