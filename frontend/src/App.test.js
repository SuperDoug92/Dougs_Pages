import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";
import Auth0ProviderWithHistory from "./auth0ProviderWithHistory";
import { BrowserRouter as Router } from "react-router-dom";

test("renders learn react link", () => {
  render(
    <Router>
      <Auth0ProviderWithHistory>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Auth0ProviderWithHistory>
    </Router>
  );
  const linkElement = screen.getByText(/Doug's Pages/i);
  expect(linkElement).toBeInTheDocument();
});
