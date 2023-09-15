declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor | ObjectConstructor)[];
    };
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
    optionDisabled: {
        type: StringConstructor;
    };
}, any, any, {
    options(): any;
    innerValue(): any;
}, {
    buildText(e: any): any;
    onInput(option: any): any;
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
}, import("vue").ComponentOptionsMixin, ("blur" | "searchchange" | "update:modelValue")[], "blur" | "searchchange" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor | ObjectConstructor)[];
    };
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
    optionDisabled: {
        type: StringConstructor;
    };
}>> & {
    onBlur?: ((...args: any[]) => any) | undefined;
    onSearchchange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
//# sourceMappingURL=ModelListSelect.vue.d.ts.map