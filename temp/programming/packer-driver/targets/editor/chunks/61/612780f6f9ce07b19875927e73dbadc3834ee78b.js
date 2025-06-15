System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, find, _dec, _class, _crd, ccclass, property, SceneContorl;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      find = _cc.find;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2b9e27TsGZLL7hK7V61xpak", "SceneContorl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'find', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SceneContorl", SceneContorl = (_dec = ccclass('SceneContorl'), _dec(_class = class SceneContorl extends Component {
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

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=612780f6f9ce07b19875927e73dbadc3834ee78b.js.map