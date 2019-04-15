import React, { Component } from "react";
import { Tab, Select } from "semantic-ui-react";
import { connect } from "react-redux";
import { Input, Button, Dropdown, Form, Message } from "semantic-ui-react";
import { generalStyling, buttonStyling, tabStyling } from "./styles";
import { loadLayout } from "../../actions";
import { stateOptions } from "./constants";
class SubMenu extends Component {
    render() {
        const panes = [
            {
                menuItem: "Choose Flowers",
                render: () => (
                    <div
                        style={{
                            width: this.props.width + 25 + "px",
                            zIndex: "2000"
                        }}
                    >
                        <Form style={{ zIndex: "2000" }}>
                            <Tab.Pane style={tabStyling}>
                                <Dropdown
                                    onChange={this.props.chooseState}
                                    control={Select}
                                    style={generalStyling}
                                    placeholder="State"
                                    options={stateOptions}
                                />
                            </Tab.Pane>
                        </Form>
                    </div>
                )
            }
        ]
        return (
            <Tab
                menu={{ borderless: true, attached: false, tabular: false }}
                style={{ width: this.props.width + 25 + "px" }}
                panes={panes}
            />
        )
    }
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = {
    loadLayout
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubMenu)









