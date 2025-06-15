System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, Enum, Node, SceneAsset, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, blackFrontEvent, blackFront;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      Enum = _cc.Enum;
      Node = _cc.Node;
      SceneAsset = _cc.SceneAsset;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dc50dXiQK9Ox6l95a7vZyDQ", "blackFront", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Enum', 'Node', 'SceneAsset']);

      ({
        ccclass,
        property
      } = _decorator);

      blackFrontEvent = /*#__PURE__*/function (blackFrontEvent) {
        blackFrontEvent[blackFrontEvent["path"] = 0] = "path";
        blackFrontEvent[blackFrontEvent["scene"] = 1] = "scene";
        blackFrontEvent[blackFrontEvent["NONE"] = 2] = "NONE";
        return blackFrontEvent;
      }(blackFrontEvent || {});

      Enum(blackFrontEvent);

      _export("blackFront", blackFront = (_dec = ccclass('blackFront'), _dec2 = property({
        type: blackFrontEvent
      }), _dec3 = property({
        visible: function visible() {
          return this.blackFrontEvent === blackFrontEvent.path;
        },
        type: Node
      }), _dec4 = property({
        visible: function visible() {
          return this.blackFrontEvent === blackFrontEvent.scene;
        },
        type: SceneAsset
      }), _dec(_class = (_class2 = class blackFront extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "blackFrontEvent", _descriptor, this);

          _initializerDefineProperty(this, "path", _descriptor2, this);

          _initializerDefineProperty(this, "scene", _descriptor3, this);
        }

        start() {}

        destroySelf() {
          switch (this.blackFrontEvent) {
            case blackFrontEvent.path:
              this.path.active = true;
              break;

            case blackFrontEvent.scene:
              director.loadScene(this.scene.name);
              break;
          }

          this.node.parent.destroy();
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "blackFrontEvent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return blackFrontEvent.NONE;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "path", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scene", [_dec4], {
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
//# sourceMappingURL=07872bbea905480644f3aa1f1c40383b8c3f306e.js.map