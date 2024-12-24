import { Children, MouseEventHandler, PropsWithChildren } from "react";
import { Button } from "../Button";

export interface FormProps extends PropsWithChildren {
  onSubmit?: MouseEventHandler,
  buttonText: string,
  legend?: string,
  legendStyle?: string,
  style?: string,
}

export function Form(props: FormProps) {

  const formStyle = ` 
  w-full 
  text-white
  rounded-md 
  `

  return (
    <>
      <form className={formStyle + (props.style ?? "")} >
        
        <legend className={`text-2xl ${props.legendStyle ?? ""}`}>{props.legend}</legend>
        
        <div className="my-10 gap-2 flex flex-col text-white">
          {Children.map(props.children, (child) => {
            return child;
          })}
        </div>

        <Button
          onClick={props.onSubmit}
          isSubmit
          style="w-full py-3 font-normal md:text-sm"
        >{props.buttonText}</Button>
      </form>
    </>
  );
}