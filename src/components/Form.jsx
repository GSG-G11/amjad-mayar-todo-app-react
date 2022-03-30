import './styles/Form.css';

function Form({ handleToggle, addName, addDesc, addTime, handleSubmit, addId }) {
  return (
    <div className='modal'>
      <form onSubmit={handleSubmit}>
        <i className='fa fa-times' onClick={handleToggle}></i>
        <input
          type='text'
          className='nameInput'
          placeholder='Enter the task name'
          onChange={addName}
        />
        <input
          type='text'
          className='timeInput'
          placeholder='Enter the time you need'
          onChange={addTime}
        />
        <textarea
          className='descTextArea'
          placeholder='Enter the task description'
          onChange={addDesc}
        />
        <button
          className='submitBtn'
          onClick={(e) => {
            addId();
            handleSubmit(e);
          }}>
          submit
        </button>
      </form>
    </div>
  );
}
export default Form;
