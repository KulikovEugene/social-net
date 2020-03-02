import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../Redux/dialogs-reducer";


const Dialogs = (props) => {
        let dialogElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
        let messageElements = props.dialogsPage.messages.map(message => <Message message={message.message}/>);
        let newMessageText = props.dialogsPage.newMessageText;
        let onSendMessageClick = () => {
            props.dispatch(sendMessageCreator());
        };
        let onNewMessageChange = (event) => {
            let text = event.target.value;
            props.dispatch(updateNewMessageTextCreator(text));
        };
        return (
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogElements}
                </div>
                <div className={classes.messages}>
                    <div>{messageElements}</div>
                    <div>
                        <div><textarea onChange={onNewMessageChange} value={newMessageText} placeholder='Enter your message'/></div>
                        <div>
                            <button onClick={onSendMessageClick}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        )
};

export default Dialogs;