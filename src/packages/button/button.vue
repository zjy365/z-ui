<template>
  <button
    class="z-button"
    :class="[`z-button--${type}`, {'is-plain': plain, 'is-round': round, 'is-circle': circle, 'is-disabled': disabled, 'is-loading': loading,'is-raised': raised }]"
  >
    <z-icon  icon="icon-jiazaizhong1" class="z-icon-loading" v-if="loading"></z-icon>
    <z-icon :icon="icon"  v-if="icon && !loading"></z-icon>
    <span>
      <slot></slot>
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
    },
    icon: {
        type: String,
        default: ''
    },
    raised: {
        type: Boolean,
        default: false
    },
    loading: Boolean,
  }
}
</script>

<style lang="scss" scoped>

$default: #409eff;
$success: #67c23a;
$danger: #f56c6c;
$info: #909399;
$warn: #cf9236;
$font-color: #f1f2f3;

@each $type, $color in (default, $default),(success, $success),(danger, #{$danger}), (info, #{$info}) , (warn, $warn) {
  .z-button--#{$type} {
    background-color: $color;
  }
}

.z-button {
  box-sizing: border-box;
  outline: none;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  text-align: center;
  padding: 10px 20px;
  color: $font-color;

  &:hover{
    opacity: .75;
  }
  // 朴素
  &.is-plain{
    background-color: #ffffff;
    color: black;
    &:hover{
      background-color: #e5e5e5;
    }
  }
  // 禁用
  &.is-disabled{
    cursor: not-allowed;
    opacity: .7;
    &:hover, &:active{
      opacity: .7;
    }
  }
  // 圆形
  &.is-circle{
    border-radius: 50%;
    padding: 10px;
    width: 40px;
    height: 40px;
  }
  // 圆角
  &.is-round{
    border-radius: 40px;
    padding: 10px 23px;
  }
  // 加载中
  &.is-loading{
    opacity: .7;
  }
  &.z-icon-loading{
    animation: rotating 2s linear infinite !important;
  }
  // 悬浮效果
  &.is-raised{
    box-shadow: 0 4px 12px  rgba(0, 0, 0, 0.329)
  }
}
</style>
