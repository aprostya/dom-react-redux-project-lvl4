import { useState, useCallback } from 'react';
import { useLocalStorageState } from '../hooks/use-local-storage';

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [authKey, setAuthKey] = useLocalStorageState('token', null);

    const sendRequest = useCallback(async (requestConfig) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method ?? 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestConfig.body) ?? {},
            })

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            setData(data);
            setAuthKey(data?.token)
            
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