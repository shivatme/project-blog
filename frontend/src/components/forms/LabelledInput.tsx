import { ErrorMessage, Field } from "formik";

interface LabelledInputType {
  fieldName: string;
  label: string;
  placeholder: string;
  type?: string;
}

function LabelledInput({
  fieldName,
  label,
  placeholder,
  type = "text",
}: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm text-black font-semibold pt-4">
        {label}
      </label>

      <Field
        name={fieldName}
        placeholder={placeholder}
        type={type}
        component="input"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
      <ErrorMessage
        name={fieldName}
        className="text-red-500 text-sm mt-2"
        component={"div"}
      />
    </div>
  );
}

export default LabelledInput;
