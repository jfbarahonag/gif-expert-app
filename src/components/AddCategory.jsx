import { useState } from 'react';

export const AddCategory = () => {

  const [inputValue, setInputValue] = useState('');

  const onChange = e => {
    setInputValue(e.target.value);
  }

  const onSubmit = e => {
    e.preventDefault();
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
