import React from "react";
import MexicanServiceProps from "./Props/MexicanServiceProp";
export default function ChickenService({history}) {
    return (
        <MexicanServiceProps history = {history} backTo = "back" photo = "Service" service = "/Mexican" menu = "/menu" shop = "Shop" shopNav = "/MexicanShop"/>
    )};
