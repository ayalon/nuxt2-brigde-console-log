<template>
  <Tutorial />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  asyncData({ $logger }) {
    $logger.log('Check console output')
  },
})
export default class Page extends Vue {}
</script>
