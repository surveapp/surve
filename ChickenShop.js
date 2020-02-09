import React, {Component} from 'react';
import ChickenShopProp from "./ChickenShopProp";
import ServiceProps from "./ServiceProp";
export default function ChickenShop({history}) {
    return (
        <ChickenShopProp history = {history} backTo = "bruh" photo = "bruh" foodMenu = "/chicken" service = "/chickenService" menu = "/menu" shop = "Shop"/>
        );
}
