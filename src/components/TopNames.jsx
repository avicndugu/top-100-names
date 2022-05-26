import{ useState } from 'react';
const TopNames = (props) => {
  const [seeAll, setSeeAll] = useState(false);
  
  if(!seeAll){
    if(props.gender=== "m"){
      return (
        <>
          <table>
            <tbody>
              {
                props.top10.map((item) => (
                  <tr key={`${props.gender}-${item.pos}`}><td>{`${item.pos}`}. {item.name}</td></tr>
                ))
              }
              </tbody>
            </table>
          <button onClick={()=> setSeeAll(true)}>View All</button>
        </>
      )
    } else {
      if (props.gender==="f"){
        return (
          <>
            <table>
              <tbody>
                {
                  props.top10.map((item) => (
                    <tr key={`${props.gender}-${item.pos}`}><td>{`${item.pos}`}. {item.name}</td></tr>
                  ))
                }
              </tbody>
            </table>
            <button onClick={()=> setSeeAll(true)}>View All</button>
          </>
        )
      }
    }
  } else {
    if(props.gender=== "m"){
      return (
        <>
          <table>
            <tbody>
              {
                props.top100.map((item) => (
                  <tr key={`${props.gender}-${item.pos}`}><td>{`${item.pos}`}. {item.name}</td></tr>
                ))
              }
            </tbody>
          </table>
          <button onClick={()=> setSeeAll(true)}>View All</button>
        </>
      )
    } else {
      if (props.gender==="f"){
        return (
          <>
            <table>
              <tbody>
                {
                  props.top100.map((item) => (
                    <tr key={`${props.gender}-${item.pos}`}><td>{`${item.pos}`}. {item.name}</td></tr>
                 ))
                }
              </tbody>
            </table>
            <button onClick={()=> setSeeAll(true)}>View All</button>
          </>
        )
      }
    }
  }
}

export default TopNames;