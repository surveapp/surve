import React from "react";
import ChineseServiceProp from "./Props/ChineseServiceProp";
export default function ChineseService({history}) {
    return (
        <ChineseServiceProp history = {history} backTo = "back" photo = "Service" service = "/Chinese" menu = "/menu" shop = "Shop" shopNav = "/ChineseShop"/>
    )};
