export default {
  /**
   * Inject properties
   */
  inject: ['steps', 'active', 'next', 'active', 'back', 'change', 'state'],

  /**
   * Computed properties
   */
  computed: {
    /**
     * Is back button enabled
     * @returns {boolean}
     */
    backEnabled () {
      return this.active() > 0;
    },

    /**
     * Is next button enabled
     * @returns {boolean}
     */
    nextEnabled () {
      return this.active() < this.steps.length - 1;
    },

    /**
     * Is submit button enabled
     * @returns {boolean}
     */
    submitEnabled () {
      return this.active() === this.steps.length - 1;
    },

    /**
     * Get current step props
     * @returns {*}
     */
    currentStep () {
      return this.steps[this.active()];
    },

    /**
     * Get current step state
     * @returns {*}
     */
    currentState () {
      return this.state()[this.active()];
    }
  },
}
