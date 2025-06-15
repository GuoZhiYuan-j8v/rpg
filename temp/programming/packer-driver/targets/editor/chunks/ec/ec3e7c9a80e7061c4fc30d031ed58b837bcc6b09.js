System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, instantiate, resources, _decorator, Component, Node, introduction, Label, SpriteFrame, SceneAsset, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, area;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfintroduction(extras) {
    _reporterNs.report("introduction", "./introduction", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      resources = _cc.resources;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Label = _cc.Label;
      SpriteFrame = _cc.SpriteFrame;
      SceneAsset = _cc.SceneAsset;
    }, function (_unresolved_2) {
      introduction = _unresolved_2.introduction;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "10de9dsJXFPKZhXj3M9tR+M", "area", undefined);

      __checkObsolete__(['EventTouch']);

      __checkObsolete__(['Prefab']);

      __checkObsolete__(['instantiate']);

      __checkObsolete__(['resources']);

      __checkObsolete__(['EventMouse']);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      __checkObsolete__(['Label']);

      __checkObsolete__(['SpriteFrame']);

      __checkObsolete__(['SceneAsset']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("area", area = (_dec = ccclass('area'), _dec2 = property(SceneAsset), _dec3 = property(SpriteFrame), _dec(_class = (_class2 = class area extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "scene", _descriptor, this);

          _initializerDefineProperty(this, "pircture", _descriptor2, this);

          _initializerDefineProperty(this, "introduction", _descriptor3, this);
        }

        start() {
          this.node.on(Node.EventType.MOUSE_MOVE, event => {
            this.node.children[0].active = true;
          }, this);
          this.node.on(Node.EventType.MOUSE_LEAVE, event => {
            this.node.children[0].active = false;
          }, this);
          this.node.on(Node.EventType.TOUCH_START, event => {
            resources.load('map/介绍', Prefab, (err, res) => {
              let prefab = instantiate(res);
              prefab.setParent(this.node.parent);
              let introductionScript = prefab.getComponent(_crd && introduction === void 0 ? (_reportPossibleCrUseOfintroduction({
                error: Error()
              }), introduction) : introduction);
              introductionScript.scene = this.scene;
              introductionScript.sceneName.string = this.node.children[0].getComponent(Label).string;
              introductionScript.picture.spriteFrame = this.pircture;
              introductionScript.introduction.string = this.introduction;
              console.log(prefab.name);
            });
          }, this);
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scene", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pircture", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "introduction", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ec3e7c9a80e7061c4fc30d031ed58b837bcc6b09.js.map