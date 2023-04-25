import type { AppContext, AppProps } from 'next/app';
import { NextServerLoggerProvider, getServerLogger } from '../../dist';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<NextServerLoggerProvider pageProps={pageProps} />
			<Component {...pageProps} />
		</>
	);
}

App.getInitialProps = async ({ Component, ctx }: AppContext) => {
	let pageProps = {};
	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx);
	}
	const logger = getServerLogger();
	logger.log('hello world');

	return {
		pageProps: { ...pageProps, ...logger.getAppLoggerProps() },
	};
};
