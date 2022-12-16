import './App.css';
import Navbar from './Components/Navbar';
import AllCustomer from './Components/AllCustomer';
import AddCustomer from './Components/AddCustomer';
import SearchCustomer from './Components/SearchCustomer';
import CustomerUpdate from './Components/CustomerUpdate';
import DeleteCustomer from './Components/DeleteCustomer';
import {Routes,Route} from 'react-router-dom';
import NextUpdate from './Components/NextUpdate';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={< Navbar/>} />
        <Route path="GetAllCustomers" element={<AllCustomer/>} />
        <Route path="AddNewCustomer" element={<AddCustomer/>} />
        <Route path="SearchByID" element={<SearchCustomer/>} />
        <Route path="UpdateCustomer" element={<CustomerUpdate/>} />
        <Route path="DeleteCustomer" element={<DeleteCustomer/>} />
        <Route path="Secondupdate" element={<NextUpdate />} />
      </Routes>

    </div>
  );
}

export default App;
