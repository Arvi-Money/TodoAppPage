import './index.css'

function TodoItem() {
  return (
    <div className='item-wrapper'>
        <div className="check-name">
            <input type="checkbox" />
            <p>Read a book</p>
        </div>
        <div className="actions">
        <i class="fa-regular fa-pen-to-square"></i>
        <i class="fa-solid fa-trash-can"></i>
        </div>
    </div>
  )
}

export default TodoItem