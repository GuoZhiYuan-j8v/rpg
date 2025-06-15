System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, _decorator, Component, dataNode, _dec, _class, _crd, ccclass, property, SaveOrReadNodeContorl;

  function _reportPossibleCrUseOfdataNode(extras) {
    _reporterNs.report("dataNode", "./dataNode", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      find = _cc.find;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      dataNode = _unresolved_2.dataNode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b39e7oZqsFFZJEdORhQhWRy", "SaveOrReadNodeContorl", undefined);

      __checkObsolete__(['find']);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SaveOrReadNodeContorl", SaveOrReadNodeContorl = (_dec = ccclass('SaveOrReadNodeContorl'), _dec(_class = class SaveOrReadNodeContorl extends Component {
        start() {}

        Save() {
          let button = find('Canvas/readAndSaveNode/layout/' + this.node.name);

          if (button) {
            button.getComponent(_crd && dataNode === void 0 ? (_reportPossibleCrUseOfdataNode({
              error: Error()
            }), dataNode) : dataNode).Save();
          }
        }

        Read() {
          let button = find('Canvas/readAndSaveNode/layout/' + this.node.name);

          if (button) {
            button.getComponent(_crd && dataNode === void 0 ? (_reportPossibleCrUseOfdataNode({
              error: Error()
            }), dataNode) : dataNode).Read();
          }
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f300dc8a499fe86f8e6a1b4adb413615b419cb81.js.map