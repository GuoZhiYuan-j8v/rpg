System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, _decorator, Component, director, sys, _dec, _class, _crd, ccclass, property, back;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd00dcj+4xP44YTiLhEvzYn", "back", undefined);

      __checkObsolete__(['Button']);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Node', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("back", back = (_dec = ccclass('back'), _dec(_class = class back extends Component {
        start() {
          this.refuse();
        }

        refuse() {
          if (sys.localStorage.getItem('currentScene')) {} else {
            this.node.getComponent(Button).interactable = false;
          }
        }

        back() {
          director.loadScene(sys.localStorage.getItem('currentScene'));
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=994f1ede2348eece3670f0a9b1ca2ab756c9ac0b.js.map