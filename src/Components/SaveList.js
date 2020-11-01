import React from 'react';
import Tournament from "./Tournament";
import './style.scss';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const MockData = [
    {
        id: 1,
        img: 'https://cdn-images.win.gg/external/1/tournament/MzU3Nw/99eb4e312e973fa08263d2fb10541ada/banner/original.jpg',
        title: 'title1',
        description: 'description2'
    },
    {
        id: 2,
        img: 'https://cdn-images.win.gg/external/1/tournament/MzU3Nw/99eb4e312e973fa08263d2fb10541ada/banner/original.jpg',
        title: 'title2',
        description: 'description2'
    },
];

const SaveList = () => {
    return (
        <div className='SaveList_wrap'>
            {MockData.map((item) => (
                <Tournament key={item.id} item={item}>
                    <IconButton edge="end" aria-label="delete">
                        <CloseIcon/>
                    </IconButton>
                </Tournament>
            ))}
        </div>
    )
};

export default SaveList;
