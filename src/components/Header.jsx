import './styles/Header.css';

function Header({handleToggle}){
    return (
        <header>
            <i class="fa fa-notes"></i>
            <h1>Todo List</h1>
            <button className="createTask" 
            onClick={(e)=>handleToggle(e)}>Create Task</button>
        </header>
    )
}
export default Header;