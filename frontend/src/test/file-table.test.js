import React from "react";
import { screen, render } from "@testing-library/react";

import FileTable from "../components/files/FileTable";

describe("File Table", () => {
    it("should render in table file name", () => {
        render(<FileTable />);
        expect(screen.getByText(/file name/i)).toBeInTheDocument();
    });
    it("should render in table file text", () => {
        render(<FileTable />);
        expect(screen.getByText(/text/i)).toBeInTheDocument();
    });
    it("should render in table file number", () => {
        render(<FileTable />);
        expect(screen.getByText(/number/i)).toBeInTheDocument();
    });
    it("should render in table file hex", () => {
        render(<FileTable />);
        expect(screen.getByText(/hex/i)).toBeInTheDocument();
    });
});
