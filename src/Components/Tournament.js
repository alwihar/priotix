import React from "react";

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const Tournament = ({item, children, onClick}) => {

    return (
        <ListItem className='Tournament_item' onClick={onClick}>
            <ListItemAvatar>
                <Avatar>
                   <img src={`https://cdn-images.win.gg/${item.img}`} alt={item.title}/>
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.title} secondary={item.description} />
            {children}
        </ListItem>
    )
};

export default Tournament;
