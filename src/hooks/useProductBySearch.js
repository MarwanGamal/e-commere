import {useEffect, useState} from 'react'
import axios from 'axios'

export default function useProductBySearch(query){

    const [data, setData] = useState()

    useEffect(()=>{
        let ignore = false
        const options = {
          method: 'GET',
          url: 'https://asos-com1.p.rapidapi.com/products/search',
          params: {
            q: query,
            country_code: 'GB',
            currency: 'GBP',
            filters: 'brand=15059,224,14159,15003,14441,12461&floor=1001'
          },
          headers: {
            'X-RapidAPI-Key': '6c67920a01mshcc84ebf2d7702d5p1a3109jsn3ebfab84be73',
            'X-RapidAPI-Host': 'asos-com1.p.rapidapi.com'
          }
        };
        async function getData(){
          try {
            const response = await axios.request(options);
            if(!ignore){
              console.log(response.data) 
                setData(response.data.data)
            }
          } catch (error) {
            console.error(error);
                setData(error)
          }
        }
    
        getData()
    
        return () => {
          ignore = true;
        };
      },[])
      
      return data
}
