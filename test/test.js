let assert = require('assert'); // to use assert
describe("Basic math operations test suite", function () {
    it("testing add function", function () {
        let a = 1;
        let b = 2;
        let c = a + b;
        assert(c == 3, "addition is not working correctly!");
    });
    it("testing multiply function", function () {
        let a = 2;
        let b = 2;
        let c = a * b;
        assert(c == 4, "multiply is not working correctly!");
    });
});
