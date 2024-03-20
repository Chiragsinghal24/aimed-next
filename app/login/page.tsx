"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { account } from "@/lib/appwrite";

export default function Page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useRouter();
    const { isSignedIn, setIsSignedIn, setUser } = useAuth();
    const loginAccount = async () => {
      const promise = account.createEmailPasswordSession(email, password);
      promise
        .then(async (response) => {
          setIsSignedIn(true);
          const user = await account.get();
          setUser(user);
          localStorage["user"] = JSON.stringify(user);
          navigate.push("/");
        })
        .catch((err: any) => {
          alert(err);
        });
    };

    if (isSignedIn) {
      navigate.push("/");
    }

    return (
      <div className="flex-1 flex">
        <section className="flex flex-1 flex-col md:flex-row items-center">
          <div className="bg-image bg-blue-200 hidden lg:block w-full md:w-1/2 xl:w-2/3">
            <img
              src="https://picsum.photos/800/450"
              alt="random sign in image"
              className="w-full object-cover"
            />
          </div>

          <div
            className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 px-6 lg:px-16 xl:px-12
      flex items-center justify-center"
          >
            <div className="w-full h-full">
              <img
                src="/img/aimed.png"
                alt="brand logo"
                style={{ maxWidth: 160, height: "auto" }}
              />
              <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
                Log in to your account
              </h1>

              <form id="loginform" className="mt-6" action="#" method="POST">
                <div>
                  <label className="block text-gray-700">Email Address</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                    required
                  />
                </div>

                <div className="mt-4">
                  <label className="block text-gray-700">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Password"
                    minLength={6}
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full block bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-300 hover:to-blue-400 focus:from-green-300 focus:to-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
                >
                  Log In
                </button>
              </form>

              <hr className="my-6 border-gray-300 w-full" />

              <button
                type="button"
                className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
              >
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="w-6 h-6"
                    viewBox="0 0 48 48"
                  >
                    <defs>
                      <path
                        id="a"
                        d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                      />
                    </defs>
                    <clipPath id="b">
                      <use xlinkHref="#a" overflow="visible" />
                    </clipPath>
                    <path
                      clip-path="url(#b)"
                      fill="#FBBC05"
                      d="M0 37V11l17 13z"
                    />
                    <path
                      clip-path="url(#b)"
                      fill="#EA4335"
                      d="M0 11l17 13 7-6.1L48 14V0H0z"
                    />
                    <path
                      clip-path="url(#b)"
                      fill="#34A853"
                      d="M0 37l30-23 7.9 1L48 0v48H0z"
                    />
                    <path
                      clip-path="url(#b)"
                      fill="#4285F4"
                      d="M48 48L17 24l-4-3 35-10z"
                    />
                  </svg>
                  <span className="ml-4">Log in with Google</span>
                </div>
              </button>

              <p className="mt-8">
                Need an account?
                <Link
                  href="/signup"
                  className="text-green-500 hover:text-green-700 font-semibold"
                >
                  Create an account
                </Link>
              </p>

              <p className="text-sm text-gray-500 mt-12">
                &copy; <b>AI</b>MED - All Rights Reserved.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  };

