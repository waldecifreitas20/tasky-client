import { useState } from "react";

interface TimeSchedulerProps {
  dateRegister: any,
  hourRegister: any,
};

export function TimeScheduler(props: TimeSchedulerProps) {
  const [is_fullday, setIsFullday] = useState(true);

  return (
    <>
      <div className="mt-3 flex items-center justify-start gap-1">
        <input
          id="full-day-checkbox"
          type="checkbox"
          className="w-fit"
          checked={is_fullday}
          onClick={() => { setIsFullday(!is_fullday) }}
          {...props.dateRegister}
        />
        <label
          htmlFor="full-day-checkbox"
          className="text-zinc-800 font-normal text-sm"
        >Dia inteiro</label>
      </div>

      {
        is_fullday ? <></> :
          <div className="text-black flex justify-start items-center">
            <input
              type="time"
              min={0}
              max={23}
              className="bg-neutral-100 border w-50 pl-4"
              {...props.hourRegister}
            />

          </div>
      }

    </>
  );
}