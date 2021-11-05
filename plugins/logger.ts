import consola from 'consola'
import { Context } from '@nuxt/types'

export class ConsoleLogger {
  context: any
  constructor(context: Context) {
    this.context = context
  }

  log(msg: string) {
    console.log(msg)
    consola.info(msg)
    consola.success(msg)
  }
}

export default (context: Context, inject: any) => {
  inject('logger', new ConsoleLogger(context))
}
