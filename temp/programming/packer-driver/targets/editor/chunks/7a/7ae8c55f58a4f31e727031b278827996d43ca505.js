System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, sys, action, _dec, _class, _class2, _crd, ccclass, property, dialogLocal, dialogLocalData;

  function _reportPossibleCrUseOfaction(extras) {
    _reporterNs.report("action", "../dialog/typeScript/dialog_galgame", _context.meta, extras);
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
      sys = _cc.sys;
    }, function (_unresolved_2) {
      action = _unresolved_2.action;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ab73041SqRGz5mjrNQhSOPf", "dialogLocal", undefined);

      __checkObsolete__(['_decorator', 'Component', 'JsonAsset', 'Node', 'sys', 'TerrainLayer']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("dialogLocal", dialogLocal = (_dec = ccclass('dialogLocal'), _dec(_class = (_class2 = class dialogLocal extends Component {
        start() {}

        getSysLocalAboutDialog() {
          let dialogLocal;

          if (sys.localStorage.getItem('dialogLocal')) {
            dialogLocal = JSON.parse(sys.localStorage.getItem('dialogLocal'));
          }

          console.log(dialogLocal + 'dialogLocal');

          if (dialogLocal) {
            return dialogLocal;
          } else {
            sys.localStorage.setItem('dialogLocal', JSON.stringify({}));
            console.log(dialogLocal + 'dd');
            return {};
          }
        }

        getSysLocalAboutDialogDOM(key) {
          let dialogLocal = this.getSysLocalAboutDialog();
          console.log('dialogLocal', dialogLocal[key], key);

          if (dialogLocal[key] != true) {
            console.log('!=true');
            return false;
          }

          return dialogLocal[key];
        }

        static get instance() {
          return this._instance;
        }

        setSysLocalAboutDIalog(key, actions) {
          let dialogLocal = this.getSysLocalAboutDialog();

          switch (actions) {
            case (_crd && action === void 0 ? (_reportPossibleCrUseOfaction({
              error: Error()
            }), action) : action).add:
              dialogLocal[key] = true;
              break;

            case (_crd && action === void 0 ? (_reportPossibleCrUseOfaction({
              error: Error()
            }), action) : action).delete:
              dialogLocal[key] = false;
              break;
          }

          sys.localStorage.setItem('dialogLocal', JSON.stringify(dialogLocal));
        }

        update(deltaTime) {}

      }, _class2._instance = new _class2(), _class2)) || _class));

      _export("dialogLocalData", dialogLocalData = dialogLocal.instance);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7ae8c55f58a4f31e727031b278827996d43ca505.js.map