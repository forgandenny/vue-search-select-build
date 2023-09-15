declare namespace _default {
    function openOptions(self: any): void;
    function blurInput(self: any): void;
    function closeOptions(self: any): void;
    /**
     * up arrow key
     * 上の移動するときには新しいscroll位置を毎回セットする
     * Always scroll move, when "up arrow key" entered
     */
    function prevItem(self: any): void;
    /**
     *
     * down arrow key
     * ページsizeを計算してずれたらmove
     * calculate page size. If different between itemPage and currentPage move scroll
     */
    function nextItem(self: any): void;
    function enterItem(self: any): void;
    function pointerSet(self: any, index: any): void;
    function pointerAdjust(self: any): void;
    function mousedownItem(self: any): void;
}
export default _default;
//# sourceMappingURL=common.d.ts.map