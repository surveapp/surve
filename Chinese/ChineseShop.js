import React, {Component} from 'react';
import ChineseShopProp from "./Props/ChineseShopProp";
export default function ChineseShop({history}) {
    return (
        <ChineseShopProp history = {history} backTo = "back" photo = "Shopping Cart" foodMenu = "/Chinese" service = "/ChineseService" menu = "/menu" shop = "Shop"/>
    );
}
