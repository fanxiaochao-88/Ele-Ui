<template>
  <div>
    <el-row>
      <el-cascader v-model='value' :options='options' :props="props" :show-all-levels='false'>
      </el-cascader>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Cascader',

    data() {
      return {
        props: {
          multiple: true,
        },
        value: '',
        options: [
          {
            value: '1',
            label: '二级菜单',
            children: [
              {
                value: '11',
                label: '北京',
                children: [
                  {
                    value: '111',
                    label: '朝阳区'
                  }
                ]
              },
              {
                value: '22',
                label: '上海'
              }
            ]
          }
        ]
      }
    },
    components: {

    }
  }
</script>

<style scoped>


</style>