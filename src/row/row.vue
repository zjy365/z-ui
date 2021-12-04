<template>
  <div :class="['z-row',
    this.justify !== 'start' ? `is-justify-${this.justify}` : '', 
    this.align ? `is-align-${this.align}` : '',
    { 'el-row--flex': this.type === 'flex' }]" 
    :style= "rowstyle" 
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'z-row',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: Number,
    type: String,
    justify: {
      type: String,
      default: 'start'
    },
    align: String
  },
  computed: {
    rowstyle() {
      const ret = {};
      if (this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}px`;
        ret.marginRight = ret.marginLeft;
      }
      return ret;
    }
  },
}
</script>

<style lang="scss" scoped>
.z-row{
  position: relative;
  box-sizing: border-box;
  margin-bottom: 20px;
}
</style>
