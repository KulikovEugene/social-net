import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import {Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/MyPosts/ProfileContainer";


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="add-wrapper-content">
                <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/News' render={News}/>
                <Route path='/Music' render={Music}/>
                <Route path='/Settings' render={Settings}/>
                <Route path='/Users' render={() => <UsersContainer/>}/>
            </div>
        </div>
    )
};

export default App;
