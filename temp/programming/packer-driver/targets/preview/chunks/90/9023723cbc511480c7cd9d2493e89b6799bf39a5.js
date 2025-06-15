System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, Enum, find, input, Input, instantiate, Node, Prefab, SceneAsset, sys, TextAsset, action, dialog_galgame, EventHandler, Animation, AnimationClip, settingData, StateType, bag, dialogLocalData, _dec, _class, _class2, _descriptor, _descriptor2, _dec2, _class4, _class5, _descriptor3, _descriptor4, _dec3, _dec4, _dec5, _class7, _class8, _descriptor5, _descriptor6, _descriptor7, _dec6, _class10, _class11, _descriptor8, _descriptor9, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _class13, _class14, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _crd, ccclass, property, interactionEvent, compareNumber, localStoarge, inventory, State, dialogLocalSet, interaction;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfaction(extras) {
    _reporterNs.report("action", "../dialog/typeScript/dialog_galgame", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdialog_galgame(extras) {
    _reporterNs.report("dialog_galgame", "../dialog/typeScript/dialog_galgame", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsettingData(extras) {
    _reporterNs.report("settingData", "../../UI/settingData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../../UI/settingData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbag(extras) {
    _reporterNs.report("bag", "../inventory/script/bag", _context.meta, extras);
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
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      Enum = _cc.Enum;
      find = _cc.find;
      input = _cc.input;
      Input = _cc.Input;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      SceneAsset = _cc.SceneAsset;
      sys = _cc.sys;
      TextAsset = _cc.TextAsset;
      EventHandler = _cc.EventHandler;
      Animation = _cc.Animation;
      AnimationClip = _cc.AnimationClip;
    }, function (_unresolved_2) {
      action = _unresolved_2.action;
      dialog_galgame = _unresolved_2.dialog_galgame;
    }, function (_unresolved_3) {
      settingData = _unresolved_3.settingData;
      StateType = _unresolved_3.StateType;
    }, function (_unresolved_4) {
      bag = _unresolved_4.bag;
    }, function (_unresolved_5) {
      dialogLocalData = _unresolved_5.dialogLocalData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e3e7e4qnndNIbCC9cSgTDhm", "interaction", undefined);

      __checkObsolete__(['__private', '_decorator', 'Component', 'director', 'Enum', 'EventKeyboard', 'find', 'input', 'Input', 'instantiate', 'Node', 'Prefab', 'resources', 'SceneAsset', 'sys', 'TextAsset']);

      __checkObsolete__(['EventHandler']);

      __checkObsolete__(['Animation']);

      __checkObsolete__(['AnimationClip']);

      __checkObsolete__(['AnimationState']);

      __checkObsolete__(['EventTouch']);

      Enum(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
        error: Error()
      }), StateType) : StateType);
      ({
        ccclass,
        property
      } = _decorator);

      _export("interactionEvent", interactionEvent = /*#__PURE__*/function (interactionEvent) {
        interactionEvent[interactionEvent["scene"] = 0] = "scene";
        interactionEvent[interactionEvent["path"] = 1] = "path";
        interactionEvent[interactionEvent["prefab"] = 2] = "prefab";
        interactionEvent[interactionEvent["animation"] = 3] = "animation";
        interactionEvent[interactionEvent["NONE"] = 4] = "NONE";
        interactionEvent[interactionEvent["alert"] = 5] = "alert";
        interactionEvent[interactionEvent["value"] = 6] = "value";
        interactionEvent[interactionEvent["localStorage"] = 7] = "localStorage";
        return interactionEvent;
      }({}));

      compareNumber = /*#__PURE__*/function (compareNumber) {
        compareNumber[compareNumber["=="] = 0] = "==";
        compareNumber[compareNumber[">="] = 1] = ">=";
        compareNumber[compareNumber["<="] = 2] = "<=";
        compareNumber[compareNumber[">"] = 3] = ">";
        compareNumber[compareNumber["<"] = 4] = "<";
        return compareNumber;
      }(compareNumber || {});

      Enum(compareNumber);
      localStoarge = (_dec = ccclass('localStoarge'), _dec(_class = (_class2 = class localStoarge {
        constructor() {
          _initializerDefineProperty(this, "Key", _descriptor, this);

          _initializerDefineProperty(this, "Value", _descriptor2, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Key", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Value", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      })), _class2)) || _class);
      inventory = (_dec2 = ccclass('inventory'), _dec2(_class4 = (_class5 = class inventory {
        constructor() {
          _initializerDefineProperty(this, "meziName", _descriptor3, this);

          _initializerDefineProperty(this, "Count", _descriptor4, this);
        }

      }, (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "meziName", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "Count", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      })), _class5)) || _class4);
      State = (_dec3 = ccclass('State'), _dec4 = property({
        type: compareNumber,
        tooltip: 'number在左边,StateType在右边'
      }), _dec5 = property({
        type: _crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
          error: Error()
        }), StateType) : StateType
      }), _dec3(_class7 = (_class8 = class State {
        constructor() {
          _initializerDefineProperty(this, "number", _descriptor5, this);

          _initializerDefineProperty(this, "compareType", _descriptor6, this);

          _initializerDefineProperty(this, "StateType", _descriptor7, this);
        }

      }, (_descriptor5 = _applyDecoratedDescriptor(_class8.prototype, "number", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class8.prototype, "compareType", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return compareNumber['<'];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class8.prototype, "StateType", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).心情;
        }
      })), _class8)) || _class7);
      dialogLocalSet = (_dec6 = ccclass('dialogLocalSet'), _dec6(_class10 = (_class11 = class dialogLocalSet {
        constructor() {
          _initializerDefineProperty(this, "dialogLocal", _descriptor8, this);

          _initializerDefineProperty(this, "EqualType", _descriptor9, this);
        }

      }, (_descriptor8 = _applyDecoratedDescriptor(_class11.prototype, "dialogLocal", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class11.prototype, "EqualType", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class11)) || _class10); // @ccclass('confidentsetter')
      // class confidentsetter{
      //     @property({type:localStoarge})
      //     localStorage:localStoarge[]=[];
      //     @property({type:State})
      //     State:State[]=[];
      //     @property({type:inventory})
      //     inventory:inventory[]=[];
      // }

      Enum(interactionEvent);

      _export("interaction", interaction = (_dec7 = ccclass('interaction'), _dec8 = property({
        visible: function visible() {
          return this.启用条件 === true;
        }
      }), _dec9 = property({
        visible: function visible() {
          return this.启用条件 === true;
        },
        type: localStoarge
      }), _dec10 = property({
        visible: function visible() {
          return this.启用条件 === true;
        },
        type: inventory
      }), _dec11 = property({
        visible: function visible() {
          return this.启用条件 === true;
        },
        type: State
      }), _dec12 = property({
        visible: function visible() {
          return this.启用条件 === true;
        },
        type: dialogLocalSet
      }), _dec13 = property({
        visible: function visible() {
          return this.启用条件 === true && this.isUseMezi == true;
        }
      }), _dec14 = property({
        visible: function visible() {
          return this.启用条件 === true && this.isUseMezi == true;
        }
      }), _dec15 = property({
        visible: function visible() {
          return this.启用条件 === true;
        }
      }), _dec16 = property({
        visible: function visible() {
          return this.interactionEvent === interactionEvent.scene;
        }
      }), _dec17 = property([EventHandler]), _dec18 = property({
        type: [EventHandler],
        visible: function visible() {
          return this.interactionEvent === interactionEvent.prefab && this.isDialog == true;
        }
      }), _dec19 = property({
        type: interactionEvent
      }), _dec20 = property({
        visible: function visible() {
          return this.interactionEvent === interactionEvent.localStorage;
        }
      }), _dec21 = property({
        visible: function visible() {
          return this.interactionEvent === interactionEvent.value;
        },
        type: _crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
          error: Error()
        }), StateType) : StateType
      }), _dec22 = property({
        visible: function visible() {
          return this.interactionEvent === interactionEvent.value;
        }
      }), _dec23 = property({
        visible: function visible() {
          return this.interactionEvent === interactionEvent.alert;
        },
        type: Node
      }), _dec24 = property({
        visible: function visible() {
          return this.interactionEvent === interactionEvent.path && this.isDialog == false;
        },
        type: Node
      }), _dec25 = property({
        visible: function visible() {
          return this.interactionEvent === interactionEvent.animation;
        },
        type: Animation
      }), _dec26 = property({
        visible: function visible() {
          return this.interactionEvent === interactionEvent.animation;
        },
        type: AnimationClip
      }), _dec27 = property({
        visible: function visible() {
          return this.interactionEvent === interactionEvent.animation;
        },
        type: [EventHandler]
      }), _dec28 = property({
        type: TextAsset,
        visible: function visible() {
          return this.isDialog === true && this.interactionEvent === interactionEvent.prefab;
        }
      }), _dec29 = property({
        visible: function visible() {
          return this.interactionEvent === interactionEvent.scene;
        },
        type: SceneAsset
      }), _dec30 = property({
        visible: function visible() {
          return this.interactionEvent === interactionEvent.prefab;
        },
        type: Prefab
      }), _dec31 = property({
        visible: function visible() {
          return this.interactionEvent === interactionEvent.prefab && this.isDialog == false;
        },
        type: Node
      }), _dec32 = property({
        visible: function visible() {
          return this.interactionEvent === interactionEvent.path && this.isDialog == true;
        },
        type: Node
      }), _dec7(_class13 = (_class14 = class interaction extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "canInteraction", _descriptor10, this);

          _initializerDefineProperty(this, "voidOnce", _descriptor11, this);

          _initializerDefineProperty(this, "\u542F\u7528\u6761\u4EF6", _descriptor12, this);

          _initializerDefineProperty(this, "else", _descriptor13, this);

          _initializerDefineProperty(this, "localStorage", _descriptor14, this);

          _initializerDefineProperty(this, "inventroy", _descriptor15, this);

          _initializerDefineProperty(this, "State", _descriptor16, this);

          _initializerDefineProperty(this, "dialogLocalSet", _descriptor17, this);

          _initializerDefineProperty(this, "NeedlyMezi", _descriptor18, this);

          _initializerDefineProperty(this, "MeziOnce", _descriptor19, this);

          _initializerDefineProperty(this, "isUseMezi", _descriptor20, this);

          _initializerDefineProperty(this, "isEmitFrontScene", _descriptor21, this);

          _initializerDefineProperty(this, "eventHandler", _descriptor22, this);

          _initializerDefineProperty(this, "dialogEventHandler", _descriptor23, this);

          _initializerDefineProperty(this, "canQuit", _descriptor24, this);

          this.once = 0;

          _initializerDefineProperty(this, "finishedTalk", _descriptor25, this);

          _initializerDefineProperty(this, "isMezi", _descriptor26, this);

          _initializerDefineProperty(this, "isDialog", _descriptor27, this);

          _initializerDefineProperty(this, "interactionEvent", _descriptor28, this);

          _initializerDefineProperty(this, "key", _descriptor29, this);

          _initializerDefineProperty(this, "changeValue", _descriptor30, this);

          _initializerDefineProperty(this, "changeNumber", _descriptor31, this);

          _initializerDefineProperty(this, "alertMessage", _descriptor32, this);

          _initializerDefineProperty(this, "path", _descriptor33, this);

          _initializerDefineProperty(this, "animation", _descriptor34, this);

          _initializerDefineProperty(this, "animationClip", _descriptor35, this);

          _initializerDefineProperty(this, "onAnimationFinishedFunc", _descriptor36, this);

          _initializerDefineProperty(this, "csv", _descriptor37, this);

          _initializerDefineProperty(this, "scene", _descriptor38, this);

          _initializerDefineProperty(this, "instantiateNode", _descriptor39, this);

          _initializerDefineProperty(this, "instantiateParent", _descriptor40, this);

          _initializerDefineProperty(this, "dialogPath", _descriptor41, this);

          this.dialogIndex = 0;
          this.funcFinished = void 0;
        }

        interactionContactFunction() {
          var func = () => {
            switch (this.interactionEvent) {
              case interactionEvent.localStorage:
                console.log((_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
                  error: Error()
                }), dialogLocalData) : dialogLocalData).getSysLocalAboutDialog());
                (_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
                  error: Error()
                }), dialogLocalData) : dialogLocalData).setSysLocalAboutDIalog(this.key, (_crd && action === void 0 ? (_reportPossibleCrUseOfaction({
                  error: Error()
                }), action) : action).add);

              case interactionEvent.value:
                find('data').getComponent(_crd && settingData === void 0 ? (_reportPossibleCrUseOfsettingData({
                  error: Error()
                }), settingData) : settingData).changeStateValue(this.changeValue, this.changeNumber);
                break;

              case interactionEvent.animation:
                this.animation.play(this.animationClip.name);
                break;

              case interactionEvent.path:
                if (this.isMezi == false) {
                  if (this.isDialog == true) {
                    this.dialogPath[this.dialogIndex].getComponent(_crd && dialog_galgame === void 0 ? (_reportPossibleCrUseOfdialog_galgame({
                      error: Error()
                    }), dialog_galgame) : dialog_galgame).Restart();
                    this.dialogPath[this.dialogIndex].active = true;

                    if (this.dialogPath.length > this.dialogIndex + 1) {
                      this.dialogIndex++;
                    }

                    console.log('dp' + this.dialogIndex);
                  } else {
                    if (this.path.active == false) {
                      this.path.active = true;
                    } else if (this.path.active == true) {
                      this.path.active = false;
                    }
                  }
                } else if (this.isMezi == true) {
                  this.path.destroy();
                }

                break;

              case interactionEvent.scene:
                if (this.isEmitFrontScene == true) {
                  sys.localStorage.setItem('FrontScene', director.getScene().name);
                  console.log('emitScene', sys.localStorage.getItem('FrontScene'));
                }

                director.loadScene(this.scene.name);
                break;

              case interactionEvent.prefab:
                if (this.isDialog == true) {
                  var prefab = instantiate(this.instantiateNode);
                  prefab.setParent(find('Canvas'));
                  prefab.setPosition(0, 0, 0);
                  prefab.getComponent(_crd && dialog_galgame === void 0 ? (_reportPossibleCrUseOfdialog_galgame({
                    error: Error()
                  }), dialog_galgame) : dialog_galgame).csv = this.csv;
                  prefab.getComponent(_crd && dialog_galgame === void 0 ? (_reportPossibleCrUseOfdialog_galgame({
                    error: Error()
                  }), dialog_galgame) : dialog_galgame).eventHandler = this.dialogEventHandler;
                } else {
                  var _prefab = instantiate(this.instantiateNode);

                  _prefab.setParent(this.instantiateParent);

                  _prefab.setPosition(0, 0, 0);
                }

                break;

              case interactionEvent.alert:
                alert(this.alertMessage);
                break;
            }

            for (var i = 0; i < this.eventHandler.length; i++) {
              this.eventHandler[i].emit([]);
            }

            if (this.voidOnce == true) {
              console.log('uuid', this.node.uuid);
              (_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
                error: Error()
              }), dialogLocalData) : dialogLocalData).setSysLocalAboutDIalog(this.node.uuid, (_crd && action === void 0 ? (_reportPossibleCrUseOfaction({
                error: Error()
              }), action) : action).add);
            }
          };

          if (this.启用条件 == false) {
            func();
          } else {
            var canInteraciton = true;
            var fuckYou = false;
            this.localStorage.forEach((value, index) => {
              if (sys.localStorage.getItem(value.Key) == value.Value) {
                if (this.else == true) {
                  fuckYou = true;
                }
              } else {
                canInteraciton = false;
              }
            });
            this.inventroy.forEach((value, index) => {
              var bagScript = find('Canvas/Camera/bag/view/content').getComponent(_crd && bag === void 0 ? (_reportPossibleCrUseOfbag({
                error: Error()
              }), bag) : bag);

              if (bagScript.checkHas(value.meziName, value.Count)) {
                if (this.else == true) {
                  fuckYou = true;
                }
              } else {
                canInteraciton = false;
              }
            });
            this.State.forEach(value => {
              if (this.else == true) {
                fuckYou = true;
              }

              if (this.compareWithStateType(value.compareType, value.number) == false) {
                canInteraciton = false;
                fuckYou = false;
              }
            });
            this.dialogLocalSet.forEach(value => {
              if ((_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
                error: Error()
              }), dialogLocalData) : dialogLocalData).getSysLocalAboutDialogDOM(value.dialogLocal) == value.EqualType) {
                console.log((_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
                  error: Error()
                }), dialogLocalData) : dialogLocalData).getSysLocalAboutDialogDOM(value.dialogLocal));

                if (this.else == true) {
                  fuckYou = true;
                }
              } else {
                canInteraciton = false;
              }
            });

            if (fuckYou == false && this.else == true) {
              func();
            }

            if (canInteraciton == true && this.isUseMezi == false && this.else == false) {
              func();
            }
          }
        }

        UseMezi(mezi) {
          var func = () => {
            switch (this.interactionEvent) {
              case interactionEvent.localStorage:
                console.log((_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
                  error: Error()
                }), dialogLocalData) : dialogLocalData).getSysLocalAboutDialog());
                (_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
                  error: Error()
                }), dialogLocalData) : dialogLocalData).setSysLocalAboutDIalog(this.key, (_crd && action === void 0 ? (_reportPossibleCrUseOfaction({
                  error: Error()
                }), action) : action).add);

              case interactionEvent.value:
                find('data').getComponent(_crd && settingData === void 0 ? (_reportPossibleCrUseOfsettingData({
                  error: Error()
                }), settingData) : settingData).changeStateValue(this.changeValue, this.changeNumber);
                break;

              case interactionEvent.animation:
                this.animation.play(this.animationClip.name);
                break;

              case interactionEvent.path:
                if (this.isMezi == false) {
                  if (this.isDialog == true) {
                    this.dialogPath[this.dialogIndex].getComponent(_crd && dialog_galgame === void 0 ? (_reportPossibleCrUseOfdialog_galgame({
                      error: Error()
                    }), dialog_galgame) : dialog_galgame).Restart();
                    this.dialogPath[this.dialogIndex].active = true;

                    if (this.dialogPath.length > this.dialogIndex + 1) {
                      this.dialogIndex++;
                    }

                    console.log('dp' + this.dialogIndex);
                  } else {
                    if (this.path.active == false) {
                      this.path.active = true;
                    } else if (this.path.active == true) {
                      this.path.active = false;
                    }
                  }
                } else if (this.isMezi == true) {
                  this.path.destroy();
                }

                break;

              case interactionEvent.scene:
                if (this.isEmitFrontScene == true) {
                  sys.localStorage.setItem('FrontScene', director.getScene().name);
                  console.log('emitScene', sys.localStorage.getItem('FrontScene'));
                }

                director.loadScene(this.scene.name);
                break;

              case interactionEvent.prefab:
                if (this.isDialog == true) {
                  var prefab = instantiate(this.instantiateNode);
                  prefab.setParent(find('Canvas'));
                  prefab.setPosition(0, 0, 0);
                  prefab.getComponent(_crd && dialog_galgame === void 0 ? (_reportPossibleCrUseOfdialog_galgame({
                    error: Error()
                  }), dialog_galgame) : dialog_galgame).csv = this.csv;
                  prefab.getComponent(_crd && dialog_galgame === void 0 ? (_reportPossibleCrUseOfdialog_galgame({
                    error: Error()
                  }), dialog_galgame) : dialog_galgame).eventHandler = this.dialogEventHandler;
                } else {
                  var _prefab2 = instantiate(this.instantiateNode);

                  _prefab2.setParent(this.instantiateParent);

                  _prefab2.setPosition(0, 0, 0);
                }

                break;

              case interactionEvent.alert:
                alert(this.alertMessage);
            }

            for (var i = 0; i < this.eventHandler.length; i++) {
              this.eventHandler[i].emit([]);
            }
          };

          if (this.启用条件 == false) {
            func();
          } else {
            var canInteraciton = true;
            this.localStorage.forEach((value, index) => {
              if (sys.localStorage.getItem(value.Key) == value.Value) {} else {
                canInteraciton = false;
              }
            });
            this.inventroy.forEach((value, index) => {
              var bagScript = find('Canvas/Camera/bag/view/content').getComponent(_crd && bag === void 0 ? (_reportPossibleCrUseOfbag({
                error: Error()
              }), bag) : bag);

              if (bagScript.checkHas(value.meziName)) {} else {
                canInteraciton = false;
              }
            });
            this.State.forEach(value => {
              if (this.compareWithStateType(value.compareType, value.number) == false) {
                canInteraciton = false;
              }
            });
            this.dialogLocalSet.forEach(value => {
              if ((_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
                error: Error()
              }), dialogLocalData) : dialogLocalData).getSysLocalAboutDialogDOM(value.dialogLocal) == value.EqualType) {
                console.log((_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
                  error: Error()
                }), dialogLocalData) : dialogLocalData).getSysLocalAboutDialogDOM(value.dialogLocal));
              } else {
                canInteraciton = false;
              }
            });
          }

          if (this.isUseMezi == true) {
            if (this.NeedlyMezi == mezi) {
              if (this.MeziOnce == true) {
                find('Canvas/Camera/bag/view/content').getComponent(_crd && bag === void 0 ? (_reportPossibleCrUseOfbag({
                  error: Error()
                }), bag) : bag).delete(this.NeedlyMezi);
              }

              func();
            }
          }
        }

        compareWithStateType(stateType, number) {
          switch (stateType) {
            case compareNumber['==']:
              return number == stateType;

            case compareNumber['>=']:
              return number >= stateType;

            case compareNumber['<=']:
              return number <= stateType;

            case compareNumber['>']:
              return number > stateType;

            case compareNumber['<']:
              return number < stateType;
          }
        }

        loadCSV() {}

        onDestroy() {
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        }

        onLoad() {
          if (this.voidOnce == true && true == (_crd && dialogLocalData === void 0 ? (_reportPossibleCrUseOfdialogLocalData({
            error: Error()
          }), dialogLocalData) : dialogLocalData).getSysLocalAboutDialogDOM(this.node.uuid)) {
            this.interactionEvent = interactionEvent.NONE;
            console.log('NONE');
          }

          if (this.animation) {
            this.animation.on(Animation.EventType.FINISHED, (type, state) => {
              if (this.animationClip.name == state.clip.name) this.onAnimationFinishedFunc.forEach(element => {
                element.emit([]);
              });
            });
          }

          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          console.log('drag666');
        }

        onKeyDown(event) {
          switch (event.keyCode) {
            case parseInt(sys.localStorage.getItem('next')):
              this.interactionQuit();
              console.log('press_next');
              break;
          }
        }

        interactionQuit() {
          //判断交互物体是否指向对话，如果不是，按下继续（next）键即可关闭生成的prefab
          if (this.canQuit == true) {
            switch (this.interactionEvent) {
              case interactionEvent.path:
                if (this.isDialog == false) {
                  this.path.active = false;
                }

                break;

              case interactionEvent.prefab:
                if (this.isDialog == false) {
                  setTimeout(() => {
                    if (this.path) {
                      this.path.destroy();
                    }
                  });
                }

                break;
            }
          }
        }

      }, (_descriptor10 = _applyDecoratedDescriptor(_class14.prototype, "canInteraction", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class14.prototype, "voidOnce", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class14.prototype, "\u542F\u7528\u6761\u4EF6", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class14.prototype, "else", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class14.prototype, "localStorage", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class14.prototype, "inventroy", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class14.prototype, "State", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class14.prototype, "dialogLocalSet", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class14.prototype, "NeedlyMezi", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class14.prototype, "MeziOnce", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class14.prototype, "isUseMezi", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class14.prototype, "isEmitFrontScene", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class14.prototype, "eventHandler", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class14.prototype, "dialogEventHandler", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class14.prototype, "canQuit", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class14.prototype, "finishedTalk", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class14.prototype, "isMezi", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class14.prototype, "isDialog", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class14.prototype, "interactionEvent", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return interactionEvent.NONE;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class14.prototype, "key", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class14.prototype, "changeValue", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).金钱;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class14.prototype, "changeNumber", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class14.prototype, "alertMessage", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class14.prototype, "path", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class14.prototype, "animation", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class14.prototype, "animationClip", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class14.prototype, "onAnimationFinishedFunc", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class14.prototype, "csv", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class14.prototype, "scene", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class14.prototype, "instantiateNode", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class14.prototype, "instantiateParent", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class14.prototype, "dialogPath", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class14)) || _class13));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9023723cbc511480c7cd9d2493e89b6799bf39a5.js.map