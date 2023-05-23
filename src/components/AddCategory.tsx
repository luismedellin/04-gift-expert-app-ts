import { useState } from "react";

interface Props {
    setCategories: (value: string) => void;
}

export const AddCategory = ({setCategories}: Props) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;
    
    setCategories(inputValue);
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        onChange={(event) => onInputChange(event)}
      />
    </form>
  );
};
