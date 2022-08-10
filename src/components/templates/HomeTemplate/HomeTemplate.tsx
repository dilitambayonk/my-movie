import { ReactNode } from "react"

interface HomeTemplateInterface {
	children: ReactNode
}

const HomeTemplate = (props: HomeTemplateInterface) => {
	return (
		<div className="bg-slate-900 min-h-screen text-white">
			<div className="h-full">{props.children}</div>
		</div>
	)
}

export default HomeTemplate
