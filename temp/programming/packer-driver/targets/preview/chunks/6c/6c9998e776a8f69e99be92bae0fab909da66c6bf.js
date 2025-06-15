System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, Toggle, _decorator, Component, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, isAutoSave;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
      Toggle = _cc.Toggle;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dfc057xDjVA16yqaK44Z/So", "isAutoSave", undefined);

      __checkObsolete__(['sys', 'Toggle']);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("isAutoSave", isAutoSave = (_dec = ccclass('isAutoSave'), _dec2 = property(Toggle), _dec(_class = (_class2 = class isAutoSave extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "isAutoSave", _descriptor, this);
        }

        start() {
          var autoSave = JSON.parse(sys.localStorage.getItem('autoSave'));

          if (autoSave == false) {
            this.isAutoSave.isChecked = false;
          } else if (autoSave == true) {
            this.isAutoSave.isChecked = true;
          }
        }

        press() {
          //web全屏

          /*if(this.isAutoSave.isChecked==false){
              sys.localStorage.setItem('fullScreen',JSON.stringify(true))
              //ElectronAPI.fullScreen()
              screen.requestFullScreen()
          }else if(this.isAutoSave.isChecked==true){
              sys.localStorage.setItem('fullScreen',JSON.stringify(false))
              //ElectronAPI.window()
              screen.exitFullScreen()
          }*/
          //windows
          if (this.isAutoSave.isChecked == false) {
            sys.localStorage.setItem('autoSave', JSON.stringify(true)); //screen.requestFullScreen()
          } else if (this.isAutoSave.isChecked == true) {
            sys.localStorage.setItem('autoSave', JSON.stringify(false)); //screen.requestFullScreen()
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isAutoSave", [_dec2], {
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
//# sourceMappingURL=6c9998e776a8f69e99be92bae0fab909da66c6bf.js.map