System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, VideoPlayer, interaction, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, videoPlayerContorl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfinteraction(extras) {
    _reporterNs.report("interaction", "../tools/interaction/interaction", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      VideoPlayer = _cc.VideoPlayer;
    }, function (_unresolved_2) {
      interaction = _unresolved_2.interaction;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b8fa473ZP5OELflQlcwa7E9", "videoPlayerContorl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'VideoPlayer']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("videoPlayerContorl", videoPlayerContorl = (_dec = ccclass('videoPlayerContorl'), _dec2 = property(VideoPlayer), _dec(_class = (_class2 = class videoPlayerContorl extends (_crd && interaction === void 0 ? (_reportPossibleCrUseOfinteraction({
        error: Error()
      }), interaction) : interaction) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "vpc", _descriptor, this);
        }

        start() {
          this.node.on(Node.EventType.TOUCH_START, () => {
            if (this.vpc.isPlaying == false) {
              this.vpc.play();
            }
          });
          this.node.on(VideoPlayer.EventType.COMPLETED, () => {
            this.interactionContactFunction();
            this.node.destroy();
          });
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "vpc", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7bcca13023d72badac2d740bf87b595cd3d42f1c.js.map