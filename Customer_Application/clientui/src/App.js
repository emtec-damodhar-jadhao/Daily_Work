import './App.css';
import AllCustomer from './Components/AllCustomer';
import AddCustomer from './Components/AddCustomer';
import CustomerUpdate from './Components/CustomerUpdate';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>        
        <Route path="/" element={<AllCustomer/>} />
        <Route path="AddNewCustomer" element={<AddCustomer/>} />
        <Route path="UpdateCustomer" element={<CustomerUpdate/>} />    
       
      </Routes>
    </div>
  );
}

export default App;
