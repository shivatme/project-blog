import { Link, useNavigate } from "react-router";
import { SignupSchema } from "@shivam5278/projec-blog-common";
import AppForm from "./forms/AppForm";
import * as Yup from "yup";
import LabelledInput from "./forms/LabelledInput";
import SubmitButton from "./forms/SubmitButton";
import { signIn, signUp } from "../services/authService";
import { CodeXml } from "lucide-react";

export default function Auth({ type }: { type: "signup" | "signin" }) {
  const navigate = useNavigate();

  async function sendRequest(info: SignupSchema) {
    try {
      let response;

      if (type === "signup") {
        response = await signUp(info.name, info.email, info.password);
      } else if (type === "signin") {
        response = await signIn(info.email, info.password);
      } else {
        throw new Error("Invalid authentication type");
      }
      const jwt = response.token;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (e) {
      alert("Error while signing up");
      // alert the user here that the request failed
    }
  }

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2).label("Name"),
    email: Yup.string().required("Email is required").email().label("Email"),
    password: Yup.string()
      .required("Password is required")
      .min(4)
      .label("Password"),
  });

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-md w-96 space-y-1">
        <div className="text-center">
          <CodeXml className="mx-auto h-12 w-12 text-purple-600" />
          <h2 className="mt-6 text-3xl font-extrabold">
            {type === "signup"
              ? "Create a new account"
              : "Sign in to your account"}
          </h2>
        </div>
        <div className="text-center  text-slate-500">
          {type === "signin"
            ? "Don't have an account?"
            : "Already have an account?"}
          <Link
            className="pl-2 underline"
            to={type === "signin" ? "/signup" : "/signin"}
          >
            {type === "signin" ? "Sign up" : "Sign in"}
          </Link>
        </div>
        <AppForm
          initialValues={initialValues}
          onSubmit={sendRequest}
          validationSchema={validationSchema}
        >
          <form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              {type === "signup" ? (
                <LabelledInput placeholder="Name" fieldName="name" />
              ) : null}
              <LabelledInput placeholder="Email address" fieldName="email" />
              <LabelledInput
                type={"password"}
                placeholder="Password"
                fieldName="password"
              />

              <SubmitButton title={type === "signup" ? "Sign up" : "Sign in"} />
            </div>
          </form>
        </AppForm>

        <div className="text-center">
          <Link
            to="/"
            className="text-sm text-purple-400 hover:text-purple-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
