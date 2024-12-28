interface FormInputProps {
  register: any,
  id?: string,
  isValid?: boolean,
  errorMsg?: string,
  placeholder?: string,
  type?: string,
  inputStyle?: string,
  label?: string,
  labelStyle?: string,
}

export function FormInput(props: FormInputProps) {
  const id = props.id ?? `input-${Math.random()}`;

  const bgStyle = props.inputStyle ?? "bg-accent-transparent light-placeholder";
  const inputStyle = `w-full outline-none rounded-sm py-3 px-2 md:text-sm ${bgStyle}`;
  const errorStyle = `${inputStyle} border border-red-600`;

  return (
    <>
      {
        props.label ?
          <label
            htmlFor={id}
            className={`block ${props.labelStyle ?? ""}`}
          >{props.label}</label>
          : <></>
      }
      <input
        id={id}
        className={props.isValid ? inputStyle : errorStyle}
        type={props.type ?? "text"}
        placeholder={props.placeholder ?? ""}
        {...props.register}
      />
      {
        !props.isValid ?
          <p className="text-xs text-left text-red-400">{props.errorMsg}</p>
          : <></>
      }
    </>
  );
}

