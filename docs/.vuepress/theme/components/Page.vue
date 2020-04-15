<template>
  <main class="page">
    <slot name="top" />
    <PostMeta/>
    <Content class="theme-default-content" />
    <Toc/>
    <Comment :key="renderingKey"/>
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import {Comment} from '@vuepress/plugin-blog/lib/client/components'
import Toc from '@theme/components/Toc.vue'
import PostMeta from '@theme/components/PostMeta.vue'

export default {
  components: { PageEdit, PageNav, Comment, Toc, PostMeta },
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
  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block

</style>
