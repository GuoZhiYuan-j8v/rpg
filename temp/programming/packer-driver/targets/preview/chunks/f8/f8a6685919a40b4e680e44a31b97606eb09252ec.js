System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Collider2D, Component, Contact2DType, Animation, find, input, Input, RigidBody2D, v2, EPhysics2DDrawFlags, PhysicsSystem2D, sys, interaction, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, Anistate, group, Player;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfinteraction(extras) {
    _reporterNs.report("interaction", "db://assets/tools/interaction/interaction", _context.meta, extras);
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
      Animation = _cc.Animation;
      find = _cc.find;
      input = _cc.input;
      Input = _cc.Input;
      RigidBody2D = _cc.RigidBody2D;
      v2 = _cc.v2;
      EPhysics2DDrawFlags = _cc.EPhysics2DDrawFlags;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      interaction = _unresolved_2.interaction;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cca29hqnl1Lhre2RwRkqMzY", "Player", undefined);

      __checkObsolete__(['_decorator', 'Collider2D', 'Component', 'Contact2DType', 'director', 'Animation', 'EventKeyboard', 'find', 'input', 'Input', 'IPhysics2DContact', 'KeyCode', 'Node', 'RigidBody2D', 'Sprite', 'v2', 'BaseNode', 'EPhysics2DDrawFlags', 'PhysicsSystem2D', 'Label', 'Prefab', 'instantiate', 'screen', 'ProgressBar', 'Vec2', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Anistate", Anistate = {
        walk: 'walk',
        walkUp: 'walkUp',
        idle: 'idle',
        sitDown: 'sitDown',
        walkDown: 'walkDown',
        sitUp: 'sitUp',
        idleDown: 'idleDown',
        idleUp: 'idleUp',
        peopleIndesk: 'peopleIndesk'
      });

      _export("group", group = {
        default: 1,
        Player: 2,
        interaction: 4
      });

      _export("Player", Player = (_dec = ccclass('Player'), _dec2 = property(Animation), _dec3 = property(RigidBody2D), _dec(_class = (_class2 = class Player extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "drawPhysics", _descriptor, this);

          _initializerDefineProperty(this, "Ani", _descriptor2, this);

          _initializerDefineProperty(this, "rBody", _descriptor3, this);

          _initializerDefineProperty(this, "moveSpeed", _descriptor4, this);

          this.right = false;
          this.left = false;
          this.anima = void 0;
          this.contact = void 0;
          this.interactionName = void 0;
          this.canMove = true;
          this.up = false;
          this.down = false;
          this.finallyDir = v2(0, 0);
        }

        lockInPlayAnimation() {
          this.canMove = false;
        }

        unlockInPlayAnimation() {
          this.canMove = true;
        }

        start() {
          //screen.requestFullScreen()

          /*this.inventory=instantiate(this.bag)
          this.inventory.setParent(find('Canvas/Camera'))
          this.inventory.setPosition(0,300)*/
          if (this.drawPhysics == true) {
            PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb | EPhysics2DDrawFlags.Pair | EPhysics2DDrawFlags.CenterOfMass | EPhysics2DDrawFlags.Joint | EPhysics2DDrawFlags.Shape;
          }

          var colliderPlayer = this.node.getComponent(Collider2D);

          if (colliderPlayer) {
            console.log('67890');
            colliderPlayer.on(Contact2DType.BEGIN_CONTACT, this.onBeginContactPlayer, this);
            colliderPlayer.on(Contact2DType.END_CONTACT, this.onEndContactPlayer, this);
          }

          colliderPlayer.enabled = true;
          console.log(colliderPlayer.group);
        }

        onLoad() {
          sys.localStorage.setItem('PlayerPath', this.node.getPathInHierarchy());
          this.anima = this.Ani.defaultClip.name;
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        }

        onDestroy() {
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
        }

        idle() {
          this.setAni(Anistate.idle, true);
        }

        onKeyDown(event) {
          switch (event.keyCode) {
            case parseInt(sys.localStorage.getItem('left')):
              this.left = true;
              console.log(this.left);
              break;

            case parseInt(sys.localStorage.getItem('right')):
              this.right = true;
              break;

            case parseInt(sys.localStorage.getItem('up')):
              this.up = true;
              break;

            case parseInt(sys.localStorage.getItem('down')):
              this.down = true;
              break;

            case parseInt(sys.localStorage.getItem('interaction')):
              console.log(this.anima);

              if (this.node.children[0].active == true) {
                this.interactionName.getComponents(_crd && interaction === void 0 ? (_reportPossibleCrUseOfinteraction({
                  error: Error()
                }), interaction) : interaction).forEach(element => {
                  element.interactionContactFunction();
                }); //this.interactionName.getComponent(interaction).interactionContactFunction()

                this.node.children[0].active = false;
              } else if (this.anima == Anistate.peopleIndesk) {
                this.idle();
              } else if (this.node.children[1]) {
                var equipName = this.node.children[1].name;
                this.node.children[1].setParent(find('Canvas/2.5d'));
                find('Canvas/2.5d/' + equipName).setWorldPosition(this.node.worldPosition);
              }

              break;

            /*case parseInt(sys.localStorage.getItem('esc')):
                director.loadScene('setting')
                break*/

            /*case parseInt(sys.localStorage.getItem('save')):
                sys.localStorage.setItem('SaveScene',director.getScene().name)
                /*let saveLabel=instantiate()
                saveLabel.addComponent(Label).string='保存'+director.getScene().name
                saveLabel.setParent(find('Canvas'))
                break
                */
          }
        }

        onKeyUp(event) {
          switch (event.keyCode) {
            case parseInt(sys.localStorage.getItem('left')):
              if (this.left == true) {
                this.left = false;
                this.finallyDir = v2(-1, 0);
              }

              console.log(this.left);
              break;

            case parseInt(sys.localStorage.getItem('right')):
              if (this.right == true) {
                this.right = false;
                this.finallyDir = v2(1, 0);
              }

              break;

            case parseInt(sys.localStorage.getItem('up')):
              if (this.up == true) {
                this.up = false;
                this.finallyDir = v2(0, 1);
              }

              break;

            case parseInt(sys.localStorage.getItem('down')):
              if (this.down == true) {
                this.down = false;
                this.finallyDir = v2(0, -1);
              }

              break;
          }
        }

        update(deltaTime) {
          if (this.node.children[0]) {
            this.node.children[0].setPosition(0, 169, 0);
          } //console.log(this.lnventory)


          this.move(deltaTime);
        }

        onBeginContactPlayer(selfCollider, otherCollider, contact) {
          //console.log(otherCollider.group)
          console.log(otherCollider.group);

          if (otherCollider.group == 4) {
            this.contact = true;

            if (otherCollider.node.getComponent(_crd && interaction === void 0 ? (_reportPossibleCrUseOfinteraction({
              error: Error()
            }), interaction) : interaction).canInteraction == true) {
              this.interactionName = otherCollider.node;
              console.log(this.interactionName.name + 'onBeginContact');
              this.node.children[0].active = true;
            }
          }
        }

        onEndContactPlayer(selfCollider, otherCollider, contact) {
          if (otherCollider.group == 4) {
            this.contact = false;
            this.node.children[0].active = false;
          }

          console.log(666);
        }

        move(deltaTime) {
          if (this.canMove == true) {
            //console.log(this.anima)
            if (this.anima == Anistate.idle || this.anima == Anistate.walk || this.anima == Anistate.walkUp || this.anima == Anistate.walkDown || this.anima == Anistate.idleDown || this.anima == Anistate.idleUp) {
              if (this.left == true || this.right == true) {
                this.setAni(Anistate.walk, true);
              } else if (this.up == true || this.down == true) {
                if (this.down == true) {
                  this.setAni(Anistate.walkDown, true);
                } else if (this.up == true) {
                  this.setAni(Anistate.walkUp, true);
                }
              }

              if (this.left == true) {
                this.node.setScale(-1, 1, 1);
              } else if (this.right == true) {
                this.node.setScale(1, 1, 1);
              }

              if (this.left == true && this.right == false) {
                this.rBody.linearVelocity = v2(-1 * this.moveSpeed, this.rBody.linearVelocity.y);
              } else if (this.left == false && this.right == true) {
                this.rBody.linearVelocity = v2(1 * this.moveSpeed, this.rBody.linearVelocity.y);
              } else {
                if (this.up == false && this.down == false) {
                  if (this.finallyDir.y == 1) {
                    this.setAni(Anistate.idleUp, true);
                  } else if (this.finallyDir.y == -1) {
                    this.setAni(Anistate.idleDown, true);
                  }
                }

                this.rBody.linearVelocity = v2(0, this.rBody.linearVelocity.y);
              }

              if (this.up == true && this.down == false) {
                this.rBody.linearVelocity = v2(this.rBody.linearVelocity.x, 1 * this.moveSpeed);
              } else if (this.up == false && this.down == true) {
                this.rBody.linearVelocity = v2(this.rBody.linearVelocity.x, -1 * this.moveSpeed);
              } else {
                if (this.left == false && this.right == false) {
                  if (this.finallyDir.x == 1 || this.finallyDir.x == -1) {
                    this.setAni(Anistate.idle, true);
                  }
                }

                this.rBody.linearVelocity = v2(this.rBody.linearVelocity.x, 0);
              }
            } else {}
          }
        }

        setAni(anima, 动画重复检测, node) {
          if (动画重复检测 == true) {
            if (this.anima == anima) return;
          }

          this.anima = anima;

          if (node) {
            node.play(anima);
          } else {
            this.Ani.play(anima);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "drawPhysics", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Ani", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rBody", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "moveSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 8;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f8a6685919a40b4e680e44a31b97606eb09252ec.js.map