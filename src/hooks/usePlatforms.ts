import useData from "./useData";

interface Platform {
    id: number;
    name: string;
    slug: string;

}

const usePlatforms = () => useData<Platform>('/platforms/list/parents');

export default usePlatforms;