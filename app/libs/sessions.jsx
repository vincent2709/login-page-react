import { createCookieSessionStorage } from 'remix';
const { getSession, commitSession, destroySession } =
  createCookieSessionStorage(
    {
      cookie: {
        name: "session",
      },
    }
  );

export { getSession, commitSession, destroySession };
