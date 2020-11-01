import React from 'react';
import SearchBar from "./SearchBar";
import SearchList from "./SearchList";
import './style.scss';
import SaveList from "./SaveList";

const App = () => {
  return (
    <div className='App_wrap'>
      <div className="Search">
          <SearchBar/>
          <SearchList/>
      </div>
        <SaveList/>
    </div>
  )
};

export default App;
