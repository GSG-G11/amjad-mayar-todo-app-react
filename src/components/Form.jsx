import './styles/Form.css';

function Form({handleToggle}){
    function handleSubmit(e) {
        e.preventDefault();
    }
    return(
        <div className="modal">
            <form onSubmit={handleSubmit}>
                <i className="fa fa-times" onClick={handleToggle}></i>
                <input type="text" className="nameInput" placeholder="Enter the task name" />
                <input type="text" className="descInput" placeholder="Enter the time you need" />
                <textarea  className="timeTextArea" placeholder="Enter the task description" />
                <button className="submitBtn"  onClick={handleToggle}>submit</button>
            </form>
        </div>
    )
}
export default Form;
