System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, director, _decorator, Component, wordContorl, _dec, _class, _crd, ccclass, property, changedScene;

  function _reportPossibleCrUseOfwordContorl(extras) {
    _reporterNs.report("wordContorl", "./wordContorl", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      find = _cc.find;
      director = _cc.director;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      wordContorl = _unresolved_2.wordContorl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ea1ecj0TZpF6bfLqY/jpbGc", "changedScene", undefined);

      __checkObsolete__(['find']);

      __checkObsolete__(['director']);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("changedScene", changedScene = (_dec = ccclass('changedScene'), _dec(_class = class changedScene extends Component {
        start() {}

        loadScene() {
          director.loadScene('海龟汤', () => {
            find('Canvas/haiguitang/word').getComponent(_crd && wordContorl === void 0 ? (_reportPossibleCrUseOfwordContorl({
              error: Error()
            }), wordContorl) : wordContorl).nowIndex++;
          });
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b011df1280182bbc1c956092dc5e235dd5272ba8.js.map