export const getPasswordError = (validationType: any) => {
  if (validationType === "required") {
    return "Senha é obrigatoria";
  }
  return "Senha deve conter entre 8 e 16 caracteres";

}

export const getEmailError = (validationType: any) => {
  if (validationType === "required") {
    return "Email é obrigatorio";
  }
  return "Digite um email válido";

}