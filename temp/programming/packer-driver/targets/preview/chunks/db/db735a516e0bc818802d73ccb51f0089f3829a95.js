System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Input, input, KeyCode, Label, sys, _dec, _class, _class2, _descriptor, _crd, ccclass, property, ChangeKey;

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
      Input = _cc.Input;
      input = _cc.input;
      KeyCode = _cc.KeyCode;
      Label = _cc.Label;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c097dn3DYdGxZxLczrsUfBQ", "ChangeKey", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventKeyboard', 'Input', 'input', 'KeyCode', 'Label', 'Node', 'macro', 'markAsWarning', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ChangeKey", ChangeKey = (_dec = ccclass('ChangeKey'), _dec(_class = (_class2 = class ChangeKey extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "KeyName", _descriptor, this);

          this.moveKey = void 0;
          this.canChangeKey = void 0;
        }

        start() {
          this.change();
        }

        update(deltaTime) {}

        change() {
          this.node.children[0].getComponent(Label).string = this.getEnumName(parseInt(sys.localStorage.getItem(this.KeyName)));
        }

        getEnumName(value) {
          var enumKeys = Object.keys(KeyCode);

          for (var key of enumKeys) {
            if (KeyCode[key] === value) {
              console.log(key);
              return key;
            }
          }

          return undefined;
        }

        onLoad() {
          document.addEventListener('keydown', event => {
            console.log(event.code);
          });
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        }

        onDestroy() {
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
        }

        onKeyDown(event) {
          if (this.canChangeKey == true) {
            this.moveKey = event.keyCode;
            this.canChangeKey = false;
            this.node.children[0].getComponent(Label).string = this.getEnumName(this.moveKey);
            sys.localStorage.setItem(this.KeyName, JSON.stringify(this.moveKey)); //console.log(parseInt(sys.localStorage.getItem(this.KeyName)))
          }
        }

        onKeyUp(event) {
          if (parseInt(sys.localStorage.getItem(this.KeyName)) == event.keyCode) {}
        }

        gaijianwei() {
          this.canChangeKey = true;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "KeyName", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=db735a516e0bc818802d73ccb51f0089f3829a95.js.map