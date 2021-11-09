<template>
  <div>
    <h1>{{ film.title }}</h1>
    <p>Director: {{ film.director }}</p>
    <nuxt-link to="/list">To the list</nuxt-link>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { FilmByIdQuery, FilmFragment } from '~/types/graphql-operations'

@Component({
  asyncData({ app, params }) {
    const variables = {
      filmId: params.id,
    }
    return app.$graphql.query('film', variables).then((data: FilmByIdQuery) => {
      return {
        film: (data?.film as FilmFragment) || {},
      }
    })
  },
  head(this: Film) {
    return {
      title: this.film.title || '',
    }
  },
})
export default class Film extends Vue {
  film: FilmFragment = {}
}
</script>
