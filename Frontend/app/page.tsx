import Image from "next/image";

export default function Login() {
  return (
    <div className="flex flex-col items-center md:flex-row md:h-screen">
      <div className="flex items-center justify-center w-full md:w-1/2">
        <Image src="/image.png" alt="Login Image" width={800} height={600} />
      </div>
      <div className="flex flex-col items-center justify-center w-full md:w-1/4">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-2xl font-bold">Login</h1>
          </div>
          <form className="mt-8 space-y-6">
            <div>
              <input
                id="email"
                type="email"
                placeholder="Enter Email"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <div>
              <input
                id="password"
                type="password"
                placeholder="Enter Password"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-3 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
              >
                Click to Login
              </button>
            </div>
            <div className="flex justify-between">
              <a href="" className="">
                forget password
              </a>
              <a href="" className="">
                sign up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
