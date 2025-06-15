System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, find, EventMouse, Collider2D, Contact2DType, UITransform, v3, Camera, Layout, director, instantiate, SpriteFrame, Sprite, bag, interaction, interactionEvent, action, dialog_galgame, size, canChooseFood, StateType, settingData, PlayerLocal, dialogLocalData, group, Player, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, mezi;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfbag(extras) {
    _reporterNs.report("bag", "./bag", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinteraction(extras) {
    _reporterNs.report("interaction", "../../interaction/interaction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinteractionEvent(extras) {
    _reporterNs.report("interactionEvent", "../../interaction/interaction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaction(extras) {
    _reporterNs.report("action", "../../dialog/typeScript/dialog_galgame", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdialog_galgame(extras) {
    _reporterNs.report("dialog_galgame", "../../dialog/typeScript/dialog_galgame", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcanChooseFood(extras) {
    _reporterNs.report("canChooseFood", "../../烹饪/canChooseFood", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../../../UI/settingData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsettingData(extras) {
    _reporterNs.report("settingData", "../../../UI/settingData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerLocal(extras) {
    _reporterNs.report("PlayerLocal", "../../../Player/script/PlayerLocalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdialogLocalData(extras) {
    _reporterNs.report("dialogLocalData", "../../本地存储/dialogLocal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgroup(extras) {
    _reporterNs.report("group", "db://assets/Player/script/Player", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "db://assets/Player/script/Player", _context.meta, extras);
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
      find = _cc.find;
      EventMouse = _cc.EventMouse;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      Camera = _cc.Camera;
      Layout = _cc.Layout;
      director = _cc.director;
      instantiate = _cc.instantiate;
      SpriteFrame = _cc.SpriteFrame;
      Sprite = _cc.Sprite;
      size = _cc.size;
    }, function (_unresolved_2) {
      bag = _unresolved_2.bag;
    }, function (_unresolved_3) {
      interaction = _unresolved_3.interaction;
      interactionEvent = _unresolved_3.interactionEvent;
    }, function (_unresolved_4) {
      action = _unresolved_4.action;
      dialog_galgame = _unresolved_4.dialog_galgame;
    }, function (_unresolved_5) {
      canChooseFood = _unresolved_5.canChooseFood;
    }, function (_unresolved_6) {
      StateType = _unresolved_6.StateType;
      settingData = _unresolved_6.settingData;
    }, function (_unresolved_7) {
      PlayerLocal = _unresolved_7.PlayerLocal;
    }, function (_unresolved_8) {
      dialogLocalData = _unresolved_8.dialogLocalData;
    }, function (_unresolved_9) {
      group = _unresolved_9.group;
      Player = _unresolved_9.Player;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f4e2dKU+9FIE6Zfv2x/HFdX", "mezi", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'find', 'EventTouch', 'EventMouse', 'Collider2D', 'Contact2DType', 'IPhysics2DContact', 'Prefab', 'UITransform', 'v3', 'Camera', 'Enum', 'Layers', 'DynamicAtlasManager', 'AffineTransform', 'RigidBody2D', 'Terrain', 'Layout', 'director', 'instantiate', 'SpriteFrame', 'Sprite', 'inverseLerp', 'input', 'Input', 'EventKeyboard', 'KeyCode']);

      __checkObsolete__(['size']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("mezi", mezi = (_dec = ccclass('mezi'), _dec2 = property({
        visible: function visible() {
          return this.isFood == true;
        }
      }), _dec3 = property(SpriteFrame), _dec(_class = (_class2 = class mezi extends (_crd && interaction === void 0 ? (_reportPossibleCrUseOfinteraction({
        error: Error()
      }), interaction) : interaction) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "\u589E\u52A0\u7684\u9971\u98DF\u5EA6", _descriptor, this);

          _initializerDefineProperty(this, "isIngredients", _descriptor2, this);

          _initializerDefineProperty(this, "\u5728\u80CC\u5305\u4E2D\u7684\u7ACB\u7ED8", _descriptor3, this);

          this.canPick = true;
          this.contact = false;
          this.parentPath = '';

          _initializerDefineProperty(this, "isFood", _descriptor4, this);

          this.playercontact = void 0;
          this.isTouch = void 0;
          this.info = "";
        }

        update(dt) {
          if (this.node.parent.parent.name == 'windows') {
            this.node.setPosition(0, 0, 0);
          }
        }

        onLoad() {
          super.onLoad();

          if (this.voidOnce == true && true == (_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
            error: Error()
          }), dialogLocalData) : dialogLocalData).getSysLocalAboutDialogDOM(this.node.uuid)) {
            this.node.active = false;
          }
        }

        pressEvent() {
          if (this.node.parent.name == 'content') {
            (_crd && PlayerLocal === void 0 ? (_reportPossibleCrUseOfPlayerLocal({
              error: Error()
            }), PlayerLocal) : PlayerLocal).getPath();
            var PlayerNode = find((_crd && PlayerLocal === void 0 ? (_reportPossibleCrUseOfPlayerLocal({
              error: Error()
            }), PlayerLocal) : PlayerLocal).PlayerPath);
            console.log(PlayerNode.getPathInHierarchy(), 'Playeryyy');

            if (PlayerNode) {
              var PlayerScript = PlayerNode.getComponent(_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
                error: Error()
              }), Player) : Player);

              if (PlayerScript.contact == true) {
                PlayerScript.interactionName.getComponents(_crd && interaction === void 0 ? (_reportPossibleCrUseOfinteraction({
                  error: Error()
                }), interaction) : interaction).forEach(element => {
                  element.UseMezi(this.node.name);
                });
              }

              console.log(PlayerScript.contact);
            }

            console.log('bagbag');

            switch (this.interactionEvent) {
              case (_crd && interactionEvent === void 0 ? (_reportPossibleCrUseOfinteractionEvent({
                error: Error()
              }), interactionEvent) : interactionEvent).path:
                this.path.active = true;
                break;

              case (_crd && interactionEvent === void 0 ? (_reportPossibleCrUseOfinteractionEvent({
                error: Error()
              }), interactionEvent) : interactionEvent).scene:
                director.runScene(this.scene);
                break;

              case (_crd && interactionEvent === void 0 ? (_reportPossibleCrUseOfinteractionEvent({
                error: Error()
              }), interactionEvent) : interactionEvent).prefab:
                var prefab = instantiate(this.instantiateNode);
                prefab.setParent(find('Canvas'));
                prefab.setPosition(0, 0, 0);

                if (this.isDialog == true) {
                  var galgame = prefab.getComponent(_crd && dialog_galgame === void 0 ? (_reportPossibleCrUseOfdialog_galgame({
                    error: Error()
                  }), dialog_galgame) : dialog_galgame);
                  galgame.csv = this.csv;
                  galgame.endDelete = true;
                  galgame.eventHandler = this.dialogEventHandler;
                }

                this.info = prefab.getPathInHierarchy();
                console.log(prefab);
                break;
            }
          }

          if (this.node.parent.name == 'windows') {
            this.node.parent.getComponent(_crd && canChooseFood === void 0 ? (_reportPossibleCrUseOfcanChooseFood({
              error: Error()
            }), canChooseFood) : canChooseFood).ChooseFood = this.node;
            console.log('123');
          }

          if (this.node.parent.name == '布局') {
            this.interactionContactFunction();
          }

          console.log(this.node.parent.name);
        }

        start() {
          if (this.node.parent.name == 'content') {
            this.canPick = false;
            this.node.getComponent(Sprite).sizeMode = Sprite.SizeMode.CUSTOM;
            this.node.getComponent(UITransform).contentSize = size(128, 128);
            this.node.getComponent(Sprite).spriteFrame = this.在背包中的立绘;
          }

          console.log(this.node.layer);
          var collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
          }

          this.node.on(Node.EventType.MOUSE_UP, event => {
            switch (event.getButton()) {
              case EventMouse.BUTTON_LEFT:
                if (this.isTouch == false) {
                  this.pressEvent();
                } else {
                  this.isTouch = false;
                }

                break;

              /*case EventMouse.BUTTON_RIGHT:
                  console.log('菜单'+this.node.name)
                  break*/
            }
          });
          this.node.on(Node.EventType.TOUCH_END, event => {
            if (this.node.parent.name == 'content') {
              var parentBag = this.node.parent.getComponent(_crd && bag === void 0 ? (_reportPossibleCrUseOfbag({
                error: Error()
              }), bag) : bag); //检测拖拽到玩家身上且是食物就吃掉

              if (this.playercontact == true && this.isFood == true) {
                parentBag.delete(this.node.name);
              }

              if (this.contact == true) {
                console.log('put it up');
                parentBag.delete(this.node.name, this.parentPath);
                console.log(this.node.parent.name);
              }

              parentBag.getComponent(_crd && bag === void 0 ? (_reportPossibleCrUseOfbag({
                error: Error()
              }), bag) : bag).alignHorizontal();
              console.log('7890');
            }

            if (this.node.parent.name == 'windows') {
              this.node.parent.getComponent(Layout).alignHorizontal = true;
            }
          }, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, event => {
            if (this.node.parent.name == 'content') {
              var parentBag = this.node.parent.getComponent(_crd && bag === void 0 ? (_reportPossibleCrUseOfbag({
                error: Error()
              }), bag) : bag); //检测拖拽到玩家身上且是食物就吃掉

              if (this.playercontact == true && this.isFood == true) {
                parentBag.delete(this.node.name);
              }

              if (this.contact == true) {
                console.log('put it up');
                parentBag.delete(this.node.name, this.parentPath);
                console.log(this.node.parent.name);
              }

              parentBag.getComponent(_crd && bag === void 0 ? (_reportPossibleCrUseOfbag({
                error: Error()
              }), bag) : bag).alignHorizontal();
              console.log('7890');
            }

            if (this.node.parent.name == 'windows') {
              this.node.parent.getComponent(Layout).alignHorizontal = true;
            }
          }, this);
          this.node.on(Node.EventType.TOUCH_MOVE, event => {
            if (this.node.parent.name == 'content') {
              this.isTouch = true;
              var e = find('Canvas/Camera').getComponent(Camera).screenToWorld(v3(event.getLocation().x, event.getLocation().y));
              this.node.setWorldPosition(e);
            }
          }, this);
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          // 只在两个碰撞体开始接触时被调用一次
          if (otherCollider.group == (_crd && group === void 0 ? (_reportPossibleCrUseOfgroup({
            error: Error()
          }), group) : group).Player) {
            this.contact = true;
            console.log(this.contact, 'contact');
            this.parentPath = otherCollider.node.getPathInHierarchy();
          }

          console.log('onBeginContact');

          if (otherCollider.node.parent.name == 'Player') {
            this.playercontact = true;
          }
        }

        onEndContact(selfCollider, otherCollider, contact) {
          // 只在两个碰撞体结束接触时被调用一次
          if (otherCollider.group == (_crd && group === void 0 ? (_reportPossibleCrUseOfgroup({
            error: Error()
          }), group) : group).Player) {
            this.contact = false;
            console.log(this.contact);
          }

          if (otherCollider.node.parent.name == 'Player') {
            this.playercontact = false;
          }
        }

        interactionContactFunction() {
          if (this.voidOnce == true) {
            console.log('uuid', this.node.uuid);
            (_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
              error: Error()
            }), dialogLocalData) : dialogLocalData).setSysLocalAboutDIalog(this.node.uuid, (_crd && action === void 0 ? (_reportPossibleCrUseOfaction({
              error: Error()
            }), action) : action).add);
          }

          this.node.destroy();
        }

        onDestroy() {
          super.onDestroy(); //物品被拾起的调用

          if (this.node.parent.name != 'content' && this.node.parent.name != 'windows' && this.node.parent.parent.name != 'windows') {
            var inventory = find('Canvas/Camera/bag');
            var bagNode = find('Canvas/Camera/bag/view/content');

            if (inventory) {
              console.log(inventory.name);

              if (inventory.active = true) {
                bagNode.getComponent(_crd && bag === void 0 ? (_reportPossibleCrUseOfbag({
                  error: Error()
                }), bag) : bag).add(this.node.name);
              } else {
                inventory.active = true;
                bagNode.getComponent(_crd && bag === void 0 ? (_reportPossibleCrUseOfbag({
                  error: Error()
                }), bag) : bag).add(this.node.name);
                inventory.active = false;
              }
            }

            console.log('addBag');
          } //物品是食物被吃掉的调用


          if (this.node.parent.name == 'content') {
            if (this.isFood == true) {
              if (find('data')) {
                var data = find('data').getComponent(_crd && settingData === void 0 ? (_reportPossibleCrUseOfsettingData({
                  error: Error()
                }), settingData) : settingData);
                data.changeStateValue((_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
                  error: Error()
                }), StateType) : StateType).饱食, this.增加的饱食度);
              }
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "\u589E\u52A0\u7684\u9971\u98DF\u5EA6", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 30;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "isIngredients", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "\u5728\u80CC\u5305\u4E2D\u7684\u7ACB\u7ED8", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "isFood", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8a93239cea37aebf38e2ee2d0085b0d500dc5aa5.js.map