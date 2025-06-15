System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Collider2D, Component, Contact2DType, input, Input, KeyCode, Node, tween, v2, v3, interaction, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, nawenhao;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfinteraction(extras) {
    _reporterNs.report("interaction", "../../interaction/interaction", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Collider2D = _cc.Collider2D;
      Component = _cc.Component;
      Contact2DType = _cc.Contact2DType;
      input = _cc.input;
      Input = _cc.Input;
      KeyCode = _cc.KeyCode;
      Node = _cc.Node;
      tween = _cc.tween;
      v2 = _cc.v2;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      interaction = _unresolved_2.interaction;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7df8e6rTrNC87KkA/0t+6vL", "nawenhao", undefined);

      __checkObsolete__(['_decorator', 'Collider2D', 'Component', 'Contact2DType', 'EventKeyboard', 'input', 'Input', 'KeyCode', 'Node', 'tween', 'v2', 'v3', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("nawenhao", nawenhao = (_dec = ccclass('nawenhao'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = class nawenhao extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "checkNode", _descriptor, this);

          _initializerDefineProperty(this, "question", _descriptor2, this);

          this.eat = false;

          _initializerDefineProperty(this, "questionNodeParent", _descriptor3, this);

          this.isMove = false;
        }

        start() {
          var collider = this.node.children[0].getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
          }
        }

        onLoad() {
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        }

        onBeginContact(selfCollider, otherCollider) {}

        onEndContact(selfCollider, otherCollider) {}

        onDestroy() {
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        }

        onKeyDown(event) {
          switch (event.keyCode) {
            case KeyCode.KEY_A:
              console.log('Press a key');
              this.moveBy(v2(-128));
              this.node.angle = 90;
              break;

            case KeyCode.KEY_D:
              this.moveBy(v2(128));
              this.node.angle = -90;
              break;

            case KeyCode.KEY_W:
              this.moveBy(v2(0, 128));
              this.node.angle = 0;
              break;

            case KeyCode.KEY_S:
              this.moveBy(v2(0, -128));
              this.node.angle = -180;
              break;

            case KeyCode.KEY_Z:
              if (this.eat == false) {
                this.eatQuestion();
              } else if (this.eat == true) {
                this.sendTheQuestion();
              }

              break;
          }
        }

        moveBy(vector2) {
          if (this.isMove == false) {
            this.isMove = true;
            tween(this.node).by(0.3, {
              position: v3(vector2.x, vector2.y)
            }).call(() => {
              this.isMove = false;
            }).start();

            if (this.eat == true) {
              tween(this.question).by(0.3, {
                position: v3(vector2.x, vector2.y)
              }).start();
            }
          }
        }

        eatQuestion() {
          console.log(this.checkNode.worldPosition, this.question.worldPosition);

          if (this.checkNode.worldPosition.x == this.question.worldPosition.x && Math.floor(this.checkNode.worldPosition.y) == Math.floor(this.question.worldPosition.y)) {
            this.question.position = this.node.position;
            this.eat = true;
          }
        }

        sendTheQuestion() {
          var _this = this;

          var _loop = function _loop(i) {
            if (_this.question.position.x == _this.questionNodeParent.children[i].position.x) {
              if (_this.node.angle == 0 && _this.question.position.y < _this.questionNodeParent.children[i].position.y) {
                tween(_this.question).to(0.5, {
                  position: _this.questionNodeParent.children[i].position
                }).delay(0.5).call(() => {
                  _this.questionNodeParent.children[i].getComponent(_crd && interaction === void 0 ? (_reportPossibleCrUseOfinteraction({
                    error: Error()
                  }), interaction) : interaction).interactionContactFunction();
                }).start();
                _this.eat = false;
                return "break";
              }

              if (_this.node.angle == -180 && _this.question.position.y > _this.questionNodeParent.children[i].position.y) {
                tween(_this.question).to(0.5, {
                  position: _this.questionNodeParent.children[i].position
                }).delay(0.5).call(() => {
                  _this.questionNodeParent.children[i].getComponent(_crd && interaction === void 0 ? (_reportPossibleCrUseOfinteraction({
                    error: Error()
                  }), interaction) : interaction).interactionContactFunction();
                }).start();
                _this.eat = false;
                return "break";
              }
            }

            if (_this.question.position.y == _this.questionNodeParent.children[i].position.y) {
              if (_this.node.angle == -90 && _this.question.position.x < _this.questionNodeParent.children[i].position.x) {
                tween(_this.question).to(0.5, {
                  position: _this.questionNodeParent.children[i].position
                }).delay(0.5).call(() => {
                  _this.questionNodeParent.children[i].getComponent(_crd && interaction === void 0 ? (_reportPossibleCrUseOfinteraction({
                    error: Error()
                  }), interaction) : interaction).interactionContactFunction();
                }).start();
                _this.eat = false;
                return "break";
              }

              if (_this.node.angle == 90 && _this.question.position.x > _this.questionNodeParent.children[i].position.x) {
                tween(_this.question).to(0.5, {
                  position: _this.questionNodeParent.children[i].position
                }).delay(0.5).call(() => {
                  _this.questionNodeParent.children[i].getComponent(_crd && interaction === void 0 ? (_reportPossibleCrUseOfinteraction({
                    error: Error()
                  }), interaction) : interaction).interactionContactFunction();
                }).start();
                _this.eat = false;
                return "break";
              }
            }
          };

          for (var i = 0; i < this.questionNodeParent.children.length; i++) {
            var _ret = _loop(i);

            if (_ret === "break") break;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "checkNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "question", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "questionNodeParent", [_dec4], {
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
//# sourceMappingURL=eade3f10fd29461d19da33193146622a5ac7fd1f.js.map