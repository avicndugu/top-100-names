import useFetch from '../functions/useFetch';
import {useEffect} from 'react';

const HomeYear = (year, setYear) => {
const [isDataLoading, data] = useFetch('https://jekyll-json-api.netlify.app/allyears.json');

  useEffect(()=> {
    if(data){
      setYear(data[0].year);
    }
  }, [data, setYear]);

  if (isDataLoading || !data){
    return <span>loading...</span>        
  } else {
    return <span>{year}</span>
  }
}

export default HomeYear;