// /*jshint esversion: 9 */
// /* jslint node: true */
// "use strict";

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
  constructor(
    name,
    id,
    createdDate,
  )
   {
      this.name = name || "To write todo name.";
      this.id = id || TodoItem.generateId();
      this.createdDate = createdDate || new Date();
      
   }
  updateName(name) {
    this.name = name;
  }
  static generateId() {
    this.id = Math.floor(Math.random() * 123123/2 + Math.random() * 123123/2);
    return this.id;
  }
}
class PinnedTodoItem extends TodoItem {
  constructor(...args){
    super(...args);
    this.isPinned = true;
  }

}
class ExpireTodoItem extends TodoItem {
  canExpire = true;
  
  constructor(obj, delay) {
    super();
    this.obj = obj;
    this.delay = delay;
    this.expireTimeStamp = this.createdDate.getTime() + this.delay;
    
    let interval = setInterval( () =>{
      if (new Date().getTime() >= this.expireTimeStamp){
        console.log(new Date());
        clearInterval(interval);
      }
    }, this.delay);
    
  }
  check() {
    if (new Date().getTime() >= this.expireTimeStamp) {
      this.remove(this.obj.id);
    }
  }
}

const myApp = new TodoApp();
const newTodoItem = new TodoItem({
name: "wake up",
id: TodoItem.generateId(),
createdDate: new Date(),
});
newTodoItem.updateName("to do my homework");

myApp.add(newTodoItem);

const otherItem = new TodoItem({
  itemName: "brush teeth",
  id: TodoItem.generateId(),
  createdDate: new Date(),
});

otherItem.updateName("do my homework");

const priorityItem = new PinnedTodoItem({
  name: "to study classes",
  id: TodoItem.generateId(),
  createdDate: new Date(),
});
const lessPriorityItem = new PinnedTodoItem({
  name: "To have a dinner",
  id: TodoItem.generateId(),
  createdDate: new Date(),
});

const expiredItem = new ExpireTodoItem(lessPriorityItem, 5000);

myApp.add(otherItem);
myApp.add(priorityItem);
myApp.add(lessPriorityItem);
myApp.add(expiredItem)
console.log(myApp.todoList);

myApp.remove(newTodoItem);