import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [isExpand, setExpand] = useState(false);
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      console.log(prevNote);
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  function handleClick(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  function expand() {
    setExpand(true);
  }
  return (
    <div>
      <form className="create-note">
        {isExpand && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        )}
        <textarea
          onChange={handleChange}
          onClick={expand}
          name="content"
          placeholder="Take a note..."
          rows={isExpand ? 3 : 1}
          value={note.content}
        />
        <Zoom in={isExpand}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
