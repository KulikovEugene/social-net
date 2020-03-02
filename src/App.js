import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="add-wrapper-content">
                <Route path='/Profile' render={() => <Profile
                    profilePage={props.state.profilePage}
                    dispatch={props.dispatch}/>}/>
                <Route path='/Dialogs'
                       render={() => <Dialogs dialogsPage={props.state.dialogsPage}
                                              dispatch={props.dispatch}/>}/>
                <Route path='/News' component={News}/>
                <Route path='/Music' component={Music}/>
                <Route path='/Settings' component={Settings}/>
            </div>
        </div>
    )
};

export default App;
