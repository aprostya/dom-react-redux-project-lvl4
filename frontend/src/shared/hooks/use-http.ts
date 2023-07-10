import { useState, useCallback } from "react";
import { useLocalStorageState } from "./use-local-storage";


interface IError {
    message: string;
}

interface IData {
    token: string
}

//todo fix body
interface IRequest extends RequestInit {
    url: string;
    body: any
}


const useHttp = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<IError>(null);
    const [data, setData] = useState<IData>(null);
    const [authKey, setAuthKey] = useLocalStorageState("token", null);

    const sendRequest = useCallback(async (requestConfig: IRequest) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method ?? "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestConfig.body) ?? null,
            });

            if (!response.ok) {
                throw new Error("Request failed!");
            }

            const data = await response.json();
            setData(data);
            setAuthKey(data?.token);
            
        } catch (err) {
            setError(err);
        }
        setIsLoading(false);
    }, []);

    return {
        isLoading,
        error,
        data,
        authKey,
        setAuthKey,
        sendRequest,
    };
};

export default useHttp;