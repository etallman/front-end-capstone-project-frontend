import React, { Component } from "react";
import { ShrubCards } from "../ShrubCards/ShrubCards";
import { connect } from "react-redux";
import { getShrubData } from "../../actions/getShrubData";

class ShrubSearch extends Component {
    state = { activeIndex: 0, filtershrubs: this.props.shrubs || [], value: "" };
    componentDidMount() {
        this.props.getShrubData();
    }
    componentDidUpdate(prevProps) {

        if (this.props.shrubs !== prevProps.shrubs) {
            this.setState({ filtershrubs: this.props.shrubs });
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="filter-cards" style={{ marginLeft: "150px" }}>
                <ShrubCards shrubs={this.state.filtershrubs} />
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
    return { shrubs: state.shrubs.shrub, error: state.error };
};
const mapDispatchToProps = dispatch => {
    return { getShrubData: () => dispatch(getShrubData()) };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShrubSearch);