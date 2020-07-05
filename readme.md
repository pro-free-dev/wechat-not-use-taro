# 目标是什么？
- `不要`重复开发
- `不要`完全不可定制
- `不要`存在多渠道耦合
- `不要`无改动的地方出现change
- `要`支持快速同步
- `要`可维护
- `要`方便调试
- `要`源码

# Taro
> 优点
- 支持 React / Vue写法
- 编写一套代码可运行在多端
- github高星，社区活跃且成熟
- 大而全
  
> 缺点
- 版本限制
- 依赖第三方，入侵性强且无法回头 `@tarojs/component` `@tarojs/taro`
- webpack编译后代码，不具备可读性
- 大而全

> 用还是不用 **?** `先下结论，不使用`    
- H5和小程序有多少共性？
  - 登录都有各自登录方式
  - 支付宝/微信/携程支付
- H5唤醒
- 小程序端能力API
- 小程序原生组件

# 怎样做?
> 使用原生的小程序开发方式
- 支付宝和微信可以视为一套源码
- 百度，头条，京东待调研
  
> 项目结构
- 每个小程序有自己的仓库（壳），进行基础环境的配置
  - 分包策略
  - 缓存策略
  - 场景值定义
  - 网络请求
  - 文件下载
  - 端能力API
- 页面模块
  - 独立模块，不依赖其他页面
  - 可直接复制和创建独立包
- 组件模块
  - 超过1个页面中会使用的，提取到公用组件模块
  - 相对独立，支持直接复制

> 功能同步
- 直接复制目录`page/`和`Component`到另一个仓库
- 复制后的代码进行`手动/工具`进行替换
  ```js
  //alipay to weixin
  a:if  wx:if
  onTab bindtab


# 如何进行状态管理
- 组件间通讯
- 跨页数据共享
- 状态和组件关联