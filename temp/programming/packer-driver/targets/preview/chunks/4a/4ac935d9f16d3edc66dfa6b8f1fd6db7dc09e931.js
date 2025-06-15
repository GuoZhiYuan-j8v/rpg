System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Input, v3, input, _decorator, Component, _dec, _class, _crd, ccclass, property, scrollWithView;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Input = _cc.Input;
      v3 = _cc.v3;
      input = _cc.input;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d9bafM0OLxH9LctWdcjdTZB", "scrollWithView", undefined);

      __checkObsolete__(['Input']);

      __checkObsolete__(['v3']);

      __checkObsolete__(['input']);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("scrollWithView", scrollWithView = (_dec = ccclass('scrollWithView'), _dec(_class = class scrollWithView extends Component {
        start() {
          input.on(Input.EventType.MOUSE_WHEEL, event => {
            //console.log(event.getScrollY()+'wheel')
            this.node.setPosition(v3(this.node.position.x, this.node.position.y - event.getScrollY()));
          }, this);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4ac935d9f16d3edc66dfa6b8f1fd6db7dc09e931.js.map