export const mockApiCall = (input: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (input.toLowerCase() === "error") {
                reject("Mock error: Something went wrong!");
            } else {
                resolve(`Mock API Response: You entered "${input}"`);
            }
        }, 1000);
    });
};
