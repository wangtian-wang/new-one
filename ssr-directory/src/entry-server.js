// 服务端入口
import { createApp } from './app'
export default () => {
    const { app } = createApp();
    return app;
}