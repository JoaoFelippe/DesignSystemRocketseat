import { ComponentProps, InputHTMLAttributes, Ref } from "react";
import { Input, Prefix, TextInputContainer } from "./styles";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  prefix?: string;
  ref?: Ref<HTMLInputElement>;
}

export const TextInput = ({ prefix, ref, ...props }: TextInputProps) => {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input ref={ref} {...props} />
    </TextInputContainer>
  );
};

TextInput.displayName = "TextInput";
