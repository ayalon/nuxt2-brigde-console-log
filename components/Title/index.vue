<template>
  <h1>{{ title }}</h1>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Title extends Vue {
  @Prop() readonly title!: string

  get test() {
    let myString = '123'

    // Intentionally added to fail the typecheck.
    myString = {}
    return '123'
  }
}
</script>
