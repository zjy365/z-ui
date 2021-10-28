<template>
  <button
    class="z-button"
    :class="[`mc-button--${type}`, {'is-plain': plain, 'is-round': round, 'is-circle': circle, 'is-disabled': disabled }]"
  >
    <span>
      <slot>按钮</slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'z-button',
  components: {},
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round:{
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.z-button{
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  border: 0;
  &.is-plain:hover,&.is-plain:focus {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }
  &.is-round {
    border-radius: 20px;
    padding: 12px 23px;
  }
  &.is-circle {
    border-radius: 50%;
    padding: 12px;
  }
}
</style>
