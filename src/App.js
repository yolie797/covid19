import './App.css';
import { useEffect , useState} from 'react';
import GlobalStats from './components/global';
import CountriesStats from './components/countriesStats';
import Search from './components/search';

function App() {
  // const [globalStats,setglobalStats]=useState('');
  const [countriesStats,setcountriesStats]=useState([]);



  useEffect(()=>{
    let url="https://get-it-cheap-scraper.herokuapp.com/get-game-products?search=bread3";
    fetch(url).then((response)=>response.json().then((data)=>{
      console.log(data);
      // setglobalStats(data.Groceries)

      setcountriesStats(data.Groceries)

    }))
console.log(url);
  },[])

  const searchCountry=((text)=>{
    let value=text.toLowerCase();
    let result=[];

    result=countriesStats.filter((countries)=>{
     return countries.Groceries
     .toLowerCase().indexOf(value)!==-1
    });


    setcountriesStats(result);
  })
  return (
    <div className="App">
     {/* <GlobalStats global={globalStats}/> */}
     <Search search={searchCountry}/>
     <CountriesStats countries={countriesStats}/>
     
    </div>
  );
}

export default App;
