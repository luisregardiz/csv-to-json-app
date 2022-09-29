import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Render App", () => {
    it("should render title", () => {
        render(<App />);
        expect(screen.getByText(/private files/i)).toBeInTheDocument();
    });
});
