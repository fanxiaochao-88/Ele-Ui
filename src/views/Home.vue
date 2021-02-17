<template>
  <div class="home">
    <el-row :gutter='5'>
      <el-col :span='8'>
        <el-input-number v-model='number'></el-input-number>
      </el-col>
      <el-col :span='8'>
        <el-input-number v-model='number' :min='1' :max='10' @change='numberChange'></el-input-number>
      </el-col>

      <el-col :span='8'>
        <el-input-number v-model='number' :step='2' :precision='2' controls-position='right'></el-input-number>
      </el-col>
    </el-row>


    <el-row>
      <el-col :span='6'>
        <el-select placeholder='请下拉' v-model='value'>
          <el-option v-for='item in options' :value='item.value' :label='item.label' :key='item.value'>

          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span='6'>
        <el-select placeholder='请下拉' v-model='value'>
          <el-option v-for='item in options' :value='item.value' :label='item.label' :key='item.value'
            :disabled='item.value==2'>

          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span='6'>
        <el-select placeholder='请下拉' v-model='value' filterable>
          <el-option v-for='item in options' :value='item.value' :label='item.label' :key='item.value'>

          </el-option>
        </el-select>
      </el-col>
    </el-row>

    <el-switch v-model="switch1" active-color="#13ce66" inactive-color="#ff4949" active-text='打开' inactive-text='关闭'>
    </el-switch>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'Home',
    data() {
      return {
        switch1: true,
        number: 0,
        value: '',
        options: [
          {
            value: 1,
            label: '北京'
          },
          {
            value: 2,
            label: '上海'
          },
          {
            value: 3,
            label: '广州'
          }
        ]
      }
    },
    components: {
    },
    methods: {
      numberChange(e) {
        console.log(e);
      }
    },
  }
</script>