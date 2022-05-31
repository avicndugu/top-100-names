import YearLinks from '../../components/YearLinks';
import SplitTable from '../../components/SplitTable';
import { useState, useEffect } from 'react';


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

function Gender() {
  const [isDataLoading, data] = useFetch(`https://avicndugu.github.io/top-100-names/yob2020.json`);

  if (isDataLoading || !data){
    return (
      <>
        <div>
          <h1>Top 100 Boys Names in 2020</h1>
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
  } else {
    return (
      <>
        <div>
          <h1>Top 100 Baby Boys Names in 2021</h1>
          <SplitTable names= { data }/>
        </div>
        <div>
          <h2>Top 100 Boys Names By Year</h2>
          <YearLinks />
        </div>
        <div>
          <h2>Top 100 Baby Names By Year</h2>
          <YearLinks />
        </div>
        <div>
          <h2>Top 100 Girls Names By Year</h2>
          <YearLinks />
        </div>
        
      </>
    );
  }

  
}

export default Gender;