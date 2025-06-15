System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, interaction, find, _dec, _class, _crd, ccclass, property, pickChair;

  function _reportPossibleCrUseOfinteraction(extras) {
    _reporterNs.report("interaction", "../../../../tools/interaction/interaction", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      find = _cc.find;
    }, function (_unresolved_2) {
      interaction = _unresolved_2.interaction;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3c93b/1QQpLG4iZw14GAXod", "pickChair", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      __checkObsolete__(['find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("pickChair", pickChair = (_dec = ccclass('pickChair'), _dec(_class = class pickChair extends (_crd && interaction === void 0 ? (_reportPossibleCrUseOfinteraction({
        error: Error()
      }), interaction) : interaction) {
        start() {}

        interactionContactFunction() {
          this.node.setParent(find('Canvas/2.5d/GZY'));
          this.node.setPosition(0, 40, 0);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=95c384c5182b521db4508f7d098073421a5c522e.js.map