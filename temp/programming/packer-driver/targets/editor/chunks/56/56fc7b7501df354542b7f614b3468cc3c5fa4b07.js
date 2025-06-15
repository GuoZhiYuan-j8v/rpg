System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, director, sys, Director, find, instantiate, Prefab, Label, _decorator, Component, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, time;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      director = _cc.director;
      sys = _cc.sys;
      Director = _cc.Director;
      find = _cc.find;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      Label = _cc.Label;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cf6420ExopAz5tXwzl1lvMA", "time", undefined);

      __checkObsolete__(['director', 'sys']);

      __checkObsolete__(['Director']);

      __checkObsolete__(['find']);

      __checkObsolete__(['instantiate']);

      __checkObsolete__(['Prefab']);

      __checkObsolete__(['Label']);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("time", time = (_dec = ccclass('time'), _dec2 = property({
        type: Prefab
      }), _dec(_class = (_class2 = class time extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "timeLabel", _descriptor, this);

          // 用于显示时间的 Label 组件
          this.timeElapsed = 0;
          // 已经过的游戏时间
          this.gameTimePerDay = 15 * 60;
          // 游戏中一天的时间（秒）
          this.timeLabelNode = void 0;
          this.days = 0;
        }

        start() {
          director.addPersistRootNode(this.node);
          this.schedule(this.updateTime, 1); // 每秒更新游戏时间
        }

        updateTime() {
          this.timeElapsed += 1; // 模拟游戏时间流逝

          if (this.timeElapsed >= this.gameTimePerDay) {
            this.timeElapsed = 0; // 一天结束，重置时间

            this.days++;
          }

          this.updateTimeLabel(); // 更新显示时间的 Label
        }

        updateTimeLabel() {
          const minutes = Math.floor(this.timeElapsed / 60);
          const seconds = this.timeElapsed % 60;
          this.timeLabelNode.getComponent(Label).string = '第' + this.days + '天' + `${this.padZero(minutes)}:${this.padZero(seconds)}`; // 格式化时间为 MM:SS 的形式
        }

        currentScene() {
          this.timeLabelNode = instantiate(this.timeLabel);
          this.timeLabelNode.setParent(find('Canvas/Camera'));
          this.timeLabelNode.setPosition(-600, 0, 0);
        }

        onLoad() {
          let timeData = JSON.parse(sys.localStorage.getItem("time"));

          if (timeData) {
            this.days = timeData[0];
            this.timeElapsed = timeData[1];
          }

          director.on(Director.EVENT_AFTER_SCENE_LAUNCH, this.currentScene, this);
        }

        onDestroy() {
          sys.localStorage.setItem("time", JSON.stringify([this.days, this.timeElapsed]));
          director.off(Director.EVENT_AFTER_SCENE_LAUNCH, this.currentScene, this);
        }

        padZero(num) {
          return num < 10 ? '0' + num : num.toString(); // 补零函数，确保时间格式为两位数
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "timeLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=56fc7b7501df354542b7f614b3468cc3c5fa4b07.js.map