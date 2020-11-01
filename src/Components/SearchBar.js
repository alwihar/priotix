import React, {useState} from 'react';
import axios from 'axios';

import TextField from '@material-ui/core/TextField';
import './style.scss';

const MAIN_URL = 'https://api-search.win.gg';

const SearchBar = () => {

    const [value, setValue] = useState('');

    const onInputChange = (ev) => {
        setValue(ev.target.value);
    };

    const onFormSubmit = (ev) => {
        ev.preventDefault();
        axios.get(`${MAIN_URL}/search`, {
            params: {
                q: value.trim().toLowerCase(),
                index: 'tournament'
            }
        })
            .then(function (response) {
                console.log(response);

            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    };

    return (
        <div className="SearchBar_wrap">
            <form onSubmit={onFormSubmit}>
                <TextField
                    id="outlined-search"
                    label="Search field"
                    type="search"
                    variant="outlined"
                    value={value}
                    onChange={onInputChange}
                    className='SearchBar_input'
                />
            </form>
        </div>
    )
};

export default SearchBar;
