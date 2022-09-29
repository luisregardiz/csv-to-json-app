const express = require("express");
const filesRoutes = require("./file.route");
const router = express.Router();

router.get("/status", (req, res) => {
    res.status(200).json({
        status: "OK",
    });
});

router.use("/files", filesRoutes);

module.exports = router;
