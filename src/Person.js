var React = require('react');

const Person = function(props){
  return (
    <div>
      <h1> Hello , {props.name} </h1>
      <h1> Age , {props.age} </h1>
    </div>
  )
}

module.exports = Person

