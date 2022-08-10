import Link from "next/link"
import { IoIosArrowBack } from "react-icons/io"

const BackButton = () => {
	return (
		<Link href="/">
			<div className="px-2 py-1 text-sm flex gap-1 items-center bg-slate-700 rounded-lg cursor-pointer absolute left-4 top-3 z-10 opacity-75">
				<IoIosArrowBack />
				<span>Back</span>
			</div>
		</Link>
	)
}

export default BackButton
