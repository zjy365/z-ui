<template>
    <i :class="iconStyle"></i>
</template>

<script>
export default {
  name: 'z-icon',
  components: {},
  props: ['icon'],
  data () {
    return {
    }
  },
  computed: {
    iconStyle() {
      return 'iconfont'+' '+this.icon
    }
  },
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style  scoped>
@import url(//at.alicdn.com/t/font_2896007_iwp66057eos.css);

</style>
