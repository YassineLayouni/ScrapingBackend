# ScrapingBackend
* Tunisianet
  - Request exemple : http://localhost:9300/search/tunisianet?query=samsung tv&page=2&price=3000-5000
  - Query parameters : 
    - query (required)
    - page (optional)
    - price (optional) format is min_price - max_price
  - Response exemple :
  ```json
  {
    "site": "Tunisianet",
    "url": "https://www.tunisianet.com.tn/recherche?s=samsung+tv&prix=3000-5000&order=product.price.asc",
    "total_items": 3,
    "items_shown": 3,
    "current_page": 1,
    "total_pages": 1,
    "products": [
        {
            "name": "TV Samsung 55\" Q60B QLED 4K Smart TV Série 6 + Un abonnement 12 Mois OTT Pro Offert",
            "image": "https://www.tunisianet.com.tn/276859-home/tv-samsung-55-q60b-qled-4k-smart-tv-serie-6.jpg",
            "description": "TV Samsung 55\" Q60B QLED 4K Smart TV Série 6 - Résolution 3840 x 2160P - Système d’exploitation Tizen - Puissance en sortie (RMS) 20 W - Quantum HDR - Taux de rafraîchissement 50 Hz - 2x USB - 3x HDMI - Ethernet - Wifi - Wi-Fi Direct - Bluetooth 5.2 - 1x AV, 1x entrée composante (Y / Pb / Pr), 1x Sortie Audio - Tuner analogique - Auto Power Saving - ConnectShare - Game Motion Plus - Bixby - Dimensions avec support 1232.1 x 745.9 x 224 mm - Garantie 2 ans + Un abonnement 12 Mois OTT Pro Offert (OTT-12M)",
            "price_dt": "3 199,000 DT",
            "price": 3199,
            "has-discount": false,
            "price_before_discount": 3199,
            "in_stock": true,
            "url": "https://www.tunisianet.com.tn/vente-tv-samsung-led-tunisie/52396-tv-samsung-55-q60b-qled-4k-smart-tv-serie-6.html",
            "site": "Tunisianet",
            "manufacturer": "Samsung",
            "manufacturer_logo": "https://www.tunisianet.com.tn/img/m/12.jpg"
        },
        {
            "name": "TV Samsung 65\" AU7000 UHD 4k / Smart TV / Wifi",
            "image": "https://www.tunisianet.com.tn/221559-home/tv-samsung-65-au7000-uhd-4k-smart-tv-wifi-.jpg",
            "description": "TV Samsung 65\" UHD 4k AU7000 - Wifi - Résolution 3840 x 2160p - 1x USB - 3x HDMI - 1x RJ45 - Bluetooth - Processeur Crystal 4K - Type Haut Parleur 2CH - Technologie Hyper Real - HDR 10+ - OS Tizen™ - PurColor - UHD Dimming ,Partage d'écran Mobile vers TV - Dolby Digital Plus ,Tuner analogique - DVB -T2CS2 - Couleur Gris Titan - Garantie 2 ans\n\n\n",
            "price_dt": "3 499,000 DT",
            "price": 3499,
            "has-discount": false,
            "price_before_discount": 3499,
            "in_stock": true,
            "url": "https://www.tunisianet.com.tn/vente-tv-samsung-led-tunisie/52393-tv-samsung-65-au7000-uhd-4k-smart-tv-wifi-.html",
            "site": "Tunisianet",
            "manufacturer": "Samsung",
            "manufacturer_logo": "https://www.tunisianet.com.tn/img/m/12.jpg"
        },
        {
            "name": "TV Samsung 65 \" BU8000 Crystal UHD 4K Smart TV",
            "image": "https://www.tunisianet.com.tn/265222-home/tv-samsung-65-bu8000-crystal-uhd-4k-smart-tv.jpg",
            "description": "TV Samsung 65\" BU8000 Crystal UHD 4K - Wifi - Résolution 3840 x 2160p - 2x USB - 3x HDMI - 1x RJ45 - Bluetooth 5.2 - 1x sortie audio digital - Processeur Crystal 4K - Type Haut Parleur: 2CH - 20W - HDR 10+ - OS Tizen™ - Assistant Google, Bixby, Amazon Alexa intégrés - WiFi Direct - Auto Game Mode - Garantie 2 ans",
            "price_dt": "4 579,000 DT",
            "price": 4579,
            "has-discount": false,
            "price_before_discount": 4579,
            "in_stock": true,
            "url": "https://www.tunisianet.com.tn/vente-tv-samsung-led-tunisie/58425-tv-samsung-65-bu8000-crystal-uhd-4k-smart-tv.html",
            "site": "Tunisianet",
            "manufacturer": "Samsung",
            "manufacturer_logo": "https://www.tunisianet.com.tn/img/m/12.jpg"
        }
    ]
  }
  ```

* MyTek
  - Request exemple : http://localhost:9300/search/mytek?query=tv&page=2&price=1800-5000
  - Query parameters : 
    - query (required)
    - page (optional)
    - price (optional) format is min_price - max_price
  - Response exemple :
  
```json
  {
    "site": "MyTek",
    "url": "https://www.mytek.tn/catalogsearch/result/index/?p=2&price=1800-5000&q=tv",
    "items_shown": 25,
    "current_page": "2",
    "products": [
        {
            "name": "Tv TOSHIBA 50'' UHD 4K Android Smart(50U7950) + Abnmt 12mois",
            "image": "https://mk-media.mytek.tn/media/catalog/product/cache/4635b69058c0dccf0c8109f6ac6742cc/1/_/1_2076.jpg",
            "description": "Téléviseur TOSHIBA 50 UHD 4K SMART TV - Résolution: 3840 x 2160 pixels - Système d'exploitation: Android 9.0 - Moteur vidéo: MOTEUR 4K CEVO HDR - Luminosité: 460 cd / m² - Dolby Vision - Mouvement actif et résolution plus: AMR + 800 - Sortie haut-parleur: 12 W + 12 W - Filtrage de la source audio - Format audio: DBX / Dolby - Contrôle intelligent du rétroéclairage - Chromecast intégré - Connectivité: WiFi - Connecteurs: 1x USB 2.0, 3x HDMI, 1 x Rj45 - Dimensions: 1115 x 660 x 77 mm - Garantie: 3 ans\n+ Abonnement 12mois Gratuit\nFrais de Livraison 30 DT\nRetrait en Magasin ou Livraison  Gratuite *\n\n* Livraison  Gratuite Pour 1 seul colis ≤ 30 Kg",
            "price_dt": "1 845,000 DT",
            "price": 1845,
            "has-discount": true,
            "price_before_discount": 1979,
            "in_stock": true,
            "url": "https://www.mytek.tn/televiseur-toshiba-50-uhd-4k-android-smart-50u7950-abnmt-12mois-gratuit.html",
            "site": "MyTek",
            "manufacturer": "toshiba",
            "manufacturer_logo": "https://media.mytek.tn/media/wysiwyg/marque/toshiba.jpg"
        },
        {
            "name": "TV SAMSUNG 58'' Smart AU7000 Séries 7 UHD 4K + Abonnement 12mois",
            "image": "https://mk-media.mytek.tn/media/catalog/product/cache/4635b69058c0dccf0c8109f6ac6742cc/2/_/2_802.jpg",
            "description": "TV SAMSUNG 58 UHD 4K Smart TV Series 7 - Tuner analogique - Résolution: 3840 × 2160 pixels - Processeur: Crystal 4K - Design sans cadre - Plage Dynamique HDR 10+ - Audio: Dolby Digital Plus - Haut-Parleurs: 20 Watts - Type Haut Parleur 2CH - Technologie Hyper Real - Connectivité: Wi-Fi Direct, Bluetooth - Connecteurs: 3 x HDMI, 1 x USB, 1 x Ethernet, 1 x Entree RF, 1 x Sortie audio numérique - Garantie: 2 ans\n+ Abonnement 12mois Gratuit\nFrais de Livraison 30 DT\nRetrait en Magasin ou Livraison  Gratuite *\n\n* Livraison  Gratuite Pour 1 seul colis ≤ 30 Kg",
            "price_dt": "2 399,000 DT",
            "price": 2399,
            "has-discount": true,
            "price_before_discount": 2699,
            "in_stock": true,
            "url": "https://www.mytek.tn/televiseur-samsung-au7000-58-uhd-4k-smart-noir-abonnement-12mois-gratuit.html",
            "site": "MyTek",
            "manufacturer": "samsung",
            "manufacturer_logo": "https://media.mytek.tn/media/wysiwyg/marque/samsung.jpg"
        },
```
