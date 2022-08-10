import { ReactNode } from "react"

interface TitleInterface {
	children: ReactNode
}

const Title = (props: TitleInterface) => {
	return (
		<>
			<p className="font-semibold text-xl">{props.children}</p>
			<hr className="border-0 w-16 h-1 bg-red-500 rounded-full" />
		</>
	)
}

export default Title
