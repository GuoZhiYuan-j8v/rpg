'use strict';
const fs = require("fs");
var path = require('path');
const child_process = require("child_process");

const { ipcMain, ipcRenderer, BrowserWindow } = require('electron');
const os = require('os');


// 注释掉所有log
console.log = function() {}


// HTML 文本
exports.template = fs.readFileSync(__dirname + "/index.html", "utf8");

// 样式文本
// exports.style = fs.readFileSync(__dirname + "/index.css", "utf8");
exports.style = fs.readFileSync(__dirname + "/index.css", "utf8");


// 渲染后 HTML 选择器
exports.$ = {
    name: ".name",
    v: ".v",

    web_lj: ".web_lj",
    shuchu_lj: ".shuchu_lj",

    asar: ".asar",
    isNode: ".isNode",
    isCover: ".isCover",
    app_version: ".app_version",
    icon: ".icon",
    jg: ".jg",
    log: ".log",


    open_icon_path: ".open_icon_path",
    open_web_path: ".open_web_path",
    open_shuchu_path: ".open_shuchu_path",
    open_chajian_path: ".open_chajian_path", 
    recover_default_data: ".recover_default_data",
    build_btn: ".green",

    log: ".log",
    build_cmd: ".build_cmd",
};

// 面板上的方法
exports.methods = {};

// 面板上触发的事件
exports.listeners = {};

// 当面板渲染成功后触发
exports.ready = async function() {

    this.$.web_lj.disabled = true;

    let a = path.resolve(__dirname, '..');
    let b = path.resolve(a, '..');
    let c = path.resolve(b, '..');
    // 项目路径
    let d = path.resolve(c, '..');


    /* // console.log("默认输出路径：", d + "/build");
    // 默认项目名字
    this.$.name.value = "Game";
    // 默认electron版本号
    this.$.v.value = "v15.0.0"
    // 默认输出路径
    this.$.shuchu_lj.value = d + "/build";
    // 默认web路径
    this.$.web_lj.value = `${d}/build/web-mobile`;
    // 默认参数
    this.$.asar.value = true;
    this.$.isNode.value = true;
    this.$.isCover.value = true;
    this.$.app_version.value = "15.0.0";
    this.$.icon.value = b + "/icon/icon.ico"
    this.$.jg.value = 2; */

    // let check = checkData();

    // 设置配置系统的默认值
    getData("b.name")[2].then((result) => {
        // 默认项目名字
        this.$.name.value = result;
        // console.log("解析的结果", result);
    });
    getData("b.v")[2].then((result) => {
        // 默认electron版本号
        console.log("存储的版本号：" , result);
        if (result == "") {
            let re = ipcRenderer.sendSync("getEV");
            console.log("渲染进程从主进程获取到的EV：", re);
            this.$.v.value = re;
        } else {
            this.$.v.value = result;
        }
        
        // console.log("解析的结果", result);
    });
    /* getData("b.webLJ")[2].then((result) => {
        // 默认web路径
        this.$.web_lj.value = result;
        // console.log("解析的结果", result);
    }); */

    this.$.web_lj.value = b + "\\main\\build\\web";

    getData("b.shuchuLJ")[2].then((result) => {
        // 默认输出路径
        this.$.shuchu_lj.value = result;
        // console.log("解析的结果", result);
    });
    getData("b.asar")[2].then((result) => {
        this.$.asar.value = result;
        // console.log("解析的结果", result);
    });
    getData("b.isNode")[2].then((result) => {
        this.$.isNode.value = result;
        // console.log("解析的结果", result);
    });
    getData("b.isCover")[2].then((result) => {
        this.$.isCover.value = result;
        // console.log("解析的结果", result);
    });
    getData("b.appVersion")[2].then((result) => {
        this.$.app_version.value = result;
        // console.log("解析的结果", result);
    });
    getData("b.icon")[2].then((result) => {
        this.$.icon.value = result;
        // console.log("解析的结果", result);
    });
    getData("b.jg")[2].then((result) => {
        this.$.jg.value = result;
        // console.log("解析的结果", result);
    });


    // 给一键发布按钮绑定事件
    this.$.build_btn.addEventListener('confirm', ()=>{

        // web路径
        let web_path = this.$.web_lj.value + "/index.html";
        // 判断web路径下是否有index.html
        fs.access(web_path, (err) => {
            if (err) {
                //"不存在"
                // 成功构建弹窗
                const config = {
                    title: "web路径下没有index.html",
                    detail: 'web路径下没有index.html',
                    buttons: ["我知道了"],
                };
                Editor.Dialog.error("web路径下没有index.html", config);
            } else {
                //"存在"
                console.log("web路径下有文件，可以继续打包");

                // 禁用一键发布按钮
                this.$.build_btn.disabled = true;

                const name = this.$.name.value;
                const web_lj = this.$.web_lj.value;
                const shuchu_lj = this.$.shuchu_lj.value;


                const asar = this.$.asar.value;
                const isNode = this.$.isNode.value;
                const isCover = this.$.isCover.value;
                const app_version = this.$.app_version.value;


                // 重新写入web路径
                let aaa = path.resolve(__dirname, '..')
                let bbb = path.resolve(aaa, '..')
                var build_path = bbb + "/main/build/path.txt"
        

                // 写入
                fs.writeFileSync(build_path, web_path);
                console.log('写入操作完成');


                // 因为\不能在代码中使用，所以替换成/，build_lj就是最终输出路径
                let icon_ = this.$.icon.value.split("\\");
                let icon__ = "";
                for (let i = 0; i < icon_.length; i ++) { 
                    icon__ += icon_[i] + "/";
                }
                const icon = icon__
                const jg = this.$.jg.value;


                let value = [
                    name,
                    web_lj,
                    shuchu_lj,

                    asar,//
                    isNode,//
                    isCover,//
                    app_version,
                    icon,
                    jg,
                    //this.$.log

                    this.$.v.value,
                ]

                const text_ = Editor.Message.request('build_windows_app', 'startBuild', value);

                text_.then(
                    value => {
                        self.$.build_cmd.value = value;
                        console.log("渲染进程获取的最终打包路径", value);
                    }
                )
            }
        });


        
    });


    // 给打开输出路径按钮绑定事件
    this.$.open_shuchu_path.addEventListener('confirm', ()=>{
        // console.log("打开输出路径");
        /* switch (os.platform()) {
            case "win32":
                child_process.exec(`start ${this.$.shuchu_lj.value}`);
                break;
            case "darwin":
                child_process.exec(`open ${this.$.shuchu_lj.value}`);
                break;
            default :
                child_process.exec(`start ${this.$.shuchu_lj.value}`);
                break;
        }         */
        child_process.exec(`start ${this.$.shuchu_lj.value}`);

    });


    // 给打开web路径按钮绑定事件
    this.$.open_web_path.addEventListener('confirm', ()=>{
        console.log("打开web路径");
        child_process.exec(`start ${this.$.web_lj.value}`);

    });


    // 给打开图标路径按钮绑定事件
    this.$.open_icon_path.addEventListener('confirm', ()=>{
        var path = require('path');
        let p = path.resolve(this.$.icon.value, '..');
        console.log("打开图标路径");
        child_process.exec(`start ${p}`);

    });


    // 给打开插件目录按钮绑定事件
    this.$.open_chajian_path.addEventListener('confirm', ()=>{
        var path = require('path');
        let a = path.resolve(__dirname, '..');
        let b = path.resolve(a, "..");
        console.log("打开插件路径");
        child_process.exec(`start ${b}`);

    });

    
    // 给恢复默认按钮绑定事件
    this.$.recover_default_data.addEventListener('confirm', ()=>{
        console.log("点击了按钮");
        const config = {
            title: '标题',
            detail: '您真的要把面板数据恢复成默认吗',
            buttons: ["取消", "确定"],
        };
        const code = Editor.Dialog.info('恢复面板数据为默认', config);
        code.then((result) => {
            let re = result.response;
            // 选择了确定
            if (re == 1) {
                recoverDefaultData();


                getData("b.name")[2].then((result) => {
                    // 默认项目名字
                    this.$.name.value = result;
                    // console.log("解析的结果", result);
                });
                getData("b.v")[2].then((result) => {
                    // 默认electron版本号
                    this.$.v.value = result;
                    // console.log("解析的结果", result);
                });
                /* getData("b.webLJ")[2].then((result) => {
                    // 默认web路径
                    this.$.web_lj.value = result;
                    // console.log("解析的结果", result);
                }); */
                getData("b.shuchuLJ")[2].then((result) => {
                    // 默认输出路径
                    this.$.shuchu_lj.value = result;
                    // console.log("解析的结果", result);
                });
                getData("b.asar")[2].then((result) => {
                    this.$.asar.value = result;
                    // console.log("解析的结果", result);
                });
                getData("b.isNode")[2].then((result) => {
                    this.$.isNode.value = result;
                    // console.log("解析的结果", result);
                });
                getData("b.isCover")[2].then((result) => {
                    this.$.isCover.value = result;
                    // console.log("解析的结果", result);
                });
                getData("b.appVersion")[2].then((result) => {
                    this.$.app_version.value = result;
                    // console.log("解析的结果", result);
                });
                getData("b.icon")[2].then((result) => {
                    this.$.icon.value = result;
                    // console.log("解析的结果", result);
                });
                getData("b.jg")[2].then((result) => {
                    this.$.jg.value = result;
                    // console.log("解析的结果", result);
                });
            }
        });
    });


    let self = this;
    // 一秒更新两次log
    setInterval(function(){
        const text_ = Editor.Message.request('build_windows_app', 'setLog');

        text_.then(
            value => {
                self.$.log.value = value;
                // console.log("每半秒更新一次log", value);
            }
        )
    },500)  // 每隔半秒钟更新一次log

    setPanelData();

    ipcRenderer.on("enableBtn", (e) => {
        this.$.build_btn.disabled = false;
    });

    ipcRenderer.on("ev",(e)=>{
        e.returnValue = "666666666666666666";
    });
        
    
};

// 把配置系统的数据，赋值给面板上的元素
function setPanelData () {

};






/**
 * 获取配置系统的数据
 * @param {*} key 
 * @return 返回一个数组，0是default，1是project，2是没有指定
 */
 function getData (key) {
    let a = Editor.Profile.getProject("build_windows_app", key, "default");
    let b = Editor.Profile.getProject("build_windows_app", key, "project");
    let c = Editor.Profile.getProject("build_windows_app", key);
    return ([a, b, c]);
}

/**
 * 设置配置系统的数据
 * @param {*} key 
 * @param {*} value 
 */
 function setData (key, value, type) {
    Editor.Profile.setProject("build_windows_app", key, value, type);
    console.log("设置了配置数据");
}

function setDataProject (key, value) {
    setData(key, value, "project");
}

// 一键测试配置系统默认值
function checkData () {
    // 设置配置系统的默认值
    let a = getData("b.name")[0].then((result) => {
        // console.log("解析的结果", result);
    });
    let b = getData("b.v")[0].then((result) => {
        // console.log("解析的结果", result);
    });
    /* let c = getData("b.webLJ")[0].then((result) => {
        // console.log("解析的结果", result);
    }); */
    let d = getData("b.shuchuLJ")[0].then((result) => {
        // console.log("解析的结果", result);
    });
    let e = getData("b.asar")[0].then((result) => {
        // console.log("解析的结果", result);
    });
    let f = getData("b.isNode")[0].then((result) => {
        // console.log("解析的结果", result);
    });
    let g = getData("b.isCover")[0].then((result) => {
        // console.log("解析的结果", result);
    });
    let h = getData("b.appVersion")[0].then((result) => {
        // console.log("解析的结果", result);
    });
    let i = getData("b.icon")[0].then((result) => {
        // console.log("解析的结果", result);
    });
    let j = getData("b.jg")[0].then((result) => {
        // console.log("解析的结果", result);
    });
    console.log("一键测试配置系统默认值", a, b ,c, d, e, f ,g , h, i, j);
    return([a, b, c, d, e, f, g, h, i, j])
}

// 面板数据恢复默认
function recoverDefaultData () {
    let a = path.resolve(__dirname, '..');
    let b = path.resolve(a, '..');
    let c = path.resolve(b, '..');
    let d = path.resolve(c, '..');

    // 设置配置系统的默认值
    setDataProject("b.name", "Game");
    setDataProject("b.v", "");
/*     setDataProject("b.webLJ", `${d}/build/web-mobile`);
 */    setDataProject("b.shuchuLJ", `${d}/build`);
    setDataProject("b.asar", true);
    setDataProject("b.isNode", true);
    setDataProject("b.isCover", true);
    setDataProject("b.appVersion", "1.0.0");
    setDataProject("b.icon", `${b}/icon/icon.ico`);
    setDataProject("b.jg", 2);
}

// 尝试关闭面板的时候触发
exports.beforeClose = async function() {};

// 当面板实际关闭后触发
exports.close = async function() {
    console.log("面板关闭了，存储了相关配置");

    // 设置配置系统的默认值
    setDataProject("b.name", this.$.name.value);
    setDataProject("b.v", this.$.v.value);
/*     setDataProject("b.webLJ", this.$.web_lj.value);
 */    setDataProject("b.shuchuLJ", this.$.shuchu_lj.value);
    setDataProject("b.asar", this.$.asar.value);
    setDataProject("b.isNode", this.$.isNode.value);
    setDataProject("b.isCover", this.$.isCover.value);
    setDataProject("b.appVersion", this.$.app_version.value);
    setDataProject("b.icon", this.$.icon.value);
    setDataProject("b.jg", this.$.jg.value);
};