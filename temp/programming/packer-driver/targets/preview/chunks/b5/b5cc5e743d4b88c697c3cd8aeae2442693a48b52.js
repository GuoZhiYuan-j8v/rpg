System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, sys, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Mask_sLabel;

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
      Label = _cc.Label;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1c4567IPAdO0LxmqRi6FD/k", "Mask'sLabel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Mask_sLabel", Mask_sLabel = (_dec = ccclass('Mask_sLabel'), _dec2 = property(Label), _dec(_class = (_class2 = class Mask_sLabel extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "text", _descriptor, this);
        }

        start() {
          this.text.string = sys.localStorage.getItem('TalkText');
        }

        update(deltaTime) {
          this.node.parent.setSiblingIndex(999);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "text", [_dec2], {
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
//# sourceMappingURL=b5cc5e743d4b88c697c3cd8aeae2442693a48b52.js.map