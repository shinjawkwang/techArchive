<template>
  <li class="post-tag">
    <router-link :to="'/tag/' + tag"> {{ tag }} </router-link>
  </li>
</template>

<script>
export default {
  name: 'PostTag',
  props: {
    tag: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="stylus">
.post-tag
  background-color rgba($darkTextColor, 0.1)
  border-radius 3px 0 0 3px
  height 26px
  padding 0 10px 0 10px
  position relative
  cursor pointer
  &:not(:last-child)
    margin-right 10px
  a
    color rgba($darkTextColor, 0.54)
    text-decoration none
    transition color 0.2s
  &:after
    position absolute
    right 0
    top 0
    background $bgColor
    border-bottom 13px solid transparent
    border-left 10px solid $postTagBgColor
    border-top 13px solid transparent
    content ''
</style>