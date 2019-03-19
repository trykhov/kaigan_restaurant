import React from 'react';
import style from '../css/menu.css';


class Menu extends React.Component {
  state = {
    first: true,
    second: false,
    menuItem: {
      "California Roll": {
        description: "A roll filled with imitation crab and fresh avocado",
        price: "$3.00"
      },
      "Godzilla Roll": {
        description: "A fiery roll deep fried and topped with Sricacha sauce and black unagi",
        price: "$7.00"
      },
      "Donburi": {
        description: "A rice bowl that consists of an omelette mixed with protein of your choice (chicken, beef, or tofu) and vegetables on top of rice",
        price: "$9.00"
      },
      "Ramen": {
        description: "A noodle soup made from chicken broth that consists of your choice of protein (chicken, beef or salmon) and vegetables",
        price: "$8.00"
      },
      "Bento Box": {
        description: "A classic Japanese entree with your choice of protein (chicken, beef or salmon) along with rice, salad, gyoza, and tempura",
        price: "$8.00"
      },
      "Sashimi": {
        description: "A traditional Japanese dish that comes with two pieces of our freshiest salmon",
        price: "$5.00"
      }
    }
  }


  printMenu = (menu) => {
    const menuKeys = Object.keys(menu)
    const menuItem = [];
    for(let i = 0; i < menuKeys.length; i++) {
      menuItem.push(
        <div className="menu-item" key={`${menuKeys[i]}`} style={{}}>
          <p className="name" style={{float: "left"}}> {`${menuKeys[i]}`} </p>
          <p className="price" style={{float: "right", position: "absolute", right: "0"}}> {`${menu[menuKeys[i]].price}`} </p>
          <span className="description"> {`${menu[menuKeys[i]].description}`} </span>
        </div>
      );
    }
    return menuItem;
  }

  // next page
  next = () => {
    this.setState({
      first: false,
      second: true})
  }

  // previous page
  previous = () => {
    this.setState({
      first: true,
      second: false
    });
  }



  render() {
    return(
      <div>
        <h2 style={{backgroundColor: "black", color: "white", padding: "10px 0"}}> Menu </h2>
        <div className="menu">
          {this.printMenu(this.state.menuItem)}
        </div>
      </div>
    );
  }
}

export default Menu;
