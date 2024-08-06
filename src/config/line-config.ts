import { MiddlewareConfig } from '@line/bot-sdk/lib/types';
const lineConfig: MiddlewareConfig = {
    channelSecret: process.env.CHANNEL_SECRET || '',
};

export default lineConfig;