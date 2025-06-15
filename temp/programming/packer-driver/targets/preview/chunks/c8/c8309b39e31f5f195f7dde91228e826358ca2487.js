System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Enum, sys, _decorator, Component, _dec, _class, _class2, _descriptor, _descriptor2, _dec2, _dec3, _dec4, _dec5, _class4, _class5, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, MapNode, localEvent, saveLocal;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Enum = _cc.Enum;
      sys = _cc.sys;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "10ea9FnXI5K95YLv0gqMRri", "saveLocal", undefined);

      __checkObsolete__(['Enum', 'sys']);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      MapNode = (_dec = ccclass('MapNode'), _dec(_class = (_class2 = class MapNode {
        constructor() {
          _initializerDefineProperty(this, "key", _descriptor, this);

          _initializerDefineProperty(this, "value", _descriptor2, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "key", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "value", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      })), _class2)) || _class);

      localEvent = /*#__PURE__*/function (localEvent) {
        localEvent[localEvent["setItem"] = 0] = "setItem";
        localEvent[localEvent["getItem"] = 1] = "getItem";
        return localEvent;
      }(localEvent || {});

      Enum(localEvent);

      _export("saveLocal", saveLocal = (_dec2 = ccclass('saveLocal'), _dec3 = property({
        type: localEvent
      }), _dec4 = property({
        type: MapNode,
        visible: function visible() {
          return this.localEvent === localEvent.setItem;
        }
      }), _dec5 = property({
        type: MapNode,
        visible: function visible() {
          return this.localEvent === localEvent.getItem;
        }
      }), _dec2(_class4 = (_class5 = class saveLocal extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "AwakeLoad", _descriptor3, this);

          _initializerDefineProperty(this, "localEvent", _descriptor4, this);

          _initializerDefineProperty(this, "MapNode", _descriptor5, this);

          _initializerDefineProperty(this, "keyNode", _descriptor6, this);
        }

        start() {
          if (this.AwakeLoad == true) {
            this.local();
          }
        }

        local() {
          if (this.localEvent === localEvent.getItem) {
            return JSON.parse(sys.localStorage.getItem(this.MapNode.key));
          } else if (this.localEvent === localEvent.setItem) {
            sys.localStorage.setItem(this.MapNode.key, this.MapNode.value);
          }
        }

        update(deltaTime) {}

      }, (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "AwakeLoad", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "localEvent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return localEvent.setItem;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "MapNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "keyNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class5)) || _class4));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c8309b39e31f5f195f7dde91228e826358ca2487.js.map