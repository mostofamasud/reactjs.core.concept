import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Mostofa', 'Masud', 'Jamal', 'Uddin', 'Rony', 'Rahman', 'Ashik']
  return (
    <div className="App">
      { nayoks.map(nayok => <Person name={nayok}></Person>) }
      
      {/* <Person name={nayoks[0]} job="Student"></Person>
      <Person name={nayoks[1]} job="Student"></Person>
      <Person name={nayoks[2]} job="Teacher"></Person> */}
      <h5>New component starts here</h5>
      <Friend name={nayoks[3]} work="Maramari"></Friend>
      <Friend name={nayoks[4]} work="Play Boy"></Friend>
      <Friend name={nayoks[5]} work="Freelancer"></Friend>
      <Friend name={nayoks[6]} work="JobHolder"></Friend>

    </div>
  );
}
function Person(props){
  return(
    <div className="person">
      <h1>Name: {props.name}</h1>
      <p>Profession: {props.job}</p>
     
    </div>
  )
}

function Friend(props){
  console.log(props);
  return(
    <div className='friend'>
      <h2>Name: {props.name}</h2>
      <p>Profession: {props.work}</p>
    </div>
  )
}

export default App;
