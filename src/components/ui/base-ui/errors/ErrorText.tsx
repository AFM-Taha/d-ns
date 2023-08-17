interface ErrorTextProps {
  text: string;
}

const ErrorText: React.FC<ErrorTextProps> = ({ text }) => {
  return (
    <p className="text-[10px] font-[400] leading-[12px] text-red_2">{text}</p>
  );
};

export default ErrorText;
