import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Trialfunction from "../components/Trialfunction";
import { useAuth0 } from "@auth0/auth0-react";
jest.mock("@auth0/auth0-react");

const user = {
  email: "johndoe@me.com",
  email_verified: true,
  sub: "google-oauth2|12345678901234",
};

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);

  useAuth0.mockReturnValue({
    isLoading: false,
    user: user,
    isAuthenticated: true,
    loginWithRedirect: jest.fn(),
    logout: jest.fn(),
  });
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// const useAuth0Mock = jest.mock("@auth0/auth0-react", () => ({
//   Auth0Provider: ({ children }) => children,
//   withAuthenticationRequired: (component, _) => component,
//   useAuth0: () => {
//     return {
//       isLoading: false,
//       user: user,
//       isAuthenticated: true,
//       loginWithRedirect: jest.fn(),
//     };
//   },
// }));

it("renders trial function response", async () => {
  const fakeReturn = { message: "Trial function executed successfully!" };

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeReturn),
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<Trialfunction />, container);
  });
  console.log(container.textContent);
  expect(container.textContent).toContain(
    "Trial function executed successfully!"
  );

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});
