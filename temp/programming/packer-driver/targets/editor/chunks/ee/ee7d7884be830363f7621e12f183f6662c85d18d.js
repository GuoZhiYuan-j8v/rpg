System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, find, sys, ChangeKey, KeyCode, back, _dec, _class, _crd, ccclass, property, reset;

  function _reportPossibleCrUseOfChangeKey(extras) {
    _reporterNs.report("ChangeKey", "./ChangeKey", _context.meta, extras);
  }

  function _reportPossibleCrUseOfback(extras) {
    _reporterNs.report("back", "./back", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      find = _cc.find;
      sys = _cc.sys;
      KeyCode = _cc.KeyCode;
    }, function (_unresolved_2) {
      ChangeKey = _unresolved_2.ChangeKey;
    }, function (_unresolved_3) {
      back = _unresolved_3.back;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5f04fc76QVNp4HgjhW/fxgK", "reset", undefined);

      __checkObsolete__(['_decorator', 'Component', 'find', 'Node', 'sys']);

      __checkObsolete__(['KeyCode']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("reset", reset = (_dec = ccclass('reset'), _dec(_class = class reset extends Component {
        start() {}

        update(deltaTime) {}

        reset() {
          sys.localStorage.clear();

          if (sys.localStorage.length == 0) {
            sys.localStorage.setItem('interaction', JSON.stringify(KeyCode.KEY_R));
            sys.localStorage.setItem('left', JSON.stringify(KeyCode.KEY_A));
            sys.localStorage.setItem('right', JSON.stringify(KeyCode.KEY_D));
            sys.localStorage.setItem('up', JSON.stringify(KeyCode.KEY_W));
            sys.localStorage.setItem('down', JSON.stringify(KeyCode.KEY_S));
            sys.localStorage.setItem('next', JSON.stringify(KeyCode.SPACE));
            sys.localStorage.setItem('esc', JSON.stringify(KeyCode.ESCAPE));
            sys.localStorage.setItem('save', JSON.stringify(KeyCode.HOME));
            sys.localStorage.setItem('inventory', JSON.stringify(KeyCode.KEY_I));
            sys.localStorage.setItem('autoSave', JSON.stringify(true));

            for (let i = 0; i < find('Canvas/操作说明/Label/Layout').children.length; i++) {
              find('Canvas/操作说明/Label/Layout').children[i].getComponent(_crd && ChangeKey === void 0 ? (_reportPossibleCrUseOfChangeKey({
                error: Error()
              }), ChangeKey) : ChangeKey).change();
            }

            find("Canvas/返回").getComponent(_crd && back === void 0 ? (_reportPossibleCrUseOfback({
              error: Error()
            }), back) : back).refuse();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ee7d7884be830363f7621e12f183f6662c85d18d.js.map