interface FormInputProps {
  register: any,
  isValid: boolean,
  errorMsg: string,
  placeholder?: string,
  type?: string,
  backgroundStyle?: string,
}

export function FormInput(props: FormInputProps) {
  const bgStyle = props.backgroundStyle ?? "bg-accent-transparent light-placeholder";
  const inputStyle = `outline-none rounded-sm py-3 px-2 md:text-sm ${bgStyle}`
  const errorStyle = `${inputStyle} border border-red-600`

  return (
    <>
      <input
        className={props.isValid ? inputStyle : errorStyle}
        type={props.type ?? "text"}
        placeholder={props.placeholder}
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

