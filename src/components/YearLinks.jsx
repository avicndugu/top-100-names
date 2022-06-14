import { Link } from 'react-router-dom';

const YearLinks = (props) => {
let years = [2021, 2020, 2019, 2018];
console.log(props.yearslist);

  if (props.gender === "all"){
    return (
      props.yearslist.map((item)=>(
        <Link reloadDocument key={`${props.gender}-${item.year}`} className="button" to={`/${item.year}`}>{ item.year }</Link>
      ))
    )
  }else {
    if (props.gender === "f"){
      return (
        props.yearslist.map((item)=>(
          <Link reloadDocument key={`${props.gender}-${item.year}`} className="button" to={`/${item.year}/girls`}>{ item.year }</Link>
        ))
      )
    }
    if (props.gender === "m"){
      return (
        props.yearslist.map((item)=>(
          <Link reloadDocument key={`${props.gender}-${item.year}`} className="button" to={`/${item.year}/boys`}>{ item.year }</Link>
        ))
      )
    }
  }
  
}

export default YearLinks;