import { Link } from 'react-router-dom';

const YearLinks = (props) => {
let years = [2021, 2020, 2019, 2018];
console.log(props.yearslist);

  if (props.gender === "all"){
    return (
      props.yearslist.map((item)=>(
        <Link className="button" to={`/${item}/girls`}>{ item.year }</Link>
      ))
    )
  }else {
    if (props.gender === "f"){
      return (
        years.map((item)=>(
          <Link reloadDocument key={`${props.gender}-${item}`} className="button" to={`/${item}/girls`}>{ item }</Link>
        ))
      )
    }
    if (props.gender === "m"){
      return (
        years.map((item)=>(
          <Link reloadDocument key={`${props.gender}-${item}`} className="button" to={`/${item}/boys`}>{ item }</Link>
        ))
      )
    }
  }
  
}

export default YearLinks;