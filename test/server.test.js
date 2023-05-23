const test = require("node:test");
const assert = require("node:assert");

const { request } = require("./helpers.js");

test("/ route returns html response", async () => {
    const { status, body } = await request("/");
    assert.equal(status, 200);
    assert.match(body, /<html>/i);
});