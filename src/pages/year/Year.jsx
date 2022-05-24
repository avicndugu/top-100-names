import YearLinks from '../../components/YearLinks';
import SplitTable from '../../components/SplitTable';
import TopNames from '../../components/TopNames';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function useFetch(url) {
  const [loadingData, setLoadingData] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => { 
    const fetchData = async() => {
      try{
        setLoadingData(true);
        fetch(url)
          .then(response => response.json())
          .then((data) => { setData(data) })
        setLoadingData(false);
      } catch(error) {
        console.log("error", error);
      }
    };
    fetchData();
  },[url]);
  return[loadingData, data];
}


function Year() {
  let params = useParams();
  const [isDataLoading, data] = useFetch(`https://avicndugu.github.io/top-100-names/yob${params.year}.json`);
  if (isDataLoading || !data){
    return (
      <>
        <div>
          <h1>Top 100 Baby Names in { params.year }</h1>
          <div className="Row">
            <div className="Column">
              <p>Content is loading... </p>
            </div>
            <div className="Column">
              <p>Content is loading... </p>
            </div>
          </div>
        </div>
      </>
    )
  } else{

    return (
      <>
        <div>
          <h1>Top 100 Baby Names in { params.year }</h1>
          <SplitTable names= { data }/>
        </div>
        <div className="Row">
          <div className="Column">
            <h2>Top 100 Baby Boys Names in { params.year }</h2>
            <TopNames names = { data.filter((name) => name.gender === "M") } gender = "m" />
          </div>
          <div className="Column">
            <h2>Top 100 Baby Girls Names in { params.year }</h2>
            <TopNames names = { data.filter((name) => name.gender === "F") } gender = "m" />            
          </div>
        </div>
        <div>
          <h2>Top 100 Baby Names By Year</h2>
          <ul>
            <YearLinks />
          </ul>
        </div>
        <div>
          <h2>Top 100 Girls Names By Year</h2>
          <ul>
            <YearLinks />
          </ul>
        </div>
        <div>
          <h2>Top 100 Boys Names By Year</h2>
          <ul>
            <YearLinks />
          </ul>
        </div>
      </>
    );
  }
}

export default Year;