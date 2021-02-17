<template>
  <div class="container">
    <el-container>
      <el-header>header</el-header>
      <el-container>
        <el-aside>aside</el-aside>
        <el-main>main</el-main>
      </el-container>
      <el-footer>footer</el-footer>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'Container',
    data() {
      return {

      }
    },
    components: {

    }
  }
</script>

<style scoped>
  .el-container {
    background-color: #bfa;
    color: #fff;
  }

  .el-header {
    background-color: #f00;
  }

  .el-footer {
    background-color: #0f0;
  }

  .el-aside {
    background-color: #00f;
    max-width: 200px;
    min-height: 350px;
  }

  .el-main {
    background-color: #ff0;
    min-height: 350px;
  }
</style>