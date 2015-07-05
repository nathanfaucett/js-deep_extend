var assert = require("assert"),
    deepExtend = require("../src/index");


describe("deepExtend(out, ...objects)", function() {
    it("should deep extend out with objects members", function() {

        assert.deepEqual(deepExtend({
            name: "Bob",
            age: null,
            array: [],
            object: {
                foo: "bar"
            }
        }, {
            name: null,
            object: {
                bar: "foo"
            }
        }, {
            name: "Frank",
            age: 42,
            array: [1, 2]
        }), {
            name: "Frank",
            age: 42,
            array: [1, 2],
            object: {
                foo: "bar",
                bar: "foo"
            }
        });
    });
});
