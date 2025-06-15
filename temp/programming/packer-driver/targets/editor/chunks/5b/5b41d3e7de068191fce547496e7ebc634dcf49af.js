System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, interaction, _dec, _class, _crd, ccclass, property, closeComputer;

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

      _cclegacy._RF.push({}, "8df25PG2glC77RJNr9ltJ6x", "closeComputer", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("closeComputer", closeComputer = (_dec = ccclass('closeComputer'), _dec(_class = class closeComputer extends (_crd && interaction === void 0 ? (_reportPossibleCrUseOfinteraction({
        error: Error()
      }), interaction) : interaction) {
        start() {}

        interactionContactFunction() {
          super.interactionContactFunction();
          this.node.children[0].getComponent(Animation).play('close');
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5b41d3e7de068191fce547496e7ebc634dcf49af.js.map