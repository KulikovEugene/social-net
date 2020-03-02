import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
        return (
        <div>
            <div>
                <img src="https://pbs.twimg.com/profile_banners/921476486451924992/1537686577/1500x500" />
            </div>
            <div className={classes.descriptionBlock}>
                ava + profile
            </div>
        </div>
        )
};

export default ProfileInfo;