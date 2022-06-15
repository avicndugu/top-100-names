import YearLinksPlaceholder from './YearLinksPlaceholder';
import YearLinks from './YearLinks';
import YearLinksPagination from './YearLinksPagination';
import useFetch from '../functions/useFetch';
import {useState} from 'react';

const AllBottomLinks = () => {
const [isDataLoading, data] = useFetch('https://avicndugu.github.io/names-api/allyears.json');

const [pageNumber, setPageNumber] = useState(1);

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
    const numberofpages = Math.floor(data.length/9) + 1;
  //  const yearspage1=data.slice(0,9);
    
  //  for (let n=1; n<=numberofpages; n++) {
  //    const yearspage1=data.slice(0,n*9);
  //    console.log(yearspage1);
  //  }
  // console.log(data.slice(0,pageNumber*9));
  // console.log(data.slice((pageNumber-1)*9,pageNumber*9));


// Cycle through the years per page
  let currentpageyears = data.slice((pageNumber-1)*9,pageNumber*9);
//  console.log(currentpageyears);


  let pageYears =[];
  for (let n=1; n<=numberofpages; n++){
    pageYears.push(data.slice((n-1)*9,n*9));
    // console.log(data.slice((n-1)*9,n*9));
    // console.log(pageYears);
  }

    return(
      <> 
        <div>
          <h2 className="text-center">Top 100 Baby Names By Year</h2>
          <div className="bottom-links">
            <YearLinks gender="all" yearslist={ currentpageyears }/>
          </div>
          <div className="pagination">
            <button onClick={()=> {
              if(pageNumber>1){
                setPageNumber(pageNumber - 1);
              }
            }}>Newer</button>
            <div>
              <button onClick={()=> setPageNumber(1)}>1</button>
              <button onClick={()=> setPageNumber(2)}>2</button>
              <button onClick={()=> setPageNumber(3)}>3</button>
              <button onClick={()=> setPageNumber(4)}>4</button>
              <span> ... </span>
              <button className="pagination-number" onClick={()=> setPageNumber(numberofpages)}>{ numberofpages }</button>
            </div>
            <button onClick={()=> {
              if (pageNumber<numberofpages){
                setPageNumber(pageNumber + 1);
              }
            }}>Older</button>
          </div>          
        </div>
        <div>
          <h2 className="text-center">Top 100 Girls Names By Year</h2>
          <div className="bottom-links">
            <YearLinks gender="f" yearslist={ data }/>
          </div>
          <YearLinksPagination newer={ 1 } older={ 1 } pages={ numberofpages } />
        </div>
        <div>
          <h2 className="text-center">Top 100 Boys Names By Year</h2>
          <div className="bottom-links">
            <YearLinks gender="m" yearslist={ data }/>
           </div>
           <YearLinksPagination  newer={ 1 } older={ 1 } pages={ numberofpages } />
        </div>
      </>
    )
  }
}

export default AllBottomLinks;