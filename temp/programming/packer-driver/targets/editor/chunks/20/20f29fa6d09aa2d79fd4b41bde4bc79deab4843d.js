System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, SceneAsset, _decorator, instantiate, director, dialog_galgame, interaction, interactionEvent, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, questionNodeInteraction;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfdialog_galgame(extras) {
    _reporterNs.report("dialog_galgame", "../../dialog/typeScript/dialog_galgame", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinteraction(extras) {
    _reporterNs.report("interaction", "../../interaction/interaction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinteractionEvent(extras) {
    _reporterNs.report("interactionEvent", "../../interaction/interaction", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      SceneAsset = _cc.SceneAsset;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      director = _cc.director;
    }, function (_unresolved_2) {
      dialog_galgame = _unresolved_2.dialog_galgame;
    }, function (_unresolved_3) {
      interaction = _unresolved_3.interaction;
      interactionEvent = _unresolved_3.interactionEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0ade2Nn6ClIE6PqwoWVwzLI", "questionNodeInteraction", undefined);

      __checkObsolete__(['Enum']);

      __checkObsolete__(['SceneAsset']);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      __checkObsolete__(['instantiate']);

      __checkObsolete__(['director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("questionNodeInteraction", questionNodeInteraction = (_dec = ccclass('questionNodeInteraction'), _dec2 = property(SceneAsset), _dec(_class = (_class2 = class questionNodeInteraction extends (_crd && interaction === void 0 ? (_reportPossibleCrUseOfinteraction({
        error: Error()
      }), interaction) : interaction) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "scene", _descriptor, this);
        }

        start() {}

        interactionContactFunction() {
          for (let i = 0; i < this.eventHandler.length; i++) {
            this.eventHandler[i].emit([]);
          }

          director.loadScene(this.scene.name, (err, res) => {
            switch (this.interactionEvent) {
              case (_crd && interactionEvent === void 0 ? (_reportPossibleCrUseOfinteractionEvent({
                error: Error()
              }), interactionEvent) : interactionEvent).animation:
                this.animation.play(this.animationClip.name);
                break;

              case (_crd && interactionEvent === void 0 ? (_reportPossibleCrUseOfinteractionEvent({
                error: Error()
              }), interactionEvent) : interactionEvent).path:
                if (this.isMezi == false) {
                  if (this.isDialog == true) {
                    this.dialogPath[this.dialogIndex].getComponent(_crd && dialog_galgame === void 0 ? (_reportPossibleCrUseOfdialog_galgame({
                      error: Error()
                    }), dialog_galgame) : dialog_galgame).Restart();
                    this.dialogPath[this.dialogIndex].active = true;

                    if (this.dialogPath.length > this.dialogIndex + 1) {
                      this.dialogIndex++;
                    }

                    console.log('dp' + this.dialogIndex);
                  } else {
                    if (this.path.active == false) {
                      this.path.active = true;
                    } else if (this.path.active == true) {
                      this.path.active = false;
                    }
                  }
                } else if (this.isMezi == true) {
                  this.path.destroy();
                }

                break;

              case (_crd && interactionEvent === void 0 ? (_reportPossibleCrUseOfinteractionEvent({
                error: Error()
              }), interactionEvent) : interactionEvent).prefab:
                let prefab = instantiate(this.instantiateNode);
                prefab.setParent(this.instantiateParent);
                prefab.setPosition(0, 0, 0);
                break;
            }
          });
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scene", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=20f29fa6d09aa2d79fd4b41bde4bc79deab4843d.js.map