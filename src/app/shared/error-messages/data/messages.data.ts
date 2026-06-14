import { tErrorMessages } from "../types/error-messages.type";

export const errorMessages: tErrorMessages['errorMessages'] = {
  required: () => 'Campo obrigatório.',
  email: () => 'Por favor, insira um endereço de email válido.',
  passwordsAreNotEqual: ({ field1, field2 }) => `Os campos "${field1}" e "${field2}" devem ser iguais.`,
  isNicknameTaken: () => 'Este apelido já está em uso. Por favor, escolha outro.',
  minlength: ({ requiredLength, actualLength }) => `O valor deve conter no mínimo ${requiredLength} caracteres. (atualmente ${actualLength})`
};

export const pendingMessage = 'Validando...';
