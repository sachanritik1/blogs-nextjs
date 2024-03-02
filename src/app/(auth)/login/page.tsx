"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Form from "@/components/ui/Form";
import { useRef, FormEvent } from "react";

const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Email:", emailRef.current?.value);
    console.log("Password:", passwordRef.current?.value);
    // You can replace the console.log with your actual login logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Sign in to your account
          </h2>
        </div>
        <Form onSubmit={handleSubmit}>
          <Input
            label="Email address"
            type="email"
            placeholder="Email address"
            reference={emailRef}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Password"
            reference={passwordRef}
          />

          <Button name="Sign in" onClick={() => {}} />
        </Form>
      </div>
    </div>
  );
};

export default Login;
