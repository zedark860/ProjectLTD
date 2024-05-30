const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = 4000;

app.use(express.static("public"));
app.use(express.static("views"));
app.use(express.static("js"));

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Servidor Node.js rodando na porta http://localhost:${PORT}`);
});

