
import './App.css';
import Sum from "./component/Sum";
import Multiple from "./component/Multiple"
import Bmi from './component/Bmi';


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col bprderClass">
          <Sum/></div>
        <div className="col bprderClass"><Multiple/></div>
        <div className="col bprderClass"><Bmi/></div>
      </div>
      
    </div>
  );
}

export default App;
