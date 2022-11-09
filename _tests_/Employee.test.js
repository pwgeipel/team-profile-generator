const Employee = require('../lib/Employee')

// describe("Employee", () => {
//     describe("Initialization", () => {
//         it("should instantiate Employee"), () => {
//             const x = new Employee();
//             expect(typeof(x)).toBe("object");
//         }
//     })
// })

test("Should instantiate Employee at Employee", () => {
    const emp = new Employee;
    expect(typeof(emp)).toBe("object");
});