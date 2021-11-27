
<template>
  <div class="z-card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'">
    <div class="z-card-header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="z-card-body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'z-card',
  props: {
    header: {},
    bodyStyle: {},
    shadow: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
$--color-primary: #409EFF !default;
$--color-white: #FFFFFF !default;
$--color-black: #000000 !default;
$--color-text-primary: #303133 !default;
$--border-color-lighter: #EBEEF5 !default;

$--box-shadow-base: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04) !default;
$--box-shadow-dark: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .12) !default;
$--box-shadow-light: 0 2px 12px 0 rgba(0, 0, 0, 0.1) !default;

.z-card{
  background-color: $--color-white;
  border-radius: 4px;
  transition: 0.3s;
  border: 1px solid $--border-color-lighter;
  overflow: hidden;
  color: $--color-text-primary;
  &.is-always-shadow{
    box-shadow: $--box-shadow-light;
  }
  &.is-hover-shadow{
    &:hover,
    &:focus {
      box-shadow: $--box-shadow-light;
    }
  }
  .z-card-header{
    padding: 18px 20px;
    border-bottom: 1px solid $--border-color-lighter;
    box-sizing: border-box;
  }
  .z-card-body{
    padding: 20px;
  }
}
</style>
