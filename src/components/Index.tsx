import Navbar from "./Navbar";
import Img4585 from '../assets/4585.jpg'
const Index = () => {
    return (  
        <div>
            <Navbar/>
            <img src={Img4585} alt="Front Page Introduction" className="w-[70%] h-full p-5 mx-auto"/>
        </div>
    );
}
 
export default Index;