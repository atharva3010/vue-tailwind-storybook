<template>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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
