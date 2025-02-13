import { FormikValues, useFormikContext } from "formik";

export default function SubmitButton({ title }: { title: string }) {
  const { handleSubmit } = useFormikContext<FormikValues>();
  return (
    <div>
      <button
        onClick={() => handleSubmit()}
        type="button"
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 my-8"
      >
        {title}
      </button>
    </div>
  );
}
