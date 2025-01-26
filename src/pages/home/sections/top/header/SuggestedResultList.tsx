import { SuggestedResult } from "./SuggestedResult";


interface SuggestedResultsListProps {
  results: Array<any>,
}

export function SuggestedResultsList(props: SuggestedResultsListProps) {
 
  if (props.results.length === 0) {
    return (<></>);
  }

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