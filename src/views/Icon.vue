<template>
  <div class="icon">
    <i class="el-icon-edit"></i>
    <i class="el-icon-search"></i>
    <el-button type='primary' icon='el-icon-search'>
      搜索
    </el-button>

    <el-link type='primary'>这是测试连接</el-link>
    <el-link type='success'>这是测试连接</el-link>
    <el-link type='danger' href='http://www.baidu.com' disabled>这是测试连接</el-link>
    <el-link type='info' :underline='false'><i class="el-icon-search"></i>这是测试连接</el-link>

    <br>
    <hr>
    <el-button type='primary' disabled>按钮</el-button>
    <el-button type='text'>按钮</el-button>
    <el-button type='warning' circle class="el-icon-user"></el-button>
    <el-button type='success' round>按钮</el-button>
    <el-button type='info' plain>按钮</el-button>


    <el-row>
      <el-button-group>
        <el-button type='primary'>上一页</el-button>
        <el-button type='primary'>下一页</el-button>
      </el-button-group>
    </el-row>

    <el-button type='danger' :loading='true' size='mini'>加载中</el-button>


    <hr>

    <el-row>
      <el-radio v-model='sex' label='1'>男</el-radio>
      <el-radio v-model='sex' label='2'>女</el-radio>
    </el-row>

    <el-row>
      <el-radio-group v-model='city'>
        <el-radio label='1' border>北京</el-radio>
        <el-radio label='2'>上海</el-radio>
        <el-radio label='3'>广州</el-radio>
      </el-radio-group>

      <el-radio-group v-model='city' size='mini' @change='radioChange'>
        <el-radio-button label='1'>北京</el-radio-button>
        <el-radio-button label='2'>上海</el-radio-button>
        <el-radio-button label='3'>广州</el-radio-button>
      </el-radio-group>
    </el-row>

    <h2>选择的城市是:{{city}}</h2>

    <el-row>
      <el-checkbox-group v-model='checkList' :max=2>
        <el-checkbox label='音乐'></el-checkbox>
        <el-checkbox label='电脑'></el-checkbox>
        <el-checkbox label='体育'></el-checkbox>
      </el-checkbox-group>
    </el-row>
    <el-row>
      <el-checkbox-group v-model='checkList' :max=2 @change='checkBoxChange'>
        <el-checkbox-button label='音乐'></el-checkbox-button>
        <el-checkbox-button label='电脑'></el-checkbox-button>
        <el-checkbox-button label='体育'></el-checkbox-button>
      </el-checkbox-group>
    </el-row>
    <h2>选择的兴趣为:{{checkList}}</h2>

    <el-row :gutter='5'>
      <el-col :span='6'>
        <div>
          <el-input v-model='input1' placeholder='inout1'></el-input>
        </div>
      </el-col>
      <el-col :span='6'>
        <div>
          <el-input v-model='input2' placeholder='inout2' clearable></el-input>
        </div>
      </el-col>
      <el-col :span='6'>
        <div>
          <el-input v-model='input3' placeholder='inout3' show-password></el-input>
        </div>
      </el-col>
      <el-col :span='6'>
        <div>
          <el-input v-model='input4' placeholder='inout4' maxlength='4' show-word-limit></el-input>
        </div>
      </el-col>
    </el-row>


    <el-row :gutter='5'>
      <el-col :span='8'>
        <div>
          <el-input placeholder='前置图标' prefix-icon='el-icon-search'></el-input>
        </div>
      </el-col>
      <el-col :span='8'>
        <div>
          <el-input placeholder='后置图标' suffix-icon='el-icon-date'></el-input>
        </div>
      </el-col>
      <el-col :span='8'>
        <div>
          <el-input>
            <i slot="suffix" class="el-input__icon el-icon-date"></i>
          </el-input>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-input type='textarea' v-model='area' autosize></el-input>
    </el-row>

    <hr>
    <el-row :gutter='5'>
      <el-col :span='8'>
        <div>
          <el-input>
            <template slot='prepend'>http://</template>
          </el-input>
        </div>
      </el-col>
      <el-col :span='8'>
        <div>
          <el-input>
            <template slot='append'>.com</template>
          </el-input>
        </div>
      </el-col>
      <el-col :span='8'>
        <div>
          <el-autocomplete v-model="state" :fetch-suggestions="querySearchAsync" placeholder="请输入内容"
            @select="handleSelect"></el-autocomplete>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Icon',
    data() {
      return {
        sex: '1',
        city: '3',
        checkList: [],
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        area: '',
        showMessage: [],
        state: ''
      }
    },
    components: {

    },
    mounted() {
      this.showMessage = this.loadAll()
    },
    methods: {
      radioChange(e) {
      },
      checkBoxChange(e) {
        console.log(e);
      },
      querySearchAsync(queryString, cb) {
        var showMessage = this.showMessage;
        var results = queryString ? showMessage.filter(this.createStateFilter(queryString)) : showMessage;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
          { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
          { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
          { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
          { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
          { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
          { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
          { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
          { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
          { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
          { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
          { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
          { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
          { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
          { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
          { "value": "枪会山", "address": "上海市普陀区棕榈路" },
          { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
          { "value": "钱记", "address": "上海市长宁区天山西路" },
          { "value": "壹杯加", "address": "上海市长宁区通协路" },
          { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
          { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
          { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
          { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
          { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
          { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
          { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
          { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
          { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
          { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
          { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
          { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
          { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
          { "value": "浏阳蒸菜", "address": "天山西路430号" },
          { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
          { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
          { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
          { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
          { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
          { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
          { "value": "阳阳麻辣烫", "address": "天山西路389号" },
          { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
        ];
      },
    },
  }
</script>

<style scoped>
  .el-icon-edit {
    font-size: 30px;
  }
</style>