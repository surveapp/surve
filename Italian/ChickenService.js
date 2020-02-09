import React from "react";
import ServiceProps from "./Props/ServiceProp";
export default function ChickenService({history}) {
    return (
        <ServiceProps history = {history} backTo = "back" photo = "Service" service = "/Italian" menu = "/menu" shop = "Shop" shopNav = "/ItalianShop"/>
        )};
