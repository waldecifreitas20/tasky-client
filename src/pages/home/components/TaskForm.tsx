import { SubmitHandler, useForm } from "react-hook-form";

import { Form } from "../../../components/forms/Form";
import { Modal } from "../../../components/Modal";
import { FormInput } from "../../../components/forms/FormInput";
import { TimeScheduler } from "./TimeScheduler";

interface TaskFormProps {
  onCancel: CallableFunction,
  onSubmit: SubmitHandler<any>,
}

export function TaskForm(props: TaskFormProps) {
  const { register, formState, handleSubmit } = useForm();
  const errors = formState.errors;

  return (
    <>
      <Modal>
        <div className="w-[80vw] relative">

          <button
            className="
            absolute right-0 top-0 
            ml-auto block 
            text-purple-400 
            hover:text-purple-600 
            text-2xl"
            onClick={() => props.onCancel()}
          >
            <i className="fa-solid fa-x ml-2"></i>
          </button>

          <Form
            onSubmit={handleSubmit(props.onSubmit)}
            buttonText="Criar Tarefa"
            legend="Nova Tarefa"
            legendStyle="text-purple-800 font-normal text-3xl"
            style="text-purple-400 bg-white"
          >
            <p
              className="text-black text-sm font-normal mb-3"
            >Preencha todos os campos</p>

            <FormInput
              register={register("name", { required: true })}
              isValid={!errors.name}
              label="Nome da Tarefa*:"
              labelStyle="text-black text-sm text-neutral-700"
              errorMsg="Campo obrigatório"
              inputStyle="bg-neutral-100 border text-black"
            />

            <div>
              <label
                htmlFor="desc"
                className="text-neutral-700 text-sm "
              >Descrição:</label>

              <textarea
                {...register("desc", { required: false })}
                style={{ resize: "none" }}
                rows={4}
                maxLength={150}
                id="desc"
                name="desc"
                className="
                block
                w-full
                outline-none 
                rounded-sm 
                py-3 px-2 
                border 
                bg-neutral-100 
                text-black
                
                md:text-sm 
                "
              ></textarea>
            </div>

            <div className="w-48 block">
              <FormInput
                register={register("date", { required: false })}
                type="date"
                isValid={!errors.date}
                label="Data*:"
                labelStyle="text-black text-sm text-neutral-700"
                errorMsg="Campo obrigatório"
                inputStyle="bg-neutral-100 border text-black"
              />
            </div>

            <TimeScheduler />
          </Form>
        </div>
      </Modal >
    </>
  );
}