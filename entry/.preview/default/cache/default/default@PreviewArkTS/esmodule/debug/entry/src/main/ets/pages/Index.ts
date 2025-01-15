if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Index_Params {
    message?: string;
    counter?: number;
}
import AppBar from "@normalized:N&&&entry/src/main/ets/components/AppBar&";
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__message = new ObservedPropertySimplePU('Hello World', this, "message");
        this.__counter = new ObservedPropertySimplePU(0, this, "counter");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Index_Params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
        if (params.counter !== undefined) {
            this.counter = params.counter;
        }
    }
    updateStateVars(params: Index_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
        this.__counter.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__counter.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __message: ObservedPropertySimplePU<string>;
    get message() {
        return this.__message.get();
    }
    set message(newValue: string) {
        this.__message.set(newValue);
    }
    private __counter: ObservedPropertySimplePU<number>;
    get counter() {
        return this.__counter.get();
    }
    set counter(newValue: number) {
        this.__counter.set(newValue);
    }
    tailing(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            SymbolGlyph.create({ "id": 125831713, "type": 40000, params: [], "bundleName": "com.wangfei.harmonyexample", "moduleName": "entry" });
            SymbolGlyph.debugLine("entry/src/main/ets/pages/Index.ets(11:5)", "entry");
            SymbolGlyph.fontSize(24);
            SymbolGlyph.fontColor([Color.White]);
            SymbolGlyph.fontWeight(FontWeight.Bold);
        }, SymbolGlyph);
    }
    leading(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            SymbolGlyph.create({ "id": 125833227, "type": 40000, params: [], "bundleName": "com.wangfei.harmonyexample", "moduleName": "entry" });
            SymbolGlyph.debugLine("entry/src/main/ets/pages/Index.ets(19:5)", "entry");
            SymbolGlyph.fontSize(24);
            SymbolGlyph.fontColor([Color.White]);
            SymbolGlyph.fontWeight(FontWeight.Bold);
        }, SymbolGlyph);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // RelativeContainer() {
            //   Text(this.message)
            //     .id('HelloWorld')
            //     .fontSize(50)
            //     .fontWeight(FontWeight.Bold)
            //     .alignRules({
            //       center: { anchor: '__container__', align: VerticalAlign.Center },
            //       middle: { anchor: '__container__', align: HorizontalAlign.Center }
            //     })
            // }
            // .height('100%')
            // .width('100%')
            Stack.create();
            Stack.debugLine("entry/src/main/ets/pages/Index.ets(38:5)", "entry");
            // RelativeContainer() {
            //   Text(this.message)
            //     .id('HelloWorld')
            //     .fontSize(50)
            //     .fontWeight(FontWeight.Bold)
            //     .alignRules({
            //       center: { anchor: '__container__', align: VerticalAlign.Center },
            //       middle: { anchor: '__container__', align: HorizontalAlign.Center }
            //     })
            // }
            // .height('100%')
            // .width('100%')
            Stack.alignContent(Alignment.BottomEnd);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(39:7)", "entry");
            Column.backgroundColor('#44ff0000');
            Column.alignItems(HorizontalAlign.Start);
            Column.width('100%');
            Column.height('100%');
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new AppBar(this, { title: '计数器', leading: this.leading, tailing: this.tailing }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 40, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '计数器',
                            leading: this.leading,
                            tailing: this.tailing
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        title: '计数器'
                    });
                }
            }, { name: "AppBar" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(41:9)", "entry");
            Column.width('100%');
            Column.height('100%');
            Column.justifyContent(FlexAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('下面是你点击按钮的次数');
            Text.debugLine("entry/src/main/ets/pages/Index.ets(42:11)", "entry");
            Text.fontSize(18);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.counter.toString());
            Text.debugLine("entry/src/main/ets/pages/Index.ets(44:11)", "entry");
            Text.fontSize(36);
            Text.fontColor('#2e3032');
            Text.margin(10);
        }, Text);
        Text.pop();
        Column.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithChild({ type: ButtonType.Circle, stateEffect: true });
            Button.debugLine("entry/src/main/ets/pages/Index.ets(60:7)", "entry");
            Button.onClick(() => this.counter++);
            Button.width(56);
            Button.height(56);
            Button.margin(20);
            Button.backgroundColor('#317bd4');
        }, Button);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            SymbolGlyph.create({ "id": 125831483, "type": 40000, params: [], "bundleName": "com.wangfei.harmonyexample", "moduleName": "entry" });
            SymbolGlyph.debugLine("entry/src/main/ets/pages/Index.ets(61:9)", "entry");
            SymbolGlyph.fontSize(24);
            SymbolGlyph.fontColor([Color.White]);
            SymbolGlyph.fontWeight(FontWeight.Bold);
        }, SymbolGlyph);
        Button.pop();
        // RelativeContainer() {
        //   Text(this.message)
        //     .id('HelloWorld')
        //     .fontSize(50)
        //     .fontWeight(FontWeight.Bold)
        //     .alignRules({
        //       center: { anchor: '__container__', align: VerticalAlign.Center },
        //       middle: { anchor: '__container__', align: HorizontalAlign.Center }
        //     })
        // }
        // .height('100%')
        // .width('100%')
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Index";
    }
}
registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "com.wangfei.harmonyexample", moduleName: "entry", pagePath: "pages/Index", pageFullPath: "entry/src/main/ets/pages/Index", integratedHsp: "false", moduleType: "followWithHap" });
