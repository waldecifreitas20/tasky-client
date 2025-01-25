import { Children, PropsWithChildren } from "react";
import { SuggestedResult } from "./SuggestedResult";
import { Task } from "../../../../../interfaces/task";


interface SuggestedResultsListProps {
  results: Array<any>,
}

export function SuggestedResultsList(props: SuggestedResultsListProps) {


  return (
    <>
      <ul
        className="
        block 
        absolute z-10 
        w-full  
        border 
        shadow-lg 
        rounded-b-md 
        bg-white 
        ">
        {
          props.results.map((child) => {
            return <>
              <SuggestedResult
                taskName={child.name}
                date={child.date}
              />
            </>
          })
        }
      </ul>
    </>
  );
}