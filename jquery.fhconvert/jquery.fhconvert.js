/*
*  fhconvert(http://distraid.co.jp/demo/js_codeconv.html)のラッププラグインです。
*  @example HTML <input type="text" data-fhconvert='{"type": "ftoh"}' />
*  @example $(selector).fhconvert();
*  @author @niwaringo
*/
(function($) {
    /*
    * ftoh　:　全角英数字→半角
    * htof　:　半角英数字→全角
    * hgtokk　:　ひらがな→全角カタカナ
    * hkktofkk　:　半角ｶﾅ→全角カナ
    */

   $.fn.fhconvert = function() {
       $(this).each(function() {
           var $this = $(this);
           //data属性を取得する。
           var $dataAttr = $this.data('fhconvert');

           //data属性がない場合は抜ける
           if(typeof($dataAttr) === 'undefined') {
               return true;
           }

           //data属性から値を取得する。
           var fhconvertType = $dataAttr.type;
           var settings = $.extend({
               'jaCode':true,
               'space':true,
               'convSet':'object'
           }, $this.data('fhconvert').option);


           // hfconvertに渡す
           $this.val(FHConvert[fhconvertType]($this.val(), settings));
       });

       return this;
   };
}(jQuery));
