import YearLinksPlaceholder from './YearLinksPlaceholder';
import YearLinks from './YearLinks';
import YearLinksPagination from './YearLinksPagination';
import useFetch from '../functions/useFetch';
import {useState} from 'react';

const AllBottomLinks = () => {
const [isDataLoading, data] = useFetch('https://avicndugu.github.io/names-api/allyears.json');

const [pageNumber, setPageNumber] = useState(1);
const [pageNumberBoys, setPageNumberBoys] = useState(1);
const [pageNumberGirls, setPageNumberGirls] = useState(1);

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
    const numberofpages = Math.floor(data.length/9) + 1;
    // Cycle through the years per page
    let currentpageyears = data.slice((pageNumber-1)*9,pageNumber*9);
    let currentpageyearsboys = data.slice((pageNumberBoys-1)*9,pageNumberBoys*9);
    let currentpageyearsgirls = data.slice((pageNumberGirls-1)*9,pageNumberGirls*9);

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
            <YearLinks gender="f" yearslist={ currentpageyearsgirls }/>
          </div>
          <div className="pagination">
            <button onClick={()=> {
              if(pageNumberGirls>1){
                setPageNumberGirls(pageNumberGirls - 1);
              }
            }}>Newer</button>
            <div>
              <button onClick={()=> setPageNumberGirls(1)}>1</button>
              <button onClick={()=> setPageNumberGirls(2)}>2</button>
              <button onClick={()=> setPageNumberGirls(3)}>3</button>
              <button onClick={()=> setPageNumberGirls(4)}>4</button>
              <span> ... </span>
              <button className="pagination-number" onClick={()=> setPageNumber(numberofpages)}>{ numberofpages }</button>
            </div>
            <button onClick={()=> {
              if (pageNumberGirls<numberofpages){
                setPageNumberGirls(pageNumberGirls + 1);
              }
            }}>Older</button>
          </div>
        </div>
        <div>
          <h2 className="text-center">Top 100 Boys Names By Year</h2>
          <div className="bottom-links">
            <YearLinks gender="m" yearslist={ currentpageyearsboys }/>
           </div>
           <div className="pagination">
            <button onClick={()=> {
              if(pageNumberBoys>1){
                setPageNumberBoys(pageNumberBoys - 1);
              }
            }}>Newer</button>
            <div>
              <button onClick={()=> setPageNumberBoys(1)}>1</button>
              <button onClick={()=> setPageNumberBoys(2)}>2</button>
              <button onClick={()=> setPageNumberBoys(3)}>3</button>
              <button onClick={()=> setPageNumberBoys(4)}>4</button>
              <span> ... </span>
              <button className="pagination-number" onClick={()=> setPageNumberBoys(numberofpages)}>{ numberofpages }</button>
            </div>
            <button onClick={()=> {
              if (pageNumberBoys<numberofpages){
                setPageNumberBoys(pageNumberBoys + 1);
              }
            }}>Older</button>
          </div>
        </div>
      </>
    )
  }
}

export default AllBottomLinks;