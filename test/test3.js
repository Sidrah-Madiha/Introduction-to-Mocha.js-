let assert = require('assert'); // to use assert

describe("Basic math operations test suite part 3", function () {
    // Specify this test to only retry up to 2 times
    this.retries(2);
    it.only("testing add function", function () {
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

describe.only("Basic math operations 2 test suite part 3", function () {
    it("testing subtract function", function () {
        let a = 5;
        let b = 2;
        let c = a - b;
        assert(c == 3, "subtraction is not working correctly!");
    });
    it.skip("testing divison function", function () {
        let a = 2;
        let b = 2;
        let c = a / b;
        assert(c == 1, "division is not working correctly!");
    });

    it("testing remainder function");
});
describe.only("Basic math operations 2 test suite part 4", function () {
    this.timeout(200)
    it("testing subtract function with timeout", function (done) {
        this.retries(2)
        setTimeout(done, 1000) // this should fail
        let a = 5;
        let b = 5;
        let c = a - b;
        assert(c == 0, "subtraction is not working correctly because we set tiemout longer here then set in test suite!");
    });
    it.skip("testing divison function with timeout", function () {
        let a = 2;
        let b = 2;
        let c = a / b;
        assert(c == 1, "division is not working correctly!");
    });
});

describe.only("Basic math operations 2 test suite part 5", function () {

    it("testing subtract function with longer timeout", function (done) {

        setTimeout(done, 1000)
        let a = 5;
        let b = 5;
        let c = a - b;
        assert(c == 0, "subtraction is not working correctly in test suite!");
    });


});
