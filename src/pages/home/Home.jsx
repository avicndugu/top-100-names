import YearLinks from '../../components/YearLinks';
import TopNames from '../../components/TopNames';
import {useState, useEffect} from "react";

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
  },[]);
  return[loadingData, data];
}

function Home() {
  const [isDataLoading, data] = useFetch('https://avicndugu.github.io/top-100-names/yob2021.json');

  if (isDataLoading || !data){
    return (
      <>
        <div>
          <h1>Top 100 Baby Names in 2021</h1>
          <div className="Row">
            <div className="Column">
              <p>Data is loading...</p>
            </div>
            <div className="Column">
              <p>Data is loading...</p>
            </div>
          </div>
        </div>
        <div className="Row">
          <div className="Column">
            <h2>Top 100 Baby Boys Names in 2021</h2>
            <p>Data is loading...</p>           
              <a href="/years/gender/">View All</a>
          </div>
          <div className="Column">
            <h2>Top 100 Baby Girls Names in 2021</h2>
            <p>Data is loading...</p>
            <a href="/year/gender/">View All</a>
          </div>
        </div>
        <div>
          <h2>Top 100 Baby Names By Year</h2>
          <YearLinks />
        </div>
        <div>
          <h2>Top 100 Girls Names By Year</h2>
          <YearLinks />
        </div>
        <div>
          <h2>Top 100 Boys Names By Year</h2>
          <YearLinks />
        </div>
      </>
    )
  } else {
    return (
      <>
        <div>
          <h1>Top 100 Baby Names in 2021</h1>
          <div className="Row">
            <div className="Column">
              <TopNames names = { data } gender = "all" />
            </div>
            <div className="Column">
              <TopNames names = { data } gender = "all" />
              <a href="/year/gender/">View All</a>
            </div>
          </div>
        </div>
        <div className="Row">
          <div className="Column">
            <h2>Top 100 Baby Boys Names in 2021</h2>
            <TopNames names = { data.filter((name) => name.gender === "M") } gender = "m" />            
              <a href="/years/gender/">View All</a>
          </div>
          <div className="Column">
            <h2>Top 100 Baby Girls Names in 2021</h2>
            <TopNames names = { data.filter((name) => name.gender === "F") }  gender = "f" />
            <a href="/year/gender/">View All</a>
          </div>
        </div>
        <div>
          <h2>Top 100 Baby Names By Year</h2>
          <YearLinks />
        </div>
        <div>
          <h2>Top 100 Girls Names By Year</h2>
          <YearLinks />
        </div>
        <div>
          <h2>Top 100 Boys Names By Year</h2>
          <YearLinks />
        </div>
      </>
    );

  }
}


export default Home;