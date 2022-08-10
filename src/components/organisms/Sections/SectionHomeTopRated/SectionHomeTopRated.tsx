import { useQuery } from "@tanstack/react-query"
import ScrollContainer from "react-indiana-drag-scroll"
import { serviceAPI } from "../../../../services/API"
import ErrorMessage from "../../../atoms/ErrorMessage/ErrorMessage"
import Loader from "../../../atoms/Loader/Loader"
import Title from "../../../atoms/Title/Title"
import CardMovie from "../../../molecules/CardMovie/CardMovie"

const SectionHomeTopRated = () => {
	const { isLoading, error, data } = useQuery(["movieTopRated"], () => serviceAPI.getListMovieTopRated())

	// console.log(data)

	if (isLoading) return <Loader />

	if (error) return <ErrorMessage />

	return (
		<div className="p-4">
			<div className="mb-4">
				<Title>Top Rated</Title>
			</div>
			<ScrollContainer className="grid grid-flow-col gap-4">
				{data?.results?.map((movie: any) => (
					<CardMovie key={movie.id} id={movie.id} poster={movie.poster_path} title={movie.title} star={movie.vote_average} />
				))}
			</ScrollContainer>
		</div>
	)
}

export default SectionHomeTopRated
