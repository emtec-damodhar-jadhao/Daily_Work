import './App.css';
import Navbar from './Components/Navbar';
import AllCustomer from './Components/AllCustomer';
import AddCustomer from './Components/AddCustomer';
import SearchCustomer from './Components/SearchCustomer';
import CustomerUpdate from './Components/CustomerUpdate';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={< Navbar/>} />
        <Route path="GetAllCustomers" element={<AllCustomer/>} />
        <Route path="AddNewCustomer" element={<AddCustomer/>} />
        <Route path="SearchByID" element={<SearchCustomer/>} />
        <Route path="UpdateCustomer" element={<CustomerUpdate/>} />      
       
      </Routes>
    </div>
  );
}

export default App;
