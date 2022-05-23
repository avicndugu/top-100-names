import HalfTop from './HalfTop';
import{ useState } from 'react';

function SplitTable(props) {
  const [seeAll, setSeeAll] = useState(false);

  console.log(props.names)
  return(
    <div className="Row">
      <div className="Column">
        <table>
          <HalfTop names = { props.names } gender = "all" even={false} seeall={seeAll} />
        </table>
      </div>
      <div className="Column">
        <table>
          <HalfTop names = { props.names } gender = "all" even={true} seeall={seeAll} />
        </table>
        <button onClick={() => setSeeAll(true)}>See All</button>
      </div>
    </div>
  )
}

export default SplitTable;