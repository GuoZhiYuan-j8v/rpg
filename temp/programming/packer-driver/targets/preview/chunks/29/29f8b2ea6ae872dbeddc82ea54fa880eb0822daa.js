System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, UITransform, tween, Vec3, Enum, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, xy, CameraFollow;

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
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      Enum = _cc.Enum;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "853b6ZpHwRNBIzfBGIhJne6", "CameraFollow", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'UITransform', 'find', 'tween', 'Vec3', 'EventMouse', 'quat', 'v2', 'v3', 'Vec2', 'Enum']);

      ({
        ccclass,
        property
      } = _decorator);

      xy = /*#__PURE__*/function (xy) {
        xy[xy["Xposition"] = 0] = "Xposition";
        xy[xy["Yposition"] = 1] = "Yposition";
        xy[xy["XYposition"] = 2] = "XYposition";
        return xy;
      }(xy || {});

      Enum(xy);

      _export("CameraFollow", CameraFollow = (_dec = ccclass('CameraFollow'), _dec2 = property({
        type: xy
      }), _dec3 = property(UITransform), _dec4 = property(UITransform), _dec5 = property(Node), _dec(_class = (_class2 = class CameraFollow extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "followPosType", _descriptor, this);

          _initializerDefineProperty(this, "onLoadShake", _descriptor2, this);

          _initializerDefineProperty(this, "Canvas", _descriptor3, this);

          //跟随到这个节点的x轴边界为止，要求是此节点的x轴为0
          _initializerDefineProperty(this, "blackBoard", _descriptor4, this);

          //摄像机要跟随的节点
          _initializerDefineProperty(this, "FollowNode", _descriptor5, this);

          this.followPos = void 0;
          this.isShake = false;
          this.followPosY = void 0;
        }

        onLoad() {
          this.followPos = -this.blackBoard.width / 2 + this.Canvas.width / 2 + this.blackBoard.node.getPosition().x;
          this.followPosY = -this.blackBoard.height / 2 + this.Canvas.height / 2;
        }

        start() {
          if (this.onLoadShake == true) {
            this.shake();
          }
        }

        update(deltaTime) {
          //console.log([this.followPos,this.FollowNode.position.x])
          if (this.isShake == false && this.blackBoard != null && this.FollowNode) {
            if (this.FollowNode.position.x > this.followPos && this.FollowNode.position.x < -this.followPos) {
              if (this.followPosType == xy.Xposition || this.followPosType == xy.XYposition) {
                this.node.setPosition(this.FollowNode.position.x, this.node.position.y, this.node.position.z);
              }
            }

            if (this.FollowNode.position.y > this.followPosY && this.FollowNode.position.y < -this.followPosY) {
              if (this.followPosType == xy.Yposition || this.followPosType == xy.XYposition) {
                this.node.setPosition(this.node.position.x, this.FollowNode.position.y, this.node.position.z);
              }
            }
          } else {
            this.node.setPosition(this.FollowNode.position.x, this.FollowNode.position.y, this.node.position.z);
          }
        }

        shake() {
          this.isShake = true;
          this.scheduleOnce(() => {
            this.isShake = false;
          }, 0.1);
          tween(this.node).by(0.05, {
            position: new Vec3(-5, 5)
          }).by(0.05, {
            position: new Vec3(5, -5)
          }).start();
        }

        CameraShake(duration, strength) {
          // 相机抖动的动画效果
          var sequence = tween(this.node).by(0.05, {
            position: new Vec3(strength, 0, 0)
          }).by(0.05, {
            position: new Vec3(-strength, 0, 0)
          }).by(0.05, {
            position: new Vec3(0, strength, 0)
          }).by(0.05, {
            position: new Vec3(0, -strength, 0)
          });
          sequence.start().repeat(duration, sequence);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "followPosType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return xy.XYposition;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "onLoadShake", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Canvas", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "blackBoard", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "FollowNode", [_dec5], {
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
//# sourceMappingURL=29f8b2ea6ae872dbeddc82ea54fa880eb0822daa.js.map