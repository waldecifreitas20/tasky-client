import { Children, MouseEventHandler, PropsWithChildren } from "react";
import { Form } from "./Form";

export interface FormProps extends PropsWithChildren {
  onSubmit?: MouseEventHandler,
  buttonText: string,
  legend?: string,
}

export function AuthForm(props: FormProps) {
  return (
    <>
      <div className="px-2 w-full">
        <Form
          onSubmit={props.onSubmit}
          buttonText={props.buttonText}
          legend={props.legend}
          style="bg-primary-transparent px-2 py-4 md:mt-8 mt-16 mb-4"
        >
          {Children.map(props.children, (child) => {
            return child;
          })}
        </Form>
      </div>
    </>
  );
}