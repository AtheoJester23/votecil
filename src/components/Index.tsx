import Navbar from "./Navbar";
import Img4585 from '../assets/4585.jpg'
import { useEffect, useState } from "react";


const Index = () => {
    const [datahandler, setDatahandler] = useState<any[]>([]);
    const [nextPage, setNextPage] = useState<number>(0)

    const fetchNew = (thePage: number) =>{
        fetchData(thePage)
            .then(item => {
                if(!item) {
                    setDatahandler([...datahandler, { id: "end", name: "The end" }]);
                    return;
                }

                const newStuff = [
                    ...datahandler,
                    item
                ]

                setDatahandler(newStuff)
                setNextPage(thePage + 1);
            })
    }

    useEffect(() => {
        fetchNew(nextPage);
    }, [])

    const fetchData = async (nextPage: number) => {
        try {
            let response = await fetch(`https://pokemonsimulation-7b844-default-rtdb.firebaseio.com/${nextPage}.json`)
            if(!response.ok){
                throw new Error(`Fetch failed: ${response.status}`)
            }

            let data = await response.json();

            return data;
        } catch (error) {
            console.error(error)
        }      
    }

    return (  
        <div>
            <Navbar/>
            <img src={Img4585} alt="Front Page Introduction" className="w-[70%] h-full p-5 mx-auto"/>
        
            <button onClick={() => fetchNew(nextPage + 3)} className="bg-green-500 text-white font-bold px-5 py-2 rounded -translate-y-0.5 hover:translate-none duration-150 cursor-pointer">Fetch</button>
        
            {datahandler && (
                datahandler.map(item => (
                    <div key={item.id}>
                        {item.name}
                    </div>
                ))
            )}

            {/* <p>{datahandler}</p> */}

        </div>
    );
}
 
export default Index;