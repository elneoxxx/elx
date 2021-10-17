(function () {
    //If you want to include more images, add the link name and URL of the image in the array list below.
    let images_list = [{
        "url": "https://html-generator.com/uploads/images/2021/10/17/73111CPQ_QW2742.png",
        "name": "73111CPQ_QW2742.png",
        "link": ""
    }, {
        "url": "https://html-generator.com/uploads/images/2021/10/17/82897SUG_1X1XYR.png",
        "name": "82897SUG_1X1XYR.png",
        "link": ""
    }];
    let slider_id = document.querySelector("#hcg-slider-1");
    // append all images
    let dots_div = "";
    let images_div = "";
    for (let i = 0; i < images_list.length; i++) {
        // if no link without href="" tag
        let href = (images_list[i].link == "" ? "" : ' href="' + images_list[i].link + '"');
        images_div += '<a' + href + ' class="hcg-slides animated"' + (i === 0 ? ' style="display:block"' : '') + '>' + '<img src="' + images_list[i].url + '" alt="' + images_list[i].name + '">' + '</a>';
    }
    slider_id.querySelector(".hcg-slider-body").innerHTML = images_div;
    let slide_index = 0;
    let images = slider_id.querySelectorAll(".hcg-slides");

    function showSlides() {
        if (slide_index > images.length - 1) {
            slide_index = 0;
        }
        if (slide_index < 0) {
            slide_index = images.length - 1;
        }
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = "none";
            if (i == slide_index) {
                images[i].style.display = "block";
            }
        }
    }
    setInterval(function () {
        slide_index++;
        showSlides();
    }, 5000);
})();