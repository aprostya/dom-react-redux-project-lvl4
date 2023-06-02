/* eslint-disable react/react-in-jsx-scope */
import { useField } from "formik";
import { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

const Input = (props: InputFieldProps) => {
    const { name, label } = props;
    const [field, meta] = useField(name);

    return (
        <>
            <label className="block mb-2 text-sm font-medium text-gray-600">
                {label}
            </label>
            <input
                className={`block w-full p-3 rounded bg-gray-200 border hover:border-indigo-300 border-2 ${
                    meta?.error ? "border-red-600" : "border-transparent"
                }`}
                value={field.value}
                onChange={field.onChange}
                name={name}
            />
            <span className="text-red-500">{meta.error ? meta.error : null}</span>
        </>
    );
};

export default Input;
