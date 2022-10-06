const Router = require("express");
const axios = require("axios");

const router = Router();

router.get(
  "/path", async (req, res) => {
      try {
        const response = await axios.get(req.query.str)
        const html = await response.data;
        res.status(200).send(html);
      } catch {
        res.status(404).send('Error');
      }
  }
);

module.exports = router;