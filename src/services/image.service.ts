import { useCallback } from "react";
import { useAxios } from "../helpers/axios";
import { BreedsResponse } from "../models/response/breed-response";

export function useImageService() {
    const axios = useAxios();
    
    const findAllBreeds = useCallback(
        async () => {
            try {
                const response = await axios.get<BreedsResponse>('/breeds/list/all');
                const data = response.data;
                console.log("Response data for findAllBreeds:", data);
                if (data && data.message) {
                    return Object.keys(data.message);
                } else {
                    throw new Error("Invalid response data");
                }
            } catch (error) {
                console.error("Error fetching breeds:", error);
                throw new Error("Error fetching breeds");
            }
        },
        [axios]
    );
    
    const findImageByBreeds = useCallback(
        async (breedName: string, callback?: (data: BreedsResponse) => void) => {
            try {
                const response = await axios.get<BreedsResponse>(`/breed/${breedName}/images`);
                const data = response.data;
                console.log("Response data for findImageByBreeds:", data);
                callback && callback(data);
                return data;
            } catch (error) {
                console.error("Error fetching images by breed:", error);
                throw new Error("Error fetching images by breed");
            }
        },
        [axios]
    );

    return { findAllBreeds, findImageByBreeds };
}
