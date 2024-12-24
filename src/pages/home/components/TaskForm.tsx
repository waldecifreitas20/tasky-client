import { useForm } from "react-hook-form";

import { Form } from "../../../components/forms/Form";
import { Modal } from "../../../components/Modal";
import { FormInput } from "../../../components/forms/FormInput";

interface TaskFormProps {
  onCancel: CallableFunction,
  onSubmit?: CallableFunction,
}

export function TaskForm(props: TaskFormProps) {
  const { register, formState, handleSubmit } = useForm();

  return (
    <>
      <Modal>
        <div className="w-[80vw]">

          <button
            className="ml-auto block text-purple-400 hover:text-purple-600 text-2xl"
            onClick={() => props.onCancel()}
          >
            <i className="fa-solid fa-x ml-2"></i>
          </button>

          <Form
            buttonText="Criar Tarefa"
            legend="Nova Tarefa"
            legendStyle="text-purple-600"
            style="text-purple-400 bg-white bg-opacity-100"
          >
            <FormInput
              register={register("name", { required: true })}
              isValid
              placeholder="Nome da Tarefa"
              errorMsg="Campo obrigatório"
            />
          </Form>
        </div>
      </Modal>
    </>
  );
}