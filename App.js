import React from 'react';
import Login from "./LogIn";
import Menu from "./Menu"
import ChickenMenu from "./Italian/ChickenMenu"
import ChickenService from "./Italian/ChickenService";
import ChickenShop from "./Italian/ChickenShop";
import MexicanMenu from "./Mexican/MexicanMenu";
import MexicanService from "./Mexican/MexicanService";
import MexicanShop from "./Mexican/MexicanShop";
import IndianMenu from "./Indian/IndianMenu";
import IndianService from "./Indian/IndianService";
import IndianShop from "./Indian/IndianShop";
import ChineseMenu from "./Chinese/ChineseMenu";
import ChineseService from "./Chinese/ChineseService";
import ChineseShop from "./Chinese/ChineseShop";
import {NativeRouter, Switch, Route} from 'react-router-native'
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
                <Route path="/Italian" component = {ChickenMenu}/>
                <Route path="/ItalianService" component = {ChickenService}/>
                <Route path="/ItalianShop" component = {ChickenShop}/>
                <Route path="/Mexican" component = {MexicanMenu}/>
                <Route path="/MexicanService" component = {MexicanService}/>
                <Route path="/MexicanShop" component = {MexicanShop}/>
                <Route path="/Chinese" component = {ChineseMenu}/>
                <Route path="/ChineseService" component = {ChineseService}/>
                <Route path="/ChineseShop" component = {ChineseShop}/>
                <Route path="/Indian" component = {IndianMenu}/>
                <Route path="/IndianService" component = {IndianService}/>
                <Route path="/IndianShop" component = {IndianShop}/>
            </Switch>
        </NativeRouter>
    )
}
