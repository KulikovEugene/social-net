import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {toggleFollowingProgress} from "../../Redux/users-reducer";

const Users = (props) => {
    {
        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span onClick={(e) => {
                            props.onPageChanged(p);
                        }} className={props.currentPage === p && styles.selectedPage}>{p}</span>
                    })}


                </div>
                {
                    props.users.map(u => <div key={u.id}>
                   <span>
                       <div>
                           <NavLink to={`/profile/` + u.id}>
                           <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                           </NavLink>
                       </div>
                       <div>
                           {u.followed
                               ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                   props.toggleFollowingProgress(true, u.id);
                                   axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                       {
                                           withCredentials: true,
                                           headers: {
                                               'API-KEY': '63a8b5ff-9785-46b3-a2f5-bc7e3e2a57b2'
                                           }
                                       })
                                       .then(response => {
                                           if (response.data.resultCode == 0) {
                                               props.unfollow(u.id)
                                           }
                                           props.toggleFollowingProgress(false, u.id);
                                       });

                               }}>Unfollow</button>
                               : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                   props.toggleFollowingProgress(true, u.id);
                                   axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                       {
                                           withCredentials: true,
                                           headers: {
                                               'API-KEY': '63a8b5ff-9785-46b3-a2f5-bc7e3e2a57b2'
                                           }
                                       })
                                       .then(response => {
                                           if (response.data.resultCode == 0) {
                                               props.follow(u.id)
                                           }
                                           props.toggleFollowingProgress(false, u.id);
                                       });
                               }}>Follow</button>
                           }
                       </div>
                   </span>
                        <span>
                       <span>
                           <div>{u.name}</div>
                           <div>{u.status}</div>
                       </span>
                       <span>
                            <div>{'u.location.country'}</div>
                           <div>{'u.location.country'}</div>
                       </span>
                   </span>
                    </div>)
                }
            </div>
        )
    }
}
export default Users;
