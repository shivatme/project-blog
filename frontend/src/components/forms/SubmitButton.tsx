import { FormikValues, useFormikContext } from "formik";

export default function SubmitButton({ title }: { title: string }) {
  const { handleSubmit } = useFormikContext<FormikValues>();
  return (
    <div>
      <button
        onClick={() => handleSubmit()}
        type="button"
        className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        {title}
      </button>
    </div>
  );
}
