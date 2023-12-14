/* eslint-disable no-undef */

const todoList=require("../todo");
const {all,markAsComplete,add}=todoList();
describe("first test suites",() => {
    test("first test case",()=>{
        expect(all.length).toBe(0)
        add({
            title:"First test case",
            completed:false,
            dueDate: new Date().toISOString().slice(0,10)
        })
        expect(all.length).toBe(1)
    });
    test("second test",()=>{
        expect(all[0].completed).toBe(false)
        markAsComplete(0);
        expect(all[0].completed).toBe(true)
    });
});