import React from 'react'
import { Link } from 'react-router-dom';




function CountriesList({ country }) {



    return (
        
        <div >
        
            <Link to={country.alpha3Code}>
        
        
                <div key={country._id}>
        
                    <h3>{country.name.common}</h3>
        
                </div>
        
        
            </Link>
        
        </div>
    );
}






export default CountriesList



// <div>
//     {country.map((country)=> {
//         return (
//             <div>
//                 <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha3Code.toLowerCase()}.png`} alt={country.name.common}/>
//                <Link to={`/${country.alpha3code}`}>
//                 <p>{country.name.common}</p>
//                </Link>
//                 </div>
//         )
//     })}
// </div>