const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const should = chai.should();
const server = require("../src/server");

chai.use(chaiHttp);

describe("Files API", () => {
    it("should get file list", (done) => {
        chai.request(server)
            .get("/files/list")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.file_list.should.be.an("array");
                res.body.file_list[0].should.be.a("string");
                done();
            });
    });

    it("should get files data", (done) => {
        chai.request(server)
            .get("/files/data")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.files.should.be.an("array");
                res.body.files[0].should.be.an("object");
                res.body.files[0].file.should.be.a("string");
                done();
            });
    });

    it("should get files filtered by name", (done) => {
        chai.request(server)
            .get("/files/data?fileName=test2.csv")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.files.should.be.an("array");
                res.body.files[0].should.be.an("object");
                res.body.files[0].file.should.be.a("string");
                done();
            });
    });
});
