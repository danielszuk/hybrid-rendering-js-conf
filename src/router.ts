import express from "express";
import { readFileAsString } from "./utils/read-file-as-string";

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
  const html = readFileAsString("dist/client/src/entry-client.html");
  res.status(200).send(html);
});

// Start router
router.listen(port, () => {
  console.log(`Router listening on port ${port}`);
});
