cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, () => {
            let f = function (a) {
                cc.find('/Canvas/Text').opacity = a;
                if (a < 255) {
                    setTimeout(() => {
                        f(a + 15);
                    }, 5);
                }
            };
            f(0);
        }, this);
    },

    // update (dt) {},
});
