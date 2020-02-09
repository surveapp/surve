import React from "react";
import IndianServiceProp from "./Props/IndianServiceProp";
export default function IndianService({history}) {
    return (
        <IndianServiceProp history = {history} backTo = "back" photo = "Menu" service = "/Indian" menu = "/menu" shop = "Shop" shopNav = "/IndianShop"/>
    )};
