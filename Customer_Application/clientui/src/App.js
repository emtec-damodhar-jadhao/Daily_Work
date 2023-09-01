import './App.css';
import AllCustomer from './Components/AllCustomer';
import AddCustomer from './Components/AddCustomer';
import CustomerUpdate from './Components/CustomerUpdate';
import {Routes,Route} from 'react-router-dom';
import SearchCustomer from './Components/SearchCustomer';
function App() {
  return (
    <div className="App">      
      <Routes>        
        <Route path="/" element={<AllCustomer/>} />
        <Route path="AddNewCustomer" element={<AddCustomer/>} />
        <Route path="UpdateCustomer" element={<CustomerUpdate/>} />
        <Route path="/SearchCustomer" element={<SearchCustomer/>}/>       
      </Routes>
    </div>
  );
}

export default App;
