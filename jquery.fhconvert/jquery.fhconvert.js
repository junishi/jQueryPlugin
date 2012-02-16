/*
* Released under the MIT Licenses.
* @require fhconvert(http://distraid.co.jp/demo/js_codeconv.html)
* @github https://github.com/niwaringo/jQueryPlugin/tree/data-attr/jquery.fhconvert
*/
(function($) {
    $.fn.fhconvert = function() {
        var defaultOption = {'jaCode':true, 'space':true, 'convSet':'object'};

        $(this).each(function() {
            var $this = $(this);
            var dataAttr = $this.data('fhconvert');
            var converter = function(data) {
                var fhconvertType, settings;
                if(typeof(data) === 'string') {
                    //文字列のみでタイプを指定されている場合はそのまま

                    fhconvertType = data;
                    settings = defaultOption;
                } else if(typeof(data) === 'object') {
                    //オプション付きで指定されている場合は、optionをextend

                    fhconvertType = data.type;
                    settings = $.extend(defaultOption, data.option);
                }

                // hfconvertに渡す
                $this.val(FHConvert[fhconvertType]($this.val(), settings));
            };

            if(typeof(dataAttr) !== 'undefined') {
                if(Object.prototype.toString.call(dataAttr) !== "[object Array]") {
                    converter(dataAttr);
                } else {
                    for(var i = 0, l = dataAttr.length; i < l; i++) {
                        converter(dataAttr[i]);
                    }
                }
            } else {
                return true;
            }
            
        });
        return this;
    };
}(jQuery));
