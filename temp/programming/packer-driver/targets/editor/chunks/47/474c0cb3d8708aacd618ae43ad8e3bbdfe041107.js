System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, d25;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "72a21qGwptDtoPeUZ3Dr8Zn", "d25", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'Component', 'Node', 'UITransform', 'v2', 'Layout']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("d25", d25 = (_dec = ccclass('d25'), _dec(_class = class d25 extends Component {
        constructor(...args) {
          super(...args);
          this.children = void 0;
          this.isD25 = true;
        }

        start() {}

        update(deltaTime) {
          if (this.isD25 == true) {
            let children = this.node.children;
            children.sort((a, b) => b.position.y - a.position.y);

            if (children != this.children) {
              console.log(children);
              children.forEach((child, idx) => {
                if (child.name != 'Mask') {
                  child.setSiblingIndex(idx);
                  this.children = children;
                }
              });
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=474c0cb3d8708aacd618ae43ad8e3bbdfe041107.js.map