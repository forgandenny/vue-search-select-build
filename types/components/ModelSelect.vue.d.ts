declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor | ObjectConstructor)[];
    };
    customAttr: {
        type: FunctionConstructor;
        default: () => string;
    };
    options: {
        type: ArrayConstructor;
    };
}, any, {
    showMenu: boolean;
    searchText: string;
    mousedownState: boolean;
    pointer: number;
}, {
    searchTextCustomAttr(): any;
    inputText(): "";
    customAttrs(): any[];
    textClass(): "" | "default";
    menuClass(): {
        visible: boolean;
        hidden: boolean;
    };
    menuStyle(): {
        display: string;
    };
    filteredOptions(): unknown[] | undefined;
    selectedOption(): unknown;
}, {
    deleteTextOrItem(): void;
    openOptions(): void;
    blurInput(): void;
    closeOptions(): void;
    prevItem(): void;
    nextItem(): void;
    enterItem(): void;
    pointerSet(index: any): void;
    pointerAdjust(): void;
    mousedownItem(): void;
    selectItem(option: any): void;
    optionValue(value: any): any;
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
    customAttr: {
        type: FunctionConstructor;
        default: () => string;
    };
    options: {
        type: ArrayConstructor;
    };
}>> & {
    onBlur?: ((...args: any[]) => any) | undefined;
    onSearchchange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    customAttr: Function;
}, {}>;
export default _default;
//# sourceMappingURL=ModelSelect.vue.d.ts.map