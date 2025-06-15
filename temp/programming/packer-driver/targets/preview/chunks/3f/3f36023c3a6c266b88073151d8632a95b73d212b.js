System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, sys, interaction, _dec, _class, _crd, ccclass, property, undo;

  function _reportPossibleCrUseOfinteraction(extras) {
    _reporterNs.report("interaction", "./interaction", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      interaction = _unresolved_2.interaction;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0d723BtnctPbbXH1DGJ086i", "undo", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'sys']);

      __checkObsolete__(['EventKeyboard']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("undo", undo = (_dec = ccclass('undo'), _dec(_class = class undo extends (_crd && interaction === void 0 ? (_reportPossibleCrUseOfinteraction({
        error: Error()
      }), interaction) : interaction) {
        start() {}

        update(deltaTime) {}

        onKeyDown(event) {
          console.log('drag666');

          switch (event.keyCode) {
            case parseInt(sys.localStorage.getItem('next')):
              for (var i = 0; i < this.eventHandler.length; i++) {
                this.eventHandler[i].emit([]);
              }

              this.interactionContactFunction();
              break;
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3f36023c3a6c266b88073151d8632a95b73d212b.js.map