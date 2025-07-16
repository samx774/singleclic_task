import { Link } from "react-router-dom";

export default function AuthLayout() {
  return (
    <main className="p-5">
      <h1 className="text-2xl dark:text-white text-black">
        hello anonymous user! <br /> please sign-in
      </h1>
      <Link
        to={"/"}
        className="bg-[var(--primary-bg)] text-[var(--text-color)] dark:bg-[var(--primary-bg)] dark:text-[var(--text-color)] p-3 rounded-md m-5 block w-fit"
      >
        sign-in
      </Link>
    </main>
  );
}
