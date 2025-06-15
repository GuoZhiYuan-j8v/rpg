System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, sys, _dec, _class, _class2, _crd, ccclass, property, PlayerLocalData, PlayerLocal;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b2f16n8+MxG+K+LWK8WJxTe", "PlayerLocalData", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerLocalData", PlayerLocalData = (_dec = ccclass('PlayerLocalData'), _dec(_class = (_class2 = class PlayerLocalData extends Component {
        constructor() {
          super(...arguments);
          this.PlayerPath = void 0;
        }

        start() {}

        getPath() {
          this.PlayerPath = sys.localStorage.getItem('PlayerPath');
          console.log(this.PlayerPath, 'gg');
        }

        update(deltaTime) {}

        static get instance() {
          return this._instance;
        }

      }, _class2._instance = new _class2(), _class2)) || _class));

      _export("PlayerLocal", PlayerLocal = PlayerLocalData.instance);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=533ec59f249bed773fb4ef0ffedb4601230d6089.js.map