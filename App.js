import React from 'react';
import Login from "./LogIn";
import Menu from "./Menu"
import ChickenMenu from "./ChickenMenu"
import {NativeRouter, Switch, Route} from 'react-router-native'
import ChickenService from "./ChickenService";
import ChickenShop from "./ChickenShop";
import MenuFeatured from "./MenuFeatured";
import MenuTry from "./MenuTry";
export default function App() {
    return(
        <NativeRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/menu" component = {Menu}/>
                <Route path="/menuFeatured" component = {MenuFeatured}/>
                <Route path="/menuTry" component = {MenuTry}/>
                <Route path="/chicken" component = {ChickenMenu}/>
                <Route path="/chickenService" component = {ChickenService}/>
                <Route path="/shop" component = {ChickenShop}/>
            </Switch>
        </NativeRouter>
    )
}
