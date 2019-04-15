import React, { Component } from "react"
import { VeggieCards } from "../VeggieCards/VeggieCards"
import { connect } from "react-redux"
import { getVeggieData } from "../../actions/getVeggieData"

class VeggieSearch extends Component {
    state = { activeIndex: 0, filterveggies: this.props.veggies || [], value: "" };
    
    componentDidMount() {
        this.props.getVeggieData();
    }
    componentDidUpdate(prevProps) {
       
        if (this.props.veggies !== prevProps.veggies) {
            this.setState({ filterveggies: this.props.veggies });
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="filter-cards" >
                        <VeggieCards veggies={this.state.filterveggies} />
                        </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
    return { veggies: state.veggies.veggie, error: state.error };
};
const mapDispatchToProps = dispatch => {
    return { getVeggieData: () => dispatch(getVeggieData()) };
};
 export default connect(
   mapStateToProps,
    mapDispatchToProps
 )(VeggieSearch);