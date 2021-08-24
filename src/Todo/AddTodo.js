import React, {useState} from 'react'
import PropTypes from 'prop-types'

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState('')

    return {
        value,
        onChange: event => setValue(event.target.value)
    }
}

function AddTodo({onCreate}) {
    const input = useInputValue('')
    function SubmitHandler(event) {
        event.preventDefault()

        if (input.value.trim())
            onCreate(input.value)
        // setValue('')
    }

return (
    <form style={{marginBottom: '1rem'}} onSubmit={SubmitHandler}>
        <input {...input}/>
        <button type="submit">Добавить задачу</button>
    </form>
)
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo