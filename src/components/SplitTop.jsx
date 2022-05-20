const SplitTop = (props) => {
  return (
    <table>
      <tbody>
        {
          props.names.map((item, index) => {
            if(index % 2 !==0 && props.even===true){
              return(<tr key={`${props.gender}-${index}`}><td>{`${index+1}`}. {item.name}</td></tr>)
            }else if(index % 2 ===0 && props.even===false){
              return(<tr key={`${props.gender}-${index}`}><td>{`${index+1}`}. {item.name}</td></tr>)
            }
          })
        }
        
      </tbody>
    </table>
  )
}



export default SplitTop;