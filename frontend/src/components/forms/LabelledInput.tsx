import { ErrorMessage, Field } from "formik";

interface LabelledInputType {
  fieldName: string;
  label?: string;
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
      {label && (
        <label className="block mb-2 text-sm text-black font-semibold pt-4">
          {label}
        </label>
      )}

      <Field
        name={fieldName}
        placeholder={placeholder}
        type={type}
        component="input"
        className="appearance-none rounded-sm relative block w-full px-3 py-2 my-3 border border-gray-700 placeholder-gray-500 text-white bg-gray-900  focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
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
