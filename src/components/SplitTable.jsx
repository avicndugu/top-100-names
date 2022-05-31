import HalfTop from './HalfTop';
import{ useState } from 'react';

function SplitTable(props) {
  const [seeAll, setSeeAll] = useState(false);
    const namesList = props.names.map((item, index) => (
      {
        pos: index + 1,
        name: item.name,
        count: item.count,
        gender: item.gender
      }
  ));

  const first50 = namesList.filter(name => name.pos <= 50);
  const second50 = namesList.filter(name => name.pos > 50 && name.pos <=100);
  const first25 = namesList.filter(name => name.pos <= 25);
  const second25 = namesList.filter(name => name.pos>25 && name.pos <= 50);

  return(
    <div className="Row">
      <div className="Column">
        <table>
          <tbody>
            <HalfTop firstQuarter = { first25 } firstHalf = { first50 }  gender = "all" even={false} seeall={seeAll} />
          </tbody>
        </table>
      </div>
      <div className="Column">
        <table>
          <tbody>
            <HalfTop secondQuarter = { second25 } secondHalf= { second50 } gender = "all" even={true} seeall={seeAll} />
          </tbody>
        </table>
        <button onClick={() => setSeeAll(true)}>See All</button>
      </div>
    </div>
  )
}

export default SplitTable;