System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Director, director, find, input, Input, instantiate, Prefab, sys, stateUI, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, StateType, settingData;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfstateUI(extras) {
    _reporterNs.report("stateUI", "../tools/状态栏/stateUI", _context.meta, extras);
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
      Director = _cc.Director;
      director = _cc.director;
      find = _cc.find;
      input = _cc.input;
      Input = _cc.Input;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      stateUI = _unresolved_2.stateUI;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b7ca0tZW3VLK6RMyTsFmQ6t", "settingData", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Director', 'director', 'Enum', 'EventKeyboard', 'find', 'input', 'Input', 'instantiate', 'Node', 'Prefab', 'Sprite', 'sys']);

      __checkObsolete__(['Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("StateType", StateType = /*#__PURE__*/function (StateType) {
        StateType[StateType["\u5FC3\u60C5"] = 0] = "\u5FC3\u60C5";
        StateType[StateType["\u7761\u7720"] = 1] = "\u7761\u7720";
        StateType[StateType["\u9971\u98DF"] = 2] = "\u9971\u98DF";
        StateType[StateType["\u7406\u667A"] = 3] = "\u7406\u667A";
        StateType[StateType["\u91D1\u94B1"] = 4] = "\u91D1\u94B1";
        return StateType;
      }({}));

      _export("settingData", settingData = (_dec = ccclass('settingData'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec(_class = (_class2 = class settingData extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "SceneContorl", _descriptor, this);

          _initializerDefineProperty(this, "saveOrRead", _descriptor2, this);

          this.金钱 = 0;
          this.心情 = 50;
          this.睡眠 = 50;
          this.饱食 = 50;
          this.理智 = 100;

          _initializerDefineProperty(this, "Loading", _descriptor3, this);

          _initializerDefineProperty(this, "StateUI", _descriptor4, this);

          _initializerDefineProperty(this, "bag", _descriptor5, this);

          this.NodeData = new Map();
        }

        saveScene() {
          this.instantiateLoading();
        }

        loadScene(sceneName) {
          console.log(sceneName);

          if (director.getScene().name === sceneName) {
            if (sys.localStorage.getItem(sceneName)) {
              console.log('loadScene', sceneName);
              var sceneData = new Map(JSON.parse(sys.localStorage.getItem(sceneName)));
              sceneData.forEach((value, key) => {
                var node = find(key);

                if (node) {
                  if (node.getPathInHierarchy() != 'Canvas/2.5d/Player/!') {
                    node.position = value[0];
                    node.active = value[1];
                  }
                }
              }); // 检查删除的节点信息并同步操作

              this.syncDeletedNodes(sceneData);
            }
          }
        }

        syncDeletedNodes(sceneData) {
          // 通过比较保存的节点信息和当前场景节点信息来检查删除的节点
          var currentSceneNodes = new Map();
          var root = find('Canvas');
          this.traverseNodeForSync(root, currentSceneNodes); // 检查在保存的场景中不存在，但在当前场景中存在的节点，并进行同步删除操作

          currentSceneNodes.forEach((value, key) => {
            if (!sceneData.has(key)) {
              // 节点在保存的场景中不存在，但在当前场景中存在，进行同步删除操作
              var nodeToDelete = find(key);

              if (nodeToDelete) {
                nodeToDelete.active = false;
              }
            }
          });
        }

        traverseNodeForSync(node, nodeMap) {
          if (node) {
            nodeMap.set(node.getPathInHierarchy(), true);
            var children = node.children;

            for (var i = 0; i < children.length; i++) {
              this.traverseNodeForSync(children[i], nodeMap);
            }
          }
        }

        traverseNode(node) {
          if (node) {
            this.NodeData.set(node.getPathInHierarchy(), [node.position, node.active]);
            var children = node.children;

            for (var i = 0; i < children.length; i++) {
              this.traverseNode(children[i]);
            }
          }
        }

        start() {
          if (sys.localStorage.getItem('金钱')) {
            this.金钱 = JSON.parse(sys.localStorage.getItem('金钱'));
          } else {
            sys.localStorage.setItem('金钱', JSON.stringify(this.金钱));
          }

          if (sys.localStorage.getItem('心情')) {
            this.心情 = JSON.parse(sys.localStorage.getItem('心情'));
            console.log(sys.localStorage.getItem('心情'));
          } else {
            sys.localStorage.setItem('心情', JSON.stringify(this.心情));
          }

          if (sys.localStorage.getItem('理智')) {
            this.理智 = JSON.parse(sys.localStorage.getItem('理智'));
          } else {
            sys.localStorage.setItem('理智', JSON.stringify(this.理智));
          }

          if (sys.localStorage.getItem('睡眠')) {
            this.睡眠 = JSON.parse(sys.localStorage.getItem('睡眠'));
          } else {
            sys.localStorage.setItem('睡眠', JSON.stringify(this.睡眠));
          }

          if (sys.localStorage.getItem('饱食')) {
            this.饱食 = JSON.parse(sys.localStorage.getItem('饱食'));
          } else {
            sys.localStorage.setItem('饱食', JSON.stringify(this.饱食));
          }

          this.schedule(() => {
            this.changeStateValue(StateType.睡眠, -1);
            this.changeStateValue(StateType.饱食, -3);
            console.log(this.饱食, 'dududu');
          }, 15);
          this.changeStateValue(StateType.心情, 0);
          this.instantiateBag();
          this.instantiateStateUI();
          director.addPersistRootNode(this.node);
          this.currentScene();
        }

        onLoad() {
          director.on(Director.EVENT_BEFORE_SCENE_LOADING, this.saveScene, this);
          director.on(Director.EVENT_AFTER_SCENE_LAUNCH, this.currentScene, this);
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        }

        instantiateBag() {
          var saveOrRead = instantiate(this.saveOrRead);
          saveOrRead.setParent(find('Canvas'));
          var camera = find('Canvas/Camera');
          saveOrRead.setPosition(camera.position.x, camera.position.y);
          var bagNode = instantiate(this.bag);
          bagNode.setParent(find('Canvas/Camera'));
          bagNode.setPosition(0, 256);
          bagNode.active = false;
          var sceneContorl = instantiate(this.SceneContorl);
          sceneContorl.setParent(find('Canvas'));
          sceneContorl.setPosition(0, -450); //bagNode.getComponent(bag).add('foodCard')
        }

        instantiateLoading() {
          var loadingNode = instantiate(this.Loading);
          loadingNode.setParent(find('Canvas/Camera'));
          loadingNode.setPosition(0, 0); //bagNode.getComponent(bag).add('foodCard')
        }

        instantiateStateUI() {
          var StateUINode = instantiate(this.StateUI);
          StateUINode.setParent(find('Canvas/Camera'));
          StateUINode.setPosition(-619, 318);
        }

        changeStateValue(type, value) {
          switch (type) {
            case StateType.心情:
              if (this.心情 > 0 && this.心情 <= 100) {
                this.心情 += value;
              }

              if (this.心情 <= 0) {
                this.心情 = 1;
              } else if (this.心情 > 100) {
                this.心情 = 100;
              }

              break;

            case StateType.理智:
              if (this.理智 > 0 && this.理智 <= 100) {
                this.理智 += value;
              }

              if (this.理智 <= 0) {
                this.理智 = 1;
              } else if (this.理智 > 100) {
                this.理智 = 100;
              }

              break;

            case StateType.睡眠:
              if (this.睡眠 > 0 && this.睡眠 <= 100) {
                this.睡眠 += value;
              }

              if (this.睡眠 <= 0) {
                this.睡眠 = 1;
              } else if (this.睡眠 > 100) {
                this.睡眠 = 100;
              }

              break;

            case StateType.饱食:
              if (this.饱食 > 0 && this.饱食 <= 100) {
                this.饱食 += value;
              }

              if (this.饱食 <= 0) {
                this.饱食 = 1;
              } else if (this.饱食 > 100) {
                this.饱食 = 100;
              }

              break;

            case StateType.金钱:
              this.金钱 += value;
              break;
          }

          if (find('Canvas/Camera/状态UI')) {
            var 状态UI = find('Canvas/Camera/状态UI').getComponent(_crd && stateUI === void 0 ? (_reportPossibleCrUseOfstateUI({
              error: Error()
            }), stateUI) : stateUI);
            console.log(状态UI);
            状态UI.心情.progress = this.心情 / 100;
            状态UI.理智.progress = this.理智 / 100;
            状态UI.睡眠.progress = this.睡眠 / 100;
            状态UI.饱食.progress = this.饱食 / 100;
            状态UI.人民币.string = '人民币：' + this.金钱 + '元';
          }

          sys.localStorage.setItem('心情', JSON.stringify(this.心情));
          sys.localStorage.setItem('理智', JSON.stringify(this.理智));
          sys.localStorage.setItem('睡眠', JSON.stringify(this.睡眠));
          sys.localStorage.setItem('饱食', JSON.stringify(this.饱食));
          sys.localStorage.setItem('金钱', JSON.stringify(this.金钱));
          console.log(this.饱食);
        }

        currentScene() {
          // this.心情=JSON.parse(sys.localStorage.getItem('心情'))
          // this.理智=JSON.parse(sys.localStorage.getItem('理智'))
          // this.睡眠=JSON.parse(sys.localStorage.getItem('睡眠'))
          // this.饱食=JSON.parse(sys.localStorage.getItem('饱食'))
          this.scheduleOnce(() => {
            this.changeStateValue(StateType.心情, 0);
          }, 1);

          if (sys.localStorage.getItem('openState')) {
            var openState = JSON.parse(sys.localStorage.getItem('openState'));

            if (openState == true) {
              this.instantiateStateUI();
            }
          }

          this.instantiateBag();
          var currentScene = director.getScene();
          var currentSceneName = currentScene == null ? void 0 : currentScene.name;

          if (currentSceneName != 'End' && currentSceneName != 'setting' && currentSceneName != 'startMenu') {
            sys.localStorage.setItem('currentScene', currentSceneName);
            var autoSave = JSON.parse(sys.localStorage.getItem('autoSave'));

            if (autoSave == true) {
              sys.localStorage.setItem('SaveScene', currentSceneName);
            }
          }

          console.log(currentSceneName);
          console.log(this.node.name + sys.localStorage.getItem('currentScene'));
        }

        onDestroy() {
          director.off(Director.EVENT_BEFORE_SCENE_LOADING, this.saveScene, this);
          director.off(Director.EVENT_AFTER_SCENE_LAUNCH, this.currentScene, this);
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        }

        onKeyDown(event) {
          switch (event.keyCode) {
            case parseInt(sys.localStorage.getItem('esc')):
              director.loadScene('setting');
              break;

            case parseInt(sys.localStorage.getItem('save')):
              var sr = find('Canvas/readAndSaveNode');

              if (sr.active == true) {
                sr.active = false;
              } else if (sr.active == false) {
                sr.active = true;
                var camera = find('Canvas/Camera');
                sr.setPosition(camera.position.x, camera.position.y);
              } //sys.localStorage.setItem('SaveScene',director.getScene().name)


              break;

            case parseInt(sys.localStorage.getItem('inventory')):
              if (find('Canvas/Camera/bag').active == false) {
                find('Canvas/Camera/bag').active = true;
              } else if (find('Canvas/Camera/bag').active == true) {
                console.log('asd');
                find('Canvas/Camera/bag').active = false;
                console.log(find('Canvas/Camera/bag'));
              }

              break;
          }
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "SceneContorl", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "saveOrRead", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Loading", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "StateUI", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bag", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3fe2d7194674976984d0861a3bd38d5096a209bd.js.map