<template>
  <ui-builder :tree="tree" />
</template>

<script>
import Vue from 'vue'
import {mapState} from "vuex";

export default Vue.extend({
  name: 'IndexPage',

  /**
   * Computed props
   */
  computed: {
    ...mapState({
      tree: state => state.tree,
    })
  },
})
</script>
