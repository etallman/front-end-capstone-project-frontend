import React, { Component } from "react"
import PictureList from "../PictureList/PictureList"
import { Tab } from "semantic-ui-react"
import { connect } from "react-redux"
import { basicStyling } from "./styles"

class PlantDisplayBar extends Component {

  render() {
    const panes = [
      {
        menuItem: "Flowers",
        render: () => (
          <div
            style={{
              ...basicStyling, 
            }}
          >
            <PictureList
              images={
                this.props.selectedState === "all"
                  ? this.props.flowers
                  : this.props.filteredFlowers
              }
              handleDragStart={this.props.handleDragStart}
            />
          </div>
        )
      },
      {
        menuItem: "Veggies",
        render: () => (
          <div
            style={basicStyling}
          >
            <PictureList
              images={this.props.veggies}
              handleDragStart={this.props.handleDragStart}
            />
          </div>
        )
      },
      {
        menuItem: "Trees",
        render: () => (
          <div
            style={basicStyling}
          >
            <PictureList
              images={this.props.trees}
              handleDragStart={this.props.handleDragStart}
            />
          </div>
        )
      },
      {
        menuItem: "Shrubs",
        render: () => (
          <div
            style={basicStyling}
          >
            <PictureList
              images={this.props.shrubs}
              handleDragStart={this.props.handleDragStart}
            />
          </div>
        )
      }
    ]
    return (
      <Tab
        menu={{ borderless: false, attached: true, tabular: false } }
        style={{ width: this.props.width + 25 + "px" }}
        panes={panes}
        onClick={this.props.handleTabClicked}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    flowers: state.flowers.flower,
    filteredFlowers: state.flowers.filteredFlowers,
    veggies: state.veggies.veggie,
    trees: state.trees.tree,
    shrubs: state.shrubs.shrub
  }
}

const mapDispatchToProps = {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlantDisplayBar)