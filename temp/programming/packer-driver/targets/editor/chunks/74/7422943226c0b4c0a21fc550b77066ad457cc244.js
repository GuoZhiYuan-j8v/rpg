System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, TextAsset, Label, Button, Prefab, Layout, instantiate, EventHandler, sys, find, director, Input, input, Sprite, SpriteFrame, dialogLocalData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _crd, ccclass, property, action, dialog_galgame;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfdialogLocalData(extras) {
    _reporterNs.report("dialogLocalData", "../../本地存储/dialogLocal", _context.meta, extras);
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
      find = _cc.find;
      director = _cc.director;
      Input = _cc.Input;
      input = _cc.input;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      dialogLocalData = _unresolved_2.dialogLocalData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "11c4fV/kwBGCLND8iwg5+43", "dialog_galgame_haiguitang", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'TextAsset', 'Label', 'Button', 'Prefab', 'Layout', 'resources', 'instantiate', 'EventHandler', 'sys', 'SkelAnimDataHub', 'Camera', 'find', 'UITransform', 'tween', 'animation', 'Animation', 'director', 'EventKeyboard', 'KeyCode', 'Input', 'input', 'Sprite', 'SpriteFrame', 'BaseRenderData']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("action", action = /*#__PURE__*/function (action) {
        action[action["add"] = 0] = "add";
        action[action["delete"] = 1] = "delete";
        return action;
      }({}));

      _export("dialog_galgame", dialog_galgame = (_dec = ccclass('dialog_galgame'), _dec2 = property([EventHandler]), _dec3 = property({
        tooltip: '没有放人物立绘的位置不显示图片'
      }), _dec4 = property({
        displayName: "人物立绘资源",
        tooltip: "图片数组代表在dialogindex的位置，比如0就在dialogindex等于0的时候显示图片",
        type: SpriteFrame
      }), _dec5 = property({
        displayName: "背景图片资源",
        tooltip: "图片数组代表在dialogindex的位置，比如0就在dialogindex等于0的时候显示图片",
        type: SpriteFrame
      }), _dec6 = property({
        displayName: "切换背景图片组件",
        tooltip: "切换图片节点",
        type: Sprite
      }), _dec7 = property({
        displayName: "切换人物立绘图片组件",
        tooltip: "切换图片节点",
        type: Sprite
      }), _dec8 = property({
        displayName: "csv对话文本文件",
        tooltip: "对话内容",
        type: TextAsset
      }), _dec9 = property({
        displayName: "对话",
        tooltip: "对话内容的label",
        type: Label
      }), _dec10 = property({
        displayName: "名字",
        tooltip: "名字的label",
        type: Label
      }), _dec11 = property(Prefab), _dec12 = property(Layout), _dec(_class = (_class2 = class dialog_galgame extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "eventHandler", _descriptor, this);

          _initializerDefineProperty(this, "NoPictureNoDisplay", _descriptor2, this);

          _initializerDefineProperty(this, "renwu_spriteFrame", _descriptor3, this);

          _initializerDefineProperty(this, "bgSpriteFrame", _descriptor4, this);

          _initializerDefineProperty(this, "bg_sprite", _descriptor5, this);

          _initializerDefineProperty(this, "renwu_sprite", _descriptor6, this);

          _initializerDefineProperty(this, "csv", _descriptor7, this);

          _initializerDefineProperty(this, "text", _descriptor8, this);

          _initializerDefineProperty(this, "Name", _descriptor9, this);

          _initializerDefineProperty(this, "optionButton", _descriptor10, this);

          _initializerDefineProperty(this, "Layout", _descriptor11, this);

          //跳转对话的id
          this.dialogindex = 0;
          this.dialogRows = void 0;
          this.cell = void 0;
          this.index = void 0;
          this.jumptext = null;
          this.canPress = true;
          this.anima = void 0;

          _initializerDefineProperty(this, "endDelete", _descriptor12, this);

          this.canRestart = void 0;
          this.isChoose = false;
        }

        start() {
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
                  this.text.string = sys.localStorage.getItem('text');
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

        showTextAnim(text) {
          sys.localStorage.setItem('text', text);

          for (let i = 0; i < text.length; i++) {
            this.scheduleOnce(() => {
              this.text.string += text[i];

              if (this.text.string == text) {
                this.canPress = true;
                console.log('canpress');
              }
            }, 0.1 * i);
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
          } // 逐字显示文本


          this.showTextAnim(_text);
        }

        readText(_TextAsset) {
          this.dialogRows = _TextAsset.text.split('\n');
        }

        showDialogRow() {
          for (let index = 0; index < this.dialogRows.length; index++) {
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

          for (let index = 0; index < this.Layout.getComponentsInChildren(Button).length; index++) {
            this.Layout.node.destroyAllChildren();
          }
        } //对话选项绑定函数


        DialogueChooseFunc(cell5) {
          let cell = parseInt(cell5);
          console.log(cell); //选择CSV文件中的《事件》id，所执行对应的代码
          //事件必须出现在&对活里

          switch (cell) {
            case 0:
              switch (this.node.name) {
                case '老师要来找我麻烦了':
                  (_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
                    error: Error()
                  }), dialogLocalData) : dialogLocalData).setSysLocalAboutDIalog('老师要来找我麻烦了', action.add);
                  console.log('666');
                  break;
              }

              break;
          }
        }

        endFunc() {
          console.log(this.node.name);

          switch (this.node.name) {
            case '老师有人带手机':
              find('Canvas/Camera/blackFront').active = true;
              break;

            case '高中生涯规划':
              find('Canvas/Camera/blackFront').active = true;
              break;

            case '填写实验数据':
              find('Canvas/blackFront').active = true;
              break;

            case '收集实验数据':
              director.loadScene('发到班级群_自选课题');
              break;

            case '肖老师讲故事':
              director.loadScene('classroom_自选课题');
              break;

            case '志远快上去关掉':
              //director.loadScene('走廊')
              break;

            case '看完南京大屠杀的感悟':
              break;

            case '今天是什么日子大家心里清楚':
              find('Canvas/南京大屠杀').active = true;
              break;

            case 'xf上课':
              find('Canvas/语文老师12月13日').active = true;
              break;

            case '做问卷调查':
              console.log((_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
                error: Error()
              }), dialogLocalData) : dialogLocalData).getSysLocalAboutDialog());

              if ((_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
                error: Error()
              }), dialogLocalData) : dialogLocalData).getSysLocalAboutDialogDOM('重写问卷')) {
                console.log('失败了！！！');
                find('Canvas/computer2/重写问卷').active = true;
                (_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
                  error: Error()
                }), dialogLocalData) : dialogLocalData).setSysLocalAboutDIalog('重写问卷', action.delete);
              } else {
                find('Canvas/收集实验数据').active = true;
                console.log('成功了！！！');
              }

              break;

            case '做技术课题':
              if ((_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
                error: Error()
              }), dialogLocalData) : dialogLocalData).getSysLocalAboutDialogDOM('问卷调查')) {
                console.log('成功啦！！！');
                find('Canvas/computer2/Text').active = true;
                find('Canvas/computer2/重写').active = false;
              } else {
                find('Canvas/computer2/重写').active = true;
              }

              (_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
                error: Error()
              }), dialogLocalData) : dialogLocalData).setSysLocalAboutDIalog('ai生成', action.delete);
              (_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
                error: Error()
              }), dialogLocalData) : dialogLocalData).setSysLocalAboutDIalog('问卷调查', action.delete);
              break;

            case '老师拿手机':
              director.loadScene('办公室');
              break;

            case '贵屿中学我来了':
              director.loadScene('home_2floor_livingroom-phone');
              break;

            case '老师要来找我麻烦了':
              console.log((_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
                error: Error()
              }), dialogLocalData) : dialogLocalData).getSysLocalAboutDialog());

              if ((_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
                error: Error()
              }), dialogLocalData) : dialogLocalData).getSysLocalAboutDialogDOM('保证不带手机')) {
                if ((_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
                  error: Error()
                }), dialogLocalData) : dialogLocalData).getSysLocalAboutDialogDOM('签了字')) {} else {
                  if ((_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
                    error: Error()
                  }), dialogLocalData) : dialogLocalData).getSysLocalAboutDialogDOM('老师要来找我麻烦了')) {
                    find('Canvas/你刚才还说老师要来找你麻烦').active = true;
                  } else {
                    find('Canvas/接受道歉').active = true;
                  }
                }
              } else if ((_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
                error: Error()
              }), dialogLocalData) : dialogLocalData).getSysLocalAboutDialogDOM('在停学书上做文章')) {}

              (_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
                error: Error()
              }), dialogLocalData) : dialogLocalData).setSysLocalAboutDIalog('签了字', action.delete);
              (_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
                error: Error()
              }), dialogLocalData) : dialogLocalData).setSysLocalAboutDIalog('老师要来找我麻烦了', action.delete);
              (_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
                error: Error()
              }), dialogLocalData) : dialogLocalData).setSysLocalAboutDIalog('保证不带手机', action.delete);
              (_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
                error: Error()
              }), dialogLocalData) : dialogLocalData).setSysLocalAboutDIalog('在停学书上做文章', action.delete);
              console.log((_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
                error: Error()
              }), dialogLocalData) : dialogLocalData).getSysLocalAboutDialog(), (_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
                error: Error()
              }), dialogLocalData) : dialogLocalData).getSysLocalAboutDialogDOM('保证不带手机'));
              break;
          }

          if (this.endDelete == true) {
            console.log('dddd');
            this.node.active = false;
          }

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
          let cell = parseInt(cell5);
          console.log(cell); //选择CSV文件中的《事件》id，所执行对应的代码
          //事件必须出现在#对活里

          switch (cell) {
            case 0:
              switch (this.csv.name) {
                case '不如带个坏手机':
                  find('Canvas/2.5d/desk/手机').destroy(); //sys.localStorage.setItem('不如带个坏手机',JSON.stringify(true))

                  (_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
                    error: Error()
                  }), dialogLocalData) : dialogLocalData).setSysLocalAboutDIalog('不如带个坏手机', action.add);
                  break;

                case '做技术课题':
                  (_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
                    error: Error()
                  }), dialogLocalData) : dialogLocalData).setSysLocalAboutDIalog('ai生成', action.add);
                  break;

                case '做问卷调查':
                  (_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
                    error: Error()
                  }), dialogLocalData) : dialogLocalData).setSysLocalAboutDIalog('重写问卷', action.add);
                  break;
              }

              console.log('带手机到学校');
              break;

            case 1:
              switch (this.node.name) {
                case '老师要来找我麻烦了':
                  (_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
                    error: Error()
                  }), dialogLocalData) : dialogLocalData).setSysLocalAboutDIalog('保证不带手机', action.add);
                  console.log('666');
                  break;

                case '做技术课题':
                  (_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
                    error: Error()
                  }), dialogLocalData) : dialogLocalData).setSysLocalAboutDIalog('问卷调查', action.add);
                  break;
              }

              console.log('不带手机到学校');
              break;

            case 2:
              switch (this.node.name) {
                case '老师要来找我麻烦了':
                  (_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
                    error: Error()
                  }), dialogLocalData) : dialogLocalData).setSysLocalAboutDIalog('在停学书上做文章', action.add);
                  console.log('666');
                  break;
              }

              console.log('不带手机到学校');
              break;

            case 3:
              switch (this.node.name) {
                case '老师要来找我麻烦了':
                  (_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
                    error: Error()
                  }), dialogLocalData) : dialogLocalData).setSysLocalAboutDIalog('签了字', action.add);
                  director.loadScene('home_2floor_livingroom-停学');
                  break;
              }

              console.log('不带手机到学校');
              break;
          }
        }

        GenerateOption(_index) {
          while (true) {
            this.cell = this.dialogRows[_index].split(',');

            if (this.cell[0] == '&') {
              let button = instantiate(this.optionButton);
              button.setParent(this.Layout.node);
              let cell1 = this.cell[1];
              let dd = this.cell[4];
              let cell = this.cell[5];
              let condition = this.cell[6];
              this.isChoose = true;

              let ooc = () => {
                this.isChoose = false;
                this.DialogueChooseFunc(cell);
                this.onOptionClick(parseInt(dd));

                if (this.eventHandler[cell1]) {
                  this.eventHandler[cell1].emit([]);
                }
              };

              button.on(Button.EventType.CLICK, ooc, this);
              button.getComponentInChildren(Label).string = this.cell[3]; //语法：“名字”:“值”

              console.log(typeof condition);

              if (condition) {
                const condition2 = condition.replace(/[^a-zA-Z0-9 :]/g, '');
                let celll = condition2.split(':');
                console.log(celll, condition2);
                console.log(sys.localStorage.getItem(celll[0]), celll[1]);

                if (sys.localStorage.getItem(celll[0]) == celll[1]) {
                  button.getComponent(Button).interactable = true;
                } else {
                  button.getComponent(Button).interactable = false;
                }
              }

              _index++;
            } else {
              break;
            }
          }
        }

        onClickNext() {
          /*this.button_next.node.active=true
          this.cell=this.dialogRows[parseInt(this.jumptext)].split(',')
          this.dialogindex=parseInt(this.cell[4])*/
          this.showDialogRow();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "eventHandler", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "NoPictureNoDisplay", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "renwu_spriteFrame", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bgSpriteFrame", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bg_sprite", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "renwu_sprite", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "csv", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "text", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Name", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "optionButton", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Layout", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "endDelete", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7422943226c0b4c0a21fc550b77066ad457cc244.js.map