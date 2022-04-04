/*jshint esversion: 9 */
/* jslint node: true */
"use strict";

class TodoApp {
  constructor() {
    this.todoList = [];
  }
  add(item) {
    if (item.isPinned == true) {
      this.todoList.unshift(item);
    } else {
      this.todoList.push(item);
    }
  }
  remove(id) {
    for (let i = 0; i < this.todoList.length; i++) {
      if (this.todoList[i].id == id) {
        this.todoList.splice(this.todoList[i], 1);
      }
    }
  }
  clear() {
    this.todoList = [];
  }
}
class TodoItem {
  constructor({
    name,
    id,
    createdDate
  }) {
    this.name = name;
    this.id = id;
    this.createdDate = new Date();
  }
  updateName(name) {
    this.name = name;/*jshint esversion: 9 */
    /* jslint node: true */
    "use strict";
    
    class TodoApp {
      constructor() {
        this.todoList = [];
      }
      add(item) {
        if (item.isPinned == true){
          this.todoList.unshift(item);
        }else{
        this.todoList.push(item);
        }
      }
      remove(id) {
        for (let i = 0; i < this.todoList.length; i++) {
          if (this.todoList[i].id == id) {
            this.todoList.splice(this.todoList[i], 1);
          }
        }
      }
      clear() {
        this.todoList = [];
      }
    }
    class TodoItem {
      constructor({
        name,
        id,
        createdDate
      }) {
        this.name = name;
        this.id = id;
        this.createdDate = new Date();
      }
      updateName(name) {
        this.name = name;
      }
      generateId() {
        this.id = Math.floor(Math.random() * 10000);
      }
    }
    class PinnedTodoItem extends TodoItem {
      isPinned = true;
      
    }
    class ExpireTodoItem extends TodoItem {
      canExpire = true;
      constructor(obj, delay) {
        this.obj = obj;
        this.delay = delay;
        const now = new Date();
        this.expireTimeStamp = now.getTime() + 10000;
      }
      check(){
        if (new Date().getTime() >= this.expireTimeStamp){
          this.remove(this.obj.id);
        }
      }
    }
    
    const myApp = new TodoApp();
    const newItem = new TodoItem("wash my hands");
    newItem.updateName("To do my homework");
    newItem.generateId();
    const otherItem = new TodoItem({
      name: "brush my teeth",
      id: null,
      createdDate: null,
    });
    otherItem.generateId();
    myApp.add(newItem);
    myApp.add(otherItem);
    console.log(myApp);
    myApp.remove(newItem.id);
    console.log(myApp);
    
    
  }
  generateId() {
    this.id = Math.floor(Math.random() * 10000);
  }
}
class PinnedTodoItem extends TodoItem {
  isPinned = true;

}
class ExpireTodoItem extends TodoItem {
  canExpire = true;
  constructor(obj, delay) {
    this.obj = obj;
    this.delay = delay;
    const now = new Date();
    this.expireTimeStamp = now.getTime() + 10000;
  }
  check() {
    if (new Date().getTime() >= this.expireTimeStamp) {
      this.remove(this.obj.id);
    }
  }
}

const myApp = new TodoApp();
const newItem = new TodoItem("wash my hands");
newItem.updateName("To do my homework");
newItem.generateId();
const otherItem = new TodoItem({
  name: "brush my teeth",
  id: null,
  createdDate: null,
});
otherItem.generateId();
myApp.add(newItem);
myApp.add(otherItem);
console.log(myApp);
myApp.remove(newItem.id);
console.log(myApp);