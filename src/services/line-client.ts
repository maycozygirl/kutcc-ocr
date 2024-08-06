import line from "@line/bot-sdk";

class LineClient {
    private static messagingClient: line.messagingApi.MessagingApiClient;

    private constructor() {}

    public static getMessagingClient() {
        if (!this.messagingClient) {
            this.messagingClient = new line.messagingApi.MessagingApiClient({
                channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || '',
            });
        }
        return this.messagingClient;
    }
}

export default LineClient;