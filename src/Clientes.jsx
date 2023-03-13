import {
  Card,
  CardHeader,
  List,
  StandardListItem,
} from "@ui5/webcomponents-react";
import { LineChart } from "@ui5/webcomponents-react-charts";

export default function Clientes() {
  return (
    <div className="contenido">
      <div className="banner"></div>
      <div className="banner-titulo">
        <h1>Dashboard iCollect</h1>
      </div>
      <div className="cards">
        <Card
          style={{
            width: "33.3%",
            padding: 10,
          }}
          header={<CardHeader titleText="Mejores Clientes del mes" />}
        >
          <List>
            <StandardListItem
              image="https://sap.github.io/ui5-webcomponents/main/assets/images/avatars/woman_avatar_3.png"
              description="ABC SAC"
              additionalText="500 transacciones"
              additionalTextState="Success"
            >
              Luisa Perez
            </StandardListItem>
            <StandardListItem
              image="https://sap.github.io/ui5-webcomponents/main/assets/images/avatars/man_avatar_5.png"
              description="YZ INC"
              additionalText="300 transacciones"
              additionalTextState="Success"
            >
              Juan Castro
            </StandardListItem>
            <StandardListItem
              image="https://sap.github.io/ui5-webcomponents/main/assets/images/avatars/man_avatar_4.png"
              description="ING SA"
              additionalText="250 transacciones"
              additionalTextState="Success"
            >
              Eduardo Paredes
            </StandardListItem>
            <StandardListItem
              image="https://sap.github.io/ui5-webcomponents/main/assets/images/avatars/woman_avatar_4.png"
              description="Privada SAC"
              additionalText="125 transacciones"
              additionalTextState="Success"
            >
              Romina Salas
            </StandardListItem>
            <StandardListItem
              image="https://sap.github.io/ui5-webcomponents/main/assets/images/avatars/man_avatar_2.png"
              description="VENTAS sa"
              additionalText="100 transacciones"
              additionalTextState="Success"
            >
              Leonardo Sanchez
            </StandardListItem>
          </List>
        </Card>
        <Card
          style={{
            width: "33.3%",
            padding: 10,
          }}
          header={<CardHeader titleText="Deudas por cobrar" />}
        >
          <List>
            <StandardListItem
              image="https://sap.github.io/ui5-webcomponents/main/assets/images/avatars/man_avatar_5.png"
              description="YZ INC"
              additionalText="$ 3000"
              additionalTextState="Error"
            >
              Juan Castro
            </StandardListItem>
            <StandardListItem
              image="https://sap.github.io/ui5-webcomponents/main/assets/images/avatars/woman_avatar_3.png"
              description="ABC SAC"
              additionalText="S./ 5000"
              additionalTextState="Error"
            >
              Luisa Perez
            </StandardListItem>
            <StandardListItem
              image="https://sap.github.io/ui5-webcomponents/main/assets/images/avatars/man_avatar_2.png"
              description="VENTAS SA"
              additionalText="$ 1200"
              additionalTextState="Error"
            >
              Leonardo Sanchez
            </StandardListItem>
            <StandardListItem
              image="https://sap.github.io/ui5-webcomponents/main/assets/images/avatars/man_avatar_4.png"
              description="ING SA"
              additionalText="$ 1000"
              additionalTextState="Error"
            >
              Eduardo Paredes
            </StandardListItem>
            <StandardListItem
              image="https://sap.github.io/ui5-webcomponents/main/assets/images/avatars/woman_avatar_4.png"
              description="Privada SAC"
              additionalText="S/. 1200"
              additionalTextState="Error"
            >
              Romina Salas
            </StandardListItem>
          </List>
        </Card>
        <Card
          style={{
            width: "33.3%",
            padding: 10,
          }}
          header={<CardHeader titleText="Productos mas comprados" />}
        >
          <LineChart
            dataset={[
              {
                name: "January",
                sessions: 300,
                users: 100,
                volume: 756,
              },
              {
                name: "February",
                sessions: 330,
                users: 230,
                volume: 880,
              },
              {
                name: "March",
                sessions: 404,
                users: 240,
                volume: 700,
              },
              {
                name: "April",
                sessions: 80,
                users: 280,
                volume: 604,
              },
              {
                name: "May",
                sessions: 300,
                users: 100,
                volume: 756,
              },
              {
                name: "June",
                sessions: 330,
                users: 230,
                volume: 880,
              },
              {
                name: "July",
                sessions: 470,
                users: 20,
                volume: 450,
              },
              {
                name: "August",
                sessions: 180,
                users: 220,
                volume: 104,
              },
              {
                name: "September",
                sessions: 360,
                users: 200,
                volume: 879,
              },
              {
                name: "October",
                sessions: 500,
                users: 250,
                volume: 200,
              },
              {
                name: "November",
                sessions: 404,
                users: 240,
                volume: 700,
              },
              {
                name: "December",
                sessions: 80,
                users: 280,
                volume: 604,
              },
            ]}
            dimensions={[
              {
                accessor: "name",
                formatter: function ka() {},
                interval: 0,
              },
            ]}
            measures={[
              {
                accessor: "users",
                label: "Lacteos",
                hideDataLabel: true,
              },
              {
                accessor: "sessions",
                hideDataLabel: true,
                label: "Abarrotes",
              },
              {
                accessor: "volume",
                label: "Gaseosas",
                hideDataLabel: true,
              },
            ]}
          />
        </Card>
      </div>
    </div>
  );
}
