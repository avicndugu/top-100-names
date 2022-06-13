import YearLinks from './YearLinks';
import YearLinksPagination from './YearLinksPagination';
const AllBottomLinks = () => {
  return( 
    <> 
      <div>
        <h2 className="text-center">Top 100 Baby Names By Year</h2>
        <div className="bottom-links">
          <YearLinks gender="all" />
        </div>
        <YearLinksPagination />
      </div>
      <div>
        <h2 className="text-center">Top 100 Girls Names By Year</h2>
        <div className="bottom-links">
          <YearLinks gender="f"/>
        </div>
        <YearLinksPagination />
      </div>
      <div>
        <h2 className="text-center">Top 100 Boys Names By Year</h2>
        <div className="bottom-links">
          <YearLinks gender="m"/>
         </div>
        <YearLinksPagination />
      </div>
    </>
  )
}

export default AllBottomLinks;