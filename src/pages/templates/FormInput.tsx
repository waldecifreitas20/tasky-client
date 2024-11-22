interface FormInputProps {
  placeholder: string,
  type: string,
  onChange?: CallableFunction,
}

export function FormInput(props: FormInputProps) {
  
  const onChangeValue = (evt: any) => {
    const newValue = evt.target.value;
    props.onChange!(newValue);
  }

  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={onChangeValue}
        className="
          outline-none 
          rounded-sm 
          bg-accent-transparent 
          light-placeholder 
          py-3 px-2 

          md:text-sm"
      />
    </>
  );
}