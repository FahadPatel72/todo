import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // fetch("http://localhost:3000/show")
  //   .then((data) => data.json())
  //   .then((data) => {
  //     console.log(data);
  //   });

  const submit = async (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
    } else {
      // props.addTodo(title, desc);
      setTitle("");
      setDesc("");
      // console.log(title);
      // console.log(desc);

      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          desc,
        }),
      });
      const data = await res.json();
      if (data.status === 422 || !data) {
        window.alert("Invalid");
        console.log("invalid");
      } else {
        // window.alert("Successful");
        console.log("successful");
        window.location.reload();
      }
    }
  };
  return (
    <>
      <div className="container">
        <h3 className="text-center">Add a todo!!</h3>
        <form method="POST" onSubmit={submit}>
          <div className="mb-3">
            <label for="title" className="form-label">
              Todo Title
            </label>
            <input
              required
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              id="title"
            />
          </div>
          <div className="mb-3">
            <label for="desc" className="form-label">
              Todo Description
            </label>
            <input
              required
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="form-control"
              id="desc"
            />
          </div>
          <button type="submit" className="btn btn-sm btn-success">
            Add
          </button>
        </form>
      </div>
    </>
  );
};
