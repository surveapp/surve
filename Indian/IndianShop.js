import React, {Component} from 'react';
import IndianShopProp from "./Props/IndianShopProp";
export default function IndianShop({history}) {
    return (
        <IndianShopProp history = {history} backTo = "back" photo = "Menu" foodMenu = "/Indian" service = "/IndianService" menu = "/menu" shop = "Shop"/>
    );
}
