const express = require("express");
const router = express.Router();
const axios = require("axios");
const cheerio = require('cheerio');

page = 1;
max_price = 0;

async function tunisianetData({
    query : query,
    page : page,
    price : price,
}){
    data = {}
    data["site"] = "Tunisianet"
    products = [];
    await axios.get(`https://www.tunisianet.com.tn/recherche?s=${query}&submit_search=&page=${page}&prix=${price}&order=product.price.asc`).then(function(html){
        $ = cheerio.load(html.data.rendered_products);
        data["url"] = html.data.current_url;
        data["total_items"] = html.data.pagination.total_items;
        data["items_shown"] = html.data.pagination.items_shown_to;
        data["current_page"] = html.data.pagination.current_page;
        data["total_pages"] = html.data.pagination.pages_count;
        //data["min_price"] = $(".from_display").contents().first().text();
        //data["max_price"] = $(".to_display").contents().first().text();
        product = {};
        $(".item-product").each((i,ele)=>{
            product["name"] = $(".product-title",ele).contents().first().text();
            product["image"] = $("img",ele).attr("src");
            product["description"] = html.data.products[i].description_short.replaceAll(/(<([^>]+)>)/ig,"")
            product["price_dt"] = $(".price",ele).contents().first().text();
            product["price"] = html.data.products[i].price_amount;
            product["has-discount"] = html.data.products[i].has_discount;
            product["price_before_discount"] = html.data.products[i].regular_price_amount;
            product["in_stock"] = $(".in-stock",ele).contents().first().text() == "En stock" ? true : false;
            product["url"] =  $(".product-title > a",ele).attr("href");
            product["site"] = "Tunisianet";
            product["manufacturer"] = html.data.products[i].manufacturer_name;
            product["manufacturer_logo"] = $(".manufacturer-logo",ele).attr("src");
            products.push(Object.assign({},product));
        })
        data["products"] = products;
    })
    return data;
}





async function myTekData({
    query : query,
    page : page,
    price : price,
}){
    data = {}
    data["site"] = "MyTek"
    products = [];
    await axios.get(`https://www.mytek.tn/catalogsearch/result/index/?p=${page}&price=${price}&q=${query}`).then(function(html){
        $ = cheerio.load(html.data);
        data["url"] = html.config.url;
        //data["total_items"] = $('.actions-toolbar div').contents().first().text().replaceAll("produits","");
        data["items_shown"] = 0;
        data["current_page"] = parseInt(page);
        //data["total_pages"] = html.data.pagination.pages_count;
        //data["min_price"] = $(".from_display").contents().first().text();
        //data["max_price"] = $(".to_display").contents().first().text();
        product = {};
        $(".item.product.product-item").each((i,ele)=>{
            data["items_shown"] = data["items_shown"] + 1;
            product["name"] = $(".product-item-link",ele).contents().first().text();
            product["image"] = $(".product-image-photo",ele).attr("src");
            product["description"] = $(".product.description.product-item-description",ele).contents().first().text();
            product["price_dt"] = $(".price",ele).contents().first().text();
            product["price"] = parseFloat($(".price",ele).contents().first().text().replaceAll("DT","").replaceAll(",",".").replaceAll(/\s/g,""));
            product["has-discount"] = $('.old-price',ele).length == 0 ? false : true;
            product["price_before_discount"] = product["has-discount"] ?  parseFloat($('.old-price .price',ele).contents().first().text().replaceAll("DT","").replaceAll(",",".").replaceAll(/\s/g,"")) : product["price"];
            product["in_stock"] = $('.stock',ele).contents().first().text() == "En stock" ? true : false;
            product["url"] =  $(".product-item-link",ele).attr("href");
            product["site"] = "MyTek";
            product["manufacturer"] = $(".testLp4x.prdtBILCta img",ele).attr("alt");
            product["manufacturer_logo"] = $(".testLp4x.prdtBILCta img",ele).attr("src");
            products.push(Object.assign({},product));
        })
        data["products"] = products;
    })
    return data;
}



router.get("/tunisianet",async (req,res)=>{
    if(!req.query.query){
        res.status(400).send({"message" : "Bad request, please specify the search query"});
        return;
    }

    res.send(await tunisianetData({
        query : req.query.query,
        page : req.query.page ?? 1,
        price : req.query.price ?? 0
    }));
});


router.get("/mytek",async (req,res)=>{
    if(!req.query.query){
        res.status(400).send({"message" : "Bad request, please specify the search query"});
        return;
    }
    res.send(await myTekData({
        query : req.query.query,
        page : req.query.page ?? 1,
        price : req.query.price ?? 0
    }));
});

module.exports = router
