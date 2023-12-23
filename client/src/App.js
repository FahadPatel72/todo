// import logo from './logo.svg';
import "./App.css";
import Header from "./MyComponents/Header"; /* When using rfc*/
import { Footer } from "./MyComponents/Footer"; /* When using rafc*/
import { Todos } from "./MyComponents/Todos"; /* When using rafc*/
import React, { useState, useEffect, Component } from "react";
import { AddTodo } from "./MyComponents/AddTodo";
import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:3000/show",
// });

class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount = () => {
    this.getPost();
  };

  getPost = () => {
    axios
      .get("http://localhost:3000/show")
      .then((res) => {
        const data = res.data;
        this.setState({ posts: data });
        // console.log(this.state);
        console.log("Data has been recieved");
      })
      .catch(() => {
        alert("Error retrieving data");
      });
  };
  handleDeleteProperty = async (id) => {
    try {
      if (window.confirm("Are you sure?")) {
        axios.get("http://localhost:3000/del/" + id).then((response) => {
          console.log(response.data);
          window.location.reload();
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    let initTodo;
    if (localStorage.getItem("todos") === null) {
      initTodo = [];
    } else {
      initTodo = JSON.parse(localStorage.getItem("todos"));
    }
    console.log("State:", this.state);

    // const onDelete = (todo) => {
    //   setTodos(
    //     todos.filter((e) => {
    //       return e !== todo;
    //     })
    //   );
    // localStorage.setItem("todos", JSON.stringify(todos));
    // };

    // const addTodo = (title, desc) => {
    //   let sno;
    //   if (todos.length === 0) {
    //     sno = 0;
    //   } else {
    //     sno = todos[todos.length - 1].sno + 1;
    //   }
    //   const myTodo = {
    //     sno: sno,
    //     title: title,
    //     desc: desc,
    //   };
    //   setTodos([...todos, myTodo]);
    // };

    // const [todos, setTodos] = useState(initTodo);
    // useEffect(() => {
    // localStorage.setItem("todos", JSON.stringify(todos));
    // }, [todos]);

    return (
      <>
        <Header title="My Todos List" searchBar={true} />
        {/* <AddTodo AddTodo={addTodo}/> */}
        <AddTodo />
        {/* hello */}

        <div className="app">
          {this.state.posts.length ? (
            Object.entries(this.state.posts).map(([key, value]) => (
              <div key={key}>
                <ul>
                  <li>
                    <h2>{value.title}</h2>
                  </li>
                  <h4>{value.desc}</h4>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={(e) => this.handleDeleteProperty(value._id)}
                  >
                    Delete
                  </button>
                </ul>
              </div>
            ))
          ) : (
            <>
              <h1 className="text-center">No todos to display</h1>
            </>
          )}
        </div>
        {/* <Todos todos={todos} onDelete={onDelete} /> */}
        <Footer />
      </>
    );
  }
}

export default App;
