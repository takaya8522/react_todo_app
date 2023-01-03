SAMPLE_TODOS = [
  {
    name: 'Going around the world',
  },
  {
    name: 'graduating from college'
  },
  {
    name: 'publishing a book',
  }
]

SAMPLE_TODOS.each do |todo|
  Todo.create(todo)
end