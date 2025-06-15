System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, Label, Prefab, _decorator, Component, Node, move, UITransform, color, tangmian, director, CCString, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, wordContorl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfmove(extras) {
    _reporterNs.report("move", "./move", _context.meta, extras);
  }

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
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Prefab = _cc.Prefab;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      color = _cc.color;
      director = _cc.director;
      CCString = _cc.CCString;
    }, function (_unresolved_2) {
      move = _unresolved_2.move;
    }, function (_unresolved_3) {
      tangmian = _unresolved_3.tangmian;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "60116zI1+RBhpkFRZWPENVO", "wordContorl", undefined);

      __checkObsolete__(['instantiate']);

      __checkObsolete__(['Label']);

      __checkObsolete__(['Prefab']);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      __checkObsolete__(['UITransform']);

      __checkObsolete__(['color']);

      __checkObsolete__(['find']);

      __checkObsolete__(['director']);

      __checkObsolete__(['CCString']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("wordContorl", wordContorl = (_dec = ccclass('wordContorl'), _dec2 = property(Node), _dec3 = property({
        type: CCString
      }), _dec4 = property(Prefab), _dec(_class = (_class2 = class wordContorl extends Component {
        constructor(...args) {
          super(...args);
          this.nowIndex = 0;
          this.once = true;

          _initializerDefineProperty(this, "Player", _descriptor, this);

          _initializerDefineProperty(this, "texts", _descriptor2, this);

          _initializerDefineProperty(this, "word", _descriptor3, this);

          this.wordArray = [];
        }

        start() {
          this.generateWord();
          this.addEvent();
        }

        generateWord() {
          let wordArray = [];

          for (let j = 0; j < this.nowIndex + 1; j++) {
            for (let i = 0; i < this.texts[j].length; i++) {
              if (this.texts[j][i] == '"') {} else {
                wordArray.push(this.texts[j][i]);
              }
            }
          }

          wordArray.forEach(element => {
            let word = instantiate(this.word);
            word.name = element;
            word.getComponent(Label).string = element;
            word.setParent(this.node);

            if (this.once == true) {
              this.Player.getComponent(_crd && move === void 0 ? (_reportPossibleCrUseOfmove({
                error: Error()
              }), move) : move).distance.x = word.getComponent(UITransform).contentSize.x;
              this.Player.getComponent(_crd && move === void 0 ? (_reportPossibleCrUseOfmove({
                error: Error()
              }), move) : move).distance.y = word.getComponent(UITransform).contentSize.y;
              this.once = false;
            }
          });
          this.wordArray = wordArray;
        }

        addEvent() {
          let addEventFunc = (start, end, tag) => {
            console.log(tag);
            let wordArray = [];
            wordArray = this.wordArray;

            for (let i = 0; i < wordArray.length; i++) {
              if (i >= start && i < end) {
                this.node.children[i].getComponent(Label).color = color(255, 0, 0, 255);
                let tangmianScript = this.node.children[i].getComponent(_crd && tangmian === void 0 ? (_reportPossibleCrUseOftangmian({
                  error: Error()
                }), tangmian) : tangmian);
                tangmianScript.startPos = start;
                tangmianScript.endPos = end;
                tangmianScript.tag = tag;

                switch (tag) {
                  case "举报":
                    tangmianScript.caseFunc = () => {
                      director.loadScene('ThrowQuestion_举报');
                    };

                    break;

                  case "ｘｐ":
                    tangmianScript.caseFunc = () => {
                      director.loadScene('ThrowQuestion_ｘｐ');
                    };

                    break;
                }
              }
            }
          };

          let count = 0;
          let quotesPositions = []; // 最终的数组，存储每对引号的位置

          let texts = [];

          for (let i = 0; i < this.nowIndex + 1; i++) {
            texts = texts.concat(this.texts[i].split(''));
            console.log(texts);
          }

          console.log(texts + 'texts');
          let tempArray = []; // 临时数组，存储当前字符串中每对引号的位置

          texts.forEach((element, index) => {
            if (element == '"') {
              console.log('找到第' + (index - count) + '个位置的"');
              tempArray.push(index - count); // 记录引号的位置

              count++;
            }

            if (tempArray.length === 2) {
              let tag = '';
              console.log(this.wordArray);
              this.wordArray.forEach((element, index) => {
                if (index >= tempArray[0] && index < tempArray[1]) {
                  tag += element;
                }
              });
              quotesPositions.push(tempArray);
              addEventFunc(tempArray[0], tempArray[1], tag);
              tempArray.length = 0;
            }
          }); // 检查临时数组中是否有两个位置，如果有则添加到最终数组中

          console.log(quotesPositions, "位置"); // while (true) {
          //     start = s.indexOf('"', start);
          //     if (start === -1) {
          //         break;
          //     }
          //     const end: number = s.indexOf('"', start + 1);
          //     if (end === -1) {
          //         break;
          //     }
          //     const content: string = s.substring(start + 1, end);
          //     console.log(`被""包裹的内容是：${content}，起始位置为：${start}，结束位置为：${end-2}`);
          //     addEventFunc(start,end-2,content)
          //     start = end + 1;
          // }
          // let moveScript=this.Player.getComponent(move)
          // moveScript.event.set(tag,[start,end])
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Player", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "texts", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "word", [_dec4], {
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
//# sourceMappingURL=0e7a068c822373dc2aa329b05d1434bcac1ad891.js.map