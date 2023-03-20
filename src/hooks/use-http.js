import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, sethttpError] = useState(null);

  const sendRequest = useCallback(async (config, transformData) => {
    setIsLoading(true);
    try {
      const response = await fetch(config["url"], {
        method: config["method"] ? config["method"] : "GET",
        headers: config["headers"] ? config["headers"] : {},
        body: config["body"] ? JSON.stringify(config["body"]) : null,
      });

      if (!response.ok) {
        throw new Error("Something went wrong...");
      }

      const data = await response.json();

      transformData(data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      sethttpError(error.message);
    }
  }, []);

  return {
    isLoading,
    httpError,
    sendRequest,
  };
};

export default useHttp;
