System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, TextAsset, Label, Button, Prefab, Layout, instantiate, EventHandler, sys, Input, input, SpriteFrame, dialogLocalData, chatNode, v3, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, action, dialog_galgame;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfdialogLocalData(extras) {
    _reporterNs.report("dialogLocalData", "../../本地存储/dialogLocal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchatNode(extras) {
    _reporterNs.report("chatNode", "./chatNode", _context.meta, extras);
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
      Node = _cc.Node;
      TextAsset = _cc.TextAsset;
      Label = _cc.Label;
      Button = _cc.Button;
      Prefab = _cc.Prefab;
      Layout = _cc.Layout;
      instantiate = _cc.instantiate;
      EventHandler = _cc.EventHandler;
      sys = _cc.sys;
      Input = _cc.Input;
      input = _cc.input;
      SpriteFrame = _cc.SpriteFrame;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      dialogLocalData = _unresolved_2.dialogLocalData;
    }, function (_unresolved_3) {
      chatNode = _unresolved_3.chatNode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e0b4aEes+VBIbHKvAfArkJh", "dialog_chat", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'TextAsset', 'Label', 'Button', 'Prefab', 'Layout', 'resources', 'instantiate', 'EventHandler', 'sys', 'SkelAnimDataHub', 'Camera', 'find', 'UITransform', 'tween', 'animation', 'Animation', 'director', 'EventKeyboard', 'KeyCode', 'Input', 'input', 'Sprite', 'SpriteFrame', 'BaseRenderData']);

      __checkObsolete__(['v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("action", action = /*#__PURE__*/function (action) {
        action[action["add"] = 0] = "add";
        action[action["delete"] = 1] = "delete";
        return action;
      }({}));

      _export("dialog_galgame", dialog_galgame = (_dec = ccclass('dialog_galgame'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property([EventHandler]), _dec5 = property({
        displayName: "人物立绘资源",
        tooltip: "图片数组代表在dialogindex的位置，比如0就在dialogindex等于0的时候显示图片",
        type: SpriteFrame
      }), _dec6 = property({
        displayName: "csv对话文本文件",
        tooltip: "对话内容",
        type: TextAsset
      }), _dec7 = property(Prefab), _dec8 = property(Layout), _dec9 = property(Node), _dec(_class = (_class2 = class dialog_galgame extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "chatNode", _descriptor, this);

          _initializerDefineProperty(this, "chatNodeSelf", _descriptor2, this);

          _initializerDefineProperty(this, "eventHandler", _descriptor3, this);

          _initializerDefineProperty(this, "renwu_spriteFrame", _descriptor4, this);

          _initializerDefineProperty(this, "csv", _descriptor5, this);

          _initializerDefineProperty(this, "optionButton", _descriptor6, this);

          _initializerDefineProperty(this, "Layout", _descriptor7, this);

          _initializerDefineProperty(this, "otherLayout", _descriptor8, this);

          //跳转对话的id
          this.dialogindex = 0;
          this.dialogRows = void 0;
          this.cell = void 0;
          this.index = void 0;
          this.button = void 0;
          this.jumptext = null;
          this.canPress = true;
          this.anima = void 0;
          this.canRestart = void 0;
          this.isChoose = false;
        }

        start() {
          this.schedule(() => {
            if (this.isChoose == false && this.canPress == true) {
              this.onClickNext();
            }
          }, 1);
          (_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
            error: Error()
          }), dialogLocalData) : dialogLocalData).getSysLocalAboutDialog();
          this.readText(this.csv);
          this.showDialogRow();
        }

        onLoad() {
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          sys.localStorage.removeItem('JUMPTEXT');
        }

        onKeyDown(event) {
          switch (event.keyCode) {
            case parseInt(sys.localStorage.getItem('next')):
              console.log('press');

              if (this.isChoose == false) {
                if (this.canPress == true && this.node.active == true) {
                  this.onClickNext();
                  /*if(this.node.name=='序'){
                      find('Canvas/Label').active=false
                  }*/
                } else if (this.canPress == false) {
                  this.unscheduleAllCallbacks();
                  this.canPress = true;
                }
              }

              break;
          }
        }

        onDestroy() {
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        }

        update(deltaTime) {}

        setAni(anima, node, 动画重复检测) {
          if (动画重复检测 == true) {
            if (this.anima == anima) {
              return;
            }
          }

          this.anima = anima;
          node.play(anima);
        }

        updateText(_name, _text) {
          if (_name == '郭志远') {
            var chatNodePrefab = instantiate(this.chatNodeSelf);
            chatNodePrefab.setParent(this.otherLayout);
            chatNodePrefab.setPosition(v3(1100));
            var chatNodeScript = chatNodePrefab.getComponent(_crd && chatNode === void 0 ? (_reportPossibleCrUseOfchatNode({
              error: Error()
            }), chatNode) : chatNode);
            chatNodeScript.peopleName.string = _name;
            chatNodeScript.peopleText.string = _text;

            if (this.renwu_spriteFrame[this.dialogindex] != null) {
              chatNodeScript.head.spriteFrame = this.renwu_spriteFrame[this.dialogindex];
            }
          } else {
            var _chatNodePrefab = instantiate(this.chatNode);

            _chatNodePrefab.setParent(this.otherLayout);

            _chatNodePrefab.setPosition(v3(0));

            var _chatNodeScript = _chatNodePrefab.getComponent(_crd && chatNode === void 0 ? (_reportPossibleCrUseOfchatNode({
              error: Error()
            }), chatNode) : chatNode);

            _chatNodeScript.peopleName.string = _name;
            _chatNodeScript.peopleText.string = _text;

            if (this.renwu_spriteFrame[this.dialogindex] != null) {
              _chatNodeScript.head.spriteFrame = this.renwu_spriteFrame[this.dialogindex];
            }
          }
        }

        readText(_TextAsset) {
          this.dialogRows = _TextAsset.text.split('\n');
        }

        showDialogRow() {
          if (this.eventHandler[this.dialogindex]) {
            this.eventHandler[this.dialogindex].emit([]);
          }

          for (var index = 0; index < this.dialogRows.length; index++) {
            this.cell = this.dialogRows[index].split(',');

            if (this.cell[0] == '#' && parseInt(this.cell[1]) == this.dialogindex) {
              this.canPress = true;
              this.updateText(this.cell[2], this.cell[3]);
              this.dialogindex = parseInt(this.cell[4]);
              this.DialogueFunc(this.cell[5]);
              console.log(this.cell[4]);

              if (this.cell[4] == '') {
                console.log('endFunc');
                this.endFunc();
              }

              break;
            } else if (this.cell[0] == '&' && parseInt(this.cell[1]) == this.dialogindex) {
              this.canPress = false;
              this.GenerateOption(index);
              break;
            }
          }
        }

        onOptionClick(id) {
          this.canPress = true;
          this.dialogindex = id;

          for (var index = 0; index < this.Layout.getComponentsInChildren(Button).length; index++) {
            this.Layout.node.destroyAllChildren();
          }
        } //对话选项绑定函数


        DialogueChooseFunc(cell5) {
          var cell = parseInt(cell5);
          console.log(cell); //选择CSV文件中的《事件》id，所执行对应的代码
          //事件必须出现在&对活里
        }

        endFunc() {
          this.canRestart = true;
        }

        Restart() {
          this.readText(this.csv);
          this.dialogindex = 0;
          this.cell = this.dialogRows[1].split(',');

          if (this.canRestart == true) {
            this.showDialogRow();
            this.canRestart = false;
          }
        }

        DialogueFunc(cell5) {
          var cell = parseInt(cell5);
          console.log(cell); //选择CSV文件中的《事件》id，所执行对应的代码
          //事件必须出现在#对活里
        }

        GenerateOption(_index) {
          var _this = this;

          var _loop = function _loop() {
            _this.cell = _this.dialogRows[_index].split(',');

            if (_this.cell[0] == '&') {
              _this.button = instantiate(_this.optionButton);

              _this.button.setParent(_this.Layout.node);

              var cell3 = _this.cell[3];
              var dd = _this.cell[4];
              var cell = _this.cell[5];
              _this.isChoose = true;

              var ooc = () => {
                _this.isChoose = false;

                _this.DialogueChooseFunc(cell);

                _this.onOptionClick(parseInt(dd));

                _this.updateText('郭志远', cell3);

                console.log('gzy');
              };

              _this.button.on(Button.EventType.CLICK, ooc, _this);

              _this.button.getComponentInChildren(Label).string = _this.cell[3];
              _index++;
            } else {
              return "break";
            }
          };

          while (true) {
            var _ret = _loop();

            if (_ret === "break") break;
          }
        }

        onClickNext() {
          /*this.button_next.node.active=true
          this.cell=this.dialogRows[parseInt(this.jumptext)].split(',')
          this.dialogindex=parseInt(this.cell[4])*/
          this.showDialogRow();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "chatNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "chatNodeSelf", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "eventHandler", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "renwu_spriteFrame", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "csv", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "optionButton", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Layout", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "otherLayout", [_dec9], {
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
//# sourceMappingURL=e0ede461b4f0f968e50f5581b7747280371470e6.js.map