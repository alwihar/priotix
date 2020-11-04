import React, {useState} from 'react';
import axios from 'axios';
import {useDispatch} from "react-redux";

import {searchedTournamentsAction} from "../Redux/actions";

import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import './style.scss';

const MAIN_URL = 'https://api-search.win.gg';

const SearchBar = () => {

    const [value, setValue] = useState('');
    const dispatchTournaments = useDispatch();

    const onInputChange = (ev) => {
        setValue(ev.target.value);
        axios.get(`${MAIN_URL}/search`, {
            params: {
                q: value,
                index: 'tournament'
            }
        })
            .then(function (response) {
                console.log(response);

                const tournaments = [];

                response?.data[0]?.documents.map((item) => {

                    const tournamentData = {
                        id: item.id,
                        img: item.images?.square?.filePath,
                        title: item.title,
                        description: item.description
                    };
                    tournaments.push(tournamentData)
                });
                console.log(tournaments);

                dispatchTournaments(searchedTournamentsAction(tournaments))

            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {

            });
    };

    const onFormSubmit = (ev) => {
        ev.preventDefault();
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
                <IconButton
                    className='SearchBar_icon'
                    onClick={onFormSubmit}
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                >
                    <SearchIcon/>
                </IconButton>
            </form>
        </div>
    )
};

export default SearchBar;
