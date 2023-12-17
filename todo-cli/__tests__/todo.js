/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const todoList = require("../todo");
const { all, markAsComplete, add, dueToday, overdue, dueLater } = todoList();
describe("first test suites", () => {
  beforeAll(() => {
    const formattedDate = (d) => {
      return d.toISOString().split("T")[0];
    };
    var dateToday = new Date();
    const today = formattedDate(dateToday);
    const yesterday = formattedDate(
      new Date(new Date().setDate(dateToday.getDate() - 1)),
    );
    const tomorrow = formattedDate(
      new Date(new Date().setDate(dateToday.getDate() + 1)),
    );
    add({
      title: "First test case",
      completed: false,
      dueDate: yesterday,
    });
    add({
      title: "third test case",
      completed: false,
      dueDate: tomorrow,
    });
  });
  test("first test case", () => {
    expect(all.length).toBe(2);
    add({
      title: "second test case",
      completed: false,
      dueDate: new Date().toISOString().slice(0, 10),
    });
    expect(all.length).toBe(3);
  });
  test("second test", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);

    expect(all[0].completed).toBe(true);
  });
  test("due today", () => {
    expect(dueToday()).toStrictEqual([
      { completed: false, dueDate: "2023-12-17", title: "second test case" },
    ]);
  });
  test("over due", () => {
    expect(overdue()).toStrictEqual([
      { completed: true, dueDate: "2023-12-16", title: "First test case" },
    ]);
  });
  test("due later", () => {
    expect(dueLater()).toStrictEqual([
      { completed: false, dueDate: "2023-12-18", title: "third test case" },
    ]);
  });
});
