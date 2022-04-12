/*jshint esversion: 9 */
/* jslint node: true */
"use strict";

class TodoApp {
  constructor() {
    this.todoList = [];
  }
  add(item) {
    if (item.isPinned == true) {
      if (this.todoList[0].isPinned == true) {
        this.todoList.splice(this.todoList.lastIndexOf(item.isPinned = true) - 1, 0, item);
      } else {
        this.todoList.unshift(item);
      }
    } else {
      this.todoList.push(item);
    }
  }

  remove(id) {
    for (let i = 0; i < this.todoList.length; i++) {
      if (this.todoList[i].id == id) {
        this.todoList.splice(this.todoList[i], 1);
        console.log(`item with id: ${id} removed.`);
      }
    }
  }
  clear() {
    this.todoList = [];
  }

}
class TodoItem {
  constructor(
    name,
    id,
    createdDate,
  ) {
    this.name = name || "To write todo name.";
    this.id = id || TodoItem.generateId();
    this.createdDate = createdDate || new Date();

  }
  updateName(name) {
    this.name = name;
  }
  static generateId() {
    this.id = Math.floor(Math.random() * 123123 / 2 + Math.random() * 123123 / 2);
    return this.id;
  }
}
class PinnedTodoItem extends TodoItem {
  constructor() {
    super();
    this.isPinned = true;
  }

}
class ExpireTodoItem extends TodoItem {
  canExpire = true;
  constructor(obj, delay) {
    super();
    this.name = obj.name;
    this.id = TodoItem.generateId();
    this.oldId = obj.id;
    this.createdDate = obj.createdDate;
    this.delay = delay;
    this.expireTimeStamp = this.createdDate.getTime() + this.delay;

    let interval = setInterval(() => {
      myApp.remove(this.oldId);
      if (new Date().getTime() >= this.expireTimeStamp && this instanceof ExpireTodoItem == true) {
        console.log("item with id: ", this.id, "will be deleted.");
        myApp.remove(this.id);
        clearInterval(interval);
      }
    }, this.delay);

  }
  check() {
    if (new Date().getTime() >= this.expireTimeStamp) {
      this.remove(this.id);
    }
  }
}

const myApp = new TodoApp();
let newTodoItem = new TodoItem({
  name: "wake up",
  id: TodoItem.generateId(),
  createdDate: new Date(),
});
newTodoItem.updateName("to do my homework");

myApp.add(newTodoItem);

let otherItem = new TodoItem({
  itemName: "brush teeth",
  id: TodoItem.generateId(),
  createdDate: new Date(),
});

otherItem.updateName("do my homework");

let priorityItem = new PinnedTodoItem({
  name: "to study classes",
  id: TodoItem.generateId(),
  createdDate: new Date(),
});
let lessPriorityItem = new PinnedTodoItem({
  name: "To have a dinner",
  id: TodoItem.generateId(),
  createdDate: new Date(),
});

let expiredItem = new ExpireTodoItem(lessPriorityItem, 5000);

myApp.add(otherItem);
myApp.add(priorityItem);
myApp.add(lessPriorityItem);
myApp.add(expiredItem);
console.log(myApp.todoList);
myApp.remove(newTodoItem);