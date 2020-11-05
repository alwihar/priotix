import React from 'react';
import {useSelector, useDispatch} from "react-redux";

import Tournament from "./Tournament";
import './style.scss';
import {deleteTournamentAction} from "../Redux/actions";

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const SaveList = () => {

    const deleteTournament = useDispatch();
    const savedTournaments = useSelector(state => state.savedTournaments);

    return (
        <div className='SaveList_wrap'>
            <div className="SaveList_title">
                <span>Your Saved Items</span>
            </div>
            <div className="SaveList">
                {savedTournaments.map((item) => (
                    <Tournament key={item.id} item={item}>
                        <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => {
                                deleteTournament(deleteTournamentAction(item.id))
                            }}
                        >
                            <CloseIcon/>
                        </IconButton>
                    </Tournament>
                ))}
            </div>
        </div>
    )
};

export default SaveList;
