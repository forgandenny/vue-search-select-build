import { openBlock as m, createElementBlock as c, normalizeClass as f, createElementVNode as d, withModifiers as p, withKeys as u, normalizeStyle as O, Fragment as I, renderList as v, h as T, createTextVNode as S, toDisplayString as b, createCommentVNode as V, withDirectives as M, vModelText as A } from "vue";
const l = {
  // cursor on input
  openOptions(e) {
    e.$refs.input.focus(), e.showMenu = !0, e.mousedownState = !1;
  },
  blurInput(e) {
    e.mousedownState || (e.searchText = "", e.closeOptions()), e.$emit("blur");
  },
  closeOptions(e) {
    e.$refs.input.blur(), e.showMenu = !1;
  },
  /**
   * up arrow key
   * 上の移動するときには新しいscroll位置を毎回セットする
   * Always scroll move, when "up arrow key" entered
   */
  prevItem(e) {
    const t = e.pointer - 1, n = e.$el.offsetHeight * t;
    t >= 0 && (e.pointer = t), e.$refs.menu.scrollTop = n;
  },
  /**
   *
   * down arrow key
   * ページsizeを計算してずれたらmove
   * calculate page size. If different between itemPage and currentPage move scroll
   */
  nextItem(e) {
    const t = e.pointer + 1, n = e.$el.offsetHeight * t;
    t <= e.filteredOptions.length - 1 && (e.pointer = t);
    const a = e.$refs.menu.offsetHeight, r = Math.ceil((e.$refs.menu.scrollTop + e.$el.offsetHeight) / a), s = Math.ceil(n / a);
    r !== s && (e.$refs.menu.scrollTop = (s - 1) * e.$refs.menu.offsetHeight);
  },
  // down enter key
  enterItem(e) {
    const t = e.filteredOptions[e.pointer], n = t.disabled;
    t && !n && e.selectItem(t);
  },
  // mouse enter event on item
  pointerSet(e, t) {
    e.pointer = t;
  },
  pointerAdjust(e) {
    e.pointer >= e.filteredOptions.length - 1 && (e.pointer = e.filteredOptions.length ? e.filteredOptions.length - 1 : 0);
  },
  mousedownItem(e) {
    e.mousedownState = !0;
  }
};
function C(e) {
  return new RegExp(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
}
const x = {
  props: {
    id: {
      default: null
    },
    name: {
      type: String,
      default: ""
    },
    isError: {
      type: Boolean,
      default: !1
    },
    customAttr: {
      type: Function,
      default: () => ""
    },
    isDisabled: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: ""
    },
    filterPredicate: {
      type: Function,
      default: (e, t) => e.match(C(t))
    }
  }
}, w = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, r] of t)
    n[a] = r;
  return n;
}, E = {
  name: "ModelSelect",
  mixins: [x],
  emits: ["blur", "searchchange", "update:modelValue"],
  props: {
    modelValue: {
      type: [String, Number, Object, Boolean]
    },
    customAttr: {
      type: Function,
      default: () => ""
    },
    options: {
      type: Array
    }
  },
  data() {
    return {
      showMenu: !1,
      searchText: "",
      mousedownState: !1,
      // mousedown on option menu
      pointer: -1
    };
  },
  watch: {
    value(e) {
      this.pointer = this.filteredOptions.findIndex((t) => t.value === this.optionValue(e));
    },
    filteredOptions() {
      this.pointerAdjust();
    },
    searchText() {
      this.$emit("searchchange", this.searchText);
    }
  },
  computed: {
    searchTextCustomAttr() {
      return this.selectedOption && this.selectedOption.value ? this.customAttr(this.selectedOption) : "";
    },
    inputText() {
      if (this.searchText)
        return "";
      {
        let e = this.placeholder;
        return this.selectedOption && (e = this.selectedOption.text), e;
      }
    },
    customAttrs() {
      try {
        if (Array.isArray(this.options))
          return this.options.map((e) => this.customAttr(e));
      } catch {
      }
      return [];
    },
    textClass() {
      return !this.selectedOption && this.placeholder ? "default" : "";
    },
    menuClass() {
      return {
        visible: this.showMenu,
        hidden: !this.showMenu
      };
    },
    menuStyle() {
      return {
        display: this.showMenu ? "block" : "none"
      };
    },
    filteredOptions() {
      return this.searchText ? this.options.filter((e) => {
        try {
          return this.filterPredicate(e.text, this.searchText);
        } catch {
          return !0;
        }
      }) : this.options;
    },
    selectedOption() {
      return this.options.find((e) => e.value === this.optionValue(this.modelValue));
    }
  },
  methods: {
    deleteTextOrItem() {
      !this.searchText && this.modelValue && (this.selectItem({}), this.openOptions());
    },
    openOptions() {
      l.openOptions(this);
    },
    blurInput() {
      l.blurInput(this);
    },
    closeOptions() {
      l.closeOptions(this);
    },
    prevItem() {
      l.prevItem(this);
    },
    nextItem() {
      l.nextItem(this);
    },
    enterItem() {
      l.enterItem(this);
    },
    pointerSet(e) {
      l.pointerSet(this, e);
    },
    pointerAdjust() {
      l.pointerAdjust(this);
    },
    mousedownItem() {
      l.mousedownItem(this);
    },
    selectItem(e) {
      this.searchText = "", this.closeOptions(), typeof this.modelValue == "object" && this.modelValue ? this.$emit("update:modelValue", e) : (this.$emit("update:modelValue", e.value), e.value !== void 0 && e.value === e.text && (this.searchText = e.value));
    },
    optionValue(e) {
      return typeof e == "object" && e !== null ? e.value : e;
    }
  }
}, k = /* @__PURE__ */ d("i", { class: "dropdown icon" }, null, -1), D = ["disabled", "tabindex", "id", "name", "value"], j = ["data-vss-custom-attr"], L = ["innerHTML"], R = ["data-vss-custom-attr", "onClick", "onMouseenter"], B = ["innerHTML"];
function F(e, t, n, a, r, s) {
  return m(), c("div", {
    class: f(["ui fluid search selection dropdown", { "active visible": r.showMenu, error: e.isError, disabled: e.isDisabled }]),
    onClick: t[11] || (t[11] = (...i) => s.openOptions && s.openOptions(...i)),
    onFocus: t[12] || (t[12] = (...i) => s.openOptions && s.openOptions(...i))
  }, [
    k,
    d("input", {
      class: "search",
      autocomplete: "off",
      disabled: e.isDisabled,
      tabindex: e.isDisabled ? -1 : 0,
      id: e.id,
      name: e.name,
      value: r.searchText,
      onInput: t[0] || (t[0] = (i) => r.searchText = i.target.value),
      ref: "input",
      onFocus: t[1] || (t[1] = p((...i) => s.openOptions && s.openOptions(...i), ["prevent"])),
      onKeyup: [
        t[2] || (t[2] = u((...i) => s.closeOptions && s.closeOptions(...i), ["esc"])),
        t[7] || (t[7] = u(p((...i) => s.enterItem && s.enterItem(...i), ["prevent"]), ["enter"]))
      ],
      onBlur: t[3] || (t[3] = (...i) => s.blurInput && s.blurInput(...i)),
      onKeydown: [
        t[4] || (t[4] = u((...i) => s.prevItem && s.prevItem(...i), ["up"])),
        t[5] || (t[5] = u((...i) => s.nextItem && s.nextItem(...i), ["down"])),
        t[6] || (t[6] = u(p(() => {
        }, ["prevent"]), ["enter"])),
        t[8] || (t[8] = u((...i) => s.deleteTextOrItem && s.deleteTextOrItem(...i), ["delete"]))
      ]
    }, null, 40, D),
    d("div", {
      class: f(["text", s.textClass]),
      "data-vss-custom-attr": s.searchTextCustomAttr
    }, [
      d("span", { innerHTML: s.inputText }, null, 8, L)
    ], 10, j),
    d("div", {
      class: f(["menu", s.menuClass]),
      ref: "menu",
      onMousedown: t[10] || (t[10] = p(() => {
      }, ["prevent"])),
      style: O(s.menuStyle),
      tabindex: "-1"
    }, [
      (m(!0), c(I, null, v(s.filteredOptions, (i, o) => (m(), c("div", {
        key: o,
        class: f(["item", { selected: i.selected || r.pointer === o, disabled: i.disabled }]),
        "data-vss-custom-attr": s.customAttrs[o] ? s.customAttrs[o] : "",
        onClick: p((h) => s.selectItem(i), ["stop"]),
        onMousedown: t[9] || (t[9] = (...h) => s.mousedownItem && s.mousedownItem(...h)),
        onMouseenter: (h) => s.pointerSet(o)
      }, [
        d("span", {
          innerHTML: i.text
        }, null, 8, B)
      ], 42, R))), 128))
    ], 38)
  ], 34);
}
const y = /* @__PURE__ */ w(E, [["render", F]]), G = {
  name: "ModelListSelect",
  mixins: [x],
  emits: ["blur", "searchchange", "update:modelValue"],
  render: function() {
    return T(y, {
      id: this.id,
      name: this.name,
      options: this.options,
      modelValue: this.innerValue,
      isError: this.isError,
      isDisabled: this.isDisabled,
      placeholder: this.placeholder,
      filterPredicate: this.filterPredicate,
      onBlur: () => this.$emit("blur"),
      "onUpdate:modelValue": this.onInput,
      onSearchchange: (e) => this.$emit("searchchange", e)
    });
  },
  props: {
    modelValue: {
      type: [String, Number, Object, Boolean]
    },
    list: {
      type: Array
    },
    optionValue: {
      type: String
    },
    optionText: {
      type: String
    },
    customText: {
      type: Function
    },
    optionDisabled: {
      type: String
    }
  },
  computed: {
    options() {
      return this.list.map((e) => ({ value: e[this.optionValue], text: this.buildText(e), disabled: !!e[this.optionDisabled] }));
    },
    innerValue() {
      return this.modelValue ? typeof this.modelValue == "object" ? this.modelValue ? {
        value: this.modelValue[this.optionValue],
        text: this.buildText(this.modelValue),
        disabled: !!this.modelValue[this.optionDisabled]
      } : { value: "", text: "", disabled: !1 } : this.modelValue : this.modelValue;
    }
  },
  methods: {
    buildText(e) {
      return e[this.optionValue] !== void 0 ? this.customText ? this.customText(e) : e[this.optionText] : "";
    },
    onInput(e) {
      if (e === void 0)
        return this.$emit("update:modelValue", "");
      if (Object.keys(e).length === 0 && e.constructor === Object)
        this.$emit("update:modelValue", e);
      else if (typeof e == "object") {
        const t = this.list.find((n) => n[this.optionValue] === e.value);
        this.$emit("update:modelValue", t);
      } else
        this.$emit("update:modelValue", e);
    }
  },
  components: {
    ModelSelect: y
  }
}, H = {
  name: "MultiSelect",
  mixins: [x],
  emits: ["blur", "searchchange", "select"],
  props: {
    customAttr: {
      type: Function,
      default: () => ""
    },
    options: {
      type: Array
    },
    selectedOptions: {
      type: Array
    },
    cleanSearch: {
      type: Boolean,
      default: !0
    },
    hideSelectedOptions: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      showMenu: !1,
      searchText: "",
      mousedownState: !1,
      // mousedown on option menu
      pointer: -1
    };
  },
  watch: {
    selectedOptions() {
      this.pointer = -1;
    },
    filteredOptions() {
      this.pointerAdjust();
    },
    searchText() {
      this.$emit("searchchange", this.searchText);
    }
  },
  computed: {
    inputText() {
      return this.searchText ? "" : this.placeholder;
    },
    textClass() {
      return this.placeholder ? "default" : "";
    },
    inputWidth() {
      return {
        width: (this.searchText.length + 1) * 8 + 20 + "px"
      };
    },
    menuClass() {
      return {
        visible: this.showMenu,
        hidden: !this.showMenu
      };
    },
    menuStyle() {
      return {
        display: this.showMenu ? "block" : "none"
      };
    },
    nonSelectOptions() {
      return this.options.filter((e) => this.selectedOptions.findIndex((t) => t.value === e.value) === -1);
    },
    filteredOptions() {
      return this.searchText ? this.nonSelectOptions.filter((e) => {
        try {
          return this.cleanSearch ? this.filterPredicate(this.accentsTidy(e.text), this.searchText) : this.filterPredicate(e.text, this.searchText);
        } catch {
          return !0;
        }
      }) : this.nonSelectOptions;
    }
  },
  methods: {
    deleteTextOrLastItem() {
      !this.searchText && this.selectedOptions.length > 0 && this.deleteItem(this.selectedOptions[this.selectedOptions.length - 1]);
    },
    openOptions() {
      l.openOptions(this);
    },
    blurInput() {
      l.blurInput(this);
    },
    closeOptions() {
      l.closeOptions(this);
    },
    prevItem() {
      l.prevItem(this), this.openOptions();
    },
    nextItem() {
      l.nextItem(this), this.openOptions();
    },
    enterItem() {
      l.enterItem(this);
    },
    pointerSet(e) {
      l.pointerSet(this, e);
    },
    pointerAdjust() {
      l.pointerAdjust(this);
    },
    mousedownItem() {
      l.mousedownItem(this);
    },
    selectItem(e) {
      const t = this.selectedOptions.concat(e), n = t.filter((a, r) => t.indexOf(a) === r);
      this.closeOptions(), this.searchText = "", this.$emit("select", n, e, "insert");
    },
    deleteItem(e) {
      const t = this.selectedOptions.filter((n) => n.value !== e.value);
      this.$emit("select", t, e, "delete");
    },
    accentsTidy(e) {
      let t = e.toString().toLowerCase();
      return t = t.replace(new RegExp("[àáâãäå]", "g"), "a"), t = t.replace(new RegExp("æ", "g"), "ae"), t = t.replace(new RegExp("ç", "g"), "c"), t = t.replace(new RegExp("[èéêë]", "g"), "e"), t = t.replace(new RegExp("[ìíîï]", "g"), "i"), t = t.replace(new RegExp("ñ", "g"), "n"), t = t.replace(new RegExp("[òóôõö]", "g"), "o"), t = t.replace(new RegExp("œ", "g"), "oe"), t = t.replace(new RegExp("[ùúûü]", "g"), "u"), t = t.replace(new RegExp("[ýÿ]", "g"), "y"), t;
    }
  }
}, P = /* @__PURE__ */ d("i", { class: "dropdown icon" }, null, -1), K = ["data-vss-custom-attr"], N = ["onClick"], z = ["disabled", "tabindex", "id", "name"], U = ["data-vss-custom-attr", "onClick", "onMouseenter"];
function W(e, t, n, a, r, s) {
  return m(), c("div", {
    class: f(["ui fluid search dropdown selection multiple", { "active visible": r.showMenu, error: e.isError, disabled: e.isDisabled }]),
    onClick: t[11] || (t[11] = (...i) => s.openOptions && s.openOptions(...i)),
    onFocus: t[12] || (t[12] = (...i) => s.openOptions && s.openOptions(...i))
  }, [
    P,
    n.hideSelectedOptions ? V("", !0) : (m(!0), c(I, { key: 0 }, v(n.selectedOptions, (i, o) => (m(), c("a", {
      key: o,
      class: "ui label transition visible",
      style: { display: "inline-block !important" },
      "data-vss-custom-attr": n.customAttr(i)
    }, [
      S(b(i.text), 1),
      d("i", {
        class: "delete icon",
        onClick: (h) => s.deleteItem(i)
      }, null, 8, N)
    ], 8, K))), 128)),
    M(d("input", {
      class: "search",
      autocomplete: "off",
      disabled: e.isDisabled,
      tabindex: e.isDisabled ? -1 : 0,
      id: e.id,
      name: e.name,
      "onUpdate:modelValue": t[0] || (t[0] = (i) => r.searchText = i),
      ref: "input",
      style: O(s.inputWidth),
      onFocus: t[1] || (t[1] = p((...i) => s.openOptions && s.openOptions(...i), ["prevent"])),
      onKeyup: [
        t[2] || (t[2] = u((...i) => s.closeOptions && s.closeOptions(...i), ["esc"])),
        t[7] || (t[7] = u(p((...i) => s.enterItem && s.enterItem(...i), ["prevent"]), ["enter"]))
      ],
      onBlur: t[3] || (t[3] = (...i) => s.blurInput && s.blurInput(...i)),
      onKeydown: [
        t[4] || (t[4] = u((...i) => s.prevItem && s.prevItem(...i), ["up"])),
        t[5] || (t[5] = u((...i) => s.nextItem && s.nextItem(...i), ["down"])),
        t[6] || (t[6] = u(p(() => {
        }, ["prevent"]), ["enter"])),
        t[8] || (t[8] = u((...i) => s.deleteTextOrLastItem && s.deleteTextOrLastItem(...i), ["delete"]))
      ]
    }, null, 44, z), [
      [A, r.searchText]
    ]),
    d("div", {
      class: f(["text", s.textClass])
    }, b(s.inputText), 3),
    d("div", {
      class: f(["menu", s.menuClass]),
      ref: "menu",
      onMousedown: t[10] || (t[10] = p(() => {
      }, ["prevent"])),
      style: O(s.menuStyle),
      tabindex: "-1"
    }, [
      (m(!0), c(I, null, v(s.filteredOptions, (i, o) => (m(), c("div", {
        key: o,
        class: f(["item", { selected: i.selected || r.pointer === o, disabled: i.disabled }]),
        "data-vss-custom-attr": n.customAttr(i),
        onClick: p((h) => s.selectItem(i), ["stop"]),
        onMousedown: t[9] || (t[9] = (...h) => s.mousedownItem && s.mousedownItem(...h)),
        onMouseenter: (h) => s.pointerSet(o)
      }, b(i.text), 43, U))), 128))
    ], 38)
  ], 34);
}
const g = /* @__PURE__ */ w(H, [["render", W]]), J = {
  name: "MultiListSelect",
  mixins: [x],
  emits: ["blur", "searchchange", "select"],
  render: function() {
    return T(g, {
      id: this.id,
      name: this.name,
      options: this.options,
      selectedOptions: this.items,
      isError: this.isError,
      isDisabled: this.isDisabled,
      placeholder: this.placeholder,
      filterPredicate: this.filterPredicate,
      onSelect: this.onSelect,
      onSearchchange: (e) => this.$emit("searchchange", e)
    });
  },
  props: {
    list: {
      type: Array
    },
    optionValue: {
      type: String
    },
    optionText: {
      type: String
    },
    customText: {
      type: Function
    },
    selectedItems: {
      type: Array
    },
    optionDisabled: {
      type: String
    }
  },
  computed: {
    options() {
      return this.list.map((e) => ({ value: e[this.optionValue], text: this.buildText(e), disabled: !!e[this.optionDisabled] }));
    },
    items() {
      return this.selectedItems.map((e) => ({ value: e[this.optionValue], text: this.buildText(e), disabled: !!e[this.optionDisabled] }));
    }
  },
  methods: {
    buildText(e) {
      return e[this.optionValue] !== void 0 ? this.customText ? this.customText(e) : e[this.optionText] : "";
    },
    onSelect(e, t) {
      if (Object.keys(t).length === 0 && t.constructor === Object)
        this.$emit("select", e, t);
      else {
        const n = this.list.filter((r, s) => e.find((i, o) => r[this.optionValue] === i.value)), a = this.list.find((r) => r[this.optionValue] === t.value);
        this.$emit("select", n, a);
      }
    }
  },
  components: {
    MultiSelect: g
  }
};
export {
  G as ModelListSelect,
  y as ModelSelect,
  J as MultiListSelect,
  g as MultiSelect
};
