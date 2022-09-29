import React from "react";
import { screen, render } from "@testing-library/react";

import FileSearch from "../components/files/FileSearch";

describe("File Search", () => {
    it("should render search title", () => {
        render(<FileSearch />);
        expect(screen.getByText(/search/i)).toBeInTheDocument();
    });

    it("should render submit button", () => {
        render(<FileSearch />);
        expect(
            screen.getByRole("button", { name: /submit/i })
        ).toBeInTheDocument();
    });
    it("should render reset button", () => {
        render(<FileSearch />);
        expect(
            screen.getByRole("button", { name: /reset/i })
        ).toBeInTheDocument();
    });
});
