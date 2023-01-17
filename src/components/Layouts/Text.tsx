import { FC } from "react";

interface TextType {
  text: string;
  className?: string;
}

const Text: FC<TextType> = ({ text, className }) => {
  return <p className={`text-app-white text-base ${className}`}>{text}</p>;
};

export default Text;
