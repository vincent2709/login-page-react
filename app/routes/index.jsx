import { json, redirect, Form, useActionData, useLoaderData } from 'remix';
import { getSession, commitSession } from "../libs/sessions";

export const loader = async ({ request }) => {
  const session = await getSession(
    request.headers.get("Cookie")
  );

  if (session.has("userId")) {
    return redirect("/dashboard");
  }
  else{
    return {};
  }
}

export const action = async ({ request }) => {
  const form = await request.formData();
  const email = form.get("email");
  const password = form.get("password");
  const errors = {};

  if (typeof email !== "string" || !email.includes("@")) {
    errors.emailValue = email;
    errors.emailError = "That doesn't look like an email address";
  }

  if (typeof password !== "string" || password.length < 6) {
    errors.passwdValue = password;
    errors.passwordError = "Password must be > 6 characters";
  }

  if (Object.keys(errors).length) {
    return json(errors, { status: 422 });
  } else {
    if(email === 'test@demo.com' && password === 'test#123'){
      const session = await getSession(
        request.headers.get("Cookie")
      );
      session.set("userId", email);
      return redirect("/dashboard", {
        headers: {
          "Set-Cookie": await commitSession(session),
        },
      });
    } else {
      errors.loginFailed = "Sorry, Invalid Email / Password!";
      return json(errors, { status: 422 });
    }
  }
}

// const passwordToggle = document.querySelector('.js-password-toggle')

// passwordToggle.addEventListener('change', function() {
//   const password = document.querySelector('.js-password'),
//     passwordLabel = document.querySelector('.js-password-label')

//   if (password.type === 'password') {
//     password.type = 'text'
//     passwordLabel.innerHTML = 'hide'
//   } else {
//     password.type = 'password'
//     passwordLabel.innerHTML = 'show'
//   }

//   password.focus()
// })

export default function Index() {
  const errors = useActionData();
  return (
    <section className="container mx-auto my-20 md:w-1/3 p-5 border border-blue-700 rounded-lg bg-white dark:bg-black">
      <Form method="POST" autoComplete="false" className="space-y-5">
        <h4 className="text-left text-3xl"><b>Let’s go!</b></h4>
        <p className="text-gray-500">Login into your account. You will use this email and password to log into your accounts for all access.</p>
        {errors && (errors.loginFailed !== undefined || errors.loginFailed !== '') ? (
            <p className="mt-2 font-bold text-center text-red-500 text-xs italic">{errors.loginFailed}</p>
          ) : null}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
            Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" type="text" placeholder="Enter your email.." />
          {errors && (errors.emailError !== undefined || errors.emailError !== '') ? (
            <p className="mt-2 text-red-500 text-xs italic">{errors.emailError}</p>
          ) : ''}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 right-0 flex items-center px-2">
              <input className="hidden js-password-toggle" id="toggle" type="checkbox" />
              {/* <svg className="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg> */}
              <button name="showHide" type="button" className="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label">show</button>
              
            </div>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="password" type="password" placeholder="Password.." />
          </div>
          {errors && (errors.passwordError !== undefined || errors.passwordError !== '') ? (
            <p className="mt-2 text-red-500 text-xs italic">{errors.passwordError}</p>
          ) : null}
        </div>
        <div className="w-full items-center justify-between">
          <button
            type="submit"
            className="focus:outline-none mt-5 bg-blue-700 px-4 py-3 text-white w-full text-lg rounded-lg"
          >
            Log In
          </button>
          <p className="mt-2 text-blue-500 text-xs italic">For correct login test please use <b>test@demo.com</b> for email and <b>test#123</b> for password</p>
        </div>
      </Form>
    </section>
  );
}
