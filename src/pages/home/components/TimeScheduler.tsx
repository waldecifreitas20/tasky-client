import { useState } from "react";
import { FormInput } from "../../../components/forms/FormInput";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface TimeSchedulerProps {
  formRegister: UseFormRegister<FieldValues>,
  formErrors: FieldErrors<FieldValues>,
};

export function TimeScheduler(props: TimeSchedulerProps) {
  const [isFullDay, setIsFullDay] = useState(true);

  return (
    <>
      <div className="mt-3 flex items-center justify-start gap-1">
        <input
          id="full-day-checkbox"
          type="checkbox"
          className="w-fit"
          checked={isFullDay}
          onClick={() => { setIsFullDay(!isFullDay) }}
          {...props.formRegister("full_day")}
        />
        <label
          htmlFor="full-day-checkbox"
          className="text-zinc-800 font-normal text-sm"
        >Dia inteiro</label>
      </div>

      {
        isFullDay ? <></> :
          <div className="text-black flex flex-col gap-1 items-start justify-center w-52">
            <FormInput
              register={props.formRegister("hour", { required: true })}
              type="time"
              label="Horário*:"
              labelStyle="text-neutral-700 text-sm"
              inputStyle="bg-neutral-100 border"
              isValid={!props.formErrors.hour}
              errorMsg="Um horário precisa ser informado"
            />
          </div>
      }

    </>
  );
}