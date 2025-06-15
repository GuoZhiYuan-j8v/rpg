System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, TextAsset, Label, Button, Prefab, Layout, instantiate, EventHandler, sys, tween, Input, input, Sprite, SpriteFrame, view, dialogLocalData, AudioClip, AudioSource, color, ProgressBar, highPriorityGlobalInput, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _crd, ccclass, property, action, dialog_galgame;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfdialogLocalData(extras) {
    _reporterNs.report("dialogLocalData", "../../本地存储/dialogLocal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhighPriorityGlobalInput(extras) {
    _reporterNs.report("highPriorityGlobalInput", "../../HighInput/HighPriorityGlobalInput", _context.meta, extras);
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
      TextAsset = _cc.TextAsset;
      Label = _cc.Label;
      Button = _cc.Button;
      Prefab = _cc.Prefab;
      Layout = _cc.Layout;
      instantiate = _cc.instantiate;
      EventHandler = _cc.EventHandler;
      sys = _cc.sys;
      tween = _cc.tween;
      Input = _cc.Input;
      input = _cc.input;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      view = _cc.view;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
      color = _cc.color;
      ProgressBar = _cc.ProgressBar;
    }, function (_unresolved_2) {
      dialogLocalData = _unresolved_2.dialogLocalData;
    }, function (_unresolved_3) {
      highPriorityGlobalInput = _unresolved_3.highPriorityGlobalInput;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6c9316OgcxCraSkHkG2PDs8", "dialog_galgame", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'TextAsset', 'Label', 'Button', 'Prefab', 'Layout', 'resources', 'instantiate', 'EventHandler', 'sys', 'SkelAnimDataHub', 'Camera', 'find', 'UITransform', 'tween', 'animation', 'Animation', 'director', 'EventKeyboard', 'KeyCode', 'Input', 'input', 'Sprite', 'SpriteFrame', 'BaseRenderData', 'view']);

      __checkObsolete__(['AudioClip']);

      __checkObsolete__(['AudioSource']);

      __checkObsolete__(['color']);

      __checkObsolete__(['ProgressBar']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("action", action = /*#__PURE__*/function (action) {
        action[action["add"] = 0] = "add";
        action[action["delete"] = 1] = "delete";
        return action;
      }({}));

      _export("dialog_galgame", dialog_galgame = (_dec = ccclass('dialog_galgame'), _dec2 = property(AudioSource), _dec3 = property(AudioClip), _dec4 = property([EventHandler]), _dec5 = property({
        tooltip: '没有放人物立绘的位置不显示图片'
      }), _dec6 = property({
        displayName: "人物立绘资源",
        tooltip: "图片数组代表在dialogindex的位置，比如0就在dialogindex等于0的时候显示图片",
        type: SpriteFrame
      }), _dec7 = property({
        displayName: "背景图片资源",
        tooltip: "图片数组代表在dialogindex的位置，比如0就在dialogindex等于0的时候显示图片",
        type: SpriteFrame
      }), _dec8 = property({
        displayName: "切换背景图片组件",
        tooltip: "切换图片节点",
        type: Sprite
      }), _dec9 = property({
        displayName: "切换人物立绘图片组件",
        tooltip: "切换图片节点",
        type: Sprite
      }), _dec10 = property({
        displayName: "csv对话文本文件",
        tooltip: "对话内容",
        type: TextAsset
      }), _dec11 = property({
        displayName: "对话",
        tooltip: "对话内容的label",
        type: Label
      }), _dec12 = property({
        displayName: "名字",
        tooltip: "名字的label",
        type: Label
      }), _dec13 = property(Prefab), _dec14 = property(Layout), _dec15 = property(Prefab), _dec(_class = (_class2 = class dialog_galgame extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "AudioSource", _descriptor, this);

          _initializerDefineProperty(this, "AudioClip", _descriptor2, this);

          _initializerDefineProperty(this, "once", _descriptor3, this);

          _initializerDefineProperty(this, "eventHandler", _descriptor4, this);

          _initializerDefineProperty(this, "NoPictureNoDisplay", _descriptor5, this);

          _initializerDefineProperty(this, "renwu_spriteFrame", _descriptor6, this);

          _initializerDefineProperty(this, "bgSpriteFrame", _descriptor7, this);

          _initializerDefineProperty(this, "bg_sprite", _descriptor8, this);

          _initializerDefineProperty(this, "renwu_sprite", _descriptor9, this);

          _initializerDefineProperty(this, "csv", _descriptor10, this);

          _initializerDefineProperty(this, "text", _descriptor11, this);

          _initializerDefineProperty(this, "Name", _descriptor12, this);

          _initializerDefineProperty(this, "optionButton", _descriptor13, this);

          _initializerDefineProperty(this, "Layout", _descriptor14, this);

          //跳转对话的id
          this.dialogindex = 0;
          this.dialogRows = [];
          this.cell = void 0;
          this.index = void 0;
          this.jumptext = null;
          this.canPress = true;
          this.anima = void 0;

          _initializerDefineProperty(this, "TimeProgress", _descriptor15, this);

          _initializerDefineProperty(this, "endDelete", _descriptor16, this);

          this.canRestart = void 0;
          this.isChoose = false;
        }

        start() {
          if (this.once == true) {
            if ((_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
              error: Error()
            }), dialogLocalData) : dialogLocalData).getSysLocalAboutDialogDOM(this.node.name)) {
              this.node.active = false;
            }

            (_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
              error: Error()
            }), dialogLocalData) : dialogLocalData).setSysLocalAboutDIalog(this.node.name, action.add);
          } //dialogLocalData.getSysLocalAboutDialog()


          this.readText(this.csv);
          this.showDialogRow();
        }

        becomeBlack() {
          tween(this.node.children[0].getComponent(Sprite)).by(0.1, {
            color: color(0, 0, 0, 30)
          }).start();
        }

        onLoad() {
          (_crd && highPriorityGlobalInput === void 0 ? (_reportPossibleCrUseOfhighPriorityGlobalInput({
            error: Error()
          }), highPriorityGlobalInput) : highPriorityGlobalInput).on(Input.EventType.TOUCH_START, this.click, this);
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_PRESSING, this.onKeyDown, this);
          sys.localStorage.removeItem('JUMPTEXT');
        }

        click() {
          console.log('press');

          if (this.isChoose == false) {
            if (this.canPress == true && this.node.active == true) {
              this.onClickNext();
              /*if(this.node.name=='序'){
                  find('Canvas/Label').active=false
              }*/
            } else if (this.canPress == false) {
              this.unscheduleAllCallbacks();
              this.text.string = sys.localStorage.getItem('text');
              this.canPress = true;
            }
          }
        }

        onKeyDown(event) {
          switch (event.keyCode) {
            case parseInt(sys.localStorage.getItem('next')):
              if (this.dialogRows.length > 0) {
                this.click();
              }

              break;
          }
        }

        onDestroy() {
          (_crd && highPriorityGlobalInput === void 0 ? (_reportPossibleCrUseOfhighPriorityGlobalInput({
            error: Error()
          }), highPriorityGlobalInput) : highPriorityGlobalInput).off(Input.EventType.TOUCH_START, this.click, this);
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_PRESSING, this.onKeyDown, this);
        }

        update(deltaTime) {//this.node.setPosition(find('Canvas/Camera').position)
        }

        showTextAnim(text) {
          var _this = this;

          sys.localStorage.setItem('text', text);

          var _loop = function _loop(i) {
            _this.scheduleOnce(() => {
              _this.text.string += text[i];

              if (_this.text.string == text) {
                _this.canPress = true;
                console.log('canpress');
              }
            }, 0.1 * i);
          };

          for (var i = 0; i < text.length; i++) {
            _loop(i);
          }
        }

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
          if (this.eventHandler[this.dialogindex]) {
            this.eventHandler[this.dialogindex].emit([]);
          }

          if (this.AudioClip[this.dialogindex]) {
            this.AudioSource.stop();
            this.AudioSource.clip = this.AudioClip[this.dialogindex];
            this.AudioSource.play();
          }

          this.Name.string = _name;
          this.canPress = false;
          this.text.string = "";

          if (this.renwu_spriteFrame[this.dialogindex] != null) {
            this.renwu_sprite.spriteFrame = this.renwu_spriteFrame[this.dialogindex];
          } else if (this.NoPictureNoDisplay == true) {
            this.renwu_sprite.spriteFrame = null;
          }

          if (this.bgSpriteFrame[this.dialogindex] != null) {
            this.bg_sprite.spriteFrame = this.bgSpriteFrame[this.dialogindex];
            this.resizeBackground();
          } // 逐字显示文本


          this.showTextAnim(_text);
        } // 在设置完 spriteFrame 后调用这个函数


        resizeBackground() {
          // 获取屏幕可见区域尺寸
          var screenSize = view.getVisibleSize(); // 获取图片原始尺寸

          var spriteFrame = this.bg_sprite.spriteFrame;
          var textureSize = spriteFrame == null ? void 0 : spriteFrame.originalSize;
          if (!textureSize) return; // 计算屏幕与图片的宽高比

          var screenRatio = screenSize.width / screenSize.height;
          var imageRatio = textureSize.width / textureSize.height; // 计算适配比例

          var targetScale = 1;

          if (screenRatio > imageRatio) {
            // 以高度为基准缩放
            targetScale = screenSize.height / textureSize.height;
          } else {
            // 以宽度为基准缩放
            targetScale = screenSize.width / textureSize.width;
          } // 应用缩放


          this.bg_sprite.node.setScale(targetScale, targetScale); // 确保居中显示（如果锚点不是0.5需要调整）

          this.bg_sprite.node.setPosition(0, 0);
        }

        readText(_TextAsset) {
          this.dialogRows = _TextAsset.text.split('\n');
        }

        showDialogRow() {
          for (var index = 0; index < this.dialogRows.length; index++) {
            this.cell = this.dialogRows[index].split(',');

            if (this.cell[0] == '#' && parseInt(this.cell[1]) == this.dialogindex) {
              this.canPress = true;
              this.updateText(this.cell[2], this.cell[3]);
              this.dialogindex = parseInt(this.cell[4]);
              this.DialogueFunc(this.cell[5]);
              console.log(this.cell[4]);

              if (this.cell[4] == '') {
                if (this.eventHandler[this.dialogindex]) {
                  this.eventHandler[this.dialogindex].emit([]);
                }

                console.log('endFunc');
                this.endFunc();
              }

              break;
            } else if (this.cell[0] == '&' && parseInt(this.cell[1]) == this.dialogindex) {
              this.canPress = false;
              this.GenerateOption(index);
            }
          }
        }

        onOptionClick(id) {
          this.dialogindex = id;
          this.showDialogRow();

          for (var index = 0; index < this.Layout.getComponentsInChildren(Button).length; index++) {
            this.Layout.node.destroyAllChildren();
          }
        } //对话选项绑定函数


        DialogueChooseFunc(cell5) {}

        endFunc() {
          setTimeout(() => {
            this.node.active = false;
          });
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

        DialogueFunc(cell5) {}

        GenerateOption(_index) {
          var _this2 = this;

          var _loop2 = function _loop2() {
            _this2.cell = _this2.dialogRows[_index].split(',');

            if (_this2.cell[0] == '&') {
              var button = instantiate(_this2.optionButton);
              button.setParent(_this2.Layout.node);
              var cell1 = _this2.cell[1];
              var dd = _this2.cell[4];
              var cell = _this2.cell[5];
              var condition = _this2.cell[6];
              var time = _this2.cell[7];
              var elseSkip = _this2.cell[8];
              _this2.isChoose = true;

              var ooc = () => {
                _this2.unscheduleAllCallbacks();

                _this2.isChoose = false;

                _this2.DialogueChooseFunc(cell);

                _this2.onOptionClick(parseInt(dd));

                if (_this2.eventHandler[cell1]) {
                  _this2.eventHandler[cell1].emit([]);
                }
              };

              if (time) {
                var TimeProgress = instantiate(_this2.TimeProgress);
                TimeProgress.setParent(_this2.node);
                tween(TimeProgress.getComponent(ProgressBar)).to(Number(time), {
                  progress: 0
                }).call(() => {
                  TimeProgress.destroy();
                }).start();

                _this2.scheduleOnce(() => {
                  var condition2 = elseSkip.replace(/[^a-zA-Z0-9 :]/g, '');
                  _this2.dialogindex = Number(condition2);

                  for (var index = 0; index < _this2.Layout.getComponentsInChildren(Button).length; index++) {
                    _this2.Layout.node.destroyAllChildren();
                  }

                  _this2.showDialogRow();

                  _this2.isChoose = false;
                }, Number(time));
              }

              button.on(Button.EventType.CLICK, ooc, _this2);
              button.getComponentInChildren(Label).string = _this2.cell[3]; //语法：“名字”:“值”

              console.log(typeof condition);

              if (condition) {
                if (condition.trim()) {
                  // let celll = condition2.split(':')
                  // console.log(celll, condition2)
                  // console.log(sys.localStorage.getItem(celll[0]), celll[1])
                  if ((_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
                    error: Error()
                  }), dialogLocalData) : dialogLocalData).getSysLocalAboutDialogDOM(condition.trim())) {
                    button.getComponent(Button).interactable = true;
                  } else {
                    button.getComponent(Button).interactable = false;
                  }
                }
              }

              _index++;
            } else {
              return "break";
            }
          };

          while (true) {
            var _ret = _loop2();

            if (_ret === "break") break;
          }
        }

        onClickNext() {
          /*this.button_next.node.active=true
          this.cell=this.dialogRows[parseInt(this.jumptext)].split(',')
          this.dialogindex=parseInt(this.cell[4])*/
          this.showDialogRow();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "AudioSource", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "AudioClip", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "once", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "eventHandler", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "NoPictureNoDisplay", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "renwu_spriteFrame", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bgSpriteFrame", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "bg_sprite", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "renwu_sprite", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "csv", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "text", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Name", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "optionButton", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Layout", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "TimeProgress", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "endDelete", [property], {
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
//# sourceMappingURL=304a14cf05192db55a96345c371b31ea12e7a6d8.js.map