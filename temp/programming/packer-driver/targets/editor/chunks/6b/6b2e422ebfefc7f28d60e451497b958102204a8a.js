System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, interaction, _dec, _class, _crd, ccclass, property, openComputer;

  function _reportPossibleCrUseOfinteraction(extras) {
    _reporterNs.report("interaction", "../../../../../tools/interaction/interaction", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      interaction = _unresolved_2.interaction;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "67184CiZWVMx5DOhr46Yyz8", "openComputer", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("openComputer", openComputer = (_dec = ccclass('openComputer'), _dec(_class = class openComputer extends (_crd && interaction === void 0 ? (_reportPossibleCrUseOfinteraction({
        error: Error()
      }), interaction) : interaction) {
        start() {}

        interactionContactFunction() {
          super.interactionContactFunction();
          this.node.children[0].getComponent(Animation).play('开机动画');
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6b2e422ebfefc7f28d60e451497b958102204a8a.js.map