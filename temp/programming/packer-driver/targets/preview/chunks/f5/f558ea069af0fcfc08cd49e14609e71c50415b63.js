System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, dialogLocalData, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, printLog;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfdialogLocalData(extras) {
    _reporterNs.report("dialogLocalData", "../tools/本地存储/dialogLocal", _context.meta, extras);
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
    }, function (_unresolved_2) {
      dialogLocalData = _unresolved_2.dialogLocalData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e9fc39gUH9MJ6sD/K8d2JFv", "printLog", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("printLog", printLog = (_dec = ccclass('printLog'), _dec2 = property(Label), _dec(_class = (_class2 = class printLog extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "label", _descriptor, this);
        }

        start() {
          // 获取已保存的对话事件对象
          var dialogData = (_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
            error: Error()
          }), dialogLocalData) : dialogLocalData).getSysLocalAboutDialog(); // 将对象转换为格式化的 JSON 字符串

          var formattedData = JSON.stringify(dialogData, null, 2); // 显示在 Label 上

          this.label.string = "\u5DF2\u4FDD\u5B58\u7684\u5BF9\u8BDD\u4E8B\u4EF6:\n" + formattedData;
          console.log("打印", dialogData);
        }

        close() {
          this.node.destroy();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
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
//# sourceMappingURL=f558ea069af0fcfc08cd49e14609e71c50415b63.js.map