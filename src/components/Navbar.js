import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";

export default class Navbar extends Component {
    state = { activeItem: "home" };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <Menu secondary>
                <Menu.Item
                    name="Home"
                    active={activeItem === "Home"}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name="About us"
                    active={activeItem === "About us"}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name="Contact"
                    active={activeItem === "Contact"}
                    onClick={this.handleItemClick}
                />
                <Menu.Menu position="right">
                    <Menu.Item
                        name="logout"
                        active={activeItem === "logout"}
                        onClick={this.handleItemClick}
                    />
                </Menu.Menu>
            </Menu>
        );
    }
}
