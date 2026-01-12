let todos = ['Laundry', 'Dishes', 'Clean Desk', 'Sweep Floor'];

function markAsDone(todos) {
  for (let i = 0; i < todos.length; i++) {
    todos[i] = 'done - ' + todos[i];
  }
  return todos;
}

document.getElementById('result').innerHTML = markAsDone(todos).join(', ');

