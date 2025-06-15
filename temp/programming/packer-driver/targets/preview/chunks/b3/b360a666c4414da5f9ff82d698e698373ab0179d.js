System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, instantiate, sys, Label, director, Prefab, _decorator, Component, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, dataNode;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      find = _cc.find;
      instantiate = _cc.instantiate;
      sys = _cc.sys;
      Label = _cc.Label;
      director = _cc.director;
      Prefab = _cc.Prefab;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "94245xQsGhPBoxSleP2TunQ", "dataNode", undefined);

      __checkObsolete__(['find', 'instantiate', 'sys']);

      __checkObsolete__(['Label']);

      __checkObsolete__(['director']);

      __checkObsolete__(['Prefab']);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("dataNode", dataNode = (_dec = ccclass('dataNode'), _dec2 = property(Prefab), _dec(_class = (_class2 = class dataNode extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "chooseNode", _descriptor, this);
        }

        start() {
          if (sys.localStorage.getItem(this.node.name)) {
            this.node.children[0].getComponent(Label).string = sys.localStorage.getItem(this.node.name);
          }
        }

        generateChooseNode() {
          var chooseNode = instantiate(this.chooseNode);
          chooseNode.setParent(find('Canvas'));
          chooseNode.name = this.node.name;
        }

        Save() {
          sys.localStorage.setItem(this.node.name, director.getScene().name);
          this.node.children[0].getComponent(Label).string = sys.localStorage.getItem(this.node.name);
        }

        Read() {
          if (sys.localStorage.getItem(this.node.name)) {
            director.loadScene(sys.localStorage.getItem(this.node.name));
          }
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "chooseNode", [_dec2], {
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
//# sourceMappingURL=b360a666c4414da5f9ff82d698e698373ab0179d.js.map