import Navbar from "./Navbar";
import Img4585 from '../assets/4585.jpg'
import { useEffect, useState } from "react";


type fetchType = {
    category: string,
    completed: string,
    id: string,
    name: string
}

export const OtherComponent = ({prop}: {prop: fetchType}) => {
    return(
        <li>
            {prop.name}
        </li>  
    )
}

const Index = () => {
    const [data, setData] = useState<fetchType[]>([])
    const [currentPage, setCurretPage] = useState(0);
    
    const fetchData = async () => {
            try {
                const response = await fetch(`https://pokemonsimulation-7b844-default-rtdb.firebaseio.com/${currentPage}.json`);
                const data = await response.json()

                setData((prev) => [...prev, data]);
                setCurretPage(prev => prev + 1)
                return data;
            } catch (error) {
                console.error(error as Error);
            }
        }

    return (  
        <div className="dark:bg-[rgb(15,15,15)] h-full">
            <Navbar/>
            <img src={Img4585} alt="Front Page Introduction" className="w-[70%] h-full p-5 mx-auto"/>

            <button onClick={()=>fetchData()} className="bg-green-500 px-5 py-1 font-bold rounded-full m-5 -translate-y-0.25 hover:translate-none duration-200 cursor-pointer">fetch</button>

            {data && (
                <p>{JSON.stringify(data)}</p>
            )}

            {data && (
                <ul>
                    {data.map(item => (
                        <OtherComponent key={item.id} prop={item}/>
                    ))
                    }
                </ul>
            )}

        </div>
    );
}
 
export default Index;