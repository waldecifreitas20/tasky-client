import { SubmitHandler, useForm } from "react-hook-form";

import { Form } from "../../../components/forms/Form";
import { Modal } from "../../../components/Modal";
import { FormInput } from "../../../components/forms/FormInput";
import { TimeScheduler } from "./TimeScheduler";
import { Task } from "../../../interfaces/task";
import { FormTextBox } from "../../../components/forms/FormTextBox";

interface TaskFormProps {
  onCancel: CallableFunction,
  onSubmit: SubmitHandler<any>,
  data?: Task | null,
}

export function TaskForm(props: TaskFormProps) {
  console.log(props.data);

  const { register, formState, handleSubmit } = useForm();
  const errors = formState.errors;
  return (
    <>
      <Modal>
        <div className="w-[80vw] sm:max-w-[400px] relative">

          <button
            className="
            absolute right-0 top-0 
            ml-auto block 
            text-purple-400 
            hover:text-purple-600 
            text-2xl
            z-50
            "
            onClick={() => props.onCancel()}
          >X</button>

          <Form
            onSubmit={handleSubmit(props.onSubmit, () => {
              console.log({ errors });
            })}
            buttonText="Criar Tarefa"
            legend="Nova Tarefa"
            legendStyle="text-purple-800 font-normal text-3xl"
            style="text-purple-400 bg-white"
          >
            <p
              className="text-black text-sm font-normal mb-3"
            >Campos com astericos (*) são obrigatórios</p>

            <FormInput
              register={register("name", { required: true })}
              value={props.data?.name}
              isValid={!errors.name}
              label="Nome da Tarefa*:"
              labelStyle="text-black text-sm text-neutral-700"
              errorMsg="Campo obrigatório"
              inputStyle="bg-neutral-100 border text-black"
            />

            <FormTextBox
              register={register("desc", { required: false })}
              text={props.data?.desc}
            />

            <div className="w-48 block">
              <FormInput
                register={register("date", { required: true })}
                type="date"
                value={props.data?.date}
                isValid={!errors.date}
                label="Data*:"
                labelStyle="text-black text-sm text-neutral-700"
                errorMsg="Campo obrigatório"
                inputStyle="bg-neutral-100 border text-black"
              />
            </div>

            <TimeScheduler
              formRegister={register}
              formErrors={errors}
              initialHour={props.data?.hour}
              initialState={props.data?.full_day}
            />
          </Form>
        </div>
      </Modal >
    </>
  );
}