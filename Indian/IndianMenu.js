import React from "react";
import IndianMenuProp from "./Props/IndianMenuProp";
export default function IndianMenu({history}) {
    return (
        <IndianMenuProp history = {history} backTo = "back" photo = "Menu" service = "/IndianService" menu = "/menu" shop = "Shop" shopNav = "/IndianShop"/>
    );
}
