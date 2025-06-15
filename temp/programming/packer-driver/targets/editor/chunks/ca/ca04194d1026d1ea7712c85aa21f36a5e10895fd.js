System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, _dec, _class, _crd, ccclass, property, backToMenu;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c5a8c2oaqBAs6yPdhmnLcdg", "backToMenu", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'director', 'Event', 'EventTouch', 'Node', 'NodeEventType', 'SystemEvent']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("backToMenu", backToMenu = (_dec = ccclass('backToMenu'), _dec(_class = class backToMenu extends Component {
        start() {}

        update(deltaTime) {}

        backToMenu() {
          director.loadScene('startMenu');
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ca04194d1026d1ea7712c85aa21f36a5e10895fd.js.map