"use client";
import React, { useEffect,useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession ,signIn} from "next-auth/react";

const Login = () =>{
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  // const [success, setSuccess] = useState("");

  useEffect(() => {
    setError(params.get("error"));
    // setSuccess(params.get("success"));
  }, [params]);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }
  if (session.status === "authenticated") {
   return  router.push("/dashboard");
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
  };
 
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto"
            src="/hotspot.ico"
            alt="Your Company"
            width={100}
            height={100}
          />
          <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight">
            Login
          </h2>
        </div>
        
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full h-[50px]  text-gray-900 px-2 font-bold rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className={`block w-full h-[50px] ${error && 'border-red-600 border-[2px]'} rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                />
              </div>
              <span className="text-sm text-red-700">{error && error}</span>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full h-[40px] justify-center rounded-md bg-green-600 px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 p-2"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
        <div className="mt-10 text-center text-sm">
          <button
            onClick={() => signIn("google")}
            className="bg-red-800 p-1.5 hover:bg-red-900 m-auto transition duration-700 rounded-md text-sm "
          >
            login with google
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
