import React from "react";
import { Table } from "react-bootstrap";
import "./FileTable.css";
const FileTable = ({ data }) => {
    return (
        <Table striped bordered hover className="table-wrapper">
            <thead>
                <tr>
                    <th>File Name</th>
                    <th>Text</th>
                    <th>Number</th>
                    <th>Hex</th>
                </tr>
            </thead>
            <tbody>
                {data?.files?.length > 0 ? (
                    data?.files?.map((file, key) => {
                        const { file: fileName, lines } = file;
                        const { hex, number, text } = lines[0];
                        return (
                            <tr key={key}>
                                <td>{fileName}</td>
                                <td>{text || "NULL"}</td>
                                <td>{number || "NULL"}</td>
                                <td>{hex || "NULL"}</td>
                            </tr>
                        );
                    })
                ) : (
                    <tr>
                        <td colSpan={4}>No results</td>
                    </tr>
                )}
            </tbody>
        </Table>
    );
};

export default FileTable;
