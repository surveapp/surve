import React, {Component} from 'react';
import MexicanShopProp from "./Props/MexicanShopProp";
export default function ChickenShop({history}) {
    return (
        <MexicanShopProp history = {history} backTo = "back" photo = "Shopping Cart" foodMenu = "/Mexican" service = "/MexicanService" menu = "/menu" shop = "Shop"/>
    );
}
