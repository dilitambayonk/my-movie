import React from "react"
import SectionMovieDetail from "../../src/components/organisms/Sections/SectionMovieDetail/SectionMovieDetail"
import HomeTemplate from "../../src/components/templates/HomeTemplate/HomeTemplate"
import { serviceAPI } from "../../src/services/API"

interface MovieDetailInterface {
	movie: any
}

const MovieDetail = (props: MovieDetailInterface) => {
	return (
		<HomeTemplate>
			<SectionMovieDetail movie={props.movie} />
		</HomeTemplate>
	)
}

export default MovieDetail

export const getServerSideProps = async (context: any) => {
	const { id } = context.query
	const movie: any = (await serviceAPI.getMovieDetail(id)) || {}

	return {
		props: {
			movie,
		},
	}
}

// export const getStaticPaths = async () => {
// 	let listMovie = []
// 	const nowPlaying = await serviceAPI.getListMovieNowPlaying()
// 	const upcoming = await serviceAPI.getListMovieUpcoming()
// 	const popular = await serviceAPI.getListMoviePopular()
// 	const topRated = await serviceAPI.getListMovieTopRated()

// 	listMovie.push(nowPlaying.results)
// 	listMovie.push(upcoming.results)
// 	listMovie.push(popular.results)
// 	listMovie.push(topRated.results)

// 	const paths = listMovie.map((movie: any) => {
// 		return {
// 			params: {
// 				id: `${movie.id}`,
// 			},
// 		}
// 	})

// 	return {
// 		paths,
// 		fallback: true,
// 	}
// }

// export const getStaticProps = async (contex: any) => {
// 	const { id } = contex.params
// 	const movie: any = (await serviceAPI.getMovieDetail(id)) || {}

// 	return {
// 		props: {
// 			movie,
// 		},
// 	}
// }
