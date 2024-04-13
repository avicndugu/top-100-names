import useFetch from '../functions/useFetch';
import {useState, useEffect} from 'react';

const HomeYear = () => {
const [isDataLoading, data] = useFetch('https://jekyll-json-api.netlify.app/allyears.json');
const [year, setYear] = useState("");

  useEffect(()=> {
    if(data){
      setYear(data[0].year);
    }
  }, [data]);

  if (isDataLoading || !data){
    return <span>loading...</span>        
  } else {
    return <span>{year}</span>
  }
}

export default HomeYear;