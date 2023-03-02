// src/App.js
import './App.css';
import CountriesDetails from './components/CountriesDetails';
import CountriesList from './components/CountriesList';
import Header from './components/Header';
import { useState, useEffect } from 'react'; // importing the hooks here
import axios from 'axios'; // api bridge
import { Route, Routes } from 'react-router-dom';


const apiURL = "https://ih-countries-api.herokuapp.com/countries"; // the api

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

/*   let country;
  let countries;
  country = "pt"
  setCountries("pt") */

  const getCountries = async () => {
    try {
      let response = await axios.get(apiURL);
      setCountries(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="App">

<Header />

      {loading && <h2>Loading...</h2>}

      {!loading && countries.map((country) => {
        return (
          <CountriesList country={country} key={country._id}/>
        );
      })}
  

       
      

      </div>
  );


}
export default App;
