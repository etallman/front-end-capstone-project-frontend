import React, { Component } from 'react';
import './App.css';
// import { connect } from 'react-redux'
//import Message from "./Message.js"
import { NavBar } from "../NavBar/NavBar"
<NavBar /> 

// class userFeed extends Component {

//     state = {
//         userName: "",
//         password: ""
//     }

//     handleUserLogin = e => {
//         e.preventDefault();
//         this.props.userLogin(this.state)
//     }

//     handleChange = e => {
//         this.setState({ [e.target.name]: e.target.value })
//     }

//     render() {

//         return (
//             <div className="App">
//                 <header className="App-header">
//                     {/* <img src={logo} className="App-logo" alt="logo" /> */}
//                 </header>
//                 <Form>
//                     <Form.Group controlId="userLoginUserName">
//                         <Form.Label>UserName</Form.Label>
//                         <Form.Control
//                             type="userName"
//                             placeholder="UserName"
//                             autoFocus
//                             onSubmit={this.handleUserLogin}
//                             onChange={this.handleChange}
//                             // onKeyDown={this.addTodo}
//                             //   control={Input}
//                             required
//                         />
//                     </Form.Group>
//                     <Form.Group controlId="userLoginPassword">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control
//                             // <input />
//                             className="password"
//                             type="password"
//                             placeholder="Password"
//                             autoFocus
//                             onSubmit={this.handleUserLogin}
//                             onChange={this.handleChange}
//                             // onKeyDown={this.addTodo}
//                             //   control={Input}
//                             required
//                         />
//                     </Form.Group>
//                     <Button variant="primary" type="submit">/>
//                         Submit
//                     </Button>
//                 </Form>;
//       </div>
//         );
//     }
// }

// export default userFeed;