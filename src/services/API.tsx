import axios from "axios"

const KEY = process.env.NEXT_PUBLIC_KEY
const API_AUTH = process.env.NEXT_PUBLIC_API

const getListMovieNowPlaying = async () => {
	try {
		const res: any = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=" + KEY)

		if (res) {
			return res.data
		}
	} catch (error: any) {
		console.log(error.message)
	}
}

const getListMovieUpcoming = async () => {
	try {
		const res: any = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=" + KEY)

		if (res) {
			return res.data
		}
	} catch (error: any) {
		console.log(error.message)
	}
}

const getListMoviePopular = async () => {
	try {
		const res: any = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=" + KEY)

		if (res) {
			return res.data
		}
	} catch (error: any) {
		console.log(error.message)
	}
}

const getListMovieTopRated = async () => {
	try {
		const res: any = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=" + KEY)

		if (res) {
			return res.data
		}
	} catch (error: any) {
		console.log(error.message)
	}
}

const getMovieDetail = async (id: number) => {
	try {
		const res: any = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}`)

		if (res) {
			return res.data
		}
	} catch (error: any) {
		console.log(error.message)
	}
}

const registerUser = async (credential: any) => {
	try {
		const res: any = await axios.post(`${API_AUTH}/auth/local/register`, credential)

		if (res) {
			return res.data
		}
	} catch (error: any) {
		console.log(error.message)
	}
}

const loginUser = async (credential: any) => {
	try {
		const res: any = await axios.post(`${API_AUTH}/auth/local`, credential)

		if (res) {
			return res.data
		}
	} catch (error: any) {
		console.log(error.message)
	}
}

const loginProvider = async (provider: string, accessToken: string) => {
	try {
		const res: any = await axios.get(`${API_AUTH}/auth/${provider}/callback?access_token=${accessToken}`)

		if (res) {
			return res.data
		}
	} catch (error: any) {
		console.log(error.message)
	}
}

export const serviceAPI = {
	getListMovieNowPlaying,
	getListMovieUpcoming,
	getListMoviePopular,
	getListMovieTopRated,
	getMovieDetail,
	registerUser,
	loginUser,
	loginProvider,
}
