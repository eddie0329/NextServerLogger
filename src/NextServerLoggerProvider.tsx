import React, { ReactElement, useEffect, useMemo } from 'react';
import {
	SERVER_LOGGER_PROPS_KEY,
	SERVER_APP_LOGGER_PROPS_KEY,
} from './constants';
import { getServerLogger } from './getNextServerLogger';

interface NextServerLoggerProviderProps {
	pageProps: any;
	enable?: boolean | true;
}

export default function NextServerLoggerProvider({
	pageProps,
	enable = true,
}: NextServerLoggerProviderProps): ReactElement {
	const serverLogger = useMemo(() => {
		return getServerLogger();
	}, []);
	useEffect(() => {
		const loggerAppStack = pageProps?.[SERVER_APP_LOGGER_PROPS_KEY] ?? [];
		const loggerServerStack = pageProps?.[SERVER_LOGGER_PROPS_KEY] ?? [];
		serverLogger
			.setEnable(enable)
			.setLoggerStack([...loggerAppStack, ...loggerServerStack])
			.printAll();
		if (loggerAppStack?.length) delete pageProps[SERVER_APP_LOGGER_PROPS_KEY];
		if (loggerServerStack?.length) delete pageProps[SERVER_LOGGER_PROPS_KEY];
	}, [pageProps]);
	return <></>;
}
