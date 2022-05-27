import { Link } from 'react-router-dom';

const YearLinks = (props) => {
let years = [2021, 2020, 2019, 2018];
  return (
    years.map((item)=>(
      <li key={`${props.gender}-${item}`}><Link reloadDocument className="button" to={`/${item}`}>{ item }</Link></li>
    ))
  )
}

export default YearLinks;