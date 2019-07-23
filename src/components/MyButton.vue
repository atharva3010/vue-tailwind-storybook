<template>
  <button class="text-white font-bold py-2 px-4" :class="[color, size, hover, borderRadius, shadow, textSize]">
    {{title}}
  </button>
</template>

<script>
export default {
  name: 'my-button',
  props: {
    title: String,
    size: String,
    color: String,
    hover: String,
    borderRadius: String,
    shadow: String,
    textSize: String,
    disabled: Boolean
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  padding: 10px 15px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 0;
  width: 200px;
  cursor: pointer;
  &.wide {
    width: 100%;
  }
  &.large {
    width: 400px;
  }
  &.small {
    width: 100px;
  }
  &.gray {
    background: #828384;
  }
  &.blue {
    background: #3e61ff;
  }
}
</style>
