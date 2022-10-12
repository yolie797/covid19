import React from 'react'

function CountriesStats (props)  {
  return (
    <div>
        <table>
            <tr>
                <th>Country Name</th>
                <th>Total Numbers of Cases</th>
                <th>Active Cases</th>
            </tr>

            {props.countries && props.countries.map((country)=>(
                <tr>
                    <td>{country.Country}</td>
                    <td>{country.TotalConfirmed}</td>
                    <td>{country.NewConfirmed}</td>
                </tr>
            ))}
        </table>
    </div>
  );
}

export default CountriesStats;