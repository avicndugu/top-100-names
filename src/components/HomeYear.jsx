import useFetch from '../functions/useFetch';
import {useState, useEffect} from 'react';

const HomeYear = (props) => {
const [isDataLoading, data] = useFetch('https://jekyll-json-api.netlify.app/allyears.json');

  useEffect(()=> {
    if(data){
      props.setYear(data[0].year);
    }
  }, [data]);

  if (isDataLoading || !data){
    return <span>loading...</span>        
  } else {
    return <span>{props.year}</span>
  }
}

export default HomeYear;