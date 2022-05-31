import YearLinks from '../../components/YearLinks';
import SplitTable from '../../components/SplitTable';
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

function Gender() {
  let params = useParams();

  const [isDataLoading, data] = useFetch(`https://avicndugu.github.io/top-100-names/yob${params.year}.json`);

  if (isDataLoading || !data){
    return (
      <>
        <div>
          <h1>Top 100 {params.gender} Names in { params.year }</h1>
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
    if (params.gender ==="boys"){
      const boys = data.filter((name) => name.gender ==="M");
      return (
        <>
          <div>
            <h1>Top 100 Baby {params.gender} Names in { params.year }</h1>
            <SplitTable names= { boys }/>
          </div>
          <div>
            <h2>Top 100 Baby Names By Year</h2>
            <ul>
              <YearLinks gender="all" />
            </ul>
          </div>
          <div>
            <h2>Top 100 Girls Names By Year</h2>
            <ul>
              <YearLinks gender="f"/>
            </ul>
          </div>
          <div>
            <h2>Top 100 Boys Names By Year</h2>
            <ul>
              <YearLinks gender="m"/>
            </ul>
          </div>
        </>
      );
    }
    if (params.gender ==="girls"){
      const girls = data.filter((name) => name.gender ==="F");
      return (
        <>
          <div>
            <h1>Top 100 Baby {params.gender} Names in { params.year }</h1>
            <SplitTable names= { girls }/>
          </div>
          <div>
            <h2>Top 100 Baby Names By Year</h2>
            <ul>
              <YearLinks gender="all" />
            </ul>
          </div>
          <div>
            <h2>Top 100 Girls Names By Year</h2>
            <ul>
              <YearLinks gender="f"/>
            </ul>
          </div>
          <div>
            <h2>Top 100 Boys Names By Year</h2>
            <ul>
              <YearLinks gender="m"/>
            </ul>
          </div>
        </>
      );
    }
  }

  
}

export default Gender;