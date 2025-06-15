System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, director, game, sys, KeyCode, ElectronAPI, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, MenuUIContorl;

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
      Button = _cc.Button;
      Component = _cc.Component;
      director = _cc.director;
      game = _cc.game;
      sys = _cc.sys;
      KeyCode = _cc.KeyCode;
    }, function (_unresolved_2) {
      ElectronAPI = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "37444A98YhPl4fxzog4UhRh", "MenuUIContorl", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'director', 'game', 'Node', 'sys']);

      __checkObsolete__(['KeyCode']);

      //import ElectronAPI from '../ElectronAPI';
      ({
        ccclass,
        property
      } = _decorator);

      _export("MenuUIContorl", MenuUIContorl = (_dec = ccclass('MenuUIContorl'), _dec2 = property(Button), _dec(_class = (_class2 = class MenuUIContorl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "quitNode", _descriptor, this);
        }

        play() {
          director.loadScene('start');
        }

        setting() {
          director.loadScene('setting');
        }

        exit() {
          if (sys.os == sys.OS.ANDROID) {
            game.end();
          } else {
            (_crd && ElectronAPI === void 0 ? (_reportPossibleCrUseOfElectronAPI({
              error: Error()
            }), ElectronAPI) : ElectronAPI).quit();
          }
        }

        read() {}

        start() {
          if (sys.localStorage.getItem('next')) {} else {
            sys.localStorage.setItem('interaction', JSON.stringify(KeyCode.KEY_R));
            sys.localStorage.setItem('left', JSON.stringify(KeyCode.KEY_A));
            sys.localStorage.setItem('right', JSON.stringify(KeyCode.KEY_D));
            sys.localStorage.setItem('up', JSON.stringify(KeyCode.KEY_W));
            sys.localStorage.setItem('down', JSON.stringify(KeyCode.KEY_S));
            sys.localStorage.setItem('next', JSON.stringify(KeyCode.SPACE));
            sys.localStorage.setItem('esc', JSON.stringify(KeyCode.ESCAPE));
            sys.localStorage.setItem('save', JSON.stringify(KeyCode.HOME));
            sys.localStorage.setItem('inventory', JSON.stringify(KeyCode.KEY_I));
            sys.localStorage.setItem('autoSave', JSON.stringify(true));
          }
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "quitNode", [_dec2], {
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
//# sourceMappingURL=6701eeaf2a2ec8fe985e24d7bc5c9b55a2aafb96.js.map