 import { Component } from "react";
 import { CardsView } from './CardsView.jsx';
 import { ListView } from './ListView.jsx';
 import { IconSwitch } from './IconSwitch.jsx';

const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }];

export class Store extends Component {
    constructor() {
        super();
        this.state = { state: true };
        this.products = products;
        this.icon = 'view_module';
    }

    render() {
      return (
        <>
          <div className="toolbar">
            <IconSwitch
              icon = {this.icon}
              onSwitch={() => {this.setState({state: !this.state.state }); this.state.state ? this.icon  = 'view_list': this.icon = 'view_module'}}/>
          </div>
          {this.goodsHandler(this.state.state)}
        </>
      );
    }

    goodsHandler(stateState) {
      if (stateState) {
        return (<CardsView cards = {this.products} />);
      } else {
        return (<ListView items = {this.products} />);
      }
      
    }
  
}