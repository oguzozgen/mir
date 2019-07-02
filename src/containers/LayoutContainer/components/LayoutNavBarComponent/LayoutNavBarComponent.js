import React from 'react';
import {Link} from 'react-router-dom';
function LayoutNavBarComponent(){
    const menuToggleAct='MENU_TOGGLE';
    const actions=(state,action)=>{
        const actionList={
            [menuToggleAct]:()=>{
                console.log("clicked");
                toggleNavMenu(document.getElementById("navBurger"));
                toggleNavMenu(document.getElementById("navMenu"));

            },
            '':()=>{}
        };
        return actionList[action.act]();
    };
    const handleMenuBurgerClick=()=>{
        actions(this,{act:menuToggleAct});
    };
    const toggleNavMenu=(elementx)=>{
        if(elementx.classList.contains("is-active"))
        {
            elementx.classList.remove('is-active');
        }
        else{
            elementx.classList.add('is-active');
        }
    };




    return (
      <nav
        className={"navbar is-expanded is-fixed-top"}
        role={"navigation"}
        aria-label={"main navigation"}
      >
        <div class="navbar-brand">
            <Link className={"navbar-item"} to={"https://bulma.io"}>
            <img src="https://bulma.io/images/bulma-logo.png" 
            alt="Bulma: Free, open source, & modern CSS framework based on Flexbox" 
            width="75"/>
            </Link>
            <div role="button" className={"navbar-burger"} id={"navBurger"} 
            onClick={handleMenuBurgerClick} aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </div>
        </div>
        <div className={"navbar-menu"} id="navMenu">
          <div className={"navbar-start"}>

          </div>

          <div className={"navbar-end"}>
            <Link className={"navbar-item"} to={"/"}>
                 Home
            </Link>
            <Link className={"navbar-item"} to={"/"}>
                 Contacts
            </Link>
          </div>
        </div>
      </nav>
    );



}

export default LayoutNavBarComponent;