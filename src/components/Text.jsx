import React from 'react'

const Text = ({type,label,classData}) => {
  switch(type){
    case "h1":return <h1>{label}</h1>
    case "h2": return<h2 className={classData?"fw500":"demo"}>{label}</h2>;
    case "h3":return <h3 className={classData?"fw400":"demo"}>{label}</h3>
    case "h4":return <h4>{label}</h4>;
    case "h5":return <h5>{label}</h5>
    case "h6":return <h6>{label}</h6> 
    default:return <h1>{label}</h1>
  }
}

export default Text
