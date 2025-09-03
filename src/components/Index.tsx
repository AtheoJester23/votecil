import Navbar from "./Navbar";
import Img4585 from '../assets/4585.jpg'
import { useEffect, useState } from "react";


export const AnothaComponent = ({prop}: {prop: any[]}) => {
    return(
        <div>
            {prop.id}
        </div>
    )
}

const Index = () => {
    const [data, setData] = useState<any[]>([])
    const [pageNum, setPageNum] = useState<number>(0);

    const fetchData = async () => {
        let result = [];

        try {
            const response = await fetch(`https://pokemonsimulation-7b844-default-rtdb.firebaseio.com/${pageNum}.json`);
            
            if(!response.ok){
                throw new Error(`${response.status}`)
            }

            const data = await response.json();

            result.push(data);

            setData((prev) => [...prev, data])
            setPageNum(pageNum + 1)

            return result
        } catch (error) {
            console.error(error as Error)
        }
    }

    return (  
        <div className="dark:bg-[rgb(15,15,15)]">
            <Navbar/>
            <img src={Img4585} alt="Front Page Introduction" className="w-[70%] h-full p-5 mx-auto"/>

            <button onClick={()=>fetchData()} className="bg-green-500 px-5 py-1 font-bold rounded-full m-5 -translate-y-0.25 hover:translate-none duration-200 cursor-pointer">fetch</button>

            <pre className="bg-gray-100 p-3 rounded-lg w-[70%] mx-auto overflow-auto">
                {data ? JSON.stringify(data) : "No data yet..."}
            </pre>

            {data.length > 0 && (
                <div>
                    {data.map((item) => (
                        <AnothaComponent key={item.id} prop={item}/>
                    ))}
                </div>
            )}
        </div>
    );
}
 
export default Index;