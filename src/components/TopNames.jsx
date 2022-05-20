const TopNames = (names) => {
  console.log(names)
  console.log(names.names)
  console.log(typeof(names))
  return (

    <table>
      <tbody>
        {names.names.map((item) => (
          <tr><td>{item.name}</td></tr>
        ))}
      </tbody>
    </table>
  )
}

export default TopNames;