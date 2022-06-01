import SplitTable from '../../components/SplitTable';
import MaleFemaleLists from '../../components/MaleFemaleLists';
import AllBottomLinks from '../../components/AllBottomLinks';
import useFetch from '../../functions/useFetch';
import { useParams } from 'react-router-dom';

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
          <AllBottomLinks />
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
          <MaleFemaleLists names={ data } params={ params }/>
        </div>
        <AllBottomLinks />
      </>
    );
  }
}

export default Year;