'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "99fe169c3d5084357e5107dda9c4e717",
"/": "99fe169c3d5084357e5107dda9c4e717",
"website.json": "b1be9f553113c1a464ccf9fff018e694",
"main.dart.js": "a163a907256002dfb3804299cef854f6",
"clevertap_sw.js": "e05f45c298fa3d48e86b21cb70164f15",
"favicon.png": "e6000c9e445e5b759df41e760800e823",
"icons/Icon-192.png": "92a3a3c7414b3a0c7baf50e68330bdf5",
"icons/Icon-512.png": "e0e4a8cd0d74e6a9f3addfe4b447bf22",
"manifest.json": "1025150b8f8d518974e80950114ba7e7",
"assets/AssetManifest.json": "b352f6b2ad4f967d7c378efa20177b8b",
"assets/NOTICES": "6468e93a38aa1949ab639835deb91cd6",
"assets/FontManifest.json": "a069ca6980c9c942143f1d2390adf701",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/assets/images/tab_live_selected.png": "0f6c15d0c0002d83dc610f0cc44169bb",
"assets/assets/images/ic_google.png": "090fb3913b6456af36d3d6b71b93b8c0",
"assets/assets/images/add.png": "894b8dc3a54f59bd6958f786b41ac3d9",
"assets/assets/images/calendar_today.png": "9c345d9b76a2f3ee726689f552d4fc6a",
"assets/assets/images/ic_score_pkick_fail.png": "6f86f46b2763db7aaf3246c6922ed3a7",
"assets/assets/images/ic_no_found.png": "906a62ed5e756edf4168ad5c06d54457",
"assets/assets/images/bg_splash.png": "8f41e8a622e4a9a0cabc57fc0b00d251",
"assets/assets/images/ic_card_ticket_detail.png": "8a80131df86dd701df158b16e20031c5",
"assets/assets/images/ic_fav_star_unselected_gray.png": "941a784645543c063b1f520606b5a5ba",
"assets/assets/images/ic_profile_bookmark.png": "e17fd72cb95ac2355e075043898a28ca",
"assets/assets/images/keyboard_arrow_down.png": "3643a47a173b2262c14849f8ead094bb",
"assets/assets/images/bg_favorite.png": "9c908b4bc8b01321f039e59af0c9f53d",
"assets/assets/images/ic_table.png": "27cf974300b0305a33aedf197f456569",
"assets/assets/images/ic_profile_noti.png": "ae5ddaafbe6d3d6d69175759028c2ba8",
"assets/assets/images/ic_profile_version.png": "20b756e8f1981c2c6ccdcd2f2b1cbf25",
"assets/assets/images/ic_refresh.png": "fa0e9f5c17918b8927fff5be5a8ba912",
"assets/assets/images/ic_score_yellow_card.png": "44070c797d9b60b96df114c1756d491c",
"assets/assets/images/ic_profile_bank.png": "41df50a76ac5a7e7436c14d952c29233",
"assets/assets/images/ic_language.png": "6aa41225207e811cec0e098469280cb4",
"assets/assets/images/ic_close.png": "e08a2d4188d1150155dac565db1517e5",
"assets/assets/images/ic_home_noti.png": "7d95b1c8deb8834ad6f2887c04e091f1",
"assets/assets/images/ic_info_red.png": "dc3db7968772da8f31eb81263b1f75e7",
"assets/assets/images/tab_stats_selected.png": "fb7df3ac891680d3cf1d8e058b8c992b",
"assets/assets/images/ic_fav_noti_select.png": "7ad5dcea494175755b3ac981f9d73454",
"assets/assets/images/ic_apple.png": "26ab3b1c6323644a287f2a5616d71765",
"assets/assets/images/bg_main_iph_x.png": "ad082f2cd6e40384d4ab6622e8c912bd",
"assets/assets/images/ic_qr.png": "397deb12de409cc729dc87842fe72f1f",
"assets/assets/images/tab_profile_unselect.png": "d0190f5d902e545deacdf8ba07659645",
"assets/assets/images/ic_profile_call.png": "ae1dc911de81d58c8429a7125625fb48",
"assets/assets/images/ic_score_red_card.png": "93642d8ecdb246f3071ce9ac6273f5f2",
"assets/assets/images/arrow_back.png": "c182f2e9deb6b66ec35caacf111dbff7",
"assets/assets/images/ic_score_goal.png": "051cae1742fc7bc5cee77477cf5e154e",
"assets/assets/images/ic_regis_success.png": "978bbba09851b0c0625dc646e18ed412",
"assets/assets/images/tab_feed_selected.png": "c52a263bca1d84ec776c8eeaaef117dc",
"assets/assets/images/ic_info.png": "2c9f71089467895e251284d9df8c1ab2",
"assets/assets/images/ic_skip_login.png": "d8f4be964b64a6310c4a85b63939639f",
"assets/assets/images/ic_empty_avatar.png": "1871862d87bb8037d953317fb4497189",
"assets/assets/images/ic_facebook.png": "16e7803757c90e8f7ce7d735405c43fd",
"assets/assets/images/ic_gg_logo_green.png": "6d4c0de25013047491e4a46ae8baaf03",
"assets/assets/images/ic_home_logo.png": "6d4c0de25013047491e4a46ae8baaf03",
"assets/assets/images/tab_fantasy_selected.png": "33614a73391a6093abbb095c1713abc0",
"assets/assets/images/ic_twitter.png": "53a078c2b790a66bfb286dce44991532",
"assets/assets/images/ic_fav_star_unselected.png": "5a1b4a2d6c39b9d369e7c561ec9f0f30",
"assets/assets/images/ic_team_mci.png": "87bd37d7cf5ce1377f1716afa969f09d",
"assets/assets/images/keyboard_arrow_up.png": "becdf5aa259acee317ace7f58b2d7ee2",
"assets/assets/images/ic_profile_favorite.png": "3a2c4147bfef858680885027e08893b0",
"assets/assets/images/bg_stadium.png": "93bb8718eef2cadfde2f3fd8c08ce273",
"assets/assets/images/gg_launcher_icon.png": "6d4c0de25013047491e4a46ae8baaf03",
"assets/assets/images/ic_clock.png": "6372cb1c8c923408dbde44f4636cf9ef",
"assets/assets/images/ic_fav_star_select.png": "4cac3feff3806d1a14935506368ba232",
"assets/assets/images/premier_edit.png": "01f6b9c8d6d576bfdf04d3cab6cac3ce",
"assets/assets/images/ic_score_red_direct.png": "4caec951abdff3ffa11d1255864c5240",
"assets/assets/images/ic_fav_noti_enable.png": "9ac0eadcebae44076c260c16873d5d5b",
"assets/assets/images/ic_line.png": "ec2e10e9a97c786f55608745f646dab9",
"assets/assets/images/ic_profile_logout.png": "b09b528c81151f3ea6b47a6cf367c1df",
"assets/assets/images/ic_card_ticket_detail_vip.png": "2dc0621099f358191a42d069b38f38ea",
"assets/assets/images/ic_league_premier.png": "7b4cb34cdf3263ef22892c1505be210f",
"assets/assets/images/tab_feed_unselect.png": "6ac7c2f8e2020223523d919b3dccd0f4",
"assets/assets/images/ic_home_search.png": "4b9a4b4135a4801759a04b61d286b956",
"assets/assets/images/ic_team_man.png": "7d4e25c50fcc9d087d0596e20e6bc287",
"assets/assets/images/tab_stats_unselect.png": "20dd7ff2b6d7282a147c5770e613b6dd",
"assets/assets/images/ic_fingerprint.png": "b476af3f4e056280930bd41c5879ea96",
"assets/assets/images/ic_clear_search.png": "b51b01403405bdf1aba4208b8b11e820",
"assets/assets/images/ic_fixtures.png": "907b9439423c75f1f3493970d3e9fe2b",
"assets/assets/images/tab_profile_selected.png": "d6df0a50ba08cb2e643421a423ec021d",
"assets/assets/images/ic_delete_pin.png": "8b8775ce1ef1a3ae4ae2bb1146e1df0f",
"assets/assets/images/ic_league_ligue1.png": "d82b422ecfaaafb205e4dddf6b2d0abd",
"assets/assets/images/ic_search.png": "83b063840b24d6f2c8ee967423a31804",
"assets/assets/images/tab_fantasy_unselect.png": "f70ab20f5968738f83a3cd813813b235",
"assets/assets/images/banner_ticket.png": "ccc015f76bcd0bfcbb2f3ea0311004af",
"assets/assets/images/test_bg_carousel_slider.png": "6d50bfd61b765b00854bb65fbb4fef4e",
"assets/assets/images/ic_regis_fail.png": "20e727573e7acbd52dadf0c0ac108d59",
"assets/assets/images/bg_favorite_search.png": "7799c07b45a0a8803dec51ebdbe07279",
"assets/assets/images/ic_transfer_player.png": "c572e05dbe5c592139f585c4082f4bc3",
"assets/assets/images/remove.png": "3f44a37ea55c5bd7ee5d7944310986a7",
"assets/assets/images/bg_ticket_vip.png": "20a1b0b2a14bcc0bf6d5d70cd2117ec6",
"assets/assets/images/ic_league_seriea.png": "65ac2cdcf96f8e911615c81009f19c03",
"assets/assets/images/camera_alt.png": "3e6cda0146414694e80875a260eb5d34",
"assets/assets/images/ic_face_id.png": "7e26ad527a76a6ddfdf4dae4aae9a1f9",
"assets/assets/images/ic_league_bundesliga.png": "bf9cc0d2e20eeb85071876c8ff4fb985",
"assets/assets/images/ic_profile_rule.png": "1ffeec6f44691efd17f58afab64fc140",
"assets/assets/images/gg_launcher_icon_round.png": "6d4c0de25013047491e4a46ae8baaf03",
"assets/assets/images/keyboard_arrow_right.png": "8310d210c3564fd417284bb67b080e76",
"assets/assets/images/edit.png": "085a22b7f68467cd432d96a10c371b9b",
"assets/assets/images/ic_remove_save.png": "ebc1e5366b2ecfc3dff1c56dae5384a4",
"assets/assets/images/bg_ticket.png": "f1e30b08104c3ebb317122748370f844",
"assets/assets/images/ic_info_yellow.png": "2d5c3122a2c6202702abc7cb77ad679e",
"assets/assets/images/ic_fav_noti_unselected.png": "7c5760d1a35852eca853afa3eeba8c9d",
"assets/assets/images/tab_live_unselect.png": "716a64d31bd08441cb34e9834c29f3ce",
"assets/assets/images/ic_cup.png": "e7fc5683c990fa00e80906e90f1c3111",
"assets/assets/images/ic_profile_myprofile.png": "f03b47cd98f9ebc8ce85e212e4fc1e9d",
"assets/assets/images/ic_league_laliga.png": "d627e482f3d02db0c07c2134ffc4b0ef",
"assets/assets/images/ic_calendar_inactive.png": "dee82b74a572d021ae717a43dc8b4aff",
"assets/assets/images/anfield.png": "9952c54a878e15818cdbba01509656f5",
"assets/assets/images/logo_gg_loginpin.png": "6d4c0de25013047491e4a46ae8baaf03",
"assets/assets/images/ic_profile_term_con.png": "3145b73790c8a09decbee3795bf6c1e7",
"assets/assets/images/ic_score_pkick_success.png": "7ae026b19f662160f8849aeaf4cecbbc",
"assets/assets/images/ic_profile_subscription.png": "0a9d52ec7ced2bb2dd06827a354abf32",
"assets/assets/images/ic_calendar_active.png": "d013c3161f69f39266468bc4719e8594",
"assets/assets/images/ic_no_internet.png": "a8b0211d7447f6d17cafb5fa6887ea06",
"assets/assets/images/keyboard_arrow_left.png": "6e68629ad10bab9c00148116c78bb7b4",
"assets/assets/stub/favleague.json": "e60193ff02e6b4f1b718ca627a76405a",
"assets/assets/stub/user_info.json": "2c2df6f8198b28b65a6cb5315d3e109b",
"assets/assets/stub/payment_test.html": "30585bf18301b8b3b9895b43580868ed",
"assets/assets/stub/upload_image.json": "ebbf7e0d54fed246c60aaa454378a71b",
"assets/assets/stub/footballer.json": "8e6c1609b365940df24b340c108206d7",
"assets/assets/stub/favteam.json": "48f4e02a33b75eec6075148127beab9b",
"assets/assets/stub/award.json": "4725bad7f65a3be1cb2e5e4cddc46c7a",
"assets/assets/stub/ticket.json": "d258ee80f20e24269c96ae9083632779",
"assets/assets/stub/login.json": "a9d4dd84ef91614e369f44f677facaf3",
"assets/assets/stub/register.json": "b2505dfe0b2d4e069e0b9ccad97a7e2c",
"assets/assets/stub/put_ticket.json": "1974eea0f529462dbfb6eb16af2bbf70",
"assets/assets/stub/get_footballer.json": "372b149e72c13c3930b2164c7dcbb0a6",
"assets/assets/stub/reset_password.json": "c35b6c76a4bcd95b144cb00e506a9770",
"assets/assets/stub/update_user_info.json": "b2505dfe0b2d4e069e0b9ccad97a7e2c",
"assets/assets/stub/reward_book_bank.json": "91d3eeb0f33af1cf4a59c5588d661fc7",
"assets/assets/stub/leaderboard_my_team.json": "5b06dd3376e44971a5d0f6a7e198925c",
"assets/assets/stub/forgot_password.json": "c35b6c76a4bcd95b144cb00e506a9770",
"assets/assets/i18n/en.json": "ffd134aa52e35b8ffd4de3b50ffeeb3f",
"assets/assets/i18n/th.json": "db0fc3ce1d813169cbb1cf62779603e9",
"assets/assets/fonts/Kanit-SemiBold.ttf": "6e8be5354bf1c8cb24f8347e0d828bf3",
"assets/assets/fonts/Kanit-Regular.ttf": "69dd78105e79a1183495683d5a4f8609",
"assets/assets/images-test/Logo/Logo_Juventus.png": "9ac50fa3391a87210302600b071e0967",
"assets/assets/images-test/Logo/Logo_Barcelona.png": "6b9cff049b6bd52584d0ba209a068111",
"assets/assets/images-test/Logo/Logo_Olympique.png": "89d129768003afa6f92246b1ca621499",
"assets/assets/images-test/Logo/SerieA.png": "30b9d58c443e591ca47e908d0c61a8fb",
"assets/assets/images-test/Logo/Ligue1.png": "5c45d8ce4a5dd9e33b77fabdfdfb279b",
"assets/assets/images-test/Logo/Logo_Paris.png": "da621b141073488d6674512aa6ffcaf5",
"assets/assets/images-test/Logo/Laliga.png": "79d2735312a7d565834315a0f7e0a54a",
"assets/assets/images-test/Logo/Logo_Fiorentina.png": "f1c93649d1e0fac52d69be8acecbf850",
"assets/assets/images-test/Logo/Logo_Arsenal.png": "5d2900a2e8537efa96da912414465053",
"assets/assets/images-test/Logo/AllLeague.png": "124def31e60bd2a1c4c03e28d3ca9f98",
"assets/assets/images-test/Logo/Logo_Everton.png": "f4eb2104acd2d6e855424ab4e2b40435",
"assets/assets/images-test/Logo/Logo_Borussia.png": "92e195f984eeb313e46eb2de9566587b",
"assets/assets/images-test/Logo/PremierLeague.png": "2c4019d1c6e66c2461e1aba510cb9f27",
"assets/assets/images-test/Logo/Logo_Liverpool.png": "ed44b1a807de366926f052b6305187db",
"assets/assets/images-test/Logo/BundesLiga.png": "1e4792dc62fbc07e60c1efea4c6d3999",
"assets/assets/images-test/Shirt/ChelseaGK.png": "050b8351cb462e36185c1792ef02d7a4",
"assets/assets/images-test/Shirt/ManchesterUnited.png": "7fb9e36022add1c702b7168bb4666457",
"assets/assets/images-test/Shirt/AstonVillaGK.png": "faee23f195b4b474f87b9ff47ab6ced9",
"assets/assets/images-test/Shirt/SheffieldUnitedGK.png": "8d48b6bb0fe4cb0b655ee78ab7529b8b",
"assets/assets/images-test/Shirt/EvertonGK.png": "7e18e2d76eb61bb7e3a460e54f47bb10",
"assets/assets/images-test/Shirt/NorwichCity.png": "0f53503d74c4bc6f846980d8c135bbd9",
"assets/assets/images-test/Shirt/AFCBournemouthGK.png": "3fb7298fd432cad79f57fd45277781dd",
"assets/assets/images-test/Shirt/SouthamptonGK.png": "9dd9dd87da24bb3ca0e075cf31ccb925",
"assets/assets/images-test/Shirt/Everton.png": "4670de4f63f2faaae2653c0d26e6e2d2",
"assets/assets/images-test/Shirt/NewcastleUnited.png": "18e344d1f22092db38a3ce727fe3a1c3",
"assets/assets/images-test/Shirt/WatfordGK.png": "0110e5f1dc80ab899500fa299910da5c",
"assets/assets/images-test/Shirt/Arsenal.png": "35692a55102a3dd41db8abc89840ae03",
"assets/assets/images-test/Shirt/TottenhamHotspur.png": "68621d4bb7ed782415b4832fb857c3fa",
"assets/assets/images-test/Shirt/Watford.png": "2d735cdcee22d3edf2c483845109eaa2",
"assets/assets/images-test/Shirt/Brighton.png": "7901a9edd4ba9a277f505d1f42398daa",
"assets/assets/images-test/Shirt/BrightonGK.png": "8b53082319275b5462e3f59280089d39",
"assets/assets/images-test/Shirt/WestHamUnited.png": "a6d9ebea1b8a8a85f8df71e8a14b8137",
"assets/assets/images-test/Shirt/AFCBournemouth.png": "8b81ba9537123dd0c02d6233398f9156",
"assets/assets/images-test/Shirt/BurnleyGK.png": "cbedc6347f3ccf52b2251085eea02cae",
"assets/assets/images-test/Shirt/ManchesterUnitedGK.png": "3f0aa9936299c178c81df2ed5eec688e",
"assets/assets/images-test/Shirt/ManchesterCity.png": "33c9b3c27f09e8f3b2b8307814307696",
"assets/assets/images-test/Shirt/WolverhamptonGK.png": "007a1a6da333c074241da9945d56806d",
"assets/assets/images-test/Shirt/ManchesterCityGK.png": "87439162a3d9ac7c2087786ee476e3d9",
"assets/assets/images-test/Shirt/LeicesterCityGK.png": "e259c3d300799a29107af2fa659645e4",
"assets/assets/images-test/Shirt/Southampton.png": "c562b1532edfb554bc8f94988772842b",
"assets/assets/images-test/Shirt/LeicesterCity.png": "95d293ee8e85dadfb26f792d44c5893c",
"assets/assets/images-test/Shirt/ic_no_team.png": "22c854e71e9bc1db96b3f1abbc58fae3",
"assets/assets/images-test/Shirt/Liverpool.png": "612d02e0bab87c53d95d76089b7acb61",
"assets/assets/images-test/Shirt/ic_captain.png": "4af6194d1bd4d91420994cbfe7b4f8ed",
"assets/assets/images-test/Shirt/NewcastleUnitedGK.png": "5b6db6fe55ca9f1579aa14f2ee8dabce",
"assets/assets/images-test/Shirt/ic_plan.png": "974caf33ef41879f17c7c7a206f4f9ad",
"assets/assets/images-test/Shirt/Wolverhampton.png": "1eb12d9cd49cef17bff26630be8d7560",
"assets/assets/images-test/Shirt/Chelsea.png": "1c19fde8dbf945f6af9f65b46b8f6d37",
"assets/assets/images-test/Shirt/ic_add_team.png": "8e680de02fed5c727028da560ffbe6e8",
"assets/assets/images-test/Shirt/NorwichCityGK.png": "6fd4b99c719898bc6f2e13e437bb6f05",
"assets/assets/images-test/Shirt/CrystalPalaceGK.png": "176272e94c49126016051aa425557b0e",
"assets/assets/images-test/Shirt/SheffieldUnited.png": "18d6d4ec8b58f90cee3f38872a45525a",
"assets/assets/images-test/Shirt/ArsenalGK.png": "0061ff48a16837d3437c2f660ac2baf1",
"assets/assets/images-test/Shirt/AstonVilla.png": "c15932486e25c66c0fe111bf2154307b",
"assets/assets/images-test/Shirt/LiverpoolGK.png": "23ba88e7b0a1c0f3efc7efb6303163ee",
"assets/assets/images-test/Shirt/CrystalPalace.png": "121eb5090a670bc4c169db6ad34cda6d",
"assets/assets/images-test/Shirt/TottenhamHotspurGK.png": "10240f85e678344758e54525bebb434f",
"assets/assets/images-test/Shirt/WestHamUnitedGK.png": "aaafe2d809be8c01e816b799ccda8f35",
"assets/assets/images-test/Shirt/Burnley.png": "27cd66d429690768dccd0adef5a6554a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a 'reload' param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
