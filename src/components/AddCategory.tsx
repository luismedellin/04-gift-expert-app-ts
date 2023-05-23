import { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("One Punch");

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputValue);
  }

  return (
    <form onSubmit={event => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar gifs"
        onChange={(event) => onInputChange(event)}
      />
    </form>
  );
};
