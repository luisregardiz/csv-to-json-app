const csvJSON = (csvStr) => {
    const lines = csvStr.split("\n");
    let result = [];
    const headers = lines[0].split(",");

    for (let i = 1; i < lines.length; i++) {
        const currentLine = lines[i].split(",");
        let obj = {};
        let objNested = {};

        for (let j = 0; j < headers.length; j++) {
            if (headers[j] !== "file") {
                objNested[headers[j]] = currentLine[j] || null;
                obj["lines"] = [{ ...objNested }];
            } else {
                obj[headers[j]] = currentLine[j];
            }
        }

        result.push(obj);
    }

    return result;
};

module.exports = {
    csvJSON,
};
