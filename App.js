// Authour: Mohamed Alharrasi; Date: 08.04.2024;

//importing Component, Dependencies and CSS file
import React, {useState, useEffect} from 'react';
import PokemonList from './pokemonList'
import Pagination from './pagination';
import axios from 'axios'
import { Sidebar } from './sidebar';
import './style.css';



function App() {
   
  //states initialization:
  const [pokemon, setPokemon] = useState([]);
  const [abilitiesUrl, setAbilitiesUrl] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [selectedPage, setSelectedPage] = useState('1');
  const [pageCount, setPageCount] = useState('')
  const [loading, setLoading] = useState(true);
  
useEffect(() => {
  setLoading(true)//show loading in the screen
  let cancel //declare the variable cance
  axios.get(currentPageUrl, {
    cancelToken: new axios.CancelToken(c => cancel = c)
  }).then(res => {
    setLoading(false)
    setNextPageUrl(res.data.next)
    setPrevPageUrl(res.data.previous)
    setPokemon(res.data.results.map(p => p.name))
    setAbilitiesUrl(res.data.results.map(p => p.url))
    setPageCount(res.data.count)

  })

  return() => cancel()
  
}, [currentPageUrl])

function gotoNextPage() {
  setCurrentPageUrl(nextPageUrl)
  setSelectedPage((parseInt(selectedPage)+1));
}

const handleSelectChange = (event) => {
  setSelectedPage(event.target.value);
  let specificPageUrl = '';
  let groupIndex = ((event.target.value)-1)*20
  specificPageUrl = 'https://pokeapi.co/api/v2/pokemon?offset=' + groupIndex.toString() + '&limit=20';
  setCurrentPageUrl(specificPageUrl);
};

function gotoPrevPage() {
  setCurrentPageUrl(prevPageUrl);
  setSelectedPage((parseInt(selectedPage)-1));
}


if(loading) return "Loading..."
  
  return (
    <>
    <div className='majorContainer row'>
    
      <div className='content'>
        <div>
      <PokemonList pokemon={pokemon} abilitiesUrl={abilitiesUrl}/>
      <div className='allPaginationComponents row'>
        <div className='nextPrev col'>
      <Pagination 
      gotoNextPage={nextPageUrl ? gotoNextPage : null}
      gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
      </div>
      <div className='pagesDropdown col'>
      <select value={selectedPage} onChange={handleSelectChange}>
        <option value="">page</option>
        {[...Array((Math.ceil(pageCount/20))).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>{num + 1}</option>
          ))}
      </select>
      </div>
      </div>
      </div>
      </div>
      <div className='fullSidebar'><Sidebar/></div>
      </div> 
    </>
   
  );
}

export default App;
