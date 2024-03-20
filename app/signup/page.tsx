import Link from 'next/link';

export default function () {
  return (
    <section className="flex flex-col md:flex-row flex-1 items-center">
      <div className="bg-image bg-blue-200 hidden lg:block w-full md:w-1/2 xl:w-2/3">
        <img
          src="https://picsum.photos/800/450"
          alt="random sign in image"
          className="w-full object-cover"
        />
      </div>

      <div
        className=" bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
      >
        <div className="w-full h-100">
          <img
            src="/img/aimed.png"
            alt="brand logo"
            style={{ maxWidth: 160, height: "auto" }}
          />
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
            Create Account
          </h1>

          <form id="signupform" className="mt-6">
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="text"
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
                id="password"
                placeholder="Enter Password"
                minLength={6}
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                id="confirmpassword"
                placeholder="Confirm Password"
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
              Create Account
            </button>
          </form>

          <hr className="my-6 border-gray-300 w-full" />
          <p className="mt-8">
            Account Created?
            <Link
              href="/login"
              className="text-green-500 hover:text-green-700 font-semibold"
            >
              Login
            </Link>
          </p>

          <p className="text-sm text-gray-500 mt-12">
            &copy; <b>AI</b>MED - All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
