System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, sys, interaction, director, SceneAsset, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _dec4, _dec5, _dec6, _class4, _class5, _descriptor3, _descriptor4, _crd, ccclass, property, SceneList, connectScene;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfinteraction(extras) {
    _reporterNs.report("interaction", "../interaction/interaction", _context.meta, extras);
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
      director = _cc.director;
      SceneAsset = _cc.SceneAsset;
    }, function (_unresolved_2) {
      interaction = _unresolved_2.interaction;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2c0e28dmyJNUrM7CUFjUQAP", "connectScene", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'sys']);

      __checkObsolete__(['director']);

      __checkObsolete__(['SceneAsset']);

      ({
        ccclass,
        property
      } = _decorator);
      SceneList = (_dec = ccclass('SceneList'), _dec2 = property(SceneAsset), _dec3 = property(SceneAsset), _dec(_class = (_class2 = class SceneList {
        constructor() {
          _initializerDefineProperty(this, "FrontScene", _descriptor, this);

          _initializerDefineProperty(this, "LoadScene", _descriptor2, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "FrontScene", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "LoadScene", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class);

      _export("connectScene", connectScene = (_dec4 = ccclass('connectScene'), _dec5 = property(SceneAsset), _dec6 = property([SceneList]), _dec4(_class4 = (_class5 = class connectScene extends (_crd && interaction === void 0 ? (_reportPossibleCrUseOfinteraction({
        error: Error()
      }), interaction) : interaction) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "deafultScene", _descriptor3, this);

          _initializerDefineProperty(this, "connectScene", _descriptor4, this);
        }

        start() {}

        interactionContactFunction() {
          const FrontScene = sys.localStorage.getItem('FrontScene');
          console.log('FrontScene', FrontScene);
          let isFind = false;
          this.connectScene.forEach(element => {
            if (element.FrontScene.name == FrontScene) {
              director.loadScene(element.LoadScene.name);
              isFind = true;
            }
          });

          if (isFind == false) {
            director.loadScene(this.deafultScene.name);
          }

          if (this.isEmitFrontScene == true) {
            sys.localStorage.setItem('FrontScene', director.getScene().name);
          }
        }

        update(deltaTime) {}

      }, (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "deafultScene", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "connectScene", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class5)) || _class4));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c1447506666cfc020e38cab0d2afe91ed82ad4c2.js.map