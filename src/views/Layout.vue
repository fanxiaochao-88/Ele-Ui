<template>
  <div>
    <el-row>
      <el-col :span='24'>24</el-col>
    </el-row>

    <el-row>
      <el-col :span='18'>18</el-col>
    </el-row>

    <el-row>
      <el-col :span='6'>6</el-col>
      <el-col :span='6'>6</el-col>
      <el-col :span='6'>6</el-col>
      <el-col :span='6'>6</el-col>
    </el-row>

    <el-row>
      <el-col :span='6'>
        <div style="background-color: yellowgreen;">
          6
        </div>
      </el-col>
      <el-col :span='6'>6</el-col>
      <el-col :span='6'>6</el-col>
      <el-col :span='6'>6</el-col>
    </el-row>


    <el-row type='flex' justify='center'>
      <el-col :span='4'>4</el-col>
      <el-col :span='4'>4</el-col>
      <el-col :span='4'>4</el-col>
    </el-row>

    <el-row type='flex' justify='center'>
      <el-col :span='4' offset='1'>4</el-col>
      <el-col :span='4'>4</el-col>
      <el-col :span='4'>4</el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: 'Layout',
    data() {
      return {

      }
    },
    components: {

    }
  }
</script>

<style scoped>
  .el-row {
    background-color: #bfa;
    margin: 20px 0;
  }

  .el-col {
    background-color: orange;
    color: #fff;
    padding: 10px 0;
    box-sizing: border-box;
    border-right: 1px solid #fff;
  }
</style>