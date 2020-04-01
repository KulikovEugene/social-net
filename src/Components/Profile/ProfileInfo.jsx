import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloder from "../common/Preloder/Preloder";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloder/>
    }
    return (
        <div>
            <div>
                <img src="https://pbs.twimg.com/profile_banners/921476486451924992/1537686577/1500x500"/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + profile
            </div>
        </div>
    )
};

export default ProfileInfo;