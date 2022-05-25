import{ useState } from 'react';
const TopNames = (props) => {
const [seeAll, setSeeAll] = useState(false);
  console.log(seeAll)
  return (
    <>
      <table>
        <tbody>
          {props.names.map((item, index) => {
            if(!seeAll){
              if(index < 10){
                return(<tr key={`${props.gender}-${index}`}><td>{`${index+1}`}. {item.name}</td></tr>)
              }
            } else {
              if(index<100){
                return(<tr key={`${props.gender}-${index}`}><td>{`${index+1}`}. {item.name}</td></tr>)
              }
            }
          })
          }
        </tbody>
      </table>
      <button onClick={()=> setSeeAll(true)}>View All</button>
    </>
  )
}

export default TopNames;