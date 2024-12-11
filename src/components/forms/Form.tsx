import { Children, MouseEventHandler, PropsWithChildren } from "react";
import { Button } from "../Button";

interface FormProps extends PropsWithChildren {
  onSubmit?: MouseEventHandler,
  buttonText: string,
  legend?: string,
  style?: string, 
}

export function Form(props: FormProps) {

  const formStyle = `
  mt-16 mb-4 
  px-2 py-4 
  w-full 
  bg-primary-transparent 
  text-white
  rounded-md 
  md:mt-8
  `

  return (
    <>
      <form className={formStyle + (props.style ?? "")} >
        <legend className="text-2xl">{props.legend}</legend>
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