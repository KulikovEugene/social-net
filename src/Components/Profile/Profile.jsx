import React from 'react';
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";


const Profile = (props) => {
        return (
            <div className={classes.content}>
                <ProfileInfo/>
                <MyPosts
                    posts={props.profilePage.posts}
                    newPostText={props.profilePage.newPostText}
                    dispatch={props.dispatch}
                />
            </div>
        )
};

export default Profile;