import { useState, useEffect } from "react";

const option = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
}
export const useFetch = (URL: string

) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [apiData, setApiData] = useState<any>(null)
    const [serverError, setServerError] = useState<null>(null)
    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
            try {
                const res = await fetch(URL, option);
                const data = await res?.json();
                if (!res.ok) {
                    const statusText: string = await res.text()
                    throw new Error(`HTTP error!: ${res.status} ${statusText}`);
                }
                setApiData(data)
                setIsLoading(false)
            } catch (error: any) {
                setServerError(error)
                setIsLoading(false)
                console.log(error.message);
            }
        }
        fetchData()
    }, [URL])
    return { isLoading, apiData, serverError }
};
