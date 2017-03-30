const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {ObjectID} = require('mongodb');

var id='58db909844a22314d82a228';
if(!ObjectID.isValid(id)){
	console.log('Id not valid');
}
// Todo.find({
// 	_id:id
// }).then((todos)=>{
// 	console.log('Todos', todos);
// });
// Todo.find({_id:id}).then((todo)=>{
// 	console.log('Todo', todo);
// });

Todo.findById(id).then((todo)=>{
	if(!todo){
		return console.log('id not found');
	}
	console.log('Todo by id', todo);
}).catch((e)=>{
	console.log(e);
});