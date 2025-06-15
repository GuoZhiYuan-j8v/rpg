System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, find, instantiate, Prefab, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, SceneContorl;

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
      director = _cc.director;
      find = _cc.find;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2b9e27TsGZLL7hK7V61xpak", "SceneContorl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'find', 'instantiate', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SceneContorl", SceneContorl = (_dec = ccclass('SceneContorl'), _dec2 = property(Prefab), _dec(_class = (_class2 = class SceneContorl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "printLabel", _descriptor, this);
        }

        start() {}

        backMenu() {
          director.loadScene('setting');
        }

        saveList() {
          let sr = find('Canvas/readAndSaveNode');

          if (sr.active == true) {
            sr.active = false;
          } else if (sr.active == false) {
            sr.active = true;
            let camera = find('Canvas/Camera');
            sr.setPosition(camera.position.x, camera.position.y);
          }
        }

        printDialogLocal() {
          let label = instantiate(this.printLabel);
          label.setPosition(0, 0, 0);
          label.setParent(this.node.parent);
          console.log("生成节点");
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "printLabel", [_dec2], {
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
//# sourceMappingURL=0bf4ee05607d03a2413466208fbcf753d4a59e83.js.map