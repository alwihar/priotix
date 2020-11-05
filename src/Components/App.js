import React from 'react';
import SearchBar from "./SearchBar";
import SearchList from "./SearchList";
import '../Styles/style.scss';
import SaveList from "./SaveList";

const App = () => {
  return (
    <div className='App_wrap'>
      <div className="Search">
          <div className="Search_title">
              <span>Search Tournaments Here!</span>
          </div>
          <SearchBar/>
          <SearchList/>
      </div>
        <SaveList/>
    </div>
  )
};

export default App;
