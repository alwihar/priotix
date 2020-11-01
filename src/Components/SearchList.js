import React from 'react';
import './style.scss';
import Tournament from "./Tournament";

const SearchList = () => {

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
        {
            id: 3,
            img: 'https://cdn-images.win.gg/external/1/tournament/MzU3Nw/99eb4e312e973fa08263d2fb10541ada/banner/original.jpg',
            title: 'title3',
            description: 'description3'
        },
        {
            id: 4,
            img: 'https://cdn-images.win.gg/external/1/tournament/MzU3Nw/99eb4e312e973fa08263d2fb10541ada/banner/original.jpg',
            title: 'title4',
            description: 'description4'
        }
    ];

    return (
        <div className='SearchList_wrap'>
            {MockData.map((item) => (
                <Tournament key={item.id} item={item}/>
            ))}
        </div>
    )
};

export default SearchList;
