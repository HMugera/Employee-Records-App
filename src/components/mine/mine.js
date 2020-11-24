import React, { useState } from "react";

function Mine() {
  const [items, setitems] = useState([]);
  const [text, settext] = useState("");

  const handleChange = (e) => settext(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.length) {
      return;
    }

    const newItem = {
      text,
      id: Date.now(),
    };
    settext("");
    setitems(items.concat(newItem));
  };
  //   api.createItem("/items". newItem).then(persistedItem =>{
  //     settext("");
  //     setitems(items.concat(persistedItem));
  //   })

  return (
    <div>
      <h1>TODO</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}> {item.text}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor='new-todo'>What needs to be done</label>
        <br />
        <input value={text} id='new-todo' onChange={handleChange} />
        <button>Add #{items.length + 1}</button>
      </form>
    </div>
  );
}

export default Mine;
