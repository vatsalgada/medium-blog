import { ChangeEvent } from "react";

interface LabelProps {
    label: string;
    placeholder?: string; // Explicitly define children if needed;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    type?: string
  }


export const LabelledInput = ({label,placeholder, onChange, type} : LabelProps) => {
    return <div className="pt-2 ">
    <div className="font-semibold mb-2">{ label }</div>
    <input className="border-2 border-solid rounded-md p-1 w-full" onChange={onChange} type={type || "text"} placeholder={ placeholder}/>
    </div>
}

