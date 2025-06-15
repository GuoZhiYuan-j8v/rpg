System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, TextAsset, Label, Button, Prefab, Layout, instantiate, sys, find, UITransform, Animation, Input, input, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, dialog_op;

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
      TextAsset = _cc.TextAsset;
      Label = _cc.Label;
      Button = _cc.Button;
      Prefab = _cc.Prefab;
      Layout = _cc.Layout;
      instantiate = _cc.instantiate;
      sys = _cc.sys;
      find = _cc.find;
      UITransform = _cc.UITransform;
      Animation = _cc.Animation;
      Input = _cc.Input;
      input = _cc.input;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d5c67bB5ONPEJawM30Bzabh", "dialog_op", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'TextAsset', 'Label', 'Button', 'Prefab', 'Layout', 'resources', 'instantiate', 'EventHandler', 'sys', 'SkelAnimDataHub', 'Camera', 'find', 'UITransform', 'tween', 'animation', 'Animation', 'BoxCollider2D', 'TERRAIN_HEIGHT_BASE', 'director', 'PolygonCollider2D', 'EventKeyboard', 'Input', 'KeyCode', 'input', 'VideoPlayer', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("dialog_op", dialog_op = (_dec = ccclass('dialog_op'), _dec2 = property(Node), _dec3 = property({
        displayName: "Mask节点",
        tooltip: "用于对话显示动画",
        type: Prefab
      }), _dec4 = property({
        displayName: "csv对话文本文件",
        tooltip: "对话内容",
        type: TextAsset
      }), _dec5 = property(Prefab), _dec6 = property(Layout), _dec(_class = (_class2 = class dialog_op extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "homoparent", _descriptor, this);

          _initializerDefineProperty(this, "ParentAnim", _descriptor2, this);

          _initializerDefineProperty(this, "csv", _descriptor3, this);

          _initializerDefineProperty(this, "optionButton", _descriptor4, this);

          _initializerDefineProperty(this, "Layout", _descriptor5, this);

          //跳转对话的id
          this.dialogindex = 0;
          this.dialogRows = void 0;
          this.cell = void 0;
          this.index = void 0;
          this.button = void 0;
          this.jumptext = null;
          this.canPress = true;
          this.anima = void 0;
          this.actionBegin = void 0;
          this.Mask = null;
          this.canRestart = false;
        }

        start() {
          this.readText(this.csv);
          this.showDialogRow();
        }

        update(deltaTime) {}

        onLoad() {
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          sys.localStorage.setItem('dialogActive', 'yes');
          sys.localStorage.removeItem('JUMPTEXT');
        }

        setAni(anima, 动画重复检测, node) {
          if (动画重复检测 == true) {
            if (this.anima == anima) {
              return;
            }
          }

          this.anima = anima;
          node.play(anima);
        }

        updateText(_text) {
          if (this.Mask != null) {
            this.Mask.destroy();
          }

          this.Mask = instantiate(this.ParentAnim);
          this.Mask.setParent(find('Canvas'));
          this.setAni('自上而下的显示', true, this.Mask.getComponent(Animation));
          sys.localStorage.setItem('TalkText', _text);
        }

        readText(_TextAsset) {
          this.dialogRows = _TextAsset.text.split('\n');
        }

        onDestroy() {
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        }

        onKeyDown(event) {
          switch (event.keyCode) {
            case parseInt(sys.localStorage.getItem('next')):
              if (this.canPress == true) {
                this.onClickNext();
              }

              break;
          }
        }

        showDialogRow() {
          for (let index = 0; index < this.dialogRows.length; index++) {
            this.cell = this.dialogRows[index].split(',');

            if (this.cell[0] == '#' && parseInt(this.cell[1]) == this.dialogindex) {
              //对话结束后
              console.debug(parseInt(this.cell[5]));
              this.ChooseFunc(this.cell[5]);
              this.canPress = true;
              this.updateText(this.cell[3]); //寻找场景中的人物

              let homo = find(this.homoparent.getPathInHierarchy() + '/' + this.cell[2]);

              if (homo != null) {
                if (homo.getComponent(UITransform).anchorPoint.y == 0.5) {
                  this.Mask.setPosition(homo.position.x, homo.position.y + homo.getComponent(UITransform).contentSize.height / 2);
                } else {
                  this.Mask.setPosition(homo.position.x, homo.position.y + (homo.getComponent(UITransform).contentSize.height / 2 + 150));
                }
              }

              console.log(this.cell[4]);

              if (this.cell[4] == '') {
                this.endFunc();
                this.canRestart = true;
                this.Mask.destroy();
                this.node.active = false; //寻找场景中的播放字幕，如果
              }

              this.dialogindex = parseInt(this.cell[4]);
              break;
            } else if (this.cell[0] == '&' && parseInt(this.cell[1]) == this.dialogindex) {
              this.canPress = false;
              this.GenerateOption(index);
            }
          }
        }

        endFunc() {}

        onOptionClick(id) {
          this.dialogindex = id;
          this.showDialogRow();

          for (let index = 0; index < this.Layout.getComponentsInChildren(Button).length; index++) {
            this.Layout.node.destroyAllChildren();
          }
        } //对话选项绑定函数


        DialogueChooseFunc(cell5) {
          let cell = parseInt(cell5);
        }

        Restart() {
          this.readText(this.csv);
          this.dialogindex = 0;
          this.cell = this.dialogRows[1].split(',');

          if (this.canRestart == true) {
            this.showDialogRow();
          }
        }

        ChooseFunc(cell5) {
          let cell = parseInt(cell5);
        }

        GenerateOption(_index) {
          while (true) {
            this.cell = this.dialogRows[_index].split(',');

            if (this.cell[0] == '&') {
              this.button = instantiate(this.optionButton);
              this.button.setParent(this.Layout.node);
              let dd = this.cell[4];
              let cell = this.cell[5];

              let ooc = () => {
                this.DialogueChooseFunc(cell);
                this.onOptionClick(parseInt(dd));
              };

              this.button.on(Button.EventType.CLICK, ooc, this);
              this.button.getComponentInChildren(Label).string = this.cell[3];
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

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "homoparent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ParentAnim", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "csv", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "optionButton", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Layout", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=272b94c3d9e5ee3ef48b4d2f6270a927b6799568.js.map