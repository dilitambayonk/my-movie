import type { NextPage } from "next"
import Header from "../src/components/molecules/Header/Header"
import SectionHomeNowPlaying from "../src/components/organisms/Sections/SectionHomeNowPlaying/SectionHomeNowPlaying"
import SectionHomePopular from "../src/components/organisms/Sections/SectionHomePopular/SectionHomePopular"
import SectionHomeTopRated from "../src/components/organisms/Sections/SectionHomeTopRated/SectionHomeTopRated"
import SectionHomeUpcoming from "../src/components/organisms/Sections/SectionHomeUpcoming/SectionHomeUpcoming"
import HomeTemplate from "../src/components/templates/HomeTemplate/HomeTemplate"

const Home: NextPage = () => {
	return (
		<HomeTemplate>
			<Header />
			<SectionHomeNowPlaying />
			<SectionHomeUpcoming />
			<SectionHomePopular />
			<SectionHomeTopRated />
		</HomeTemplate>
	)
}

export default Home
