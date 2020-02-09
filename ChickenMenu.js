import React from "react";
import ChickenProp from "./ChickenProp"
export default function ChickenMenu({history}) {
    return (
      <ChickenProp history = {history} backTo = "bruh" photo = "bruh" service = "/chickenService" menu = "/menu" shop = "Shop" shopNav = "/shop"/>
    );
}
