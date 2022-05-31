import YearLinks from './YearLinks';

const AllBottomLinks = () => {
  return( 
    <> 
      <div>
        <h2>Top 100 Baby Names By Year</h2>
        <ul>
          <YearLinks gender="all" />
        </ul>
      </div>
      <div>
        <h2>Top 100 Girls Names By Year</h2>
        <ul>
          <YearLinks gender="f"/>
        </ul>
      </div>
      <div>
        <h2>Top 100 Boys Names By Year</h2>
        <ul>
          <YearLinks gender="m"/>
        </ul>
      </div>
    </>
  )
}

export default AllBottomLinks;