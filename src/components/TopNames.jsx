import{ useState } from 'react';
const TopNames = (props) => {
const [seeAll, setSeeAll] = useState(false);
  console.log(seeAll)
  if(!seeAll){
    return (
      <>
        <table>
          <tbody>
            {
              props.names.map((item, index) => {
                if(index < 10){
                  return(<tr key={`${props.gender}-${index}`}><td>{`${index+1}`}. {item.name}</td></tr>)
                }
              })
            }
          </tbody>
        </table>
        <button onClick={()=> setSeeAll(true)}>View All</button>
      </>
    )
  } else {
    return (
      <>
        <table>
          <tbody>
            {
              props.names.map((item, index) => {
                if(index<100){
                  return(<tr key={`${props.gender}-${index}`}><td>{`${index+1}`}. {item.name}</td></tr>)
                }
              })
            }
          </tbody>
        </table>
        <button onClick={()=> setSeeAll(true)}>View All</button>
      </>
    )
  }
}

export default TopNames;