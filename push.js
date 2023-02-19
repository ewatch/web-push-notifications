const push = require('web-push');

const vapidKeys  = {
    publicKey: 'BEItpOofdJWD5yk0CduS3myMFXFuD7EsFFIdNSE13zAA8ch2ThBdEp6wAX--lJqXzlnU5npvsUFZVMJkvNYpPK0',
    privateKey: '3-KXHopK8FoFmFaB60tat060ReFhymKmotFPGoIAXV8'
};

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey);
const subscription = {
    "endpoint":"https://web.push.apple.com/QOmBTy44oDlLMiWjRMD0NcA1k8NZadkxmU2K1P7te5h2gS0BV8IvDwomJJmLv5ccAXOICHlbSTZ-GC2vQsfdMITRCsbV7-clUzVLHf-auMWXu-z69rUmsKFOlJnW87YoQKhzWkDkAYd5KJyLXIIaDZjbOXIARrZegZo-asMEgJ0",
    "keys":{
        "p256dh":"BJKAMvR6XGw4wDFppbRQvq2F-IV8jmQUyyrA8mg9-ONS4grKTz3R7W0kD5KpkkcdiY_NrfeEbG82bRiRLL2bnTI",
        "auth":"vYMHSkNCutPUSil9CKfVQg"
    }
};
push.sendNotification(subscription, 'test message');

