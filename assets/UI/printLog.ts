import { _decorator, Component, Label, Node } from 'cc';
import { dialogLocalData } from '../tools/本地存储/dialogLocal';
const { ccclass, property } = _decorator;

@ccclass('printLog')
export class printLog extends Component {
    @property(Label)
    label:Label=null!

    start() {
        // 获取已保存的对话事件对象
        const dialogData = dialogLocalData.getSysLocalAboutDialog();
        
        // 将对象转换为格式化的 JSON 字符串
        const formattedData = JSON.stringify(dialogData, null, 2);
        
        // 显示在 Label 上
        this.label.string = `已保存的对话事件:\n${formattedData}`;
        
        console.log("打印", dialogData);
    }

    close(){
        this.node.destroy();
    }
}