//当前运行环境 测试或发布时需要修改,只需修改该变量的值
let env = "local";

switch (env) {
    //本地开发环境接口地址
    case "local":
        window.domain = "http://192.168.136.217/ljService/WebApi/ljService/";
    break;
    //正式生产环境接口地址，上线前需配置
    case "prod":
        window.domain = "http://192.168.136.217/ljService/WebApi/ljService/";
    break;

    default:
        window.domain = "http://192.168.136.217/ljService/WebApi/ljService/";

    break;
}
