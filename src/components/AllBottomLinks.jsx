import YearLinks from './YearLinks';

const AllBottomLinks = () => {
  return( 
    <> 
      <div>
        <h2 className="text-center">Top 100 Baby Names By Year</h2>
        <div className="bottom-links">
          <YearLinks gender="all" />
        </div>
      </div>
      <div>
        <h2 className="text-center">Top 100 Girls Names By Year</h2>
        <div className="bottom-links">
          <YearLinks gender="f"/>
        </div>
      </div>
      <div>
        <h2 className="text-center">Top 100 Boys Names By Year</h2>
        <div className="bottom-links">
          <YearLinks gender="m"/>
         </div>
      </div>
    </>
  )
}

export default AllBottomLinks;