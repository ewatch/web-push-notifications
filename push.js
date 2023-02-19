const push = require('web-push');

const vapidKeys  = {
    publicKey: 'BEItpOofdJWD5yk0CduS3myMFXFuD7EsFFIdNSE13zAA8ch2ThBdEp6wAX--lJqXzlnU5npvsUFZVMJkvNYpPK0',
    privateKey: '3-KXHopK8FoFmFaB60tat060ReFhymKmotFPGoIAXV8'
};

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey);

const subscription = {}
push.sendNotification(subscription, 'test message');