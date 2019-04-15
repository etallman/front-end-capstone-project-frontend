import React, { Component } from "react";
import { Picture } from "../Picture/Picture"
import { connect } from "react-redux" 
import { setCurrentFlower } from "../../actions" //

class PictureList extends Component {
    render() {
        return (
            this.props.images.map(image =>(
               <Picture 
                key={image.name} 
                onClick={()=>this.props.setCurrentFlower(image)} 
                color={image.color} 
                name={image.name} 
                image={image.image}
                handleDragStart={this.props.handleDragStart} />
            ))
        );
    }
}
const mapDispatchToProps = {setCurrentFlower}

export default connect(
null, mapDispatchToProps
)(PictureList);