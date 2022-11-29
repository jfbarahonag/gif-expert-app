import { useState } from 'react';

export const AddCategory = ({ onAddCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const onChange = e => {
    setInputValue(e.target.value);
  }

  const onSubmit = e => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      onAddCategory(inputValue);
      setInputValue('')
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ onChange }
      />
    </form>
  )
}
