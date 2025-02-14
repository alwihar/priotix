import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import '../Styles/style.scss';
import Tournament from "./Tournament";
import {addTournamentAction} from "../Redux/actions";

const SearchList = () => {

    const dispatchTournament = useDispatch();

    const searchedTournaments = useSelector(state => state.searchedTournaments);
    const showResults = useSelector(state => state.showResults);

    return (
        <div className='SearchList_wrap'>

            {showResults && searchedTournaments.map((item) => (
                <Tournament
                    key={item.id}
                    item={item}
                    onClick={() => {
                        dispatchTournament(addTournamentAction(item));
                    }}
                />
            ))}
        </div>
    )
};

export default SearchList;
