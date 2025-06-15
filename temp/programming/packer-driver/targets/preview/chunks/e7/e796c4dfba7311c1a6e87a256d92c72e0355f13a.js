System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Sprite, Button, SceneAsset, director, RichText, Label, _decorator, Component, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, introduction;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Sprite = _cc.Sprite;
      Button = _cc.Button;
      SceneAsset = _cc.SceneAsset;
      director = _cc.director;
      RichText = _cc.RichText;
      Label = _cc.Label;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e6031xOxAhJlLT8W4wO+6C0", "introduction", undefined);

      __checkObsolete__(['Sprite']);

      __checkObsolete__(['Button']);

      __checkObsolete__(['SceneAsset']);

      __checkObsolete__(['director']);

      __checkObsolete__(['RichText']);

      __checkObsolete__(['Label']);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("introduction", introduction = (_dec = ccclass('introduction'), _dec2 = property(SceneAsset), _dec3 = property(Label), _dec4 = property(Sprite), _dec5 = property(RichText), _dec(_class = (_class2 = class introduction extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "scene", _descriptor, this);

          _initializerDefineProperty(this, "sceneName", _descriptor2, this);

          _initializerDefineProperty(this, "picture", _descriptor3, this);

          _initializerDefineProperty(this, "introduction", _descriptor4, this);
        }

        start() {
          this.node.children[3].children[0].on(Button.EventType.CLICK, () => {
            director.loadScene(this.scene.name);
          });
          this.node.children[3].children[1].on(Button.EventType.CLICK, () => {
            this.node.destroy();
          });
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scene", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sceneName", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "picture", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "introduction", [_dec5], {
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
//# sourceMappingURL=e796c4dfba7311c1a6e87a256d92c72e0355f13a.js.map