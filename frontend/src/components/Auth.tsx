import { Link, useNavigate } from "react-router";
import { SignupSchema } from "@shivam5278/projec-blog-common";
import AppForm from "./forms/AppForm";
import * as Yup from "yup";
import LabelledInput from "./forms/LabelledInput";
import SubmitButton from "./forms/SubmitButton";
import { signIn, signUp } from "../services/authService";

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
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="px-10">
            <div className="text-3xl font-extrabold">Create an account</div>
            <div className="text-slate-500">
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
          </div>
          <AppForm
            initialValues={initialValues}
            onSubmit={sendRequest}
            validationSchema={validationSchema}
          >
            <div className="pt-8">
              {type === "signup" ? (
                <LabelledInput
                  label="Name"
                  placeholder="Your name"
                  fieldName="name"
                />
              ) : null}
              <LabelledInput
                label="Email"
                placeholder="test@gmail.com"
                fieldName="email"
              />
              <LabelledInput
                fieldName="password"
                label="Password"
                type={"password"}
                placeholder="123456"
              />

              <SubmitButton title="Sign up" />
            </div>
          </AppForm>
        </div>
      </div>
    </div>
  );
}
