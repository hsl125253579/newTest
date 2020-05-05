<template>
  <div id="page-top">
    <div class="lang-selector">
      <el-dropdown @command="selectLang" trigger="click">
        <div class="dropdown-title">
          <span v-text="langText[lang]"></span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="(it,key) in langText" :key="key" :command="key">
            <span v-text="it"></span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <ul class="nav">
      <li>
        <span class="login">登录</span>
        <span>注册</span>
      </li>
      <li>帮助中心</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "indexTop",
  data() {
    return {
      //   lang: "zh",
      langText: {
        zh: "中文简体",
        tw: "中文繁体",
        en: "English"
      }
    };
  },
  computed: {
    ...mapState(["lang"])
  },
  methods: {
    ...mapMutations(["changeLang"]),
    selectLang(lang) {
      this.changeLang(lang);
    }
  },
  mounted() {
    console.log(this.$store);
  }
};
</script>

<style lang="scss">
#page-top {
  height: 30px;
  width: 100%;
  background: #014c72;
  padding: 0 100px;
  position: fixed;
  left: 0;
  top: 0;
  .lang-selector {
    float: left;
  }
  .dropdown-title {
    color: #fff;
    line-height: 30px;
  }
  .nav {
    float: right;
    li {
      float: left;
      color: #fff;
      line-height: 30px;
      padding: 0 20px;
      position: relative;
      &:after {
        content:"";
        width: 1px;
        height: 14px;
        position: absolute;
        right: 0;
        top: 8px;
        background: #fff;
      }
      &:last-child:after{display: none}
      .login{margin-right:20px;cursor: pointer;}
    }
  }
}
</style>