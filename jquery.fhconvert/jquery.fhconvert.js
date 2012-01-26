/*
*  fhconvert(http://distraid.co.jp/demo/js_codeconv.html)のラッププラグインです。
*  @example HTML <input type="text" data-fhconvert='{"type": "ftoh"}' />
*  @example $(selector).fhconvert('htof')
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
           //data属性から変換タイプを取得する。
           var convertType = $this.data('fhconvert').type;
           //data属性からオプションを取得する。
           var settings = $.extend({
               'jaCode':true,
               'space':true,
               'convSet':'object'
           }, $this.data('fhconvert').option);

           if(typeof(convertType) === 'undefined') {
               return ture;
           }

           // hfconvertに渡す
           $this.val(FHConvert[convertType]($this.val(), settings));
       });

       return this;
   };
}(jQuery));
