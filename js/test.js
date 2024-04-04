$(document).ready(function(){
    $.get("json/test_json.html", data => {
        if (data){
            var obj = jQuery.parseJSON(data);

            jQuery('<div>', {class: 'discordBackground'}).appendTo('.discord');
            $(`.discordBackground`).append(`<i class="fa-regular fa-sun" onclick = "lightmode()"></i>`);
            $(`.discordBackground`).append(`<i class="fa-regular fa-moon" onclick = "darkmode()"></i>`);
            jQuery('<div>', {class: 'discordMessages'}).appendTo('.discordBackground');
            
            count = 0;
            $.each(obj, function(index, value) {
                window.console&&console.log(value);
                if (index % 6 == 0){
                    count  += 1;
                    jQuery('<div>', {class: `discordColumn discordSingularColumn${count}`}).appendTo('.discordMessages');
                }
                jQuery('<div>', {class: `discordBox discordboxbox${index}`}).appendTo(`.discordSingularColumn${count}`);
                jQuery('<div>', {class: `discordImage discordimg${index}`}).appendTo(`.discordboxbox${index}`);
                $(`.discordimg${index}`).append(`<img src = "${value.avatar}">`);

                jQuery('<div>', {class: `discordText discordmessage${index}`}).appendTo(`.discordboxbox${index}`);
                $(`.discordmessage${index}`).append(`<h5>${value.name}</h5>`);
                $(`.discordmessage${index}`).append(`<h1>Today at ${value.date[1]}</h1>`);
                $(`.discordmessage${index}`).append(`<h2>${value.audioString}</h2>`);
            });
        }

        // Scroll Animations (Done after the messages are loaded)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry);
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else{
                    entry.target.classList.remove('show');
                }
            });
        });3
    
        const hiddenElements = document.querySelectorAll(".hidden");
        hiddenElements.forEach((el) => observer.observe(el));
    });
});