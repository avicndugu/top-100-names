import SplitTable from '../../components/SplitTable';
import AllBottomLinks from '../../components/AllBottomLinks';
import useFetch from '../../functions/useFetch';
import { useParams } from 'react-router-dom';

function Gender() {
  let params = useParams();
  const [isDataLoading, data] = useFetch(`https://avicndugu.github.io/top-100-names/yob${params.year}.json`);

  if (isDataLoading || !data){
    return (
      <>
        <div>
          <h1>Top 100 { (params.gender).replace(/^\w/, (firstLetter) => firstLetter.toUpperCase()) } Names in { params.year }</h1>
          <div className="Row">
            <div className="Column">
              <p>Content is loading... </p>
            </div>
            <div className="Column">
              <p>Content is loading... </p>
            </div>
          </div>
          <AllBottomLinks />
        </div>
      </>
    )
  }
  if (params.gender ==="boys"){
    const boys = data.filter((name) => name.gender ==="M");
    return (
      <>
        <div>
          <h1>Top 100 Baby { (params.gender).replace(/^\w/, (firstLetter) => firstLetter.toUpperCase()) } Names in { params.year }</h1>
          <SplitTable names= { boys }/>
        </div>
        <AllBottomLinks />
      </>
    );
  }
  if (params.gender ==="girls"){
    const girls = data.filter((name) => name.gender ==="F");
    return (
      <>
        <div>
          <h1>Top 100 Baby { (params.gender).replace(/^\w/, (firstLetter) => firstLetter.toUpperCase()) } Names in { params.year }</h1>
          <SplitTable names= { girls }/>
        </div>
        <AllBottomLinks />
      </>
    );
  }
}

export default Gender;