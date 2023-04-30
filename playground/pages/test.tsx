import React from 'react';
import { getServerLogger } from '../../dist';

export const getStaticProps = async () => {
	const logger = getServerLogger();
	logger.log('hello static props');
	return {
		props: {
			...logger.getLoggerProps(),
		},
	};
};

export default function Text() {
	return (
		<div>
			<h1>hello test</h1>
		</div>
	);
}
