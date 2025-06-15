System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Collider2D, Contact2DType, _decorator, interaction, interactionEvent, Enum, dialogLocalData, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, contactType, contact_interaction;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfinteraction(extras) {
    _reporterNs.report("interaction", "./interaction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinteractionEvent(extras) {
    _reporterNs.report("interactionEvent", "./interaction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdialogLocalData(extras) {
    _reporterNs.report("dialogLocalData", "../本地存储/dialogLocal", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      _decorator = _cc._decorator;
      Enum = _cc.Enum;
    }, function (_unresolved_2) {
      interaction = _unresolved_2.interaction;
      interactionEvent = _unresolved_2.interactionEvent;
    }, function (_unresolved_3) {
      dialogLocalData = _unresolved_3.dialogLocalData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8df39NzuhVLsY9kErv6aau9", "contact_interaction", undefined);

      __checkObsolete__(['Collider2D', 'Contact2DType']);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      __checkObsolete__(['Enum']);

      ({
        ccclass,
        property
      } = _decorator);

      contactType = /*#__PURE__*/function (contactType) {
        contactType[contactType["onBeginContact"] = 0] = "onBeginContact";
        contactType[contactType["onEndContact"] = 1] = "onEndContact";
        return contactType;
      }(contactType || {});

      Enum(contactType);

      _export("contact_interaction", contact_interaction = (_dec = ccclass('contact_interaction'), _dec2 = property({
        type: contactType
      }), _dec(_class = (_class2 = class contact_interaction extends (_crd && interaction === void 0 ? (_reportPossibleCrUseOfinteraction({
        error: Error()
      }), interaction) : interaction) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "contactType", _descriptor, this);

          this.contact = false;
        }

        onLoad() {
          if (this.voidOnce == true && true == (_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
            error: Error()
          }), dialogLocalData) : dialogLocalData).getSysLocalAboutDialogDOM(this.node.uuid)) {
            this.interactionEvent = (_crd && interactionEvent === void 0 ? (_reportPossibleCrUseOfinteractionEvent({
              error: Error()
            }), interactionEvent) : interactionEvent).NONE;
            console.log('NONE');
          }
        }

        start() {
          let collider = this.node.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
          }
        }

        onBeginContact(selfCollider, otherCollider) {
          if (otherCollider.node) {
            var _otherCollider$node;

            if (((_otherCollider$node = otherCollider.node) == null ? void 0 : _otherCollider$node.name) == 'Player') {
              this.Contact = true;
            }
          }
        }

        interactionContactFunction() {
          super.interactionContactFunction();
        }

        set Contact(value) {
          if (this.contact != value) {
            this.contact = value;

            if (value == true && this.contactType == contactType.onBeginContact) {
              this.interactionContactFunction();
            } else if (value == false && this.contactType == contactType.onEndContact) {
              this.interactionContactFunction();
            }
          }
        }

        get Contact() {
          return this.contact;
        }

        onEndContact(selfCollider, otherCollider) {
          if (otherCollider.node) {
            var _otherCollider$node2;

            if (((_otherCollider$node2 = otherCollider.node) == null ? void 0 : _otherCollider$node2.name) == 'Player') {
              this.Contact = false;
            }
          }
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contactType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return contactType.onBeginContact;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=10fc004a30f1d6536de5da0dffd9c716181ebb6c.js.map