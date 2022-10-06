const Router = require("express");
const axios = require("axios");

const router = Router();

router.get(
  "/path", async (req, res) => {
      try {
        let obj = {};
        const response = await axios.get(req.query.str)
        const html = await response.data;
        html.length = 8000;
        html.toLowerCase().split('').forEach((item) => {
          if (item in obj) {
            obj = { ...obj, [item]: obj[item] + 1 };
          } else {
            obj = { ...obj, [item]: 1 };
          }
        });

        Object.keys(obj).map(item => obj[item] /= html.length)

        res.status(200).json({ html: obj });
      } catch {
        res.status(404).send('Error');
      }
  }
);

module.exports = router;