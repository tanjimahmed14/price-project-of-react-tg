import { useEffect, useState } from "react";
import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const [price, setPrice] = useState([])

    useEffect(() => {
        fetch('price.json')
        .then(res => res.json())
        .then(data => setPrice(data))
    },[])
    return (
        <div>
            <div>
                <h1 className="text-4xl text-center m-10 font-semibold">Best price in the town</h1>
                <div className="grid md:grid-cols-3 gap-6 mx-10">
                {
                    price.map(option => <PriceOption key={option.id} option={option} ></PriceOption>)
                }
                </div>
            </div>
        </div>
    );
};

export default PriceOptions;