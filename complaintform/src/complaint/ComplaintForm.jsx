import React, { useState } from "react";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { classification, relationship } from "./text";
import { GoReport } from "react-icons/go";
// Complaint form with general fields to generate a report
const ComplaintForm = () => {
  const [clasificacion, setClasificacion] = useState("");
  const [victima, setVictima] = useState("");
  const [infractor, setInfractor] = useState("");
  const [puesto, setPuesto] = useState("");
  const [relacion, setRelacion] = useState("");
  const [response, setResponse] = useState("");
  // Prompt according to user story
  const prompt =
    "Genera una denuncia, donde se narran hechos de una conducta no ética de tipo: " +
    clasificacion +
    ", dentro de una empresa. La víctima es: " +
    victima +
    " y el infractor se llama: " +
    infractor +
    " y su relación con la víctima es: " +
    relacion +
    ". Escribe a detalle los hechos, el lugar, la fecha, medios de contacto con el denunciante y lo hagas como si el denunciante estuviera muy molesto y preocupado por lo que va denunciar, usa listas, párrafos y títulos para segmentar todo bien.";
  // Sending the prompt to the backend and obtaining a response from OpenAI
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.message))
      .finally(e.target.reset());
  };

  return (
    <>
      {/* Form with Material UI styles */}
      <Box
        component="form"
        autoComplete="off"
        sx={{
          "& .MuiTextField-root": {
            m: 1.2,
            width: "30%",
          },
          background: "#ffffffd9",
        }}
        onSubmit={handleSubmit}
      >
        <div>
          <TextField
            required
            id="standard-select-currency"
            select
            label="Clasificación"
            variant="standard"
            value={clasificacion}
            onChange={(e) => setClasificacion(e.target.value)}
          >
            <MenuItem disabled value="">
              <em>Selecciona una opción</em>
            </MenuItem>
            {classification.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            id="standard-basic"
            label="Nombre de la Víctima"
            variant="standard"
            onChange={(e) => setVictima(e.target.value)}
          />
          <TextField
            required
            id="standard-basic"
            label="Nombre del Infractor"
            variant="standard"
            onChange={(e) => setInfractor(e.target.value)}
          />
          <TextField
            required
            id="standard-basic"
            label="Puesto"
            variant="standard"
            onChange={(e) => setPuesto(e.target.value)}
          />
          <TextField
            required
            id="standard-select-currency"
            select
            label="Relación con la víctima"
            helperText=""
            variant="standard"
            value={relacion}
            onChange={(e) => setRelacion(e.target.value)}
          >
            <MenuItem disabled value="">
              <em>Selecciona una opción</em>
            </MenuItem>
            {relationship.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <Button
          type="submit"
          sx={{ m: 2 }}
          variant="contained"
          color="success"
          size="small"
          endIcon={<GoReport />}
        >
          Generar Reporte
        </Button>
      </Box>
      {response && (
        <Box
          sx={{
            background: "#d3d1d1d9",
            textAlign: "justify",
            padding: 5,
            margin: "5vh",
            borderRadius: "5px",
          }}
        >
          <Typography
            component="span"
            sx={{
              whiteSpace: "pre-line",
              fontFamily: "Courier Prime",
              fontSize: "1rem",
            }}
          >
            {response}
          </Typography>
        </Box>
      )}
    </>
  );
};

export default ComplaintForm;
