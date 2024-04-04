$(document).ready(function(){
    $.get("json/test_json.html", data => {
        if (!data){
            return;
        }

        var obj = jQuery.parseJSON(data);

        jQuery('<div>', {class: 'discordBackground'}).appendTo('.discord');
        jQuery('<div>', {class: 'discordMessages'}).appendTo('.discordBackground');
        
        count = 0;
        $.each(obj, function(index, value) {
            window.console&&console.log(value);
            if (index % 6 == 0){ /* DONT CHANGE */
                count  += 1;
                jQuery('<div>', {class: `discordColumn discordSingularColumn${count}`}).appendTo('.discordMessages');
            }
            
            for(var i = 0; i < 3; i++){
                jQuery('<div>', {class: `discord_section discord_sect${count}`}).appendTo(`.discordSingularColumn${count}`);
            }

            jQuery('<div>', {class: `discordBox discordboxbox${index}`}).appendTo(`.discord_sect${count}`);
            jQuery('<div>', {class: `discordImage discordimg${index}`}).appendTo(`.discordboxbox${index}`);
            $(`.discordimg${index}`).append(`<img src = "${value.avatar}">`);

            jQuery('<div>', {class: `discordText discordmessage${index}`}).appendTo(`.discordboxbox${index}`);
            $(`.discordmessage${index}`).append(`<h5>${value.name}</h5>`);
            $(`.discordmessage${index}`).append(`<h1>Today at ${value.date[1]}</h1>`);
            $(`.discordmessage${index}`).append(`<h2>${value.audioString}</h2>`);
        });
    });

    $.get('json/guild_connections.html', connect_data => {
        if (!connect_data){
            return;
        }

        var guild_obj = jQuery.parseJSON(connect_data);
        
        jQuery('<div>', {class: 'guildBackground'}).appendTo('.guild_connect');

        $.each(guild_obj, function(index, guild_value) {
            if (guild_value.guild_count) {
                jQuery('<div>', {class: 'guildCount'}).appendTo('.guildBackground');
                $('.guildCount').append(`<h1>Guilds</br>${guild_value.guild_count}</h1>`);
                return
            }
        });
    });
    
    $('.navbar').load('project_boiler.html');

    for(var i = 1; i < 20; i++){
        $('.homebackdrop').append(`<div class = "titleintro introdiv${i}" ></div>`); 
        $(`.introdiv${i}`).css("animation-delay", `${i * 0.1 + 1}s`, "z-index", `${i}`);
    }
});

$(window).on("load", function(){

    /* --------------------- way too laggy ------------------------ */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('showpath');
            }
        });
    });

    /* --------------------- ^^^^^^^^^^^^ ------------------------ */

    /* Remove observer after animation is completed */

    const svgObject = document.querySelectorAll('.svgdesmos');
    svgObject.forEach((svgQuery) => {
        const svgelm = svgQuery.contentDocument.querySelectorAll('path');
        var noPaths = svgelm.length;
        var count = 0;
        svgelm.forEach((path) => {
            const length = path.getTotalLength();
            path.style["stroke-dashoffset"] = `${length}px`;
            path.style["stroke-dasharray"] = `${length}px`;
            path.style["animation-delay"] = `${count / (noPaths)}s`;
            count += 1;
            observer.observe(path);
        });
    });

    const desmosButton = document.getElementById('svgdesmosbutton');
    observer.observe(desmosButton);
});




// const searchInput = document.getElementById("searchInput");

// // store name elements in array-like object
// const namesFromDOM = document.querySelectorAll("body");

// // listen for user events
// searchInput.addEventListener("keyup", (event) => {
//     const { value } = event.target;
    
//     // get user search input converted to lowercase
//     const searchQuery = value.toLowerCase();
    
//     for (const nameElement of namesFromDOM) {
//         // store name text and convert to lowercase
//         let name = nameElement.textContent.toLowerCase();
        
//         // compare current name to search input
//         if (name.includes(searchQuery)) {
//             // found name matching search, display it
//             nameElement.style.display = "block";
//         } else {
//             // no match, don't display name
//             nameElement.style.display = "none";
//         }
//     }
// });

































function showmenu(){
    document.documentElement.style.setProperty("--navigation_width", "100%");
    document.documentElement.style.setProperty("--navigation_z", "3");
}
function hidemenu(){
    document.documentElement.style.setProperty("--navigation_width", "0");
    document.documentElement.style.setProperty("--navigation_z", "1");
}

function lightmode(){
    document.documentElement.style.setProperty("--discord_theme_change", "#000");
    document.documentElement.style.setProperty("--discord_hover", "#0046f7");
    document.documentElement.style.setProperty("--discord_sun", "none");
    document.documentElement.style.setProperty("--discord_moon", "block");
    document.documentElement.style.setProperty("--discord_bg", "#e4e4e4");
    document.documentElement.style.setProperty("--discord_box", "#ffffff");
    document.documentElement.style.setProperty("--discord_text", "#000000");
    document.documentElement.style.setProperty("--discord_time", "#353535");
    document.documentElement.style.setProperty("--discord_title", "#ffbb00");
}
function darkmode(){
    document.documentElement.style.setProperty("--discord_theme_change", "#fff");
    document.documentElement.style.setProperty("--discord_hover", "#ffbb00");
    document.documentElement.style.setProperty("--discord_sun", "block");
    document.documentElement.style.setProperty("--discord_moon", "none");
    document.documentElement.style.setProperty("--discord_bg", "#282b30");
    document.documentElement.style.setProperty("--discord_box", "#36393e");
    document.documentElement.style.setProperty("--discord_text", "#fff");
    document.documentElement.style.setProperty("--discord_time", "#fff");
    document.documentElement.style.setProperty("--discord_title", "#ffbb00");
}






