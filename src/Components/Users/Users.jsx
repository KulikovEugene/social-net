import React from 'react';
import styles from './users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://funwithbonus.com/wp-content/uploads/Anonymous-Avatar.png',
                    followed: true,
                    fullName: 'Eugene',
                    status: 'Home',
                    location: {city: 'Sarov', country: 'Russia'}
                },
                {
                    id: 2,
                    photoUrl: 'https://funwithbonus.com/wp-content/uploads/Anonymous-Avatar.png',
                    followed: false,
                    fullName: 'Mike',
                    status: 'Work',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://funwithbonus.com/wp-content/uploads/Anonymous-Avatar.png',
                    followed: true,
                    fullName: 'Anna',
                    status: 'Happy',
                    location: {city: 'Saint-Petersburg', country: 'Russia'}
                },
                {
                    id: 4,
                    photoUrl: 'https://funwithbonus.com/wp-content/uploads/Anonymous-Avatar.png',
                    followed: true,
                    fullName: 'Maria',
                    status: 'Home',
                    location: {city: 'Sarov', country: 'Russia'}
                },
            ]
        );
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                   <span>
                       <div>
                           <img src={u.photoUrl} className={styles.userPhoto}/>
                       </div>
                       <div>
                           {u.followed
                               ? <button onClick={() => {
                                   props.unfollow(u.id)
                               }}>Unfollow</button>
                               : <button onClick={() => {
                                   props.follow(u.id)
                               }}>Follow</button>
                           }

                       </div>
                   </span>
                    <span>
                       <span>
                           <div>{u.fullName}</div>
                           <div>{u.status}</div>
                       </span>
                       <span>
                            <div>{u.location.country}</div>
                           <div>{u.location.country}</div>
                       </span>
                   </span>

                </div>)
            }
        </div>
    )

};

export default Users;
