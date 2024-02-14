import axios from "axios";

export const collections = () => {
	const all = useState<any[]>("all-transactions", () => []);
	const art = useState<any[]>("art-transactions", () => []);
	const music = useState<any[]>("music-transactions", () => []);
	const photography = useState<any[]>("pic-transactions", () => []);
	const gaming = useState<any[]>("gaming-transactions", () => []);

	const load = (val: any, url: string) => {
		const axiosConfig: any = {
			method: "get",
			url: `${useRuntimeConfig().public.BE_API}/collections${url}`,
			timeout: 20000,
			// headers: {
			//     Authorization: "Bearer " + useAuth().userData.value?.token,
			// },
		};

		axios
			.request(axiosConfig)
			.then((response) => {
				val.value = response.data;
				// console.log(users.value);
			})
			.catch((error): void => {
                console.log(error)
            });
	};

    load(all, "");
    load(art, "/category/art")
    load(music, "/category/music")
    load(photography, "/category/photography")
    load(gaming, "/category/gaming")

    return {
        all, art, music, photography, gaming
    };
};
