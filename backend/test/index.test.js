const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const should = chai.should();
const server = require("../src/server");

chai.use(chaiHttp);

describe("API Status Server", () => {
    it("should get an OK", (done) => {
        chai.request(server)
            .get("/status")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an("object");
                const actualValue = res.body.status;
                expect(actualValue).to.be.equal("OK");
                done();
            });
    });
});
