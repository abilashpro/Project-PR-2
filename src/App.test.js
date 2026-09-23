import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders promo landing page heading", () => {
  render(<App />);
  expect(screen.getByText(/meet promoai/i)).toBeInTheDocument();
});
