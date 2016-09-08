var tape = require("tape"),
    deepExtend = require("../src/index");


tape("should deep extend out with objects members", function(assert) {

    assert.deepEqual(deepExtend({
        name: "Bob",
        age: null,
        array: [3],
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
    assert.end();
});
