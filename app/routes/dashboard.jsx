import { json, redirect, Form, useLoaderData } from 'remix';
import { getSession, destroySession } from "../libs/sessions";

export const action = async ({ request }) => {
  const session = await getSession(
    request.headers.get("Cookie")
  );

  return redirect("/", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
};

export const loader = async ({ request }) => {
  const data = {};
  const session = await getSession(
    request.headers.get("Cookie")
  );

  if (session.has("userId")) {
    data.userId = session.get("userId");
    return json(data);
  } else{
    return redirect("/", {
      headers: {
        "Set-Cookie": await destroySession(session),
      },
    });
  }
}

export default function Index() {
  const data = useLoaderData();
  return (
    <section className="container mx-auto my-20 md:w-1/3 p-5 border border-blue-700 rounded-lg  bg-white dark:bg-black">
        <h4 className="text-left text-3xl"><b>Welcome back!</b></h4>
        <p className="mt-5 text-gray-500">You are logged in as <span className="font-bold italic">{data.userId}</span>.</p>
        <p className="text-gray-500">Not you? Log out now!</p>
        <Form method="POST">
          <button
            type="submit"
            className="focus:outline-none mt-5 bg-blue-700 px-4 py-3 text-white w-full text-lg rounded-lg"
          >
            Log Out
        </button>
      </Form>
    </section>
  );
}
