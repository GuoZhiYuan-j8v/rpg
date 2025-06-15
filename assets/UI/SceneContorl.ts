import { _decorator, Component, director, find, instantiate, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SceneContorl')
export class SceneContorl extends Component {
    @property(Prefab)
    printLabel:Prefab=null!
    start() {

    }
    backMenu(){
        director.loadScene('setting')
    }
    saveList(){
        let sr=find('Canvas/readAndSaveNode')
                if(sr.active==true){
                    sr.active=false
                }else if(sr.active==false){
                    sr.active=true
                    let camera=find('Canvas/Camera')
                    sr.setPosition(camera.position.x,camera.position.y)
                }
    }
    printDialogLocal(){
        let label=instantiate(this.printLabel)
        label.setPosition(0,0,0)
        label.setParent(this.node.parent)
        console.log("生成节点")
    }
    update(deltaTime: number) {
        
    }
}


