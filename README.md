# 黑马 电商后台管理系统

### 项目初始化

```bash
npm install -g @vue/cli
# 然后
vue ui
```

然后选择创建项目的路径即可。

### 安装 element-ui

在 vue/cli 的`插件`面板搜索 element，安装第一个就行，1.0.1 版本。在接下来的界面设置按需导入。

### 安装 axios

在 vue/cli 的`依赖`面板搜索 axios，安装第一个就行，1.4.0 版本，并选择运行依赖。

### 安装后台环境

安装 mysql 及 mysql 管理工具，然后将 `vue-api-server/db/mydb.sql` 导入到 名为 `mydb` 的数据库中。

然后在 `vue-api-server` 运行 `npm run start` 即可开启后台数据服务。

