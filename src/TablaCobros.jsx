import {
  Label,
  Table,
  TableCell,
  TableColumn,
  TableRow,
} from "@ui5/webcomponents-react";
import React from "react";

export default function TablaCobros() {
  const ventas = [
    {
      id: 1,
      fecha: "10/03/2023",
      vendedor: "Luisa Perez",
      nroClientes: 10,
      ventasNetas: 16000,
    },
    {
      id: 1,
      fecha: "10/03/2023",
      vendedor: "Juan Castro",
      nroClientes: 20,
      ventasNetas: 15000,
    },
    {
      id: 1,
      fecha: "10/03/2023",
      vendedor: "Eduardo Paredes",
      nroClientes: 25,
      ventasNetas: 10000,
    },
    {
      id: 1,
      fecha: "10/03/2023",
      vendedor: "Romina Salas",
      nroClientes: 20,
      ventasNetas: 20000,
    },
    {
      id: 1,
      fecha: "10/03/2023",
      vendedor: "Leonardo Sanchez",
      nroClientes: 23,
      ventasNetas: 36000,
    },
  ];

  return (
    <Table
      columns={
        <>
          <TableColumn>
            <Label>Fecha</Label>
          </TableColumn>
          <TableColumn>
            <Label>Vendedor</Label>
          </TableColumn>
          <TableColumn>
            <Label>Nro. Clientes</Label>
          </TableColumn>
          <TableColumn>
            <Label>Cobros Realizados</Label>
          </TableColumn>
        </>
      }
    >
      {ventas.map((venta) => (
        <TableRow key={venta.id}>
          <TableCell>
            <Label>{venta.fecha}</Label>
          </TableCell>
          <TableCell>
            <Label>{venta.vendedor}</Label>
          </TableCell>
          <TableCell>
            <Label>{venta.nroClientes}</Label>
          </TableCell>
          <TableCell>
            <Label>S/. {venta.ventasNetas}</Label>
          </TableCell>
        </TableRow>
      ))}
    </Table>
  );
}
