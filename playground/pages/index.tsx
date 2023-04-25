import { getServerLogger } from '../../dist';

export const getServerSideProps = () => {
	const logger = getServerLogger();
	logger.log('hello world server side props');
	return {
		props: {
			...logger.getLoggerProps(),
		},
	};
};

export default function Home() {
	return (
		<div>
			<h1>hello playground</h1>
		</div>
	);
}
