import {
  Label,
  Table,
  TableCell,
  TableColumn,
  TableRow,
} from "@ui5/webcomponents-react";
import React from "react";

export default function Tabla() {
  const ventas = [
    {
      id: 1,
      fecha: "10/03/2023",
      vendedor: "Luisa Perez",
      nroClientes: 50,
      ventasNetas: 200,
      totalVenta: 25000,
    },
    {
      id: 1,
      fecha: "10/03/2023",
      vendedor: "Juan Castro",
      nroClientes: 45,
      ventasNetas: 300,
      totalVenta: 30000,
    },
    {
      id: 1,
      fecha: "10/03/2023",
      vendedor: "Eduardo Paredes",
      nroClientes: 40,
      ventasNetas: 250,
      totalVenta: 15000,
    },
    {
      id: 1,
      fecha: "10/03/2023",
      vendedor: "Romina Salas",
      nroClientes: 60,
      ventasNetas: 500,
      totalVenta: 60000,
    },
    {
      id: 1,
      fecha: "10/03/2023",
      vendedor: "Leonardo Sanchez",
      nroClientes: 80,
      ventasNetas: 1000,
      totalVenta: 95000,
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
            <Label>Ventas Netas</Label>
          </TableColumn>
          <TableColumn>
            <Label>Total Ventas </Label>
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
            <Label>{venta.ventasNetas}</Label>
          </TableCell>
          <TableCell>
            <Label>S/. {venta.totalVenta}</Label>
          </TableCell>
        </TableRow>
      ))}
    </Table>
  );
}
