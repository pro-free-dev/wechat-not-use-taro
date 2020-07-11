// 测试1 正常请求响应
var t1 = 0;
var test1 = async () => {
  return new Promise(resolve => {
    console.log('test2', t1);
    resolve(t1);
  })
}
var fh1 = new FetchHelper({ requestFunc: test1, requestParam: { aa: 909 } })
var resp1 = await fh1.Request();

// 测试2 重试一次正常响应
var t2 = 0;
var test2 = async () => {
  return new Promise(resolve => {
    console.log('test2', t2);
    resolve(++t2 > 1 ? t2 : err2);
  })
}
var fh2 = new FetchHelper({ retryTimes: 1, requestFunc: test2, requestParam: { aa: 909 } })
var resp2 = await fh2.Request();


// 测试3 重试次数达到上限无结果
var t3 = 0;
var test3 = async () => {
  return new Promise(resolve => {
    console.log('test3', t3);
    resolve(err3);
  })
}
var fh3 = new FetchHelper({ retryTimes: 3, requestFunc: test3, requestParam: { aa: 909 } })
var resp3 = await fh3.Request();


// 测试4 结果不正确，重试一次后结果正确
var t4 = 0;
var test4 = async () => {
  return new Promise(resolve => {
    console.log('test4', t4);
    resolve(++t4 > 1 ? 'true' : t4);
  })
}

var validFunc = (resp) => {
  if (resp === 'true') {
    return true;
  }
  return false;
}

var fh4 = new FetchHelper({ retryTimes: 1, validFunc: validFunc, requestFunc: test4, requestParam: { aa: 909 } })
var resp4 = await fh4.Request();

// 测试5 第一次无效缓存，自动重试
var t5 = 0;
var test5 = async () => {
  return new Promise(resolve => {
    console.log('test5', t5);
    var resp = {
      appResponseMap: {
        isFromCache: true,
        isCacheValid: false
      }
    }
    resolve(++t5 > 1 ? resp : resp);
  })
}

var validFunc = (resp) => {
  if (resp === 'true') {
    return true;
  }
  return false;
}

var fh5 = new FetchHelper({ retryTimes: 1, validFunc: validFunc, requestFunc: test5, requestParam: { aa: 909 } })
var resp5 = await fh5.Request();

// 测试6 重试次数达到上限无结果+延时
var t6 = 0;
var test6 = async () => {
  return new Promise(resolve => {
    console.log('test6', t6);
    resolve(err6);
  })
}
var fh6 = new FetchHelper({ retryTimes: 6, delay:1000, requestFunc: test6, requestParam: { aa: 909 } })
var resp3 = await fh6.Request();