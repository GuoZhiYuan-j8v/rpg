System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, tangmian;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ac24cvC8J5FGrkWaLgiPvkU", "tangmian", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("tangmian", tangmian = (_dec = ccclass('tangmian'), _dec(_class = class tangmian extends Component {
        constructor() {
          super(...arguments);
          this.caseFunc = void 0;
          this.startPos = void 0;
          this.endPos = void 0;
          this.tag = void 0;
        }

        start() {}

        caseFunction() {
          this.caseFunc();
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=44af9a57ca10e42931bc6d2495dc5e08e6c0e614.js.map