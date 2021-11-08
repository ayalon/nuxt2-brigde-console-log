<template>
  <div>
    <h1>List of Films</h1>
    <ul>
      <li v-for="film in films" :key="film.id">
        <nuxt-link :to="'film/' + film.id">{{ film.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { AllFilmsQuery } from '~/types/graphql-operations'

@Component({
  asyncData({ app }) {
    const variables = {}

    return app.$graphql
      .query('filmList', variables)
      .then((data: AllFilmsQuery) => {
        return {
          films: data?.allFilms?.films || [],
        }
      })
  },
})
export default class FilmList extends Vue {
  films = []
}
</script>
