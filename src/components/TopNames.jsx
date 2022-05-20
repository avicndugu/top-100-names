const TopNames = (props) => {
  return (
    <table>
      <tbody>
        {props.names.map((item, index) => (
          <tr key={`${props.gender}-${index}`}><td>{`${index+1}`}. {item.name}</td></tr>
        ))}
      </tbody>
    </table>
  )
}

export default TopNames;