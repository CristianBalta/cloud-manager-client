import Axios, {AxiosInstance} from "axios";

export class Api {
    static axiosInstance: AxiosInstance;
    private static accessToken: string | null;
    private static authorizedRoutes: string[] = [
        "/login",
        "/register"
    ];

    private static needsAccessToken(url: string) {
        const requires = !!Api.authorizedRoutes.find(route => route !== url);
        if (requires) {
            Api.setAuthorizationHeader(Api.accessToken);
        }
    }

    public static setAuthorizationHeader(accessToken: string | null) {
        Api.accessToken = accessToken;
        Api.addInterceptor();
    }

    private static addInterceptor() {
        Api.axiosInstance.interceptors.request.use(
            async (config) => {
                if (!!Api.accessToken) {
                    config.headers = {
                        "Authorization": `Bearer ${Api.accessToken}`
                    }
                }
                return config;
            }, (error => Promise.reject(error))
        );
    }

    public static getInstance() {
        const url = "http://localhost:8080";

        if (!Api.axiosInstance) {
            Api.initialize(url);
        }
    }

    public static initialize(url: string) {
        Api.accessToken = localStorage.getItem("accessToken");
        Api.axiosInstance = Axios.create({
            baseURL: url,
            headers: {Accept: "application/json"}
        })
        Api.addInterceptor();
    }
}
