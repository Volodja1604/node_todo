const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {ObjectID} = require('mongodb');
const {user}=require('./../server/models/user');
// Todo.remove({}).then((res)=>{
// 	console.log(res);
// });
Todo.findByIdAndRemove('58dff0a49e4357b15b3790f5').then((todo)=>{
console.log(todo);
})