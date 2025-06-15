System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, sys, area, find, _dec, _class, _crd, ccclass, property, yourPos;

  function _reportPossibleCrUseOfarea(extras) {
    _reporterNs.report("area", "./area", _context.meta, extras);
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
      sys = _cc.sys;
      find = _cc.find;
    }, function (_unresolved_2) {
      area = _unresolved_2.area;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b88da039c1Cu6F0rea5ik1R", "yourPos", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'sys']);

      __checkObsolete__(['find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("yourPos", yourPos = (_dec = ccclass('yourPos'), _dec(_class = class yourPos extends Component {
        start() {
          let Map = find('Canvas/Map');

          for (let element of Map.children) {
            console.log(element.getComponent(_crd && area === void 0 ? (_reportPossibleCrUseOfarea({
              error: Error()
            }), area) : area).scene.name, sys.localStorage.getItem('FrontScene'));

            if (element.getComponent(_crd && area === void 0 ? (_reportPossibleCrUseOfarea({
              error: Error()
            }), area) : area).scene.name == sys.localStorage.getItem('FrontScene')) {
              this.node.setWorldPosition(element.worldPosition);
            }
          }
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d0b68655bbe0f1fc9af888fd628e7537d160c5fa.js.map