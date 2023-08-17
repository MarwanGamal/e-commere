import {useEffect, useState} from 'react'
import axios from 'axios'

export default function useProductSimilarities(productUrl){


    const [data, setData] = useState()

    
    

    useEffect(()=>{
        let ignore = false

        async function getId(){
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
            try {
                const response = await axios.request(options);
                return response.data.data.id
            } catch (error) {
                console.error(error);
            }
        }
          
        async function getData(){
    
            try {
                const id = await getId()
                console.log(id)
                const options = {
                    method: 'GET',
                    url: 'https://asos-com1.p.rapidapi.com/products/list-similarities',
                    params: {
                        id: id,
                        country_code: 'GB',
                        currency: 'GBP'
                    },
                    headers: {
                        'X-RapidAPI-Key': '457a1eabcamshdcf8719201ec04dp181f8bjsned0bf4baea2d',
                        'X-RapidAPI-Host': 'asos-com1.p.rapidapi.com'
                    }
                };
                const res = await axios.request(options);
                console.log(res.data)
                setData(res.data.data)
                
            } catch (error) {
                console.error(error);
                setData(error)
            }
        }

        if(!ignore){
            getData()
        }
    
        return () => {
          ignore = true;
        };
      },[])
      
      return data
}