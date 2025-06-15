System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EditBox, director, find, bag, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, EditBoxContorl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfbag(extras) {
    _reporterNs.report("bag", "../tools/inventory/script/bag", _context.meta, extras);
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
      EditBox = _cc.EditBox;
      director = _cc.director;
      find = _cc.find;
    }, function (_unresolved_2) {
      bag = _unresolved_2.bag;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4ae32mMmK5I/a8RIKqvySgF", "editBox", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'EditBox', 'EventKeyboard', 'KeyCode', 'input', 'Input', 'director', 'find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EditBoxContorl", EditBoxContorl = (_dec = ccclass('EditBoxContorl'), _dec2 = property(EditBox), _dec(_class = (_class2 = class EditBoxContorl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "EditBox", _descriptor, this);
        }

        start() {}

        解析代码() {
          let 代码块 = this.EditBox.string.split(' ');
          console.log(代码块);

          switch (代码块[0]) {
            case 'load':
              if (代码块[1]) {
                director.loadScene(代码块[1]);
              }

              break;

            case 'add':
              if (代码块[1]) {
                if (find('Canvas/Camera/bag/view/content')) find('Canvas/Camera/bag/view/content').getComponent(_crd && bag === void 0 ? (_reportPossibleCrUseOfbag({
                  error: Error()
                }), bag) : bag).add(代码块[1]);
              }

              break;
          }

          this.EditBox.string = '';
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "EditBox", [_dec2], {
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
//# sourceMappingURL=75f7ecb039806323312da4d4e413438b644452f9.js.map