import { useEffect, useState } from "react";
import { Newsletter } from "../types/Newsletter";

export function useLatestUrl(): { isLoading: boolean, data: Newsletter | undefined } {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<Newsletter | undefined>();

    const getNewsletter = async () => {
        try {
            const response = await fetch('https://fetch-latest-newsletter.vercel.app/api/latest');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getNewsletter();
    }, []);
    return { isLoading, data };
}