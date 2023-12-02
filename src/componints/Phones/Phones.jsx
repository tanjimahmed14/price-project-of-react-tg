import axios from "axios";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Bars } from  'react-loader-spinner'


const Phones = () => {
    const [phone, setPhone] = useState([])
    const [loading,setLoading] = useState(true)

    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data => {
        const phones = data.data.data;
        const phonesData = phones.map(phone => {
            const obj = {
                name: phone.phone_name,
                price: parseInt(phone.slug.split('-')[1])
            }
            return obj
        })
        console.log(phonesData)
        setPhone(phonesData);
        setLoading(false)
    })
    return (
        <div className="text-center container mx-auto">
            {loading && <div className="text-center">
            <Bars
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
            </div>}
            <h1>phone: {phone.length}</h1>
            <BarChart width={1200} height={600} data={phone}>
                {/* <Bar dataKey='name' fill="green"></Bar> */}
                <Bar dataKey='price' fill="green"></Bar>
                <XAxis dataKey='name' ></XAxis>
                <YAxis dataKey='price'></YAxis>
                <Tooltip></Tooltip>
                <CartesianGrid></CartesianGrid>
                <Legend></Legend>
                <ResponsiveContainer></ResponsiveContainer>
            </BarChart>
        </div>
    );
};

export default Phones;