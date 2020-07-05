// 支付宝
// 文件结构比较
// app
//    app.js      小程序实例对像，生命周期函数onLaunch & onShow ...
//      App({})   注册小程序
//    app.json    页面路径定义，窗口标题，导航栏
//    app.acss    全局样式定义
// page
//    page.js     
//      Page({})  注册小程序页面
//      getApp()  获取小程序
//    page.axml   
//      <view a:for="{{items}}"> {{item}} </view>
//      <view a:if="{{view == 'WEBVIEW'}}"> WEBVIEW </view>
//      <view a:elif="{{view == 'APP'}}"> APP </view>
//      <view a:else> alipay </view>
//      模板
//        template
//      引用
//        import & include
//    page.acss   
//    page.json   
//    sjs(safe/subset javascrit) - jsx?



// 事件 
//    # 是什么？视图层到逻辑层的通信方式
//    # 按类型分
//      - 冒泡事件    onXXX
//      - 非冒泡事件  catchXXX
//      - ?? mut-bind
//    # 事件对像
//      - BaseEvent 基础事件
//        - id, timespan, target(data-alpha-beta -> target.dataset.alphaBeta)
//        - dataset and targetDataset的区别? 冒泡时会存在多个事件的触发
//        - ?? mark
//      - CustomeEvent 自定义事件
//      - TouchEvent 触摸事件
//        - touches
//        - changedTouches

// 运行机制
//    下载 - 首次使用远程加载
//
//    冷启动 - 小程序需经过初始化，并触发onLaunch
//    热启动 - 从后台恢复小程序，触发onShow
//    前台 - 启动后显示在屏幕前
//    后台 - 离开当前屏幕，并未被销毀，触发onHide
//    后台转前台 - 热启动 - 触发onShow
//    缓存 - 上限10MB
//    销毀 - 后台5分钟或占用资源过高

// 运行环境
//    逻辑层 JavaScript引擎
//      IOS - JavaScriptCore
//      Android - V8
//      开发工具 - ??
//    视图层
//      IOS - WKWebKit
//      Android - ??
//      开发工具 - ??
//    注意：
//        不支持部分ES6扩展内置对象
//        不支持动态脚本
//        不支持 new Function

// 场景值的定义 XXX

// 自定义组件 - 需要复用的功能抽象成组件
//    组件间的通信

// 分包
//    大小限制：所有分包不超过4M，单个分包或主包不超过2M
//    分包预加载
//    独立分包 - ??

// 功能完善性：微信 > 支付宝