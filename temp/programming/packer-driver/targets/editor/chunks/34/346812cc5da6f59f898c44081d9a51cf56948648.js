System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, UITransform, _decorator, Component, Prefab, resources, instantiate, find, _dec, _class, _crd, ccclass, property, bag;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
      UITransform = _cc.UITransform;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      resources = _cc.resources;
      instantiate = _cc.instantiate;
      find = _cc.find;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b7c9fsJWdhEVbX0zoZeGOq3", "bag", undefined);

      __checkObsolete__(['sys', 'UITransform']);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'resources', 'instantiate', 'find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("bag", bag = (_dec = ccclass('bag'), _dec(_class = class bag extends Component {
        constructor(...args) {
          super(...args);
          this.lnventory = [];
        }

        start() {
          this.load();
        }

        update(deltaTime) {
          this.traverseChildren();
        }

        add(InResourcesName) {
          console.log(InResourcesName);
          resources.load('mezi/' + InResourcesName, Prefab, (err, res) => {
            console.log(err);
            let prefab = instantiate(res);
            prefab.setParent(this.node);
            console.log(prefab.name);

            if (this.node.children.length > 7) {
              this.node.getComponent(UITransform).width = this.node.children.length * 128 + 64;
            }
          });
        }

        alignHorizontal() {
          this.node.children.forEach((element, index) => {
            element.setPosition(index * 128 + 64, 0, 0);
          });
        }

        checkHas(meziName, count = 1) {
          let foundCount = 0; // 用于计数找到的物品数量

          this.lnventory.forEach(element => {
            if (meziName === element) {
              foundCount++; // 发现一个匹配的物品，计数加一
            }
          });
          return foundCount >= count; // 检查找到的数量是否满足最小数量要求
        }

        delete(childrenName, parentPath, func) {
          for (let child of this.node.children) {
            if (child.name == childrenName) {
              if (parentPath) {
                child.setParent(find(parentPath));
                find(parentPath + '/' + childrenName).setPosition(0, 0, 0);
              } else {
                child.destroy();
              }

              break;
            }
          }

          console.log(this.node.children.length);
        }

        onDestroy() {}

        traverseChildren() {
          this.lnventory = [];

          if (this.node.children.length != 0) {
            for (let i = 0; i < this.node.children.length; i++) {
              this.lnventory.push(this.node.children[i].name);
            }
          }

          sys.localStorage.setItem('lnventory', JSON.stringify(this.lnventory));
        }

        setDefultPos() {
          for (let children of this.node.children) {
            children.setParent(this.node.parent);
            children.setParent(this.node);
          }
        }

        load() {
          if (sys.localStorage.getItem('lnventory')) {
            let lnventory = Object.assign(new Array(), JSON.parse(sys.localStorage.getItem('lnventory')));
            console.log(lnventory);

            for (let i = 0; i < lnventory.length; i++) {
              this.add(lnventory[i]);
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=346812cc5da6f59f898c44081d9a51cf56948648.js.map