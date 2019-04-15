import React, { Component } from "react";
import {
    Form
    
} from "semantic-ui-react";
import { FlowerCards } from "../FlowerCards/FlowerCards";

import { connect } from "react-redux";
import { getFlowerData } from "../../actions/getFlowerData";


// const stateOptions = [
//   { text: "Alabama", key: "AL", value: "Alabama" },
//   { text: "Alaska", key: "AK", value: "Alaska" },
//   { text: "Arizona", key: "AZ", value: "Arizona" },
//   { text: "Arkansas", key: "AR", value: "Arkansas" },
//     { text: "California", key: "CA", value: "California"},
//   { text: "Colorado", key: "CO", value: "CO" },
//   { text: "Connecticut", key: "CT", value: "CT" },
//   { text: "Delaware", key: "DE", value: "DE" },
//   { text: "Florida", key: "FL", value: "FL" },
//   { text: "Georgia", key: "GA", value: "GA" },
//   { text: "Hawaii", key: "HI", value: "HI" },
//   { text: "Idaho", key: "ID", value: "ID" },
//   { text: "Illinois", key: "IL", value: "IL" },
//   { text: "Indiana", key: "IN", value: "IN" },
//   { text: "Iowa", key: "IA", value: "IA" },
//   { text: "Kansas", key: "KS", value: "KS" },
//   { text: "Kentucky", key: "KY", value: "KY" },
//   { text: "Louisiana", key: "LA", value: "LA" },
//   { text: "Maine", key: "ME", value: "ME" },
//   { text: "Maryland", key: "MD", value: "MD" },
//   { text: "Massachusetts", key: "MA", value: "MA" },
//   { text: "Michigan", key: "MI", value: "MI" },
//   { text: "Minnesota", key: "MN", value: "MN" },
//   { text: "Mississippi", key: "MS", value: "MS" },
//   { text: "Missouri", key: "MO", value: "MO" },
//   { text: "Montana", key: "MT", name: "MT", value: "MT" },
//   { text: "Nebraska", key: "NE", value: "NE" },
//   { text: "Nevada", key: "NV", value: "NV" },
//   { text: "New Hampshire", key: "NH", value: "NH" },
//   { text: "New Jersey", key: "NJ", value: "NJ" },
//   { text: "New Mexico", key: "NM", value: "NM" },
//   { text: "New York", key: "NY", value: "NY" },
//   { text: "North Carolina", key: "NC", value: "NC" },
//   { text: "North Dakota", key: "ND", value: "ND" },
//   { text: "Ohio", key: "OH", value: "OH" },
//   { text: "Oklahoma", key: "OK", value: "OK" },
//   { text: "Oregon", key: "OR", value: "OR" },
//   { text: "Pennsylvania", key: "PA", value: "PA" },
//   { text: "Rhode Island", key: "RI", value: "RI" },
//   { text: "South Carolina", key: "SC", value: "SC" },
//   { text: "South Dakota", key: "SD", value: "SD" },
//   { text: "Tennessee", key: "TN", value: "TN" },
//   { text: "Texas", key: "TX", value: "TX" },
//   { text: "Utah", key: "UT", value: "UT" },
//   { text: "Vermont", key: "VT", value: "VT" },
//   { text: "Virginia", key: "VA", value: "VA" },
//   { text: "Washington", key: "WA", value: "WA" },
//   { text: "West Virginia", key: "WV", value: "WV" },
//   { text: "Wisconsin", key: "WI", value: "WI" },
//   { text: "Wyoming", key: "WY", value: "WY" }
// ];

class FlowerSearch extends Component {
    state = { activeIndex: 0, filterflowers: this.props.flowers || [], value: "" };
    componentDidMount() {
        this.props.getFlowerData();
    }
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.flowers !== prevProps.flowers) {
            this.setState({ filterflowers: this.props.flowers });
        }
    }

    handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const { activeIndex } = this.state;
        const newIndex = activeIndex === index ? -1 : index;

        this.setState({ activeIndex: newIndex });
    };
    handleFilter = event => {
        const colorToFind = event.currentTarget.getElementsByTagName("input")[0]
            .value;
        const checked = event.currentTarget.getElementsByTagName("input")[0]
            .checked;
        if (checked !== true) {
            //filter
            this.filters.push(colorToFind);
            this.setState({
                filterflowers: this.filterColor(
                    this.filters,
                    this.filterState(this.state.value, this.props.flowers)
                )
            });
        } else {
            //unfilter
            this.filters.splice(
                this.filters.findIndex(color => color === colorToFind),
                1
            );
            this.setState({
                filterflowers: this.filterColor(
                    this.filters,
                    this.filterState(this.state.value, this.props.flowers)
                )
            });
        }
    };
    handleFilter2 = (event, { value }) => {
        this.setState({
            filterflowers: this.filterState(
                value,
                this.filterColor(this.filters, this.props.flowers)
            ),
            value
        });
    };

    filters = [];

    filterColor(filters, flowers) {
        if (filters.length === 0) return flowers;
        return flowers.filter(flower => {
            return filters.every(filterColor =>
                flower.color
                    .split(",")
                    .map(word => word.trim())
                    .includes(filterColor)
            );
        });
    }
    filterState(filter, flowers) {
        if (filter === "") return flowers;
        return flowers.filter(flower => {
            return flower.location
                .split(",")
                .map(word => word.trim())
                .includes(filter);
        });
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="filter-total">
                    <div className="filter-advanced">
                        
                                        <Form>
                            <Form.Group grouped style={{ display: "flex", flexWrap: "wrap" , marginLeft:"300px"}}>
                                                <Form.Checkbox
                                                    onChange={this.handleFilter}
                                                    label="Purple"
                                                    name="color"
                                                    value="purple"
                                                    style={{marginRight:"20px"}}
                                                />
                                                <Form.Checkbox
                                                    onChange={this.handleFilter}
                                                    label="Violet"
                                                    name="color"
                                                    value="violet"
                                                    style={{ marginRight: "20px" }}
                                                />
                                                <Form.Checkbox
                                                    onChange={this.handleFilter}
                                                    label="Blue"
                                                    name="color"
                                                    value="blue"
                                    style={{ marginRight: "20px" }}
                                                />
                                                <Form.Checkbox
                                                    onChange={this.handleFilter}
                                                    label="Green"
                                                    name="color"
                                                    value="green"
                                    style={{ marginRight: "20px" }}
                                                />
                                                <Form.Checkbox
                                                    onChange={this.handleFilter}
                                                    label="Brown"
                                                    name="color"
                                                    value="brown"
                                    style={{ marginRight: "20px" }}
                                                />
                                                <Form.Checkbox
                                                    onChange={this.handleFilter}
                                                    label="Orange"
                                                    name="color"
                                                    value="orange"
                                    style={{ marginRight: "20px" }}
                                                />
                                                <Form.Checkbox
                                                    onChange={this.handleFilter}
                                                    label="Pink"
                                                    name="color"
                                                    value="pink"
                                    style={{ marginRight: "20px" }}
                                                />
                                                <Form.Checkbox
                                                    onChange={this.handleFilter}
                                                    label="Red"
                                                    name="color"
                                                    value="red"
                                    style={{ marginRight: "20px" }}
                                                />
                            
                                                <Form.Checkbox
                                                    onChange={this.handleFilter}
                                                    label="White"
                                                    name="color"
                                                    value="white"
                                    style={{ marginRight: "20px" }}
                                                />
                                                <Form.Checkbox
                                                    onChange={this.handleFilter}
                                                    label="Yellow"
                                                    name="color"
                                                    value="yellow"
                                    style={{ marginRight: "20px" }}
                                                />
                                            </Form.Group>
                                            <hr />
                                        </Form>
                                    
                                
                            
                        
                        
                        
                    </div>
                    <div className="filter-cards" >
                        <FlowerCards flowers={this.state.filterflowers} />
                        {/* <ScrollUpButton
                            className="scroll"
                            style={{ border: "5px solid #6FB0CE" }}
                        /> */}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
    return { flowers: state.flowers.flower, error: state.error };
};
const mapDispatchToProps = dispatch => {
    return { getFlowerData: () => dispatch(getFlowerData()) };
};
 export default connect(
   mapStateToProps,
    mapDispatchToProps
 )(FlowerSearch);
