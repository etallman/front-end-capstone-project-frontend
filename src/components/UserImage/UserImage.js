 import React, { Component } from "react";
 import { connect } from "react-redux";
 import { Form, Button, Image, Input } from "semantic-ui-react";
 import { updateUserImage as uploadImage } from "../../actions";

 export class UserImage extends Component {
   state = {
     active: false,
     file: null
   };

   handleUploadImage = event => {
     event.preventDefault();
     const formData = new FormData(event.target);
     this.props.uploadImage(formData);
   };

   handleToggle = () => {
     this.setState(prevState => ({
       active: !prevState.active
     }));
   };

   render() {
     return (
       <div>
         <Form onSubmit={this.handleUploadImage}>
           <Image
             alt=""
             src={this.props.userimage}
             className="userImage"
           />
           <Input type="file" name="picture" required />
           <Button  type="submit" color="blue" size="small">
             Upload a Photo
           </Button>
         </Form>
       </div>
     );
   }
 }

 export default connect(
   ({ users, auth }) => ({
     //image: users.usersImages[auth.login.id],
    //userimage: users.usersImages[auth.login.id]
   }),
   { uploadImage }
 )(UserImage);