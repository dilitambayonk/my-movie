import Image from "next/image"
import { useRouter } from "next/router"
import { AiFillStar } from "react-icons/ai"

interface CardMovieInterface {
	id: number
	poster: string
	title: string
	star: number
}

const CardMovie = (props: CardMovieInterface) => {
	const { id, poster, title, star } = props
	const router = useRouter()

	const handelClick = () => {
		// console.log(id)
		router.push("/movie/" + id)
	}

	return (
		<div onClick={handelClick} className="group h-72 w-52 relative rounded-xl overflow-hidden cursor-pointer">
			<Image loader={() => `http://image.tmdb.org/t/p/w500${poster}`} src={`http://image.tmdb.org/t/p/w500${poster}`} width={300} height={450} objectFit="cover" alt={title} />
			<div className="absolute top-0 right-0 mr-3 mt-2 px-1 py-px bg-amber-400 rounded text-slate-900 flex items-center">
				<AiFillStar />
				<span className="pl-1 font-semibold">{star}</span>
			</div>
			<div className="absolute bottom-0 px-3 pb-3 pt-6 bg-gradient-to-t from-slate-900 w-full group-hover:pt-20">
				<p className="font-semibold text-xl leading-tight">{title}</p>
			</div>
		</div>
	)
}

export default CardMovie
