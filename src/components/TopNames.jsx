const TopNames = (props) => {
  return (
    <table>
      <tbody>
        {props.names.map((item, index) => {
          if(!props.showall){
            if(index < 10){
              return(<tr key={`${props.gender}-${index}`}><td>{`${index+1}`}. {item.name}</td></tr>)
            }
          } else {
            return(<tr key={`${props.gender}-${index}`}><td>{`${index+1}`}. {item.name}</td></tr>)
          }
        })
        }
      </tbody>
    </table>
  )
}

export default TopNames;