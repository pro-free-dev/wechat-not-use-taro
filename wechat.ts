// 微信
// 文件结构比较
// app
//    app.js    全局唯一的App实例对象，onLaunch & onShow ...
//      App({}) 注册小程序
//    app.json  页面路径定义，window，tabBar
//    app.wxss  weixin style sheet 全局样式
// page
//    page.js
//      Page({})  注册小程序页面
//      getApp()
//    page.wxml
//      <view wx:for="{{array}}"> {{item}} </view>
//      <view wx:if="{{view == 'WEBVIEW'}}"> WEBVIEW </view>
//      <view wx:elif="{{view == 'APP'}}"> APP </view>
//      <view wx:else="{{view == 'MINA'}}"> MINA </view>
//      模板
//        template
//      引用
//        
//    page.wxss
//    page.json
//    wxs(weixin script) - 小程序的脚本语言，宣称IOS上性能比JS快2~20倍？
//        原因是wxs处理渲染线程，减少了线程中通信。
//        疑问点：https://www.zhihu.com/question/64322737

// 事件
//    # 是什么？完全一样
//    # 按类型分类
//      - 冒泡事件 bindXXX
//      - 非冒泡事件 catchXXX
//      - 互拆事件 mut-bind
//    # 事件对象
//      - BaseEvent
//        - id, timespan, target
//        - dataset and targetDataset
//        - mark和dataset的区别为，mark会带上每个层级的数据
//      - CustomeEvent
//      - TouchEvent
//        - touches
//        - touchedTouches

// 运行机制
//    下载/更新机制 - 每次冷启动时，会检查是否有新发布的内容，如果有为异步下载，下一次冷启动时载入新版本。
//                  如需要马上运行最新更新版本，需要使用wx.getUpdateManager 
//    冷启动 - 
//    热启动 - 
//    前台 - 
//    后台 - 
//    后台转前台 - 
//    缓存 - 上限10M，以用户维度隔离
//    销毁 - 后台时长超过时限（多少？）或系统资源占用过高，监听wx.onMemoryWaring

// 运行环境
//    逻辑层 JavaScript引擎
//      IOS - JavaScriptCore
//      Android - V8
//      开发工具 - NW.js
//    视图层
//      IOS - WKWebKit
//      Android - XWeb引擎 Mobile Chrome内核
//      开发工具 - Chromiun WebView
//    注意：
//        不支持部分ES6扩展内置对象
//        不支持动态脚本
//        不支持 new Function

// 场景值的定义 XXX

// 自定义组件 - 
//    组件间的通信

// 分包
//    大小限制：所有分包大小不超过16M，单个分包或主包不超过2M
//    分包预加载
//    独立分包
