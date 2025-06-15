System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, sys, Toggle, ElectronAPI, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, isfullscreen;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfElectronAPI(extras) {
    _reporterNs.report("ElectronAPI", "../ElectronAPI", _context.meta, extras);
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
      Label = _cc.Label;
      sys = _cc.sys;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      ElectronAPI = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8e20bywQ7REj6XZhSmF1TSw", "isfullscreen", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'sys', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("isfullscreen", isfullscreen = (_dec = ccclass('isfullscreen'), _dec2 = property(Toggle), _dec(_class = (_class2 = class isfullscreen extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "isFullScreen", _descriptor, this);
        }

        start() {
          if ((_crd && ElectronAPI === void 0 ? (_reportPossibleCrUseOfElectronAPI({
            error: Error()
          }), ElectronAPI) : ElectronAPI).isFullScreen() == false) {
            this.isFullScreen.isChecked = false;
          } else if ((_crd && ElectronAPI === void 0 ? (_reportPossibleCrUseOfElectronAPI({
            error: Error()
          }), ElectronAPI) : ElectronAPI).isFullScreen() == true) {
            this.isFullScreen.isChecked = true;
          }

          this.node.children[1].getComponent(Label).string = (_crd && ElectronAPI === void 0 ? (_reportPossibleCrUseOfElectronAPI({
            error: Error()
          }), ElectronAPI) : ElectronAPI).isFullScreen() + 'FullScreen';
          console.log((_crd && ElectronAPI === void 0 ? (_reportPossibleCrUseOfElectronAPI({
            error: Error()
          }), ElectronAPI) : ElectronAPI).isFullScreen());
        }

        press() {
          if (this.isFullScreen.isChecked == false) {
            sys.localStorage.setItem('fullScreen', JSON.stringify(true));
            (_crd && ElectronAPI === void 0 ? (_reportPossibleCrUseOfElectronAPI({
              error: Error()
            }), ElectronAPI) : ElectronAPI).fullScreen(); //screen.requestFullScreen()
          } else if (this.isFullScreen.isChecked == true) {
            sys.localStorage.setItem('fullScreen', JSON.stringify(false));
            (_crd && ElectronAPI === void 0 ? (_reportPossibleCrUseOfElectronAPI({
              error: Error()
            }), ElectronAPI) : ElectronAPI).window(); //screen.requestFullScreen()
          }
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isFullScreen", [_dec2], {
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
//# sourceMappingURL=b67d901e900096963ab8aa4567a6848e587bf33d.js.map