import YearLinksPlaceholder from './YearLinksPlaceholder';
import YearLinks from './YearLinks';
import YearLinksPagination from './YearLinksPagination';
import useFetch from '../functions/useFetch';
const AllBottomLinks = () => {
const [isDataLoading, data] = useFetch('https://avicndugu.github.io/names-api/allyears.json');

  if (isDataLoading || !data){
    return( 
      <> 
        <div>
          <h2 className="text-center">Top 100 Baby Names By Year</h2>
          <div className="bottom-links">
            <YearLinksPlaceholder gender="all" />
          </div>
        </div>
        <div>
          <h2 className="text-center">Top 100 Girls Names By Year</h2>
          <div className="bottom-links">
            <YearLinksPlaceholder gender="f"/>
          </div>
        </div>
        <div>
          <h2 className="text-center">Top 100 Boys Names By Year</h2>
          <div className="bottom-links">
            <YearLinksPlaceholder gender="m"/>
           </div>
        </div>
      </>
    )
  } else {

    // console.log(data);
    // console.log(data[0].year);
    // console.log(data[0].name);
  //  console.log(data);
  //  console.log(data.length);
  //  const pagenumbers = Math.floor(data.length/9) + 1;

  //  console.log(pagenumbers);
  //  console.log(data.length/9);
  //  const yearspage1=data.slice(0,9);
  //  console.log(yearspage1);

    return(
      <> 
        <div>
          <h2 className="text-center">Top 100 Baby Names By Year</h2>
          <div className="bottom-links">
            <YearLinks gender="all" yearslist={ data }/>
          </div>
          <YearLinksPagination />
        </div>
        <div>
          <h2 className="text-center">Top 100 Girls Names By Year</h2>
          <div className="bottom-links">
            <YearLinks gender="f" yearslist={ data }/>
          </div>
          <YearLinksPagination />
        </div>
        <div>
          <h2 className="text-center">Top 100 Boys Names By Year</h2>
          <div className="bottom-links">
            <YearLinks gender="m" yearslist={ data }/>
           </div>
           <YearLinksPagination />
        </div>
      </>
    )
  }
}

export default AllBottomLinks;