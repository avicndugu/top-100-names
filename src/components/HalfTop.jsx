const SplitTop = (props) => {
console.log(props.names.length/2)
  return (
    <table>
      <tbody>
        {
          props.names.map((item, index) => {
            if(index < props.names.length/2 && props.even===false){
              return(<tr key={`${props.gender}-${index}`}><td>{`${index+1}`}. {item.name}</td></tr>)
            }else if(index >= props.names.length/2 && props.even===true){
              return(<tr key={`${props.gender}-${index}`}><td>{`${index+1}`}. {item.name}</td></tr>)

            }else{

            }
          })
        }
        
      </tbody>
    </table>
  )
}



export default SplitTop;