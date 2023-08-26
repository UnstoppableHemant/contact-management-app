import axios from 'axios';
import { useEffect, useState } from 'react';

const CovidApiInstance = axios.create({
    baseURL: "https://disease.sh/v3/covid-19"
});

export const GetWorldWideCases = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        CovidApiInstance.get("/all").then((res)=>{
            console.log(res.data);
            setData(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])
   
    return data;
}

export const GetCountryWiseeCases = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        CovidApiInstance.get("/countries").then((res)=>{
            console.log(res.data);
            setData(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])
   
    return data;
}

export const GetDateWiseCases = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        CovidApiInstance.get("/historical/all?lastdays=all").then((res)=>{
            console.log(res.data);
            setData(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])
   
    return data;
}

//export default index

//export default CovidApiInstance;