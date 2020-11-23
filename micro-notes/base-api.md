

### baseApi

### how to get start 



### main-app

### sub-app

### the issue need to be cautious
## 如何独立运行子应用？
有些时候我们希望直接启动子应用从而更方便的开发调试，你可以使用这个全局变量来区分当前是否运行在 qiankun 的主应用的上下文中：
```
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export const mount = async () => render();
```
## 如何同时激活两个子应用？
```
子应用何时被激活完全取决于你的 activeRule 配置，比如下面的例子里，我们将 reactApp 和 react15App 的 activeRule 逻辑设置成一致的：
registerMicroApps([
  { name: 'reactApp', entry: '//localhost:7100', render, activeRule: () => isReactApp() },
  { name: 'react15App', entry: '//localhost:7102', render, activeRule: () => isReactApp() },
  { name: 'vueApp', entry: '//localhost:7101', render, activeRule: () => isVueApp() },
]);
start({ singular: false });
当在 start 方法中配置好 singular: false 后，只要 isReactApp() 返回 true 时，reactApp 和 react15App 将会同时被 mount。
```
## 如何提取出公共的依赖库？
```
虽然共享依赖并不建议，但如果你真的有这个需求，你可以在子应用中将公共依赖配置成 external，然后在主应用中导入这些公共依赖。

qiankun 2.0 版本将提供一种更智能的方式使其自动化。
```
## api 
```
API 说明
#registerMicroApps(apps, lifeCycles?, opts?)
参数

apps - Array<RegistrableApp<T>> - 必选，子应用的一些注册信息
lifeCycles - LifeCycles<T> - 可选，全局的子应用生命周期钩子
opts - RegisterMicroAppsOpts - 可选
类型

RegistrableApp<T>

name - string - 必选，子应用的名称，子应用之间必须确保唯一。

entry - string | { scripts?: string[]; styles?: string[]; html?: string } - 必选，子应用的 entry 地址。

render - (props?: { appContent: string; loading: boolean }) => any - 必选，子应用在需要被激活时触发的渲染方法。

activeRule - (location: Location) => boolean - 必选，子应用的激活规则。

浏览器 url 发生变化会调用这个函数，activeRule 返回 true 时表明该子应用需要被激活。

props - object - 可选，主应用需要传递给子应用的数据。

LifeCycles<T>

type Lifecycle<T extends object> = (app: RegistrableApp<T>) => Promise<any>;
beforeLoad - Lifecycle<T> | Array<Lifecycle<T>> - 可选
beforeMount - Lifecycle<T> | Array<Lifecycle<T>> - 可选
afterMount - Lifecycle<T> | Array<Lifecycle<T>> - 可选
beforeUnmount - Lifecycle<T> | Array<Lifecycle<T>> - 可选
afterUnmount - Lifecycle<T> | Array<Lifecycle<T>> - 可选
RegisterMicroAppsOpts

fetch - Function - 可选
getPublicPath - (url: string) => string - 可选
getTemplate - (tpl: string) => string - 可选
用法

主应用中注册子应用的配置信息。

示例

import { registerMicroApps } from 'qiankun';

registerMicroApps(
  [{
    name: 'app1',
    entry: '//localhost:8080',
    render: ({ appContent }) => ReactDOM.render(<App appContent={appContent}>, document.getElementById('container')),
    activeRule: location => location.pathname.startsWith('/react'),
    props: {
      name: 'kuitos',
    }
  }],
  {
    beforeLoad: app => console.log('before load', app.name),
    beforeMount: [
      app => console.log('before mount', app.name),
    ],
  },
);
#start(opts?)
参数

opts - Options 可选
类型

Options

prefetch - boolean | 'all' | string[] | (( apps: RegistrableApp[] ) => { mainAppStartingAppsName: string[]; firstMountedAppsName: string[] })

可选，是否开启预加载，默认为 true。

配置为 true 则会在第一个子应用 mount 完成后开始预加载其他子应用的静态资源，配置为 'all' 则主应用 start 后即开始预加载所有子应用静态资源。

配置为 string[] 则会在第一个子应用 mounted 后开始加载数组内的子应用资源

配置为 function 则可完全自定义应用的资源加载时机 (首个子应用 mounted，或主应用 starting)

jsSandbox - boolean - 可选，是否开启沙箱，默认为 true。

singular - boolean | ((app: RegistrableApp<any>) => Promise<boolean>); - 可选，是否为单实例场景，默认为 true。

fetch - Fetch - 可选，自定义的 fetch 方法。

用法

启动 qiankun。

示例

import { start } from 'qiankun';

start();
#setDefaultMountApp(appLink)
参数

appLink - string - 必选
用法

设置主应用启动后默认进入的子应用。

示例

import { setDefaultMountApp } from 'qiankun';

setDefaultMountApp('/homeApp');
#runAfterFirstMounted(effect)
参数

effect - () => void - 必选
用法

第一个子应用 mount 后需要调用的方法，比如开启一些监控或者埋点脚本。

示例

import { runAfterFirstMounted } from 'qiankun';

runAfterFirstMounted(() => startMonitor());
#addErrorHandler/removeErrorHandler
#addGlobalUncaughtErrorHandler(handler)
参数

handler - (...args: any[]) => void - 必选
用法

添加全局的未捕获异常处理器。

示例

import { addGlobalUncaughtErrorHandler } from 'qiankun';

addGlobalUncaughtErrorHandler(event => console.log(event));
#removeGlobalUncaughtErrorHandler(handler)
参数

handler - (...args: any[]) => void - 必选
用法

移除全局的未捕获异常处理器。

示例

import { removeGlobalUncaughtErrorHandler } from 'qiankun';

removeGlobalUncaughtErrorHandler(handler);
```
