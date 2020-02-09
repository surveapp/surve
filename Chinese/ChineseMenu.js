import React from "react";
import ChineseMenuProp from "./Props/ChineseMenuProp";
export default function ChineseMenu({history}) {
    return (
        <ChineseMenuProp history = {history} backTo = "back" photo = "Menu" service = "/ChineseService" menu = "/menu" shop = "Shop" shopNav = "/ChineseShop"/>
    );
}
