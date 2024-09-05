export default function Home() {
  return (
    <main className="bg-beige-100 w-full h-screen p-project-200 flex justify-center items-center">
      <form
        action=""
        className="bg-white w-full px-project-250 py-project-300 flex flex-col gap-project-400 rounded-lg"
      >
        <h1 className="text-preset-1">Login</h1>
        <div className="flex flex-col gap-project-200">
          <div className="flex flex-col gap-project-50">
            <label htmlFor="" className="text-grey-500 text-preset-5-b">
              Email
            </label>
            <input
              type="email"
              className="p-project-200 border-beige-500 border-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-project-50">
            <label htmlFor="" className="text-grey-500 text-preset-5-b">
              Password
            </label>
            <input
              type="password"
              className="p-project-200 border-beige-500 border-2 rounded-lg"
            />
          </div>
        </div>
        <button className="py-project-200 bg-grey-900 text-white rounded-lg text-preset-4-b">
          Log in
        </button>
        <span className="text-center text-preset-4-r">
          Need to create an account?{" "}
          <a href="/signup" className="text-preset-4-b underline">
            Sign Up
          </a>
        </span>
      </form>
    </main>
  );
}
