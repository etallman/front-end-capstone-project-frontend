import React, { Component } from "react";
import { TreeCards } from "../TreeCards/TreeCards";
import { connect } from "react-redux";
import { getTreeData } from "../../actions/getTreeData";

class TreeSearch extends Component {
    state = { activeIndex: 0, filtertrees: this.props.trees || [], value: "" };
    componentDidMount() {
        this.props.getTreeData();
    }
    componentDidUpdate(prevProps) {

        if (this.props.trees !== prevProps.trees) {
            this.setState({ filtertrees: this.props.trees });
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="filter-cards" style={{ marginLeft: "150px" }}>
                <TreeCards trees={this.state.filtertrees} />
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
    return { trees: state.trees.tree, error: state.error };
};
const mapDispatchToProps = dispatch => {
    return { getTreeData: () => dispatch(getTreeData()) };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TreeSearch);