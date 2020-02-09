import React, {Component} from 'react';
import ChickenShopProp from "./Props/ChickenShopProp";
export default function ChickenShop({history}) {
    return (
        <ChickenShopProp history = {history} backTo = "back" photo = "Shopping Cart" foodMenu = "/Italian" service = "/ItalianService" menu = "/menu" shop = "Shop"/>
        );
}
