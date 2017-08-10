<template>
  <div id="post">
    <p>{{ str }}{{ num }}</p>
    <div class="upper">
      <post-body @addnum='getnum'></post-body>
    </div>
    <div class="bottom">
      <comment-box></comment-box>
    </div>
  </div>
</template>

<script>
  import PostBody from './PostBody'
  import CommentBox from './CommentBox'
  export default {
    name: 'post',
    data: () => ({
      num: 0,
      str: ''
    }),
    methods: {
      getnum: function (str) {
        this.str = str
        this.num ++
      }
    },
    components: { PostBody, CommentBox }
  }
</script>

<style scoped>
.upper {
  background-color: #00bcd4;
  min-height: 200px;
  display: flex;
}
.bottom {
  display: flex;
  background-color: #fafafa;
  min-height: 200px;
}
</style>
