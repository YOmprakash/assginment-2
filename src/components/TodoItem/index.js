// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, onDeleteTodoItem} = props
  const {id, title} = todoDetails

  const deleteTodo = () => {
    onDeleteTodoItem(id)
  }
  return (
    <li className="list-item">
      <p className="title">{title}</p>
      <button className="button" type="button" onClick={deleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
