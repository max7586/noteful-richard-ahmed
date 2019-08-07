import React from "react";
import Note from "./Note";
import UserContext from './UserContext';

 class NotePage extends React.Component{
  static contextType = UserContext;

  render () {
    const noteArr = this.context.notes.filter(
      note => note.id === this.context.match.params.notesId
    );
    const note = noteArr[0];
    return (
      <div>
        <Note {...note} />
        <p>{note.content}</p>
      </div>
    );
  }
  
};

export default NotePage;