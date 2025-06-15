System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, EventTarget, input, HighPriorityGlobalInput, _crd, highPriorityGlobalInput;

  _export("HighPriorityGlobalInput", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      EventTarget = _cc.EventTarget;
      input = _cc.input;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f9108w7mBdMcJEINxI1G4yF", "HighPriorityGlobalInput", undefined);

      __checkObsolete__(['Event', 'EventTarget', 'input']);

      _export("HighPriorityGlobalInput", HighPriorityGlobalInput = class HighPriorityGlobalInput extends EventTarget {
        constructor(priority = 999) {
          super();
          this.priority = void 0;
          this.priority = priority;
          input['_registerEventDispatcher'](this);
        }

        dispatchEvent(event) {
          this.emit(event.type, event);
          return true;
        }

      });

      _export("highPriorityGlobalInput", highPriorityGlobalInput = new HighPriorityGlobalInput());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=18b83e9c6faf5c3e317f51cb21c88f19fe97c61c.js.map