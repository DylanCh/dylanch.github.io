'use strict';
(function($){
    const url = '/getScore';
    
    $(function(){
        const loadScore = function(event){
            event.preventDefault();
            $.ajax(url,{
                crossDomain: true,
                headers:{
                    'content-type': 'application/json'
                }
            }).done(data=>{
                console.log(data);
                $('#superbowlContainer_superbowlContainer_scores_ne').text(data.patriots);
                $('#superbowlContainer_superbowlContainer_scores_philly').text(data.eagles);
                $('#superbowlContainer_scores_status').html(`Status: ${data.status}`);
            });
        };

        window.onload =loadScore;
        $('#getScoreBtn').click(loadScore);
    });
})(jQuery);
