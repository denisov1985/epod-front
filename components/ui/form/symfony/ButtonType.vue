<template>
  <el-form-item>
    <ui-button :full-width="fullWidth" @click="submit">Пошук</ui-button>
  </el-form-item>
</template>

<script>

export default {
  /**
   * Component name
   */
  name: 'ButtonType',

  /**
   * Props
   */
  props: {
    /**
     * Full width
     */
    fullWidth: {
      type: Boolean,
      default: false,
    }
  },

  /**
   * Inject
   */
  inject: ['formName'],

  methods: {
    submit () {
      this.$store.commit(this.formName + '/SUBMIT');
    }
  }
}
</script>
