function Feature() {}
Feature.prototype = {
    init: function() {
        this.mobileSwitch();
    },
    mobileSwitch: function() {
        var mobile_menu = $(".mobile-toggle");
        var con_box= $(".content-article");
        var ifs = 1;
        mobile_menu.on("touchstart", function(){
            if(ifs){
                con_box.css('overflow','hidden');
                con_box.animate({
                    left: '250px'
                });
                ifs = 0;
            }else{
                con_box.css('overflow','visible');
                con_box.animate({
                    left: '0px'
                });
                ifs = 1;
            }
        });
    }
}