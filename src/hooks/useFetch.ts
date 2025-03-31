import { useState } from "react";
import { mockApiCall } from "../api/mockApi";

export const useFetch = () => {
    const [data, setData] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = async (input: string) => {
        setLoading(true);
        setError(null);
        setData(null);

        try {
            const response = await mockApiCall(input);
            setData(response);
        } catch (err) {
            setError(err as string);
        } finally {
            setLoading(false);
        }
    };

    return { data, error, loading, fetchData };
};
