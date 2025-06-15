System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, interaction, find, _dec, _class, _crd, ccclass, property, GuiYuMiddleSchoolVideo;

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
      find = _cc.find;
    }, function (_unresolved_2) {
      interaction = _unresolved_2.interaction;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "457b7telBxAaLg3RZsCtdRy", "GuiYuMiddleSchoolVideo", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      __checkObsolete__(['find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GuiYuMiddleSchoolVideo", GuiYuMiddleSchoolVideo = (_dec = ccclass('GuiYuMiddleSchoolVideo'), _dec(_class = class GuiYuMiddleSchoolVideo extends (_crd && interaction === void 0 ? (_reportPossibleCrUseOfinteraction({
        error: Error()
      }), interaction) : interaction) {
        start() {}

        interactionQuit() {
          find('Canvas/哪有啊').active = true;
          this.node.destroy();
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c230abf6af5e77d9c5df6fd829cdfea3fbebd3c7.js.map