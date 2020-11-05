import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useDispatch} from "react-redux";

import {searchedTournamentsAction} from "../Redux/actions";
import useDebounce from "../Utility/useDebounce";

import TextField from '@material-ui/core/TextField';

import './style.scss';

const MAIN_URL = 'https://api-search.win.gg';

const SearchBar = () => {

    const [value, setValue] = useState('');
    const dispatchTournaments = useDispatch();
    const debouncedSearchTerm = useDebounce(value.trim(), 400);

    useEffect(
        () => {
            debouncedSearchTerm && getTournaments(debouncedSearchTerm);
        },
        [debouncedSearchTerm]
    );

    const onInputChange = (ev) => {
        setValue(ev.target.value);
    };

    const onFormSubmit = (ev) => {
        ev.preventDefault();
        debouncedSearchTerm && getTournaments(debouncedSearchTerm);
    };

    const getTournaments = (queryString) => {
        axios.get(`${MAIN_URL}/search`, {
            params: {
                q: queryString,
                index: 'tournament'
            }
        })
            .then(function (response) {
                console.log(response)
                handleSuccessTournaments(response?.data[0]?.documents)
            })
            .catch(function (error) {
                dispatchTournaments(searchedTournamentsAction([]));
                console.log("Please add more characters");
            })
    };

    const handleSuccessTournaments = (tournamentsArr = []) =>{
        const tournaments = [];
        tournamentsArr.map((item, ind) => {
            const tournamentData = {
                id: item.id,
                img: item.images?.square?.filePath,
                title: item.title,
                description: item.description
            };
            tournaments.push(tournamentData)
        });

        dispatchTournaments(searchedTournamentsAction(tournaments))
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
