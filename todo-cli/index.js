/* eslint-disable no-unused-vars */
const { connect } = require("./connectDB.js");
const Todo = require("./TodoModel.js");

const createTodo = async () => {
  try {
    await connect();
    const todo = await Todo.addTask({
      title: "Thrid item",
      dueDate: new Date(),
      completed: true,
    });
    console.log(`Created Todo with ID : ${todo.id}`);
  } catch (error) {
    console.error(error);
  }
};
const countItems = async () => {
  try {
    const totalCount = await Todo.count();
    console.log(`Found ${totalCount} items in the table`);
  } catch (error) {
    console.error(error);
  }
};
const getAllTodos = async () => {
  try {
    const todos = await Todo.findAll();
    const todoList = todos.map((todo) => todo.displayableString()).join("\n");
    console.log(todoList);
  } catch (error) {
    console.error(error);
  }
};
const getsingleTodo = async () => {
  try {
    const todo = await Todo.findOne({
      where: {
        completed: true,
        // dueDate: new Date()
      },
    });
    // const todoList = todos.map(todo => todo.displayableString()).join("\n");
    console.log(todo.displayableString());
  } catch (error) {
    console.error(error);
  }
};
const updateItem = async (id) => {
  try {
    await Todo.update(
      { completed: true },
      {
        where: {
          id: id,
        },
      },
    );
  } catch (error) {
    console.error(error);
  }
};
const deleteitem = async (id) => {
  try {
    await Todo.destroy({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.error(error);
  }
};
(async () => {
  // await createTodo();
  // await countItems();
  await getAllTodos();
  await updateItem(1);
  await deleteitem(1);
  await getAllTodos();
  // await getsingleTodo();
})();
