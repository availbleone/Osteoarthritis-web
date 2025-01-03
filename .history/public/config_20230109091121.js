//当前运行环境 测试或发布时需要修改,只需修改该变量的值
let env = "local";

switch (env) {
    //本地开发环境接口地址
    case "local":
        // window.domain = "http://localhost:10001/test/login";
        // window.domain = "https://5b339503m6.yicp.fun/login";

    break;
    //正式生产环境接口地址，上线前需配置
    case "prod":
        window.domain = "http://172.17.1.224/login";
    break;

    default:
        window.domain = "http://localhost:10001/test/login";

    break;
}
