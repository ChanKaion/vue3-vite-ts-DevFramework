<template>
  <ToolBar />
  <p>
    {{ pageName }} <span>{{ count }}</span>
  </p>
  <a-button @click="autoAdd">count++<dot-chart-outlined /></a-button>
  <p>count is {{ isEvenNumber ? 'Even' : 'odd' }} number</p>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onBeforeMount,
  onMounted,
  reactive,
  toRefs,
} from 'vue';

// 引入 antd图标组件
import { DotChartOutlined } from '@ant-design/icons-vue';
// 手动引入无法自动按需检索的antd组件
import { message } from 'ant-design-vue';

// 引入自定义组件
import ToolBar from '@/components/Toolbar.vue';

// 引入 axios 网络请求接口对象
import { graphAPI } from '@/utils/axios';

// 引入静态资源文件
import testGraph from '@/static/dataset/testGraph.json';

export default defineComponent({
  name: 'DevTemplate',
  components: {
    // 自定义页面组件
    ToolBar,
    // 第三方UI组件
    DotChartOutlined,
  },
  setup() {
    // 普通原始数据属性
    const rawData = {
      pageName: 'DevTemplate',
    };

    // 响应式数据属性
    const reactiveData = reactive({
      count: 0,
    });

    // 计算属性
    const computedData = {
      isEvenNumber: computed(() => reactiveData.count % 2 === 0),
    };

    // 内置函数辅助方法，仅作为内部使用，不供前端调用
    const innerMethods = {
      calRandomNum: (): number => Math.floor(10 * Math.random()),
    };

    // 交互方法
    const autoAdd = () => {
      reactiveData.count += innerMethods.calRandomNum();
      message.success('reactiveData.count++');
    };

    // 组件挂载前初始化方法
    onBeforeMount(() => {
      graphAPI
        .getGraph('dataset1')
        .then((res: any) => {
          console.log('获取图谱数据', res);
        })
        .catch((err: any) => {
          console.log('获取图谱数据错误', err);
        });
    });

    // 组件挂载后初始化方法
    onMounted(() => {
      console.log('引入静态资源文件', testGraph);
    });

    return {
      // 普通原始数据属性
      ...rawData,
      // 页面响应式数据属性
      ...toRefs(reactiveData),
      // 页面计算属性
      ...computedData,

      // 页面交互方法
      autoAdd,
    };
  },
});
</script>

<style lang="scss" scoped>
p {
  font-size: 20px;
  span {
    color: #cccccc;
  }
}
</style>
