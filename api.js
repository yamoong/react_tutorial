import axios from "axios";

const api = axios.create({
    baseURL: ,
    params: {
        api_key:"a8239743a7c223ac6bbf132de3aec270",
        language: "en-US"
    }
});

export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: id => api.get(`movie/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    search: term => 
        api.get("search/movie", {
            params: {
                query: encodeURIComponent(term)
            }
        })
};

export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () =>  api.get("tv/airing_today"),
    showDetail: id => 
        api.get(`tv/${id}`, {
            params:{
                append_to_response:"videos"
            }
        }),
    search: term =>
        api.get("search/tv", {
            params: {
                query: encodeURIComponent(term)
            }
        })
};