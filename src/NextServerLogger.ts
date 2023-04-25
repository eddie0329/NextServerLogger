import {stringify, parse} from 'flatted'
import {SERVER_LOGGER_PROPS_KEY, SERVER_APP_LOGGER_PROPS_KEY} from './constants'
import {isClientSide, error} from './utils'

export type NextServerLoggerInstance = InstanceType<typeof NextServerLogger>

class NextServerLogger {
    private debugEnable: boolean = true
    private loggerStack: string[] = []

    private reset() {
        this.loggerStack = []
    }

    private print(msg: string): void {
        if (!this.debugEnable) return /* guard */
        console.log('%cThis msg is printed at server:', 'color: white; background: violet;')
        console.log(...parse(msg));
    }

    setLoggerStack(loggerStack: string[]): this {
        this.loggerStack = loggerStack
        return this
    }

    setEnable(enable: boolean): this {
        this.debugEnable = enable
        return this
    }

    getAppLoggerProps(): { [SERVER_APP_LOGGER_PROPS_KEY]: string[] } {
        const prev = [...this.loggerStack]
        this.reset()
        return {
            [SERVER_APP_LOGGER_PROPS_KEY]: prev
        }
    }

    getLoggerProps(): { [SERVER_LOGGER_PROPS_KEY]: string[] } {
        const prev = [...this.loggerStack]
        this.reset()
        return {
            [SERVER_LOGGER_PROPS_KEY]: prev
        }
    }

    log(...msg: any[]): void | never {
        if (isClientSide()) error('Server Logger should use in server side.') /* guard */
        this.loggerStack.push(stringify(msg))
    }

    printAll(): void {
        this.loggerStack.forEach((msg) => {
            this.print(msg)
        })
        this.reset()
    }
}

export const nextServerLogger = new NextServerLogger()
