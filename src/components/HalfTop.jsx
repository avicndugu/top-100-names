import{ useState } from 'react';


const SplitTop = (props) => {
  const [seeAll, setSeeAll] = useState(false);
  console.log(seeAll)
  return (
    <>
      <table>
        <tbody>
          {
            props.names.map((item, index) => {
              if(!seeAll){
                if(index < 25 && props.even===false){
                  return(<tr key={`${props.gender}-${index}`}><td>{`${index+1}`}. {item.name}</td></tr>)
                }else {
                  if(index >= 25 && index<50 && props.even===true){
                    return(<tr key={`${props.gender}-${index}`}><td>{`${index+1}`}. {item.name}</td></tr>)
                  }
                }
              } else {
                if(index < props.names.length/2 && props.even===false){
                  return(<tr key={`${props.gender}-${index}`}><td>{`${index+1}`}. {item.name}</td></tr>)
                }else {
                  if(index >= props.names.length/2 && props.even===true){
                    return(<tr key={`${props.gender}-${index}`}><td>{`${index+1}`}. {item.name}</td></tr>)
                  }
                }
              }
            })
          }
          
        </tbody>
      </table>
      <button onClick={() => setSeeAll(true)}>See All</button>
    </>
  )
}



export default SplitTop;