import { Button } from "../../components/Button";
import { MouseEvent, PropsWithChildren, useState } from "react";

export interface AuthPageTemplateProps extends PropsWithChildren {
  onSubmit: CallableFunction;
  legend: string,
  submitButton: string,
}

export function AuthForm(props: AuthPageTemplateProps) {
  const onSubmit = (evt: MouseEvent) => {
    props.onSubmit(evt);
  }

  return (
    <>
      <form
        className="
          mt-16
          mb-4
          w-full
          bg-primary-transparent
          px-2 py-4
          rounded-md

          md:mt-8
        ">
        <legend className="text-2xl">{props.legend}</legend>

        <div className="my-10 gap-2 flex flex-col text-white">
          {props.children}
        </div>

        <Button isSubmit
          style="w-full py-3 font-normal md:text-sm"
          onClick={onSubmit}
        >{props.submitButton}</Button>

      </form>
    </>
  );
}