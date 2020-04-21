<template>
  <main class="page">
    <article
      class="theme-default-content"
      itemscope
      itemtype="https://schema.org/BlogPosting"
    >
      <header>
        <h1 class="post-title" itemprop="name headline">
          {{ $frontmatter.title }}
        </h1>
        <PostMeta
          :tags="$frontmatter.tags"
          :author="$frontmatter.author"
          :date="$frontmatter.date"
          :location="$frontmatter.location"
        />
      </header>
      <Content itemprop="articleBody" />
    </article>
    <ul v-if="$frontmatter.tags" class="post-meta-tags" itemprop="keywords">
      <PostTag v-for="tag in resolvedTags" :key="tag" :tag="tag" />
    </ul>
    <Toc />
    <Comment />
    <PageEdit />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import {Comment} from '@vuepress/plugin-blog/lib/client/components'
import Toc from '@theme/components/Toc.vue'
import PostMeta from '@theme/components/PostMeta.vue'
import PostTag from '@theme/components/PostTag.vue'

export default {
  components: { PageEdit, PageNav, Comment, Toc, PostMeta, PostTag },
  props: ['sidebarItems'],
  data() {
    return {
      renderingKey: 0,
    };
  },
  methods: {
    forceRerender() {
      this.renderingKey += 1;
      console.log("rerender");
    }
  },
  computed: {
    resolvedTags() {
      if (!this.$frontmatter.tags || Array.isArray(this.$frontmatter.tags)) return this.$frontmatter.tags
      return [this.$frontmatter.tags]
    },
  },
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block

</style>
