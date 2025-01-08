<template>
  <div class="login-container">
    <div class="video">
      <img
        width="1920px"
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhuayun.com%2Fupload%2Fimage%2F20210630%2F6235750749c13957c2b000cefcc77959.jpg&refer=http%3A%2F%2Fhuayun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670576993&t=e948fd02d92e8c142e16aa17b014b13d"
        alt=""
        srcset=""
      />
    </div>

    <div class="testbox">
      <!-- 二维码登入 -->
      <div class="qrCode erweima">
        <!-- <h1 class="title" >微信扫码登录</h1> -->
        <!-- <div class="img" v-loading="loading" >
                            <img :src="qrImg" width="200px" alt="">
                            <i class="mask" v-if="showQrMask" :style="maskBg" @click="updateQr"></i>
                        </div> -->
        <!-- <p>
                            <svg class="icon-wx" aria-hidden="true">
                                <use xlink:href="#icon-weixin"></use>
                            </svg>
                            <b>请使用手机微信扫码登入</b>
                        </p> -->
      </div>
      <div class="role-buttons">
        <el-button type="primary" @click="switchAccountType('doctor')" :class="{ active: accountType === 'doctor' }">医生</el-button>
        <el-button type="primary" @click="switchAccountType('admin')" :class="{ active: accountType === 'admin' }">管理员</el-button>
      </div>
      <h1 class="title">骨关节炎健康管理系统</h1>
      
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
      <div></div>
        <i class="iconfont icon-icon-test"></i>
        <el-form-item label="账户" prop="username">
          <el-input
            type="text"
            v-model="ruleForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <i class="iconfont icon-kaoqin3"></i>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <!-- <i class="iconfont icon-shouji-iphone12-zhengmian"></i> -->
        <!-- <el-form-item label="验证码" prop="captcha" type="text">
            <el-input v-model.number="ruleForm.captcha"></el-input>
            </el-form-item> -->
        <el-form-item>
          <el-button type="primary" @click="directSubmit">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import * as api from "@/api/users.js";
// 声明3个常规校验函数
// 校验验证码
var validateCaptcha = (rule, value, callback) => {
  if (value.length !== 5) {
    // callback('验证码必须是五位')
  } else {
    callback();
  }
};

// 校验用户名
var validateUsername = (rule, value, callback) => {
  // 用户名正则，3到16位（字母，数字，下划线，减号）
  var uPattern = /^[a-zA-Z0-9_-]{3,16}$/;
  if (uPattern.test(value)) {
    callback();
  } else {
    callback("3到16位(字母，数字，下划线，减号)");
  }
};

// 校验密码
var validatePassword = (rule, value, callback) => {
  var reg = /^[a-zA-Z0-9_-]{3,16}$/;
  if (!reg.test(value)) {
    callback("3到16位(字母，数字，下划线，减号)");
  } else {
    callback();
  }
};

export default {
  data() {
    return {
      accountType: 'doctor',
      ruleForm: {
        username: "",
        password: "",
        captcha: "",
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
        // captcha: [
        //   { validator: validateCaptcha, trigger: 'blur' }
        // ]
      },
    };
    
  },
  
  methods: {
    switchAccountType(type) {
      this.accountType = type;
      // 你可以在这里根据账户类型调整表单的验证规则或其他逻辑
      if (type === 'doctor') {
        console.log("doctor")
        // 设置医生账号的特定规则或提示信息
      } else if (type === 'admin') {
        console.log("admin")
        // 设置管理员账号的特定规则或提示信息
      }
    },
    directSubmit() {
      // 模拟登录成功
      let aim = {
        Response: {
          Desc: "登录成功",
          Data: {
            User: {
              UserName: this.ruleForm.username,
              UserPassword: this.ruleForm.password,
              Area: {
                AreaName: "Example Area",
              },
            },
          },
        },
      };

      // 存储用户信息到本地
      localStorage.setItem("userinfo", JSON.stringify(aim));

      // 跳转到主页
      this.$router.push("/Home").catch((err) => {
        console.error("Navigation failed:", err);
      });
    },
    
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
/* 修改element-ui的样式 */
.login-container {
  text-align: center;
  overflow: hidden;
  height: 100%;
}
.video {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  img {
    height: 100%;
  }
}
.el-input {
  /deep/.el-input__inner {
    width: 250px;
  }
}
.testbox {
  position: relative;
  margin: 172px auto;
  border-radius: 5px;
  width: 500px;
  background-color: rgba(161, 162, 163, 0.3);
  padding: 0 0px 50px 0;
  box-sizing: border-box;

  .cornerMark {
    font-size: 60px;
    color: #fff;
    position: absolute;
    right: -1px;
    top: -1px;
    cursor: pointer;
    opacity: 0.7;
  }

  .title {
    text-align: center;
    margin: 0 -25px 50px 0;
    color: rgb(112, 107, 107);
  }
}
.iconfont {
  position: absolute;
  font-size: 30px;
  left: 20px;
  
}
.icon-kaoqin3 {
  
}
.icon-shouji-iphone12-zhengmian {
  top: 268px;
  left: 18px;
}

.qrCode {
  width: 400px;
  position: absolute;
  right: -24px;
  bottom: 10px;
}

.icon-wx {
  width: 25px !important;
  height: 25px !important;
  vertical-align: -7px;
  margin-right: 3px;
}

.erweima .img {
  display: inline-block;
  position: relative;
  width: 200px;
  height: 200px;

  img {
    position: absolute;
    left: 0;
  }
}
.active {
  font-weight: bold;
  color: rgb(11, 9, 9);
}

/* 角色切换按钮的样式 */
.role-buttons {
  display: flex;
  position: relative;
  justify-content: space-between;
  margin-bottom: 20px;
  
}
.role-buttons .el-button {
  background:linear-gradient(rgba(125, 167, 231,0.5),rgba(134, 234, 243,0.5),rgba(184, 219, 227,0.5));
  width: 48%; /* 每个按钮占一半减去间距 */
  border-color: rgba(125, 167, 231,0.5);
}
</style>



