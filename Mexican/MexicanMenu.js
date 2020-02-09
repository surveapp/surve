import React from "react";
import MexicanMenuProp from "./Props/MexicanMenuProp"
export default function ChickenMenu({history}) {
    return (
        <MexicanMenuProp history = {history} backTo = "back" photo = "Menu" service = "/MexicanService" menu = "/menu" shop = "Shop" shopNav = "/MexicanShop"/>
    );
}
