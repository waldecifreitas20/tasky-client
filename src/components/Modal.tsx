import { Children, PropsWithChildren, useState } from "react";

interface ModalProps extends PropsWithChildren {

}

export function Modal(props: ModalProps) {

  const [isShowing, setDisplay] = useState(true);

  const dispose = () => {
    setDisplay(false);
  }

  if (!isShowing) {
    return <></>;
  }

  return (
    <section
      className="
      w-full h-full
      fixed
      left-0 top-0 
      overflow-hidden
      flex justify-center items-center 
    ">
      <div
        className=" 
        absolute
        size-full
        bg-black bg-opacity-25
        ">
      </div>

      <div className="bg-white z-50 rounded-md flex items-end p-4 flex-col">
        {Children.map(props.children, (child) => child)}
      </div>
    </section>
  );
}