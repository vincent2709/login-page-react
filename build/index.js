var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// node_modules/remix/dist/index.js
var require_dist = __commonJS({
  "node_modules/remix/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var node = require("@remix-run/node");
    exports.createCookie = node.createCookie;
    exports.createCookieSessionStorage = node.createCookieSessionStorage;
    exports.createFileSessionStorage = node.createFileSessionStorage;
    exports.createMemorySessionStorage = node.createMemorySessionStorage;
    exports.createSessionStorage = node.createSessionStorage;
    exports.unstable_createFileUploadHandler = node.unstable_createFileUploadHandler;
    exports.unstable_createMemoryUploadHandler = node.unstable_createMemoryUploadHandler;
    exports.unstable_parseMultipartFormData = node.unstable_parseMultipartFormData;
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var serverRuntime = require("@remix-run/server-runtime");
    exports.createSession = serverRuntime.createSession;
    exports.isCookie = serverRuntime.isCookie;
    exports.isSession = serverRuntime.isSession;
    exports.json = serverRuntime.json;
    exports.redirect = serverRuntime.redirect;
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var react = require("@remix-run/react");
    exports.Form = react.Form;
    exports.Link = react.Link;
    exports.Links = react.Links;
    exports.LiveReload = react.LiveReload;
    exports.Meta = react.Meta;
    exports.NavLink = react.NavLink;
    exports.PrefetchPageLinks = react.PrefetchPageLinks;
    exports.RemixBrowser = react.RemixBrowser;
    exports.RemixServer = react.RemixServer;
    exports.Scripts = react.Scripts;
    exports.ScrollRestoration = react.ScrollRestoration;
    exports.useActionData = react.useActionData;
    exports.useBeforeUnload = react.useBeforeUnload;
    exports.useCatch = react.useCatch;
    exports.useFetcher = react.useFetcher;
    exports.useFetchers = react.useFetchers;
    exports.useFormAction = react.useFormAction;
    exports.useLoaderData = react.useLoaderData;
    exports.useMatches = react.useMatches;
    exports.useSubmit = react.useSubmit;
    exports.useTransition = react.useTransition;
    exports.Outlet = react.Outlet;
    exports.useHref = react.useHref;
    exports.useLocation = react.useLocation;
    exports.useNavigate = react.useNavigate;
    exports.useNavigationType = react.useNavigationType;
    exports.useOutlet = react.useOutlet;
    exports.useOutletContext = react.useOutletContext;
    exports.useParams = react.useParams;
    exports.useResolvedPath = react.useResolvedPath;
    exports.useSearchParams = react.useSearchParams;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_remix = __toESM(require_dist()), import_jsx_runtime = require("react/jsx-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remix.RemixServer, { context: remixContext, url: request.url })
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  Navbar: () => Navbar,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_remix2 = __toESM(require_dist()), import_react = require("react"), import_prop_types = require("prop-types");

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-T67DXRP5.css";

// app/styles/styles.css
var styles_default = "/build/_assets/styles-6DCHH7CX.css";

// app/root.jsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function links() {
  return [
    { rel: "stylesheet", href: tailwind_default },
    { rel: "stylesheet", href: styles_default }
  ];
}
function meta() {
  return { title: "Remix Login App" };
}
var Theme = {
  DARK: "dark",
  LIGHT: "light"
};
function App() {
  let [theme, setTheme] = (0, import_react.useState)(Theme.LIGHT);
  return console.log("initial:", theme), (0, import_react.useEffect)(() => {
    console.log("initial:", theme);
  }, [theme]), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    Document,
    {
      theme,
      propTheme: (val) => {
        console.log("setTheme:", val), setTheme(val);
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Navbar, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_remix2.Outlet, {}) })
    }
  );
}
function Document({ children, theme, propTheme }) {
  return console.log("theme:", theme), propTheme(Theme.DARK), /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", className: theme, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_remix2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_remix2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { style: { margin: "0 2.5vw" }, className: "bg-white dark:bg-black", children: [
      children,
      !1
    ] })
  ] });
}
function Navbar({ children }) {
  let handleChange = () => {
    console.log("Change");
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("nav", { className: "border-gray-200 border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-white dark:bg-black", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "text-right", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: "toggleDarkBtn", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", { type: "checkbox", onChange: () => handleChange }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "slideBtnTg round" })
    ] }) }),
    children
  ] }) });
}
Navbar.propTypes = {
  theme: import_prop_types.PropTypes.string,
  propTheme: import_prop_types.PropTypes.func.isRequired
};

// app/routes/dashboard.jsx
var dashboard_exports = {};
__export(dashboard_exports, {
  action: () => action,
  default: () => Index,
  loader: () => loader
});
var import_remix4 = __toESM(require_dist());

// app/libs/sessions.jsx
var import_remix3 = __toESM(require_dist()), { getSession, commitSession, destroySession } = (0, import_remix3.createCookieSessionStorage)(
  {
    cookie: {
      name: "session"
    }
  }
);

// app/routes/dashboard.jsx
var import_jsx_runtime3 = require("react/jsx-runtime"), action = async ({ request }) => {
  let session = await getSession(
    request.headers.get("Cookie")
  );
  return (0, import_remix4.redirect)("/", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
}, loader = async ({ request }) => {
  let data = {}, session = await getSession(
    request.headers.get("Cookie")
  );
  return session.has("userId") ? (data.userId = session.get("userId"), (0, import_remix4.json)(data)) : (0, import_remix4.redirect)("/", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
};
function Index() {
  let data = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { className: "container mx-auto my-20 md:w-1/3 p-5 border border-blue-700 rounded-lg  bg-white dark:bg-black", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { className: "text-left text-3xl", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("b", { children: "Welcome back!" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("p", { className: "mt-5 text-gray-500", children: [
      "You are logged in as ",
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "font-bold italic", children: data.userId }),
      "."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-gray-500", children: "Not you? Log out now!" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_remix4.Form, { method: "POST", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "button",
      {
        type: "submit",
        className: "focus:outline-none mt-5 bg-blue-700 px-4 py-3 text-white w-full text-lg rounded-lg",
        children: "Log Out"
      }
    ) })
  ] });
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action2,
  default: () => Index2,
  loader: () => loader2
});
var import_remix5 = __toESM(require_dist());
var import_jsx_runtime4 = require("react/jsx-runtime"), loader2 = async ({ request }) => (await getSession(
  request.headers.get("Cookie")
)).has("userId") ? (0, import_remix5.redirect)("/dashboard") : {}, action2 = async ({ request }) => {
  let form = await request.formData(), email = form.get("email"), password = form.get("password"), errors = {};
  if ((typeof email != "string" || !email.includes("@")) && (errors.emailValue = email, errors.emailError = "That doesn't look like an email address"), (typeof password != "string" || password.length < 6) && (errors.passwdValue = password, errors.passwordError = "Password must be > 6 characters"), Object.keys(errors).length)
    return (0, import_remix5.json)(errors, { status: 422 });
  if (email === "test@demo.com" && password === "test#123") {
    let session = await getSession(
      request.headers.get("Cookie")
    );
    return session.set("userId", email), (0, import_remix5.redirect)("/dashboard", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  } else
    return errors.loginFailed = "Sorry, Invalid Email / Password!", (0, import_remix5.json)(errors, { status: 422 });
};
function Index2() {
  let errors = (0, import_remix5.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("section", { className: "container mx-auto my-20 md:w-1/3 p-5 border border-blue-700 rounded-lg bg-white dark:bg-black", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_remix5.Form, { method: "POST", autoComplete: "false", className: "space-y-5", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h4", { className: "text-left text-3xl", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("b", { children: "Let\u2019s go!" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-gray-500", children: "Login into your account. You will use this email and password to log into your accounts for all access." }),
    errors && (errors.loginFailed !== void 0 || errors.loginFailed !== "") ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "mt-2 font-bold text-center text-red-500 text-xs italic", children: errors.loginFailed }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("label", { className: "block text-gray-700 text-sm font-bold mb-2", for: "username", children: "Email" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("input", { className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", name: "email", type: "text", placeholder: "Enter your email.." }),
      errors && (errors.emailError !== void 0 || errors.emailError !== "") ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "mt-2 text-red-500 text-xs italic", children: errors.emailError }) : ""
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("label", { className: "block text-gray-700 text-sm font-bold mb-2", for: "password", children: "Password" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "relative w-full", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "absolute inset-y-0 right-0 flex items-center px-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("input", { className: "hidden js-password-toggle", id: "toggle", type: "checkbox" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { name: "showHide", type: "button", className: "bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label", children: "show" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("input", { className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", name: "password", type: "password", placeholder: "Password.." })
      ] }),
      errors && (errors.passwordError !== void 0 || errors.passwordError !== "") ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "mt-2 text-red-500 text-xs italic", children: errors.passwordError }) : null
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "w-full items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "button",
        {
          type: "submit",
          className: "focus:outline-none mt-5 bg-blue-700 px-4 py-3 text-white w-full text-lg rounded-lg",
          children: "Log In"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", { className: "mt-2 text-blue-500 text-xs italic", children: [
        "For correct login test please use ",
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("b", { children: "test@demo.com" }),
        " for email and ",
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("b", { children: "test#123" }),
        " for password"
      ] })
    ] })
  ] }) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "e1a728f7", entry: { module: "/build/entry.client-PAXN3NHA.js", imports: ["/build/_shared/chunk-IA2GOSTF.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-JXO6VMF4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-FBB5GAKB.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-D6B5D652.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-E1A728F7.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !0, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
