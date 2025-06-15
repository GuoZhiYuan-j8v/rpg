System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, resources, Prefab, instantiate, _decorator, Component, Node, bag, Button, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, foodList, foodMake;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfbag(extras) {
    _reporterNs.report("bag", "../inventory/script/bag", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      find = _cc.find;
      resources = _cc.resources;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Button = _cc.Button;
    }, function (_unresolved_2) {
      bag = _unresolved_2.bag;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6f86b1yB7dJBaY8kbFV2/u3", "foodMake", undefined);

      __checkObsolete__(['find']);

      __checkObsolete__(['resources', 'Prefab', 'instantiate']);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      __checkObsolete__(['Button']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("foodList", foodList = new Map([["土豆炒番茄", [["Tomato", "Tomato", "Potato", "Potato"], ["Tomato", "Tomato", "Tomato", "Potato"], ["Tomato", "Potato", "Potato", "Potato"]]], ["番茄汤", [["Tomato", "Tomato", "Tomato", "Tomato"]]], ["炸薯片", [["Potato", "Potato", "Potato", "Potato"]]]]));

      _export("foodMake", foodMake = (_dec = ccclass('foodMake'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class foodMake extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "\u70F9\u996A\u961F\u5217", _descriptor, this);

          _initializerDefineProperty(this, "windows", _descriptor2, this);
        }

        start() {
          this.checkCanMakeFood();
        }

        checkCanMakeFood() {
          var foodArray = [];
          this.windows.children.forEach((element, i) => {
            if (element.children[0]) {
              foodArray.push(element.children[0].name);
            }
          });

          if (foodArray.length >= 4) {
            this.node.getComponent(Button).interactable = true;
          } else {
            this.node.getComponent(Button).interactable = false;
          }
        }

        makeFood() {
          function isArrayEqual(arr1, arr2) {
            if (arr1.length !== arr2.length) {
              return false;
            }

            var sortedArr1 = arr1.slice().sort();
            var sortedArr2 = arr2.slice().sort();

            for (var i = 0; i < arr1.length; i++) {
              if (sortedArr1[i] !== sortedArr2[i]) {
                return false;
              }
            }

            return true;
          }

          var foodArray = [];
          this.windows.children.forEach((element, i) => {
            foodArray.push(element.children[0].name);
            var _name = element.children[0].name;
            this.scheduleOnce(() => {
              find('Canvas/Camera/bag/view/content').getComponent(_crd && bag === void 0 ? (_reportPossibleCrUseOfbag({
                error: Error()
              }), bag) : bag).delete(_name);
            }, 0.1 * i);
            console.log(element.children[0].name, 'baggg');
            element.destroyAllChildren();
          });
          console.log(foodList, foodArray);
          foodList.forEach((value, key) => {
            value.forEach(element2 => {
              if (isArrayEqual(foodArray, element2) == true) {
                resources.load('mezi/' + key, Prefab, (err, res) => {
                  var prefab = instantiate(res);
                  prefab.setParent(this.烹饪队列);
                  console.log(prefab.name);
                });
              }
            });
          });
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "\u70F9\u996A\u961F\u5217", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "windows", [_dec3], {
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
//# sourceMappingURL=1bbb36158c7b8680298d5ff7aecb7d24af1e03bf.js.map