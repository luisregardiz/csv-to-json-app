const axios = require("axios");
const { csvJSON } = require("../utils/csvJSON");
const { URL, CONFIG } = require("../config/url");

const getFileList = async (req, res) => {
    const { data } = await axios.get(URL, CONFIG);
    const { files } = data;
    res.status(200).json({
        file_list: files,
    });
};

const getFileData = async (req, res) => {
    let files = [];

    const { data } = await axios.get(URL, CONFIG);
    for (let file of data.files) {
        try {
            const fileUrl = `https://echo-serv.tbxnet.com/v1/secret/file/${file}`;
            const { data } = await axios.get(fileUrl, CONFIG);
            files = [...files, ...csvJSON(data)];
        } catch (error) {
            console.log(error.message);
        }
    }

    if (req.query.fileName) {
        const filterByName = files.filter(
            (file) => file.file === req.query.fileName
        );
        res.status(200).json({
            files: filterByName,
        });
    } else {
        res.status(200).json({
            files,
        });
    }
};

module.exports = {
    getFileList,
    getFileData,
};
