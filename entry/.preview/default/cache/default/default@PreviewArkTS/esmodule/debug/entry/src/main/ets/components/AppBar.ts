if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface AppBar_Params {
    title?: string;
    leading?: () => void;
    tailing?: () => void;
}
class AppBar extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__title = new SynchedPropertySimpleOneWayPU(params.title, this, "title");
        this.leading = this.leadingBuilder;
        this.tailing = this.tailingBuilder;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: AppBar_Params) {
        if (params.title === undefined) {
            this.__title.set('');
        }
        if (params.leading !== undefined) {
            this.leading = params.leading;
        }
        if (params.tailing !== undefined) {
            this.tailing = params.tailing;
        }
    }
    updateStateVars(params: AppBar_Params) {
        this.__title.reset(params.title);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__title.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__title.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __title: SynchedPropertySimpleOneWayPU<string>;
    get title() {
        return this.__title.get();
    }
    set title(newValue: string) {
        this.__title.set(newValue);
    }
    leadingBuilder(parent = null) {
    }
    tailingBuilder(parent = null) {
    }
    private __leading;
    private __tailing;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/components/AppBar.ets(17:5)", "entry");
            Row.backgroundColor('#317bd4');
            Row.width('100%');
            Row.height(56);
            Row.padding(20);
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.leading.bind(this)();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.title);
            Text.debugLine("entry/src/main/ets/components/AppBar.ets(19:7)", "entry");
            Text.fontSize(20);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor({ "id": 125831026, "type": 10001, params: [], "bundleName": "com.wangfei.harmonyexample", "moduleName": "entry" });
        }, Text);
        Text.pop();
        this.tailing.bind(this)();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
// 确保导出组件
export default AppBar;
