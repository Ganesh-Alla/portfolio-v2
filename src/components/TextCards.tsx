interface Props {
    heading: string;
    text: string;
    color: string; // Restrict to known Tailwind colors
  }
  
  export default function TextCards({ text, heading, color }: Props): JSX.Element {
  
    return (
      <div className={`${color} w-64 h-auto rounded-lg p-6`}>
        <div className="underline mb-2 font-semibold text-xl">{heading}</div>
        <div className="font-normal text-sm">{text}</div>
      </div>
    );
  }
  