import './index.css'
import Header from '../Header'
import Form from '../Form'
import TodoItem from '../TodoItem'

function Todo() {
  return (
    <div className='todo-wrapper'>
        <Header></Header>
        <div className="form-wrapper">
             <Form></Form>
             <TodoItem></TodoItem>
        </div>
    </div>
  )
}

export default Todo