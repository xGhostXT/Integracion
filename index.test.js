const helloWorld = require("./index");

test("Debe devolver 'Hola, Mundo!'", () => {
    expect(helloWorld()).toBe("Hola, Mundo!");
});

