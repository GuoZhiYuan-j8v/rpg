System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, canChooseFood, find, foodMake, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, food;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfcanChooseFood(extras) {
    _reporterNs.report("canChooseFood", "./canChooseFood", _context.meta, extras);
  }

  function _reportPossibleCrUseOffoodMake(extras) {
    _reporterNs.report("foodMake", "./foodMake", _context.meta, extras);
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
      Node = _cc.Node;
      find = _cc.find;
    }, function (_unresolved_2) {
      canChooseFood = _unresolved_2.canChooseFood;
    }, function (_unresolved_3) {
      foodMake = _unresolved_3.foodMake;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d24491mlCFK5rDkK8xtF4do", "food", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      __checkObsolete__(['find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("food", food = (_dec = ccclass('food'), _dec2 = property(_crd && canChooseFood === void 0 ? (_reportPossibleCrUseOfcanChooseFood({
        error: Error()
      }), canChooseFood) : canChooseFood), _dec(_class = (_class2 = class food extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "canChooseFood", _descriptor, this);
        }

        start() {
          this.node.on(Node.EventType.TOUCH_START, () => {
            if (this.canChooseFood.ChooseFood == null) {
              if (this.node.children[0]) {
                this.node.children[0].setParent(find('Canvas/stove/可选食材/windows'));
              }
            } else {
              this.canChooseFood.ChooseFood.setParent(this.node);
              this.canChooseFood.ChooseFood = null;
            }

            find('Canvas/stove/烹饪/make').getComponent(_crd && foodMake === void 0 ? (_reportPossibleCrUseOffoodMake({
              error: Error()
            }), foodMake) : foodMake).checkCanMakeFood();
            console.log(123);
          });
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "canChooseFood", [_dec2], {
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
//# sourceMappingURL=8433f2ec7d878c68aab5f6c0c29aa22df137a5cf.js.map