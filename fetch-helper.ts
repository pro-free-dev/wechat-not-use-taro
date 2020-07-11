export interface FetchHelperHelper {
  retryTimes?: number,
  cachePolicy?: any,
  requestParam?: any,
  delay?: number,
  requestFunc: () => any,
  validFunc?: (data: any) => boolean,
}

export class FetchHelper {
  requestFunc: Function; // 网络请求方法
  requestParam: any; // 请求参数
  validFunc?: Function; // 验证响应是否有效
  retryTimes?: number; // 响应无效或失败时重试次数
  cachePolicy?: any; // 缓存策略
  delay?: number; // 重试时delay ms
  timesIdentity = 0; // 已重试次数

  constructor({
    requestFunc, validFunc, retryTimes = 0,
    cachePolicy, requestParam, delay = 0
  }: FetchHelperHelper) {
    this.delay = delay;
    this.requestFunc = requestFunc;
    this.validFunc = validFunc;
    this.retryTimes = retryTimes;
    this.cachePolicy = cachePolicy;
    this.requestParam = JSON.parse(JSON.stringify(requestParam));
  }

  async Request() {
    this.requestParam.appRequestMap = {
      cachePolicy: this.cachePolicy,
      verifyResponseIsValid: this.validFunc
    };

    return this.sendRequest();
  }

  async sleep() {
    return new Promise((resolve) => { setTimeout(resolve, this.delay) });
  }

  // 无效缓存，需要重试（只有首次有效）
  invalidCacheShouldRetry(resp: any) {
    if (resp && resp.appResponseMap
      && resp.appResponseMap.isFromCache
      && !resp.appResponseMap.isCacheValid
      && this.timesIdentity === 0) {
      return true;
    }
    return false
  }

  // 无效响应，需要重试
  invalidRespShouldRetry(resp: any) {
    if (this.validFunc && !this.validFunc(resp)) {
      // 无效响应但重试次数达上限时，不再重试
      return this.retryTimes > 0;
    }
    return false;
  }

  async retry() {
    this.timesIdentity += 1;

    if (this.delay) await this.sleep();

    return await this.sendRequest();
  }

  async sendRequest() {
    try {
      const resp = await this.requestFunc(this.requestParam);

      if (this.invalidCacheShouldRetry(resp)) {
        return this.retry();
      }

      if (this.invalidRespShouldRetry(resp) && this.retryTimes--) {
        return this.retry();
      }

      return resp;

    } catch (error) {
      if (this.retryTimes--) {
        return this.retry();
      } else {
        throw error;
      }
    }
  }
}