/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const todoList = () => {
  const time= async (ms)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve();
      },ms);
    });
  };
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
    res = []
    all.forEach(ele => {
      if (ele.dueDate ===yesterday) {
        res.push(ele)
      }
    });
    return res
    // Write the date check condition here and return the array
    // of overdue items accordingly.
  }

  const dueToday = () => {
    res = []
    all.forEach(ele => {
      if (ele.dueDate === today) {
        res.push(ele)
      }
    });
    return res
    // Write the date check condition here and return the array
    // of todo items that are due today accordingly.
  }
  const dueLater = () => {
    res = []
    all.forEach(ele => {
      if (ele.dueDate ===tomorrow) {
        res.push(ele)
      }
    });
    return res
    // Write the date check condition here and return the array
    // of todo items that are due later accordingly.
  }

  const toDisplayableList = (list)  => {
    let res = ""
    list.forEach(ele => {
      let elestr = ""
      let com = (ele.completed) ? "[x]" : "[ ]";
      let d = (ele.dueDate === today) ? "" : ele.dueDate;
      elestr= `${com} ${ele.title} ${d}`
      res=res+elestr
      res=res+"\n"
    });
    return res.slice(0,-1)
    // Format the To-Do list here, and return the output string
    // as per the format given above.
  }

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList
  };
};
module.exports=todoList;
// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

// const todos = todoList();

// const formattedDate = d => {
//   return d.toISOString().split("T")[0]
// }

// var dateToday = new Date()
// const today = formattedDate(dateToday)
// const yesterday = formattedDate(
//   new Date(new Date().setDate(dateToday.getDate() - 1))
// )
// const tomorrow = formattedDate(
//   new Date(new Date().setDate(dateToday.getDate() + 1))
// )

// todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
// todos.add({ title: 'Pay rent', dueDate: today, completed: true })
// todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
// todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
// todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

// console.log("My Todo-list\n")

// console.log("Overdue")
// var overdues = todos.overdue()
// var formattedOverdues = todos.toDisplayableList(overdues)
// console.log(formattedOverdues)
// console.log("\n")

// console.log("Due Today")
// let itemsDueToday = todos.dueToday()
// let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
// console.log(formattedItemsDueToday)
// console.log("\n")

// console.log("Due Later")
// let itemsDueLater = todos.dueLater()
// let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
// console.log(formattedItemsDueLater)
// console.log("\n")