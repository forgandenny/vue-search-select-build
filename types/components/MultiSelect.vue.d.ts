declare const _default: import("vue").DefineComponent<{
    customAttr: {
        type: FunctionConstructor;
        default: () => string;
    };
    options: {
        type: ArrayConstructor;
    };
    selectedOptions: {
        type: ArrayConstructor;
    };
    cleanSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideSelectedOptions: {
        type: BooleanConstructor;
        default: boolean;
    };
}, any, {
    showMenu: boolean;
    searchText: string;
    mousedownState: boolean;
    pointer: number;
}, {
    inputText(): "";
    textClass(): "" | "default";
    inputWidth(): {
        width: string;
    };
    menuClass(): {
        visible: boolean;
        hidden: boolean;
    };
    menuStyle(): {
        display: string;
    };
    nonSelectOptions(): unknown[];
    filteredOptions(): unknown[];
}, {
    deleteTextOrLastItem(): void;
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
    deleteItem(option: any): void;
    accentsTidy(s: any): any;
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
    customAttr: {
        type: FunctionConstructor;
        default: () => string;
    };
    options: {
        type: ArrayConstructor;
    };
    selectedOptions: {
        type: ArrayConstructor;
    };
    cleanSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideSelectedOptions: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onBlur?: ((...args: any[]) => any) | undefined;
    onSearchchange?: ((...args: any[]) => any) | undefined;
    onSelect?: ((...args: any[]) => any) | undefined;
}, {
    customAttr: Function;
    cleanSearch: boolean;
    hideSelectedOptions: boolean;
}, {}>;
export default _default;
//# sourceMappingURL=MultiSelect.vue.d.ts.map