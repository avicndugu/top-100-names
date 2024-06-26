import YearLinksPlaceholder from './YearLinksPlaceholder';
import YearLinks from './YearLinks';
import YearLinksPagination from './YearLinksPagination';
import useFetch from '../functions/useFetch';
import {useState} from 'react';

const AllBottomLinks = () => {
const [isDataLoading, data] = useFetch('https://jekyll-json-api.netlify.app/allyears.json');

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
    const numberofpages = Math.floor(data.length/8) + 1;
    // Cycle through the years per page
    let currentpageyears = data.slice((pageNumber-1)*8,pageNumber*8);
    let currentpageyearsboys = data.slice((pageNumberBoys-1)*8,pageNumberBoys*8);
    let currentpageyearsgirls = data.slice((pageNumberGirls-1)*8,pageNumberGirls*8);

    return(
      <> 
        <div>
          <h2 className="text-center">Top 100 Baby Names By Year</h2>
          <div className="bottom-links">
            <YearLinks gender="all" yearslist={ currentpageyears }/>
          </div>
          <YearLinksPagination numberofpages={ numberofpages } pageNumber={ pageNumber } setPageNumber={ setPageNumber }/>
        </div>
        
        <div>
          <h2 className="text-center">Top 100 Girls Names By Year</h2>
          <div className="bottom-links">
            <YearLinks gender="f" yearslist={ currentpageyearsgirls }/>
          </div>
          <YearLinksPagination numberofpages={ numberofpages } pageNumber={ pageNumberGirls } setPageNumber={ setPageNumberGirls }/>
        </div>

        <div>
          <h2 className="text-center">Top 100 Boys Names By Year</h2>
          <div className="bottom-links">
            <YearLinks gender="m" yearslist={ currentpageyearsboys }/>
           </div>
          <YearLinksPagination numberofpages={ numberofpages } pageNumber={ pageNumberBoys } setPageNumber={ setPageNumberBoys }/>
        </div>
      </>
    )
  }
}

export default AllBottomLinks;