import React, {useState} from "react";
// import { ReactDOM from "react-dom";
import {Card} from "./components/Card.js"
import { Navbar } from "./components/Navbar.js";
import {array} from "./data.js"


export function App() {
  const cards = array.map(item => {
    return (
        <Card
            key={item.id}
            {...item}
        />
    )
    }) 

    const [searchField, setSearchField] = useState("");

    const filteredList = array.filter(
        item => {
        return (
            item
                .name.toLowerCase()
                .includes(searchField.toLowerCase()) 
                
                ||
                
            item
                .country.toLowerCase()
                .includes(searchField.toLowerCase())
            );
        }
    );
    const handleChange = e => {
        setSearchField(e.target.value);
    };
  
    const cardsFiltered = filteredList.map(item => {
      if(filteredList.length > 0)
        return (
          <Card {...item} />
        );
      else{
          return null
      }
      }) 

  return (
    <div className="App">
      <Navbar />
      {/* <div className="search-title">
          <h2 className="search-h2">Searc</h2>
      </div> */}
      <div className="search-results">
          <input 
          className="input"
          type = "search" 
          placeholder = "Search Locations you want to search" 
          onChange = {handleChange}
      />
      </div>
      {cardsFiltered || cards}
    </div>
  );
}

export default App;

