import Vue from 'vue'

export declare class ConsoleLogger {
  log(msg: string): void
}

declare module 'vue/types/vue' {
  interface Vue {
    $logger: ConsoleLogger
  }
}

declare module '@nuxt/types' {
  interface Context {
    readonly $logger: ConsoleLogger
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
  interface Store<S> {
    $logger: ConsoleLogger
  }
}
