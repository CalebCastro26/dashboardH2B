import { TabContainer, Tab, Title } from "@ui5/webcomponents-react";
import React from "react";
import "./App.css";
import Clientes from "./Clientes";
import TablaCobros from "./TablaCobros";
import Tabla from "./TablaVentas";
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
        <Tab text="Historico">
          <Title level="H3" style={{ padding: 10 }}>
            Ventas Realizadas
          </Title>
          <Tabla />
          <br />
          <br />
          <br />
          <Title level="H3" style={{ padding: 10 }}>
            Cobros Realizados
          </Title>
          <TablaCobros />
        </Tab>
      </TabContainer>
    </div>
  );
}
