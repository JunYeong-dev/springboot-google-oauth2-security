login = {
    init : function() {
        let socials = document.getElementsByClassName("btn_social");
        for (let i = 0; i < socials.length; i++) {
            socials[i].addEventListener('click', function() {
                let socialType = this.getAttribute("data-social");
                location.href = "/oauth2/authorization/" + socialType;
            }, false)
        }
    }
};

login.init();