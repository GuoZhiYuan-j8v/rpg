System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, find, wordContorl, _dec, _class, _class2, _descriptor, _crd, ccclass, property, questionNode;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfwordContorl(extras) {
    _reporterNs.report("wordContorl", "./wordContorl", _context.meta, extras);
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
      director = _cc.director;
      find = _cc.find;
    }, function (_unresolved_2) {
      wordContorl = _unresolved_2.wordContorl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "82730sxICpLkpPXX5l2bcK9", "questionNode", undefined);

      __checkObsolete__(['EventHandler']);

      __checkObsolete__(['_decorator', 'Component', 'director', 'EventTarget', 'find', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("questionNode", questionNode = (_dec = ccclass('questionNode'), _dec(_class = (_class2 = class questionNode extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "addNowIndex", _descriptor, this);
        }

        loadScene() {
          director.loadScene('海龟汤', () => {
            find('Canvas/haiguitang/word').getComponent(_crd && wordContorl === void 0 ? (_reportPossibleCrUseOfwordContorl({
              error: Error()
            }), wordContorl) : wordContorl).nowIndex += this.addNowIndex;
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "addNowIndex", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5879914f3d22b88201439cb80d6d5c023b45445b.js.map