import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { AppProps } from "next/app"
import NextNProgress from "nextjs-progressbar"
import "../styles/globals.css"

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<NextNProgress color="#dc2626" options={{ showSpinner: false }} />
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />
			</QueryClientProvider>
		</>
	)
}

export default MyApp
