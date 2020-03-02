import React from 'react';
import classes from "./Post.module.css";

const Post = (props) => {
        return (
            <div className={`${classes.item} ${classes.active}`}>
                {props.message}, likes:{props.likes}
                <div className={classes.item}><span>Like</span></div>
            </div>


        )
};

export default Post;