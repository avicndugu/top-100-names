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


function Year() {
  const [isDataLoading, data] = useFetch('https://avicndugu.github.io/top-100-names/yob2021.json');
  console.log(data);
  let params = useParams();
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
            <table>
              <tr><td>1. NAME</td></tr>
              <tr><td>2. NAME</td></tr>
              <tr><td>3. NAME</td></tr>
              <tr><td>4. NAME</td></tr>
              <tr><td>5. NAME</td></tr>
              <tr><td>6. NAME</td></tr>
              <tr><td>7. NAME</td></tr>
              <tr><td>8. NAME</td></tr>
              <tr><td>9. NAME</td></tr>
              <tr><td>10. NAME</td></tr>
            </table>
              <a href="/years/gender/">View All</a>
          </div>
          <div className="Column">
            <h2>Top 100 Baby Girls Names in { params.year }</h2>
            <table>
              <tr><td>1. NAME</td></tr>
              <tr><td>2. NAME</td></tr>
              <tr><td>3. NAME</td></tr>
              <tr><td>4. NAME</td></tr>
              <tr><td>5. NAME</td></tr>
              <tr><td>6. NAME</td></tr>
              <tr><td>7. NAME</td></tr>
              <tr><td>8. NAME</td></tr>
              <tr><td>9. NAME</td></tr>
              <tr><td>10. NAME</td></tr>
            </table>
              <a href="/year/gender/">View All</a>
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