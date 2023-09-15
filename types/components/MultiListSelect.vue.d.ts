declare const _default: import("vue").DefineComponent<{
    list: {
        type: ArrayConstructor;
    };
    optionValue: {
        type: StringConstructor;
    };
    optionText: {
        type: StringConstructor;
    };
    customText: {
        type: FunctionConstructor;
    };
    selectedItems: {
        type: ArrayConstructor;
    };
    optionDisabled: {
        type: StringConstructor;
    };
}, any, any, {
    options(): any;
    items(): any;
}, {
    buildText(e: any): any;
    onSelect(options: any, option: any): void;
}, {
    props: {
        id: {
            default: null;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        isError: {
            type: BooleanConstructor;
            default: boolean;
        };
        customAttr: {
            type: FunctionConstructor;
            default: () => string;
        };
        isDisabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        filterPredicate: {
            type: FunctionConstructor;
            default: (text: any, inputText: any) => any;
        };
    };
}, import("vue").ComponentOptionsMixin, ("blur" | "searchchange" | "select")[], "blur" | "searchchange" | "select", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    list: {
        type: ArrayConstructor;
    };
    optionValue: {
        type: StringConstructor;
    };
    optionText: {
        type: StringConstructor;
    };
    customText: {
        type: FunctionConstructor;
    };
    selectedItems: {
        type: ArrayConstructor;
    };
    optionDisabled: {
        type: StringConstructor;
    };
}>> & {
    onBlur?: ((...args: any[]) => any) | undefined;
    onSearchchange?: ((...args: any[]) => any) | undefined;
    onSelect?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
//# sourceMappingURL=MultiListSelect.vue.d.ts.map