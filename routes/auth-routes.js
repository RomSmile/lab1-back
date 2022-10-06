const Router = require("express");
const axios = require("axios");

const router = Router();

router.get(
  "/path", async (req, res) => {
      try {
        const response = await axios.get(req.query.str)
        const html = await response.data;
        const splittedHtml = html.split('');
        res.status(200).json({ html: splittedHtml });
      } catch {
        res.status(404).send('Error');
      }
  }
);

module.exports = router;