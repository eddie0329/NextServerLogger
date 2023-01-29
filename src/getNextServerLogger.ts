import {NextServerLoggerInstance, nextServerLogger} from '@/NextServerLogger'

interface OpenedServerLoggerInterface {
    log: NextServerLoggerInstance['log']
    getLoggerProps: NextServerLoggerInstance['getLoggerProps']
    getAppLoggerProps: NextServerLoggerInstance['getAppLoggerProps']
}

export const getServerLogger = (): OpenedServerLoggerInterface => nextServerLogger
