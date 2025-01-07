import { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface FormTextBoxProps {
  register: UseFormRegisterReturn
  text?: string,
  onChange?: CallableFunction,
}

export function FormTextBox(props: FormTextBoxProps) {
  const [text, setText] = useState(props.text);
  return (
    <div>
      <label
        htmlFor="desc"
        className="text-neutral-700 text-sm "
      >Descrição:</label>

      <textarea
        {...props.register}
        style={{ resize: "none" }}
        rows={4}
        value={text}
        onChange={(evt) => {
          if (!!text) {
            setText(evt.target.value);
          }
        }}
        maxLength={150}
        id="desc"
        name="desc"
        className="
                block
                w-full
                outline-none 
                rounded-sm 
                py-3 px-2 
                border 
                bg-neutral-100 
                text-black
                
                md:text-sm 
                "
      ></textarea>
    </div>
  );
}