<template>
  <div id="base-list-layout">
    <div class="ui-posts" itemscope itemtype="http://schema.org/Blog">
        <article
            v-for="page in $pagination.pages"
            :key="page.key"
            class="ui-post"
            itemprop="blogPost"
            itemscope
            itemtype="https://schema.org/BlogPosting"
        >
            <meta itemprop="mainEntityOfPage" :content="page.path" />

            <header class="ui-post-title" itemprop="name headline">
            <router-link  :to="page.path">{{ page.title }}</router-link>
            </header>

            <p class="ui-post-summary" itemprop="description">
            {{ page.frontmatter.summary || page.summary }}
            <!-- <Content :page-key="page.key" slot-key="intro"/>-->
            </p>

            <footer>
            <div
                v-if="page.frontmatter.author"
                class="ui-post-meta ui-post-author"
                itemprop="publisher author"
                itemtype="http://schema.org/Person"
                itemscope
            >
                <NavigationIcon />
                <span itemprop="name">{{ page.frontmatter.author }}</span>
                <span v-if="page.frontmatter.location" itemprop="address">
                &nbsp; in {{ page.frontmatter.location }}
                </span>
            </div>

            <div v-if="page.frontmatter.date" class="ui-post-meta ui-post-date">
                <ClockIcon />
                <time
                pubdate
                itemprop="datePublished"
                :datetime="page.frontmatter.date"
                >
                {{ resolvePostDate(page.frontmatter.date) }}
                </time>
            </div>

            <div
                v-if="page.frontmatter.tags"
                class="ui-post-meta ui-post-tag"
                itemprop="keywords"
            >
                <TagIcon />
                <router-link
                v-for="tag in resolvePostTags(page.frontmatter.tags)"
                :key="tag"
                :to="'/tag/' + tag"
                >
                {{ tag }}
                </router-link>
            </div>
            </footer>
        </article>
    </div>

    <component
      :is="paginationComponent"
      v-if="$pagination.length > 1 && paginationComponent"
    ></component>
  </div>
</template>

<script>
var THEME_BLOG_PAGINATION_COMPONENT = SimplePagination;
import Vue from 'vue'
import dayjs from 'dayjs'
import { NavigationIcon, ClockIcon, TagIcon } from '../../../node_modules/vue-feather-icons'
import {
  Pagination,
  SimplePagination,
} from '@vuepress/plugin-blog/lib/client/components'
export default {
  name: 'listLayout',
  components: { NavigationIcon, ClockIcon, TagIcon },
  data() {
    return {
      paginationComponent: null,
    }
  },
  computed: {
    pages() {
      return this.$pagination.pages
    },
  },
  created() {
    this.paginationComponent = this.getPaginationComponent()
  },
  methods: {
    getPaginationComponent() {
      const n = THEME_BLOG_PAGINATION_COMPONENT
      if (n === 'Pagination') {
        return Pagination
      }
      if (n === 'SimplePagination') {
        return SimplePagination
      }
      return Vue.component(n) || Pagination
    },
    resolvePostDate(date) {
      return dayjs(date).format(
        this.$themeConfig.dateFormat || 'ddd MMM DD YYYY'
      )
    },
    resolvePostTags(tags) {
      if (!tags || Array.isArray(tags)) return tags
      return [tags]
    },
  },
}
</script>

<style lang="stylus">
#base-list-layout
    @media screen and (min-width: 1500px)
        padding-top 5%
        width 40%
    @media screen and (max-width: 1499px) and (min-width: 1000px)
        padding-top 7%
        width 50%
    @media screen and (max-width: 999px) and (min-width: 700px)
        width 80%
    @media screen and (max-width: 699px)
        padding-top 15%
        width 90%
    padding-top 10%
    margin 0 auto
.common-layout
  .content-wrapper
    padding-bottom 80px
.ui-post
  border-radius: 1.3%
  padding-top: 25px
  padding-bottom 25px
  padding-right: 15px
  padding-left: 15px
  /*margin-bottom 25px*/
  border-bottom 1px solid $borderColor
  &:last-child
    border-bottom 0px
    margin-bottom 0px
.ui-post-title
  font-size 28px
  font-family: "Gugi"
  border-bottom 0
  a
    cursor pointer
    color rgba($darkTextColor, 0.54)
    transition all 0.2s
    text-decoration none
    &:hover
      /*text-decoration underline*/
      color $darkTextColor
.ui-post-summary
  font-size 14px
  color rgba($darkTextColor, 0.54)
  font-weight 200
.ui-post-meta
  display inline-flex
  align-items center
  font-size 12px
  line-height 12px
  &:not(:last-child)
    margin-bottom 3px
    margin-right 20px
  svg
    margin-right 5px
    width 14px
    height 14px
  @media (max-width: $MQMobile)
    display flex
    &:not(:last-child)
      margin-bottom 10px
.ui-post-author
  color rgba($darkTextColor, 0.84)
  font-weight 400
.ui-post-date
  color rgba($darkTextColor, 0.54)
  font-weight 200
.ui-post-tag
  color rgba($darkTextColor, 0.54)
  font-weight 200
  a
    color inherit
    font-weight 200
    text-decoration none
    margin-right 5px
    &:hover
      color $accentColor
</style>