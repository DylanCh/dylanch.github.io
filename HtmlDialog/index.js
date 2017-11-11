/**
 * 
 * @param {Boolean} modal 
 * @param {Boolean} resizable 
 * @param {String} width 
 * @param {String} title 
 */
var dialogBox = function (modal,resizable,width,title){
    this.modal = modal;
    this.resizable = resizable;
    this.width = width;
    this.title = title;
};

(function($){
    function openTerms(event){
        try{
            $('#terms').dialog(new dialogBox(true,false,'500px','DISCLAIMER'));
        }
        catch(error){
            console.dir(error);
        }
    }

    $(document).ready(function(){
        $('#open_terms').click(openTerms);

        $('#iUnderstandBtn').click(function(e){
            $(e.target).closest('.ui-dialog-content').dialog('close'); 
        });
    });
})(jQuery);
