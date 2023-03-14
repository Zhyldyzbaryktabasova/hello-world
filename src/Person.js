import "./Person.css";

function Person(props) {
  console.log(props.firsName);
  return (
   <div className="Person">
    <h2>{props.firstName} {props.lastName}</h2>
    <h3>{props.age} years old</h3>
    <p>{props.children}</p>
   </div>
  );
}
 export default Person;