const express = require("express");
const { getFileData, getFileList } = require("../controllers/file.controller");
const router = express.Router();

router.get("/list", getFileList);
router.get("/data", getFileData);
module.exports = router;
