import {
  Card,
  CardHeader,
  Icon,
  List,
  StandardListItem,
  Text,
  Title,
} from "@ui5/webcomponents-react";
import {
  BarChart,
  ColumnChart,
  DonutChart,
} from "@ui5/webcomponents-react-charts";
import React from "react";
import "./App.css";

export default function Vendedores() {
  return (
    <div className="contenido">
      <div className="banner"></div>
      <div className="banner-titulo">
        <h1>Dashboard iCollect</h1>
      </div>
      <div className="cards">
        <Card
          style={{ width: "100%", padding: 10 }}
          header={<CardHeader titleText="Mis Servicios" />}
        >
          <div
            style={{
              width: "100%",
              height: 380,
              padding: 10,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Card
              style={{
                width: "28%",
                padding: 10,
                height: "50%",
              }}
            >
              <div className="content-card">
                <Title level="H4">Mi Carrera</Title>
                <p>Da un vistazo a tus avances</p>
                <Icon name="process" design="Information" />
              </div>
            </Card>
            <Card
              style={{
                width: "28%",
                padding: 10,
                height: "50%",
              }}
            >
              <div className="content-card">
                <Title level="H3">S/.10.000 de S/.20.000</Title>
                <p>Cantidad cobrada el dia de hoy</p>
                <Icon name="goal" design="Information" />
              </div>
            </Card>
            <Card
              style={{
                width: "28%",
                padding: 10,
                height: "50%",
              }}
            >
              <div className="content-card">
                <Title level="H3">180 de 350</Title>
                <p>Clientes visitados</p>
                <Icon name="company-view" design="Information" />
              </div>
            </Card>
            <Card
              style={{
                width: "28%",
                padding: 10,
                height: "50%",
              }}
            >
              <div className="content-card">
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Perfil de equipo
                </Text>
                <p>Perfil de empleados</p>
                <Icon name="personnel-view" design="Information" />
              </div>
            </Card>
            <Card
              style={{
                width: "28%",
                padding: 10,
                height: "50%",
              }}
            >
              <div className="content-card">
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Gestor de rendimiento
                </Text>
                <p>Accede al monitoreo de rendimiento</p>
                <Icon name="performance" design="Information" />
              </div>
            </Card>
            <Card
              style={{
                width: "28%",
                padding: 10,
                height: "50%",
              }}
            >
              <div className="content-card">
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Mis metas - Mobile
                </Text>
                <p>Da un vistazo a tus avances</p>
                <Icon name="goalseek" design="Information" />
              </div>
            </Card>
          </div>
        </Card>
        <Card
          style={{
            width: "40%",
            padding: 10,
          }}
          header={<CardHeader titleText="Lista de los mejores vendedores" />}
        >
          <List>
            <StandardListItem
              image="https://sap.github.io/ui5-webcomponents/main/assets/images/avatars/woman_avatar_5.png"
              description="Vendedor 1"
            >
              Luisa Perez
            </StandardListItem>
            <StandardListItem
              image="https://sap.github.io/ui5-webcomponents/main/assets/images/avatars/man_avatar_5.png"
              description="Vendedor 2"
            >
              Juan Castro
            </StandardListItem>
            <StandardListItem
              image="https://sap.github.io/ui5-webcomponents/main/assets/images/avatars/man_avatar_1.png"
              description="Vendedor 3"
            >
              Eduardo Paredes
            </StandardListItem>
            <StandardListItem
              image="https://sap.github.io/ui5-webcomponents/main/assets/images/avatars/woman_avatar_1.png"
              description="Vendedor 4"
            >
              Romina Salas
            </StandardListItem>
            <StandardListItem
              image="https://sap.github.io/ui5-webcomponents/main/assets/images/avatars/man_avatar_2.png"
              description="Vendedor 5"
            >
              Leonardo Sanchez
            </StandardListItem>
          </List>
        </Card>
      </div>
      <div className="cards">
        <Card
          style={{
            width: "33.3%",
            padding: 10,
          }}
          header={
            <CardHeader
              titleText="Meta de venta diaria"
              subtitleText="Jueves 9"
            />
          }
        >
          <BarChart
            dataset={[
              {
                name: "Meta de venta",
                dia: 5,
                meta: 30,
              },
            ]}
            dimensions={[
              {
                accessor: "name",
              },
            ]}
            measures={[
              {
                accessor: "dia",
                label: "Venta en el dia",
              },
              {
                accessor: "meta",
                label: "Meta de venta",
              },
            ]}
            onClick={function ka() {}}
            onDataPointClick={function ka() {}}
            onLegendClick={function ka() {}}
          />
        </Card>
        <Card
          style={{
            width: "33.3%",
            padding: 10,
          }}
          header={<CardHeader titleText="Mejores vendedor por trimestre" />}
        >
          <ColumnChart
            dataset={[
              {
                name: "Ene - Feb - Mar",
                caleb: 300,
                anthony: 100,
                andre: 756,
              },
              {
                name: "Abr - May - Jun",
                caleb: 330,
                anthony: 230,
                andre: 880,
              },
              {
                name: "Jul - Agos - Sept",
                caleb: 404,
                anthony: 240,
                andre: 700,
              },
              {
                name: "Oct - Nov - Dic",
                caleb: 80,
                anthony: 280,
                andre: 604,
              },
            ]}
            dimensions={[
              {
                accessor: "name",
              },
            ]}
            measures={[
              {
                accessor: "anthony",
                label: "Luisa",
              },
              {
                accessor: "caleb",
                label: "Juan",
              },
              {
                accessor: "andre",
                label: "Eduardo",
              },
            ]}
          />
        </Card>
        <Card
          style={{
            width: "33.3%",
            padding: 10,
          }}
          header={
            <CardHeader titleText="Cantidad de venta por medio de pago" />
          }
        >
          <DonutChart
            dataset={[
              {
                name: "Tarjeta",
                ventas: 300,
              },
              {
                name: "QR",
                ventas: 500,
              },
              {
                name: "Transferencia",
                ventas: 800,
              },
            ]}
            dimension={{
              accessor: "name",
            }}
            measure={{
              accessor: "ventas",
            }}
          />
        </Card>
      </div>
      <div className="cards"></div>
    </div>
  );
}
