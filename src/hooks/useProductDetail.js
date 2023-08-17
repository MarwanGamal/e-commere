import {useEffect, useState} from 'react'
import axios from 'axios'

export default function useProductDetail(productUrl){

    const [data, setData] = useState()

    useEffect(()=>{
        let ignore = false
        const options = {
          method: 'GET',
          url: 'https://asos-com1.p.rapidapi.com/products/detail',
          params: {
            url: `${productUrl}`,
            country_code: 'GB',
            currency: 'GBP'
          },
          headers: {
            'X-RapidAPI-Key': '457a1eabcamshdcf8719201ec04dp181f8bjsned0bf4baea2d',
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

