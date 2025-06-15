System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, _decorator, Component, mezi, instantiate, Layout, _dec, _class, _crd, ccclass, property, canChooseFood;

  function _reportPossibleCrUseOfmezi(extras) {
    _reporterNs.report("mezi", "../inventory/script/mezi", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Layout = _cc.Layout;
    }, function (_unresolved_2) {
      mezi = _unresolved_2.mezi;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "30fe5eB2nREALPkIg+kGZlS", "canChooseFood", undefined);

      __checkObsolete__(['find']);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      __checkObsolete__(['instantiate']);

      __checkObsolete__(['Layout']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("canChooseFood", canChooseFood = (_dec = ccclass('canChooseFood'), _dec(_class = class canChooseFood extends Component {
        constructor() {
          super(...arguments);
          this.chooseFood = void 0;
        }

        start() {}

        onEnable() {
          this.node.destroyAllChildren();
          var bagScript = find('Canvas/Camera/bag/view/content');

          for (var meziNode of bagScript.children) {
            if (meziNode.getComponent(_crd && mezi === void 0 ? (_reportPossibleCrUseOfmezi({
              error: Error()
            }), mezi) : mezi).isIngredients == true) {
              var meziNode2 = instantiate(meziNode);
              meziNode2.setParent(this.node);
              this.node.getComponent(Layout).alignHorizontal = true;
            }
          }
        }

        set ChooseFood(node) {
          this.chooseFood = node;
        }

        get ChooseFood() {
          return this.chooseFood;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=90407336a6736a189fa431eeecaf191545cc9db8.js.map