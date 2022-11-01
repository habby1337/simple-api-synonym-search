import { useState } from "react";
import { fetchSynonyms } from "../api/fetchSynonyms";

export type Synonym = {
    word: string;
    score: number;
};


export const useGetSynonyms = () => {
    const [synonyms, setSynonyms] = useState<Synonym[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const getSynonyms = async (word: string) => {
        setIsLoading(true);
        return fetchSynonyms(word)
            .then(setSynonyms)
            .then(() => setIsLoading(false));
    };

    return {isLoading, synonyms, getSynonyms}
}