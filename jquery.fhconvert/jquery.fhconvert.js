/*
*  fhconvertのラッププラグインです。
*  @example $(selector).fhconvert('htof')
*  @author @niwaringo
*/
(function($) {
    /*
    *  @param {String} type 指定された変換方法で変換
    *  @param {Object} options 日本語、全角スペース等の設定
    *
    * ftoh　:　全角英数字→半角
    * htof　:　半角英数字→全角
    * hgtokk　:　ひらがな→全角カタカナ
    * hkktofkk　:　半角ｶﾅ→全角カナ
    */

   $.fn[fhconvert] = function(type, options) {
       var settings = $.extend({
           'jaCode':true,
           'space':true,
           'convSet':'object'
       }, options);

       $(this).each(function() {
           var $this = $(this);
           var convertText = FHConvert[type]($this.val(), settings);

           $this.val(convertText);
       });

       return this;
   };
}(jQuery));
