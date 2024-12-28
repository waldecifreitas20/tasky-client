import { Children, PropsWithChildren } from "react";

interface ModalProps extends PropsWithChildren {

}

export function Modal(props: ModalProps) {

  return (
    <section
      className="
      w-full min-h-screen
      fixed
      overflow-y-scroll
      left-0 top-0 bottom-0
      z-20 
      flex justify-center items-start 
    ">
      <div
        className=" 
        fixed
        w-full
        min-h-[100vh]
        bg-black bg-opacity-25
        ">
      </div>

      <div
        className="
      bg-white z-30 
      my-6
      rounded-md 
      flex 
      items-end 
      flex-col 
      p-4 
      ">
        {Children.map(props.children, (child) => child)}
      </div>
    </section>
  );
}