<template>
  <div>Foo: {{ $route.query.mode }}</div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component
export default class UploadTodoList extends Vue {
    

}
</script>