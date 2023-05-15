// Complaints module for lack of professional ethics
import React from "react";
import { Box } from "@mui/material";
import ComplaintForm from "./ComplaintForm";
import "./complaint.css";
import { TiWarning } from "react-icons/ti";

const Complaint = () => {
  return (
    <div className="complaint">
      <Box sx={{ background: "#5c5959", minHeight: "100vh" }}>
        <h1 className="title">
          Módulo de Denuncias &nbsp;
          <TiWarning
            style={{
              color: "#f9f900",
              margin: "auto",
              verticalAlign: "middle",
            }}
          />
        </h1>
        <p className="subtitle">
          El ejercicio de la ética profesional conlleva el cumplimiento de la
          vocación, principios, valores y convicciones mostrado en la coherencia
          de las ideas y acciones de cada sujeto, lo cual va más allá de las
          aptitudes y conocimientos adquiridos a lo largo del desarrollo
          académico. La falta de la misma podría generar desconfianza,
          incredibilidad e incluso la pérdida de su permanencia. Con la ética
          profesional se procuran, no solo los beneficios individuales, sino
          también el bien común. Incumplir con las reglas de manera deliberada,
          puede resultar en sanciones dentro de la empresa, ser penados por la
          ley o incluso poner en peligro la cédula profesional.
        </p>
        <p className="indication">
          Si has sido victima de abuso o sabes de algún incumplimiento respecto
          a la ética profesional puedes levantar tu denuncia en el siguiente
          formulario y te ayudaremos a redactar el reporte correspondiente:
        </p>
        <fieldset>
          <ComplaintForm />
        </fieldset>
      </Box>
    </div>
  );
};

export default Complaint;
