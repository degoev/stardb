import React, { Component } from "react";

import ItemList from "../item-list/item-list";
import ItemDetails from "../item-details/item-details";
import Row from "../row/row";
import withSwapiService from "../hoc-helpers/with-swapi-service";

class ItemsPage extends Component {
    constructor(){
        super();
        this.state = {
            toggledItemId: null
        }
    }
    componentDidMount(){
        console.log("mounted item page")
    }

    toggleItem = (toggledItemId) => {
        this.setState({toggledItemId})
    }

    render() {
        let { toggledItemId } = this.state;
        
        let itemList =  <ItemList
            onToggleItem={this.toggleItem} 
            {...this.props} />;

        let itemDetails = <ItemDetails
            itemID={toggledItemId}
            {...this.props} />;

        return (
            <Row left={itemList} right={itemDetails} />
        );
    }
};

export default withSwapiService(ItemsPage);