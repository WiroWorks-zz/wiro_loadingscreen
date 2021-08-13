$(document).ready(function () {

    var config = {
        'servername': "OFFENSİVE ROLEPLAY",
        'link': "discord.gg/DuZ3t7pEFD",
        'soundname': "sick",
        'soundval': 0.02,

        'haberler': [
            { img: 'img/haber/photo2.png', title: 'Haber 1', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque hic, minus impedit corporis dolores totam?' },
            { img: '', title: 'Resimsiz haber', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque hic, minus impedit corporis dolores totam?' },
            { img: 'img/haber/photo1.jpg', title: 'Haber 2', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque hic, minus impedit corporis dolores totam?' },
            { img: '', title: 'Resimsiz haber', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque hic, minus impedit corporis dolores totam?' },
            { img: 'img/haber/photo2.png', title: 'Haber 3', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque hic, minus impedit corporis dolores totam?' },
        ],

        'kurallar': [
            {
                title: "1. Kural",
                text: [
                    { txt: "1.1 kural kural kural kural kural kural kural kural " },
                    { txt: "1.2 kural kural kural kural kural kural kural kural kural kural kural kural kural  " },
                    { txt: "1.3 kural kural kural kural kural kural kural kural kural kural kural kural kural kural kural kural " }
                ]
            },
            {
                title: "2. Kural",
                text: [
                    { txt: "2.1 kural kural kural kural kural kural kural kural " },
                    { txt: "2.2 kural kural kural kural kural kural kural kural kural kural kural kural kural  " },
                    { txt: "2.3 kural kural kural kural kural kural kural kural kural kural kural kural kural kural kural kural " }
                ]
            },
            {
                title: "3. Kural",
                text: [
                    { txt: "3.1 kural kural kural kural kural kural kural kural " },
                    { txt: "3.2 kural kural kural kural kural kural kural kural kural kural kural kural kural  " },
                    { txt: "3.3 kural kural kural kural kural kural kural kural kural kural kural kural kural kural kural kural " }
                ]
            },
            {
                title: "4. Kural",
                text: [
                    { txt: "4.1 kural kural kural kural kural kural kural kural " },
                    { txt: "4.2 kural kural kural kural kural kural kural kural kural kural kural kural kural  " },
                    { txt: "4.3 kural kural kural kural kural kural kural kural kural kural kural kural kural kural kural kural " }
                ]
            },
            {
                title: "5. Kural",
                text: [
                    { txt: "5.1 kural kural kural kural kural kural kural kural " },
                    { txt: "5.2 kural kural kural kural kural kural kural kural kural kural kural kural kural  " },
                    { txt: "5.3 kural kural kural kural kural kural kural kural kural kural kural kural kural kural kural kural " }
                ]
            }
        ],

        'iletişim': [
            { img: 'img/iletisim/helex.jpg', dcname: 'Helex01#0001', level: 'Founder', desc: '' },
            { img: 'img/iletisim/wirologo.jpg', dcname: 'Wiro#9217', level: 'Developer', desc: 'Not the best but pretty good' },
            { img: 'img/iletisim/omr.png', dcname: 'promerpro♮#0002', level: 'Head Admin', desc: '' },
            { img: 'img/iletisim/orkn.jpg', dcname: '!Çikapu04🔥#003', level: 'Admin', desc: '' }
        ]

    }

    $("ol").on("click", function () {
        var acilacak = $(this).attr("title");
        let buol = $(this)
        if ($(this).hasClass("header-menu-selected")) {
            console.log("zaaten bunda")
        }
        else {
            $(".inside-panel").each(function () {
                if ($(this).css("display") == "block") {
                    $(this).hide();
                }
            });
            $("#" + acilacak).show();
            $(".header-menu-selected").removeClass("header-menu-selected")
            $(this).addClass("header-menu-selected")
        }
    });

    mediumZoom('.loverimg', {
        margin: 50,
        background: '#000',
    });

    var vid = document.getElementById("leson");

    vid.volume = config['soundval']

    $('#sesval').on('input', function () {
        console.log($(this).val() / 100)
        vid.volume = $(this).val() / 100
    });

    function RefreshConfig() {
        $("h3").text(config['servername'])
        $("h1").text(config['servername'])
        $("h2").text(config['link'])
        $(".audiotxt").text(config['soundname'])

        // TÜM HABERLERİ EKLER

        for (var i = 0; i < Object.keys(config['haberler']).length; i++) {
            if (config['haberler'][i].img == '') {
                haberekle('<div class="news-without-image"><h5>' + config['haberler'][i].title + '</h5> <br><br><br><span class="under-title">' + config['haberler'][i].desc + '</span></div>')
            }
            else {
                resimhaberekle('<div class="news-with-image"><img class="news-image" src="' + config['haberler'][i].img + '"><h5>' + config['haberler'][i].title + '</h5> <br><br><br><span class="under-title">' + config['haberler'][i].desc + '</span></div>')
            }
        }

        // TÜM HABERLERİ EKLER



        // TÜM KURALLARI EKLER

        for (var i = 0; i < Object.keys(config['kurallar']).length; i++) {
            var yapiliyor = '<h6>' + config['kurallar'][i].title + '</h6>'
            for (var v = 0; v < Object.keys(config['kurallar'][i].text).length; v++) {
                yapiliyor = yapiliyor + '<span class="under-title">' + config['kurallar'][i].text[v].txt + '</span>'
            }
            kuralekle(yapiliyor)
        }

        // TÜM KURALLARI EKLER



        // TÜM İLETİŞİMLERİ EKLER

        for (var i = 0; i < Object.keys(config['iletişim']).length; i++) {
            iletisimekle('<div class="kadro-uye-holder"><img class="uye-logo" src="' + config['iletişim'][i].img + '"><div class="uye-dc-name">' + config['iletişim'][i].dcname + '</div><div class="uye-dc-yetki">' + config['iletişim'][i].level + '</div> <br><span class="uye-mesaj">' + config['iletişim'][i].desc + '</span></div>')
        }

        // TÜM İLETİŞİMLERİ EKLER

    }

    function resimhaberekle(kod) {
        $(".left-news-div").html($.parseHTML($(".left-news-div").html() + kod))
    }

    function haberekle(kod) {
        $(".left-news-div").html($.parseHTML($(".left-news-div").html() + kod))
    }

    function kuralekle(kod) {
        $(".left-rules-div").html($.parseHTML($(".left-rules-div").html() + kod))
    }

    function iletisimekle(kod) {
        $(".left-uye-div").html($.parseHTML($(".left-uye-div").html() + kod))
    }

    RefreshConfig()

    let mouseCursor = document.querySelector(".cursor");

    window.addEventListener('mousemove', cursor);

    function cursor(e) {
        mouseCursor.style.top = e.pageY + 'px';
        mouseCursor.style.left = e.pageX + 'px';
    }

});