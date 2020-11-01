import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const Tournament = ({item, children}) => {
    return (
        // <div className="Tournament_item">
        //     <div className="Tournament_img">
        //         <img src={item.img} alt=""/>
        //     </div>
        //     <div className="Tournament_text">
        //         <span className="title">
        //            {item.title}
        //         </span>
        //         <span className="description">
        //             {item.description}
        //         </span>
        //     </div>
        //     {children}
        // </div>
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                   <img src={item.img} alt=""/>
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.title} secondary={item.description} />
            {children}
        </ListItem>
    )
};

export default Tournament;
