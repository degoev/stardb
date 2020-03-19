import React, { Component } from "react";

import ItemList from "../item-list/item-list";
import ItemDetails from "../item-details/item-details";
import Row from "../row/row";

export default class ItemsPage extends Component {
    constructor(){
        super();
        this.state = {
            toggledItemId: null
        }
    }

    toggleItem = (toggledItemId) => {
        this.setState({toggledItemId})
    }

    render() {
        let { toggledItemId } = this.state;
        
        let itemList = <ItemList
            onToggleItem={this.toggleItem}
            getData={this.props.data.getData()} />;

        let itemDetails = <ItemDetails
            itemID={toggledItemId}
            cardData={this.props.data.cardData}
            getItem={this.props.data.getItem()}
            imgUrl={this.props.data.imgUrl}
            cardProps={this.props.data.cardProps} />;

        return (
            <Row left={itemList} right={itemDetails} />
        );
    }
};