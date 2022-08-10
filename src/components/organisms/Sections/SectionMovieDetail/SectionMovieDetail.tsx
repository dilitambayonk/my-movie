import Image from "next/image"
import { AiFillStar } from "react-icons/ai"
import BackButton from "../../../atoms/BackButton/BackButton"
import { MdFavorite, MdFavoriteBorder } from "react-icons/md"
import { useEffect, useState } from "react"
import { Toast } from "../../../../services/Toast"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

interface SectionMovieDetailInterface {
	movie: any
}

const SectionMovieDetail = (props: SectionMovieDetailInterface) => {
	const { id, backdrop_path, original_title, vote_average, overview, genres } = props?.movie
	const [isFavorite, setIsFavorite] = useState(false)
	const [isLogin, setIsLogin] = useState(false)

	useEffect(() => {
		window.localStorage.getItem("token") && setIsLogin(true)
		window.localStorage.getItem(id) && setIsFavorite(true)
	}, [])

	const handleAddFavorite = () => {
		setIsFavorite(true)
		window.localStorage.setItem(id, JSON.stringify(props.movie))
		Toast.success("This movie added Favorite")
	}

	const handleRemoveFavorite = () => {
		setIsFavorite(false)
		window.localStorage.removeItem(id)
		Toast.info("This movie has remove from Favorite")
	}

	return (
		<div className="max-w-xl mx-auto">
			<BackButton />
			<div className="w-full relative">
				{isLogin && (
					<div className="absolute right-2 bottom-3 z-10 cursor-pointer">
						{isFavorite && <MdFavorite onClick={handleRemoveFavorite} size="2em" color="#dc2626" />}
						{!isFavorite && <MdFavoriteBorder onClick={handleAddFavorite} size="2em" />}
					</div>
				)}
				<div className="relative">
					<Image loader={() => `http://image.tmdb.org/t/p/w500${backdrop_path}`} src={`http://image.tmdb.org/t/p/w500${backdrop_path}`} width={700} height={350} objectFit="cover" alt={original_title} />
				</div>
			</div>
			<div className="px-4">
				<p className="text-2xl font-semibold">{original_title}</p>
				<div className="my-2 text-amber-400 flex items-center">
					<AiFillStar size="1.3em" />
					<AiFillStar size="1.3em" />
					<AiFillStar size="1.3em" />
					<AiFillStar size="1.3em" />
					<AiFillStar size="1.3em" />
					<p className="ml-2 text-lg font-medium">{vote_average.toFixed(1)}</p>
				</div>
				<div className="flex flex-wrap gap-2">
					{genres.map((gen: any) => (
						<span key={gen.id} className="px-4 py-2 text-sm bg-slate-800 rounded-lg">
							{gen.name}
						</span>
					))}
				</div>
			</div>
			<hr className="my-4 border-0 h-px bg-slate-800" />
			<div className="px-4">
				<p className="text-slate-500">Overview :</p>
				<p className="my-2 text-slate-300">{overview}</p>
			</div>
			<ToastContainer />
		</div>
	)
}

export default SectionMovieDetail
