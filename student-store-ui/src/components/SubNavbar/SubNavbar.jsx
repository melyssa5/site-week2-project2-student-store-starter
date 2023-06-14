import * as React from "react";
import "./SubNavbar.css";
import {useState} from 'react'

export default function SubNavbar({items, setItems}) {
    const [active, setActive] = useState(true);

   
    //function that handles when the menu button is clicked, changing visibility of category menu
    function handleMenuButton(event){
        console.log(active)
        
        setActive(!active)
    }

    const categoryMenu = active? "category-menu open" : "category-menu closed"


    return (
        <nav className="sub-navbar">
            <div className="content">
                <div className="row">
                    <div className="search-bar">
                        <input type="text" name="search" placeholder="Search"/>
                        <i className="material-icons">search</i>
                    </div>
                    <div className="links">
                        <span className="help">
                            <i className="material-icons">help</i>
                            "Help"
                        </span>
                        <div className="cart">
                            <a href="/">
                                "My Cart"
                                <i className="material-ions">shopping_cart</i>
                            </a>

                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="hamburger-menu">
                        <i className="material-icons" onClick={handleMenuButton}>menu</i> </div>
                    <ul className={categoryMenu}>
                        <li className="is-active"><button>All Categories</button></li>
                        <li className=""><button>Clothing</button></li>
                        <li className=""><button>Food</button></li>
                        <li className=""><button> Accesories</button></li>
                        <li className=""><button>Tech</button></li>
                    </ul>
                </div>
            </div>

        </nav>
    );
}