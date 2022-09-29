import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const getFilesData = async () => {
            setLoading(true);

            try {
                const { data } = await axios.get(url);
                setLoading(false);
                data && setData(data);
            } catch (error) {
                console.log(error);
                setLoading(false);
                setError(
                    "An error occurred while we were getting the data, try refresh the page"
                );
            }
        };
        getFilesData();
    }, [url]);
    return { data, isLoading, error };
};

export default useFetch;
