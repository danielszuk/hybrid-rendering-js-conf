import express from "express";

const port = 3000;

// Create express router
const router = express();

// GET /health
router.get("/health", (_req, res) => {
  res.status(200).send("OK");
});

// Static Assets
router.use(express.static("dist/client"));

// Start router
router.listen(port, () => {
  console.log(`Router listening on port ${port}`);
});
