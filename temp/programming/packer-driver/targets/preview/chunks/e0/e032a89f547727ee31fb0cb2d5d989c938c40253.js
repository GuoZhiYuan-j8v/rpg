System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, input, Input, KeyCode, Node, tween, v2, v3, tangmian, Animation, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, move;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftangmian(extras) {
    _reporterNs.report("tangmian", "./tangmian", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      input = _cc.input;
      Input = _cc.Input;
      KeyCode = _cc.KeyCode;
      Node = _cc.Node;
      tween = _cc.tween;
      v2 = _cc.v2;
      v3 = _cc.v3;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      tangmian = _unresolved_2.tangmian;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "72689PZJ9NPXZklsKlM4+2D", "move", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventKeyboard', 'find', 'input', 'Input', 'KeyCode', 'Node', 'tween', 'v2', 'v3', 'Vec2']);

      __checkObsolete__(['Label']);

      __checkObsolete__(['color']);

      __checkObsolete__(['Animation']);

      __checkObsolete__(['Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("move", move = (_dec = ccclass('move'), _dec2 = property(Node), _dec(_class = (_class2 = class move extends Component {
        constructor() {
          super(...arguments);
          this.distance = v2(0, 0);

          _initializerDefineProperty(this, "tangmian", _descriptor, this);

          this.isMove = false;
          this.word = void 0;
          this.event = void 0;
          this.moveDistance = 40;
          // 移动距离
          this.moveDirection = v3(0, 0, 0);
        }

        // 移动方向
        onLoad() {
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        }

        onDestroy() {
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
        }

        onKeyDown(event) {
          switch (event.keyCode) {
            case KeyCode.KEY_A:
              this.moveDirection = v3(-1, 0);
              break;

            case KeyCode.KEY_D:
              this.moveDirection = v3(1, 0);
              break;

            case KeyCode.KEY_W:
              this.moveDirection = v3(0, 1);
              break;

            case KeyCode.KEY_S:
              this.moveDirection = v3(0, -1);
              break;

            case KeyCode.KEY_Z:
              this.checkPosIsWord();
              this.enterWord();
              break;
          }

          if (this.isMove == false) {
            this.movePlayer();
          }
        }

        onKeyUp(event) {
          switch (event.keyCode) {
            case KeyCode.KEY_A:
            case KeyCode.KEY_D:
              this.moveDirection.x = 0;
              break;

            case KeyCode.KEY_W:
            case KeyCode.KEY_S:
              this.moveDirection.y = 0;
              break;
          }
        }

        movePlayer() {
          tween(this.node).call(() => {
            this.isMove = true;
          }).by(0.2, {
            position: v3(this.moveDirection.x * this.moveDistance, this.moveDirection.y * this.moveDistance)
          }).call(() => {
            this.isMove = false;

            if (this.moveDirection.x !== 0 || this.moveDirection.y !== 0) {
              setTimeout(() => {
                this.movePlayer();
              }, 0);
              console.log('666');
            }
          }).start();
        }

        enterWord() {
          var tangmianScript = this.word.getComponent(_crd && tangmian === void 0 ? (_reportPossibleCrUseOftangmian({
            error: Error()
          }), tangmian) : tangmian);

          for (var i = 0; i < this.tangmian.children.length; i++) {
            if (i >= tangmianScript.startPos && i < tangmianScript.endPos) {
              this.tangmian.children[i].getComponent(Animation).play();
            }
          }
        }

        checkPosIsWord() {
          for (var i = 0; i < this.tangmian.children.length; i++) {
            console.log(this.node.worldPosition, this.tangmian.children[i].worldPosition, '对比');

            if (this.tangmian.children[i].worldPosition.x == this.node.worldPosition.x && Math.floor(this.tangmian.children[i].worldPosition.y) == Math.floor(this.node.worldPosition.y)) {
              console.log("是这个字" + this.tangmian.children[i].name);
              this.word = this.tangmian.children[i];
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tangmian", [_dec2], {
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
//# sourceMappingURL=e032a89f547727ee31fb0cb2d5d989c938c40253.js.map