const push = require('web-push');

const vapidKeys  = {
    publicKey: 'BEItpOofdJWD5yk0CduS3myMFXFuD7EsFFIdNSE13zAA8ch2ThBdEp6wAX--lJqXzlnU5npvsUFZVMJkvNYpPK0',
    privateKey: '3-KXHopK8FoFmFaB60tat060ReFhymKmotFPGoIAXV8'
};

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey);
const subscription = {"endpoint":"https://web.push.apple.com/QL_Yc9gs2K-XfNABAQWIfZRvdJi8LxEnZ8YuBdysBSsRAF9VS3RcsOnbH4uGayRkl6g-9CQCuYgBXC79uXQjkYTFRnLWTNMcSzIN_WTm_pzU0JFv4t7UokDF2hg0EDJgUIQth3h7R35EWjBFB1nqXFP7x_fQtmTUqOgyp1rKQzg","keys":{"p256dh":"BEg9PhAf5RLN_vs4qz9_-Sir9Nm9BVdgdstU55B9NEFzFIJjq21vlcTW7Kucy54t2YKA6PImYJa1LUQuOhO-5WA","auth":"ZboFefZvv41xJIcb6Tm4qQ"}};
push.sendNotification(subscription, 'test message');

