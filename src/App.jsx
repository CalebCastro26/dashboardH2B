import { TabContainer, Tab } from "@ui5/webcomponents-react";
import React from "react";
import "./App.css";
import Clientes from "./Clientes";
import Vendedores from "./Vendedores";

export default function App() {
  return (
    <div>
      <TabContainer>
        <Tab text="Vendedores">
          <Vendedores />
        </Tab>
        <Tab text="Clientes">
          <Clientes />
        </Tab>
        <Tab text="Tabla"></Tab>
      </TabContainer>
    </div>
  );
}
