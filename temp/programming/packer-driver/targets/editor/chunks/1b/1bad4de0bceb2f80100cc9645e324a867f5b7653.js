System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, find, UITransform, v3, interaction, Anistate, Player, _dec, _class, _crd, ccclass, property, chair;

  function _reportPossibleCrUseOfinteraction(extras) {
    _reporterNs.report("interaction", "../../../../tools/interaction/interaction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnistate(extras) {
    _reporterNs.report("Anistate", "db://assets/Player/script/Player", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "db://assets/Player/script/Player", _context.meta, extras);
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
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      interaction = _unresolved_2.interaction;
    }, function (_unresolved_3) {
      Anistate = _unresolved_3.Anistate;
      Player = _unresolved_3.Player;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bc212J08khIi6KGLPJGA7Ul", "chair", undefined);

      __checkObsolete__(['_decorator', 'Component', 'find', 'Node', 'UITransform', 'v3', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("chair", chair = (_dec = ccclass('chair'), _dec(_class = class chair extends (_crd && interaction === void 0 ? (_reportPossibleCrUseOfinteraction({
        error: Error()
      }), interaction) : interaction) {
        start() {}

        interactionContactFunction() {
          super.interactionContactFunction();
          find('Canvas/2.5d/Player').getComponent(_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player).setAni((_crd && Anistate === void 0 ? (_reportPossibleCrUseOfAnistate({
            error: Error()
          }), Anistate) : Anistate).peopleIndesk, true);
          let worldPos = this.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0, -9.1));
          let localPos = find('Canvas/2.5d/Player').parent.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
          find('Canvas/2.5d/Player').setPosition(localPos);
        }

        update(deltaTime) {
          if (this.node.parent.name == 'Player') {
            this.node.setPosition(0, 40, 0);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1bad4de0bceb2f80100cc9645e324a867f5b7653.js.map