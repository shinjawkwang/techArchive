<template>
  <div class="blog-tag">
    <router-link class="tag-name" :to="tag.path">
        #{{ tag.name }}
    </router-link>
    <span class="tag-description">
    총 {{ tag.pages.length }}개의 글
    </span>
  </div>
</template>

<script>
export default {
  props: ['tag'],
}
</script>

<style lang="stylus">
.blog-tag
  display inline-block
  padding 3% 5%
  font-size 20px
  text-align left
  box-sizing border-box
  color $darkTextColor
  text-decoration none
  transition all 0.5s
.tag-name
  padding 0 1rem
  border-radius 1rem
  display block
  clear both
  float left
  background $accentColor
  color #fff
  font-family 'Pacifico', 'Gugi', cursive
.tag-description
  display: block
  margin-top 2.5rem
  font-size 1rem
  color rgba($darkTextColor, 0.54)
@media screen and (max-width: 768px)
  .blog-tag
    font-size 14px
    padding 3px 10px
    margin-right 10px
    margin-bottom 10px
  .tag-description
    margin-top 1.875rem
    font-size 10px
</style>