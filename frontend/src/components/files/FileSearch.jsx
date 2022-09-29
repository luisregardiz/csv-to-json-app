import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./FileSearch.css";

const FileSearch = ({ setSearch }) => {
    const [searchInput, setSearchInput] = useState("");

    const handleSearch = (e) => {
        const { value } = e.target;
        setSearchInput(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchInput !== "") {
            setSearch(searchInput);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="form-group-wrapper">
                <Form.Label as="label">Search</Form.Label>
                <div className="input-wrapper">
                    <Form.Control
                        type="text"
                        placeholder="ex: file.csv..."
                        onChange={(e) => handleSearch(e)}
                        value={searchInput}
                    />
                    <Button variant="dark" type="submit">
                        Submit
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            setSearch("");
                            setSearchInput("");
                        }}
                    >
                        Reset
                    </Button>
                </div>
            </Form.Group>
        </Form>
    );
};

export default FileSearch;
