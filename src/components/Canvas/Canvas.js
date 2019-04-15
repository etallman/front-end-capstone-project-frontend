import React, { Component } from "react"
import { Grid } from "../Grid/Grid"
import { OverlayTrigger } from "react-bootstrap"
import { Button } from "semantic-ui-react"
import { toolTip } from "../ToolTip/ToolTip"
import { connect } from "react-redux"
import MainMenu from "../MainMenu/MainMenu"
import SideInfo from "../SideInfo/SideInfo"
import PlantDisplayBar from "../PlantDisplayBar/PlantDisplayBar"
import {
  initGrid,
  expandGrid,
  subtractGrid,
  dropPlant,
  removePlant,
  saveLayout,
  filterFlowers,
  filterVeggies,
  patchLayout,
  getFlowerData,
  getVeggieData,
  getTreeData,
  getShrubData
} from "../../actions"

const categories = ["flowers", "veggies", "trees", "shrubs"]

class Canvas extends Component {
  state = {
    prevElement: null,
    name: "",
    value: "",
    selectedState: "all",
    selectedCategory: "Flowers"
  }

  componentWillMount() {
    this.props.getFlowerData()
    this.props.getVeggieData()
    this.props.getTreeData()
    this.props.getShrubData()
  }
  componentDidMount() {
    this.setState((state, props) => ({
      filterflowers: props.flowers
    }))
  }

  contextMenu = e => {
    e.preventDefault()
    if (e.target.id === "rows" || e.target.id === "col") {
      this.props.subtractGrid(e.target.id)
    } else {
      this.props.removePlant(e.target.dataset.i, e.target.dataset.j)
    }
  }

  handlePrint = e => {
    window.print()
  }



  handleTabClicked = e => {
    
    if(e.target.innerHTML !== "") {
      this.setState({ ...this.state, selectedCategory: e.target.innerHTML })
    }
  }

  handleFilter = e => {
    let value = e.target.textContent
    if (this.state.selectedCategory === "Flowers") {
      if (value !== "All States") {
        this.props.filterFlowers(
          this.filterState(value, [...this.props.flowers])
        )
        this.setState({
          ...this.state,
          selectedState: null,
          selectedCategory: this.state.selectedCategory
        })
      } else
        this.setState({
          ...this.state,
          selectedState: "all",
          selectedCategory: this.state.selectedCategory
        })
    }
  }

  filterState(stateValue, flowers) {
    if (stateValue === "") return flowers
    else {
      let filteredFlowers = flowers.filter(flower => {
        return flower.states
          .split(",")
          .map(word => word.trim())
          .includes(stateValue)
      })
      return filteredFlowers
    }
  }

  handleDragOver = e => {
    e.preventDefault()
    if (
      e.target.dataset.i !== this.state.targetRow ||
      e.target.dataset.j !== this.state.targetCol
    ) {
      this.setState({
        ...this.state,
        targetRow: e.target.dataset.i,
        targetCol: e.target.dataset.j
      })
    }
  }

  handleDragStart = event => {
    if (event.target.id !== "static") {
      event.target.style.opacity = 0.3
      this.setState({
        ...this.state,
        originRow: event.target.dataset.i,
        originCol: event.target.dataset.j,
        prevElement: event.target
      })
    }
    event.target.dataset.name &&
      event.dataTransfer.setData("name", event.target.dataset.name)
    event.dataTransfer.setDragImage(event.target, 50, 50)
  }

  handleDrop = e => {
    e.preventDefault()
    let name = e.dataTransfer.getData("name").toLowerCase()
    if (name) {
      let plantImage
      categories.forEach(plant => {
        if (this.state.selectedCategory.toLowerCase() === plant) {
          plantImage = this.props[plant].find(
            plant => plant.name.toLowerCase() === name
          )
          if (plantImage !== undefined) {
            this.props.dropPlant(
              this.state.targetRow,
              this.state.targetCol,
              plantImage.image
            )
          }
        }
      })
    } else {
      this.props.dropPlant(
        this.state.targetRow,
        this.state.targetCol,
        this.props.grid[this.state.originRow][this.state.originCol].pictureLink
      )
      let stateCopy = this.state.prevElement
      if (this.state.prevElement !== null) {
        this.props.removePlant(this.state.originRow, this.state.originCol)
        stateCopy.style.opacity = 1.0
      }
      
    }
    this.setState({
      ...this.state,
      originRow: null,
      originCol: null,
      targetRow: null,
      targetCol: null,
      prevElement: null
    })
  }

  render() {
    const { grid } = this.props
    const store = []

    for (let i = 0; i < grid.length; i++) {
      let row = []
      for (let j = 0; j < grid[0].length; j++) {
        row.push(
          <Grid
            key={i + "," + j}
            i={i}
            j={j}
            image={grid[i][j].pictureLink}
            handleDragStart={this.handleDragStart}
            onContextMenu={this.contextMenu}
          />
        )
      }
      store.push(row)
    }

    return (
      <div>
        <MainMenu
          width={this.props.width}
          chooseState={this.handleFilter}
          grid={this.props.grid}
          selectedCategory={this.state.selectedCategory}
        />

        <br />
        <PlantDisplayBar
          selectedState={this.state.selectedState}
          handleDragStart={this.handleDragStart}
          handleTabClicked={this.handleTabClicked}
        />
        <div style={{ display: "block" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center"
            }}
          >
            <div style={{}}>
              <SideInfo />
              <div style={{ textAlign: "center" }}>
                <br />
                <br />
                <Button basic color='green' target="_blank" onClick={this.handlePrint}>
                  Click to print your awesome creation </Button>
              </div>
            </div>

            <div style={{ width: this.props.width + 25 + "px" }}>
              <div
                style={{
                  width: this.props.width + "px",
                  borderStyle: "hidden",
                  textAlign: "center",
                  margin: "25px 0px 10px 0px"
                }}
              >
                <h2 style={{lineHeight:"0px"}}>
                  {this.props.title !== null ? this.props.title:"Untitled"}
                  
                  </h2>
                  <span style={{lineHeight:"0em", fontSize:"15px"}}>
                  {"Size: " + this.props.numRows + "ft. x " + this.props.numCols + "ft."}
                  </span>
              </div>
              <div style={{ display: "flex" }}>
                <div
                  onDragOverCapture={this.handleDragOver}
                  onDrop={this.handleDrop}
                  style={{
                    display: "flex",
                    width: this.props.width + "px",
                    flexWrap: "wrap",
                    margin: "0px"
                  }}
                  onContextMenu={this.contextMenu}
                >
                  {store}
                </div>
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={toolTip}
                >
                  <Button
                    id="col"
                    onClick={e => this.props.expandGrid(e.target.id)}
                    onContextMenu={this.contextMenu}
                    style={{ width: "25px", margin: "0px", padding: "0px" }}
                  >
                    <div
                      id="col"
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginRight: "3px"
                      }}
                    >
                      <i id="col" className="fas fa-chevron-right" />
                    </div>
                  </Button>
                </OverlayTrigger>
              </div>
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={toolTip}
              >
                <Button
                  id="rows"
                  onClick={e => this.props.expandGrid(e.target.id)}
                  onContextMenu={this.contextMenu}
                  style={{
                    height: "25px",
                    margin: "0px",
                    width: this.props.width + "px"
                  }}
                >
                  <div
                    id="rows"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "initial"
                    }}
                  >
                    <i id="rows" className="fas fa-chevron-down" />
                  </div>
                </Button>
              </OverlayTrigger>
              


            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    grid: state.grid.grid,
    width: state.grid.canvasWidth,
    id: state.grid.id,
    flowers: state.flowers.flower,
    veggies: state.veggies.veggie,
    trees: state.trees.tree,
    shrubs: state.shrubs.shrub,
    filteredFlowers: state.flowers.filteredFlowers,
    error: state.error,
    saveMessage: state.grid.saveMessage,
    errorMessage: state.grid.errorMessage,
    userLayouts: state.grid.userLayouts,
    userHasLayouts: state.grid.userHasLayouts,
    title: state.grid.name,
    numRows: state.grid.numRows,
    numCols: state.grid.numCols
  }
}

const mapDispatchToProps = {
  initGrid,
  expandGrid,
  subtractGrid,
  dropPlant,
  removePlant,
  getFlowerData,
  getVeggieData,
  saveLayout,
  filterFlowers,
  filterVeggies,
  patchLayout,
  getTreeData,
  getShrubData
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas)
