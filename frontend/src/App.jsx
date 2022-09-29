import { Alert, Container } from "react-bootstrap";
import FileTable from "./components/files/FileTable";
import useFetch from "./hooks/useFetch";
import "./App.css";
import FileSearch from "./components/files/FileSearch";
import { useState } from "react";
import SpinnerLoading from "./components/spinner/SpinnerLoading";
import { API_URL, URL_DATA } from "./config/api/url";

function App() {
    const [search, setSearch] = useState(null);
    const URL_FILENAME = `${API_URL}/files/data?fileName=${search}`;
    const URL = search ? URL_FILENAME : URL_DATA;

    const { data, error, isLoading } = useFetch(URL);

    if (error) {
        return (
            <Alert variant="danger">
                <Alert.Heading>Error</Alert.Heading>
                <p>{error}</p>
            </Alert>
        );
    }

    return (
        <Container as="main">
            <h2 className="title-table-container">Private Files</h2>
            <FileSearch setSearch={setSearch} />
            {search && <h5>Results of "{search}"</h5>}

            {isLoading && <SpinnerLoading />}
            {data && !isLoading && <FileTable data={data} />}
        </Container>
    );
}

export default App;
