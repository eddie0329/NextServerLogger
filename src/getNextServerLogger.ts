import { nextServerLogger } from './NextServerLogger';

export const getServerLogger = (): Pick<
	typeof nextServerLogger,
	'log' | 'getAppLoggerProps' | 'getLoggerProps'
> => nextServerLogger;
