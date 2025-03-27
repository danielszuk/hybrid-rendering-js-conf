import express from "express";
import { readFileAsString } from "./utils/read-file-as-string";
import ReactDOMServer from "react-dom/server";
import { render } from "./entry-server";

const port = 3000;

// Create express router
const router = express();

// GET /health
router.get("/health", (_req, res) => {
  res.status(200).send("OK");
});

// Static Assets
router.use(express.static("dist/client"));

// App
router.get("/", async (_req, res) => {
  const template = readFileAsString("dist/client/src/entry-client.html");
  const html = template.replace(
    "<!--content-html-->",
    ReactDOMServer.renderToString(render())
  );
  res.status(200).send(html);
});

// Start router
router.listen(port, () => {
  console.log(`Router listening on port ${port}`);
});
