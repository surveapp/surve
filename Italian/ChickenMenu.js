import React from "react";
import ChickenProp from "./Props/ChickenProp"
export default function ChickenMenu({history}) {
    return (
      <ChickenProp history = {history} backTo = "back" photo = "Menu" service = "/ItalianService" menu = "/menu" shop = "Shop" shopNav = "/ItalianShop"/>
    );
}
