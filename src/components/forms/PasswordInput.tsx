import { useState } from "react";

interface PasswordInputProps {
  register: any,
  isValid: boolean,
  errorMsg: string,
  placeholder: string,
}


export function PasswordInput(props: PasswordInputProps) {
  const [isShowing, setView] = useState(false);

  const inputStyle = ` rounded-sm bg-accent-transparent light-placeholder md:text-sm`
  const errorStyle = `${inputStyle} border border-red-600`

  const toggleView = () => {
    setView(!isShowing);
  }

  return (
    <>
      <div className={`flex ${!props.isValid ? inputStyle : errorStyle}`}>
        <input
          className={"light-placeholder bg-transparent w-full p-0 outline-none py-3 px-2"}
          type={isShowing ? "text" : "password"}
          placeholder={props.placeholder}
          {...props.register}
        />
        <button
          type="button"
          className="w-12 opacity-80 hover:opacity-100"
          onClick={() => {
            toggleView();
          }}
        >
          <i className="fa-regular fa-eye"></i>
        </button>
      </div>
      {
        props.isValid ?
          <p className="text-xs text-left text-red-400">{props.errorMsg}</p>
          : <></>
      }
    </>
  );
}
