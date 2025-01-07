import { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps {
  register: UseFormRegisterReturn,
  id?: string,
  type?: string,
  inputStyle?: string,
  labelStyle?: string

  isValid?: boolean,
  errorMsg?: string,

  label?: string,
  placeholder?: string,
  value?: string,
  onChange?: CallableFunction,
}

export function FormInput(props: FormInputProps) {
  const [value, setValue] = useState(props.value);
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
        value={value}
        onChange={(evt) => {
          if (!!value) {
            setValue(evt.target.value);
          }
        }}
      />
      {
        !props.isValid ?
          <p className="text-xs text-left text-red-400">{props.errorMsg}</p>
          : <></>
      }
    </>
  );
}

