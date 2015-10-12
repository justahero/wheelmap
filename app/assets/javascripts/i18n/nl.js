I18n.translations || (I18n.translations = {});
I18n.translations["nl"] = {"date":{"formats":{"default":"%d-%m-%Y","short":"%b %d","long":"%B %d, %Y"},"day_names":{"0":"Zondag","1":"Maandag","2":"Dinsdag","3":"Woensdag","4":"Donderdag","5":"Vrijdag","6":"Zaterdag"},"abbr_day_names":{"0":"Zon","1":"Maa","2":"Din","3":"Woe","4":"Don","5":"Vri","6":"Zat"},"month_names":{"1":"Januari","10":"September","11":"October","12":"November","13":"December","2":"Febuari","3":"Maart","4":"April","5":"Mei","6":"Juni","7":"Juli","9":"Augustus"},"abbr_month_names":{"1":"Jan","10":"Sep","11":"Oct","12":"Nov","13":"Dec","2":"Feb","3":"Maa","4":"Apr","5":"Mei","6":"Jun","7":"Jul","9":"Aug"},"order":{"0":"jaar","1":"maand","2":"dag"}},"time":{"formats":{"default":"%a %d %b %Y %H:%M:%S %Z","short":"%d %b %H:%M","long":"%d %B %Y %H:%M"},"am":"ben","pm":"s middags"},"support":{"array":{"words_connector":", ","two_words_connector":"en","last_word_connector":"en","sentence_connector":"en","skip_last_comma":true},"select":{"prompt":"Alsjeblieft kies"}},"errors":{"format":"%{attribute} %{message}","messages":{"inclusion":"niet geldig waard","exclusion":"is gereserveerd","invalid":"niet geldig","confirmation":"Past niet bij de bevestiging","accepted":"Moet geaccepteerd worden.","empty":"Moet ingevlud worden","blank":"Moet ingevuld worden","too_long":"is te lang (niet meer dan %{count} letters)\n","too_short":"is te kort (niet minder dan %{count} letters)\n","wrong_length":"is de foute lengte (moet %{count} letters zijn)\n","not_a_number":"is geen numer","not_an_integer":"moet een gehele getal zijn","greater_than":"moet groter dan %{count} zijn","greater_than_or_equal_to":"Moet groter of gelijk zijn dan %{count}","equal_to":"Moet precies %{count} zijn","less_than":"moet minder zijn dan %{count}","less_than_or_equal_to":"moet minder zijn dan of gelijk zijn met %{count}","odd":"moet oneven zijn","even":"moet gelijk zijn","carrierwave_processing_error":"failed to be processed","carrierwave_integrity_error":"is not of an allowed file type","carrierwave_download_error":"could not be downloaded","extension_white_list_error":"You are not allowed to upload %{extension} files, allowed types: %{allowed_types}","extension_black_list_error":"You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}","rmagick_processing_error":"Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}","mime_types_processing_error":"Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}","mini_magick_processing_error":"Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}","already_confirmed":"Was al bevestigd, alsjeblieft probeer in te loggen.","expired":"Is verlopen, alsjeblieft vraag een nieuwe aan","not_found":"niet gevonden","not_locked":"is niet geblokkeerd","not_saved":{"one":"Een fout verbied het opslaan van  %{resource}:","other":"%{count} fouten verbieden op te slaan %{resource}:"},"taken":"werd al volbracht","confirmation_period_expired":"needs to be confirmed within %{period}, please request a new one"},"models":{"node":{"website":{"invalid":"Website address is not valid."},"phone":{"invalid":"Het telefoonnummer is niet geldig. Het moet de volgende vorm hebben: +49 30 234567"}}},"dynamic_format":"%{message}","template":{"body":"Er waren problemen met de volgende velden:","header":{"one":"1 fout verbied dat %{model} opgeslagen te worden.","other":"%{count} fouten verbieden dit %{model} op te slaan"}}},"activerecord":{"errors":{"messages":{"taken":"wordt al gebruikt","record_invalid":"Controle faalde: %{errors}","accepted":"moet geaccepteerd worden","blank":"Kan niet leeg zijn","confirmation":"bevestiging past niet","empty":"kan niet leeg zijn","equal_to":"Moet gelijk zijn met %{count}","even":"Moet gelijk zijn","exclusion":"is gereserveerd","greater_than":"moet groter zijn dan %{count}","greater_than_or_equal_to":"moet groter zijn of gelijk met %{count}","inclusion":"is niet inbegrepen in de lijst","invalid":"is ongeldig","less_than":"moet minder zijn dan %{count}","less_than_or_equal_to":"moet minder dan of gelijk zijn met %{count}","not_a_number":"is geen nummer","not_equal_to":"must not be equal to %{count}","odd":"moet apart zijn","too_long":"is te lang (maximum is %{count} characters)","too_short":"is te kort (minimum is %{count} characters)","wrong_length":"lengte is fout (should be %{count} characters)"},"full_messages":{"format":"%{attribute} %{message}"},"models":{"user":{"attributes":{"email":{"blank":"Kan niet leeg zijn als het wachtwoord gegeven is. "},"privacy_policy":{"accepted":"moet geaccepteerd worden"},"terms":{"accepted":"moet geaccepteerd worden"}}},"user_session":{"email":"E-Mail adres","password":"Wachtwoord","remember_me":"Ingeloggd blijven"}},"template":{"body":"Er zijn problemen met de volgende velden:","header":{"one":"%{model} niet opgeslagen: 1 fout gevonden","other":"%{model} niet opgeslagen: %{count} fouten gevonden"}}},"attributes":{"user":{"first_name":"Geboortenaam","last_name":"Achternaam","privacy_policy":"Privacy policy / Voorwaarden","terms":"Termen"},"poi":{"name":"Naam","type":"Type","address":"Adres","website":"Website","phone":"Telefoon","note":"Note","address_street":"Straat","address_housenumber":"Housenumber","address_postcode":"Postcode","address_city":"Stad"}},"models":{"user":"Gebruiker"}},"number":{"format":{"separator":".","delimiter":",","precision":3,"significant":0,"strip_insignificant_zeros":0},"currency":{"format":{"format":"%u%n","unit":"$","separator":".","delimiter":",","precision":2,"significant":0,"strip_insignificant_zeros":0}},"percentage":{"format":{"delimiter":null}},"precision":{"format":{"delimiter":null}},"human":{"format":{"delimiter":null,"precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB"}},"decimal_units":{"format":"%n %u\n","units":{"unit":null,"thousand":"Duizend","million":"miljoen","billion":"Biljoen","trillion":"Triljoen","quadrillion":"Biljard"}}}},"datetime":{"distance_in_words":{"half_a_minute":"half minuut","less_than_x_seconds":{"one":"minder dan 1 seconde","other":"minder dan %{count} seconden"},"x_seconds":{"one":"1 seconde","other":"%{count} seconden"},"less_than_x_minutes":{"one":"minder dan een minuut","other":"minder dan %{count} minuten"},"x_minutes":{"one":"1 minuut","other":"%{count} minuten"},"about_x_hours":{"one":"ongeveer 1 uur","other":"ongeveer %{count} uren"},"x_days":{"one":"1 dag","other":"%{count} dagen"},"about_x_months":{"one":"ongeveer 1 maand","other":"ongeveer %{count} maanden"},"x_months":{"one":"1 maand","other":"%{count} maanden"},"about_x_years":{"one":"ongeveer 1 jaar","other":"ongeveer %{count} jaren"},"over_x_years":{"one":"voor 1 jaar","other":"voor %{count} jaren"},"almost_x_years":{"one":"bijna 1 jaar","other":"bijna %{count} jaren"}},"prompts":{"year":"Jaar","month":"maand","day":"Dag","hour":"uur","minute":"minuut","second":"Seconden"}},"helpers":{"select":{"prompt":"Kies alsjeblieft"},"submit":{"create":"Cre\u00eber %{model}","update":"update %{model}","submit":" %{model} opslaan"},"button":{"create":"Create %{model}","update":"Update %{model}","submit":"Save %{model}"},"page_entries_info":{"more_pages":{"display_entries":"Displaying %{entry_name} <b>%{first}&nbsp;-&nbsp;%{last}</b> of <b>%{total}</b> in total"},"one_page":{"display_entries":{"one":"Displaying <b>1</b> %{entry_name}","other":"Displaying <b>all %{count}</b> %{entry_name}","zero":"No %{entry_name} found"}}}},"flash":{"actions":{"create":{"notice":"%{resource_name} werd succesvol ingevoegd"},"update":{"notice":"%{resource_name} werd succesvol vernieuwed"},"destroy":{"notice":"%{resource_name} werd succesvol verwijderd","alert":"%{resource_name} kan niet verplaatst worden"}},"photos":{"destroy":{"notice":"Beeld werd succesvol verwijderd"}}},"meta_search":{"or":"or","predicates":{"equals":"%{attribute} equals","does_not_equal":"%{attribute} doesn't equal","contains":"%{attribute} contains","does_not_contain":"%{attribute} doesn't contain","starts_with":"%{attribute} starts with","does_not_start_with":"%{attribute} doesn't start with","ends_with":"%{attribute} ends with","does_not_end_with":"%{attribute} doesn't end with","greater_than":"%{attribute} greater than","less_than":"%{attribute} less than","greater_than_or_equal_to":"%{attribute} greater than or equal to","less_than_or_equal_to":"%{attribute} less than or equal to","in":"%{attribute} is one of","not_in":"%{attribute} isn't one of","is_true":"%{attribute} is true","is_false":"%{attribute} is false","is_present":"%{attribute} is present","is_blank":"%{attribute} is blank","is_null":"%{attribute} is null","is_not_null":"%{attribute} isn't null"}},"views":{"pagination":{"first":"&laquo; First","last":"Last &raquo;","next":"Next &rsaquo;","previous":"&lsaquo; Prev","truncate":"&hellip;"}},"active_admin":{"dashboard":"Dashboard","dashboard_welcome":{"welcome":"Welkom bij Active Admin. Dit is de standaard dashboard pagina","call_to_action":"Pas je eigen dashboard aan in het bestand 'app/admin/dashboard.rb'"},"view":"Bekijk","edit":"Wijzig","delete":"Verwijder","delete_confirmation":"Weet je zeker dat je dit item wilt verwijderen?","new_model":"Nieuwe %{model}","create_model":"Nieuwe %{model}","edit_model":"Wijzig %{model}","update_model":"Wijzig %{model}","delete_model":"Verwijder %{model}","details":"%{model} details","cancel":"Annuleren","empty":"Leeg","previous":"Vorige","next":"Volgende","download":"Download","has_many_new":"Voeg nieuwe %{model} toe","has_many_delete":"Verwijderen","filter":"Filter","clear_filters":"Clear Filters","search_field":"Search %{field}","equal_to":"Equal To","greater_than":"Greater Than","less_than":"Less Than","main_content":"Implementeer %{model}#main_content om de content weer te geven.","logout":"Uitloggen","powered_by":"Mogelijk gemaakt door %{active_admin} %{version}","sidebars":{"filters":"Filters"},"pagination":{"empty":"Geen %{model} gevonden","one":"Geeft <b>1</b> %{model} weer","one_page":"Geeft <b>%{n}</b> %{model} weer","multiple":"Geeft %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> van de <b>%{total}</b> weer","entry":{"one":"entry","other":"entries"},"multiple_without_total":"Geeft %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b>"},"any":"Alle","blank_slate":{"content":"Er zijn geen %{resource_name} gevonden.","link":"Maak aan"},"batch_actions":{"button_label":"Batch acties","delete_confirmation":"Weet je zeker dat je deze %{plural_model} wilt verwijderen? Er is geen undo.","succesfully_destroyed":{"one":"1 %{model} verwijderd.","other":"%{count} %{plural_model} verwijderd."},"selection_toggle_explanation":"(Toggle selectie)","link":"Maak aan","action_label":"%{title} geselecteerde","labels":{"destroy":"Verwijder"}},"comments":{"body":"Tekst","author":"Auteur","title":"Reactie","add":"Voeg commentaar toe","resource":"Resource","no_comments_yet":"Nog geen reacties.","title_content":"Reacties (%{count})","errors":{"empty_text":"De reactie is niet opgeslagen, de tekst was leeg."},"resource_type":"Resource Type","author_type":"Author Type"},"devise":{"login":{"title":"inloggen","remember_me":"Onthoud mij","submit":"inloggen"},"reset_password":{"title":"Wachtwoord vergeten?","submit":"Reset mijn wachtwoord vergeten"},"change_password":{"title":"Wijzig uw wachtwoord","submit":"Mijn wachtwoord wijzigen"},"links":{"sign_in":"Meld u aan","forgot_your_password":"Wachtwoord vergeten?","sign_in_with_omniauth_provider":"Log in met %{provider}"},"unlock":{"title":"Resend unlock instructions","submit":"Resend unlock instructions"}},"has_many_remove":"Verwijderen","filters":{"buttons":{"filter":"Filter","clear":"Maak Filters Ongedaan"},"predicates":{"contains":"Bevat","equals":"Gelijk aan","starts_with":"Begint met","ends_with":"Eindigt op","greater_than":"Groter dan","less_than":"Kleiner dan"}},"access_denied":{"message":"You are not authorized to perform this action."},"index_list":{"table":"Table","block":"List","grid":"Grid","blog":"Blog"}},"devise":{"confirmations":{"confirmed":"Jouw account is succesvol bevestigd. Je bent nu aangemeld.","link":"Heb je de bevestiging instructie niet ontvangen?","send_instructions":"Je zal een email met de instructie voor jouw account bevestiging ontvangen. Dat duurt maar een paar minuten.","send_paranoid_instructions":"Als je e-mail adres in onze databank staat, dan ontvang je een e-mail met de instructie \"Hoe het bevestigen van jouw account in een paar minuut gaat\"."},"destroy":{"confirm":"Ben je zeker?","headline":"Account verwijderen","link":"Nu verwijderen"},"edit":{"form":{"labels":{"current_password":"Actueel wachtwoord <i>(we need it to confirm your changes)</i>","email":"Email","password":"Wachtwoord <i>(leave empty, if you don\\'t want to change it)</i>","password_confirmation":"Herhaal wachtwoord"},"submit":"Veranderingen opslaan"},"headline":"Bewerk account"},"failure":{"already_authenticated":"Je bent al aangemeld.","inactive":"Jouw account is nog niet geactiveerd.","invalid":"Fout email of wachtwoord","invalid_token":"Ongeldig authentificatie bewijs.","locked":"Jouw account is gesloten.","timeout":"Jouw sessie is afgelopen, alsjeblieft log weer in om door te gaan.","unauthenticated":"Je moet aangemeld zijn of aanmelden om door te gaan. ","unconfirmed":"Je moet jouw account bevestigen voordat je doorgaat.","not_found_in_database":"Invalid email or password."},"mailer":{"confirmation_instructions":{"landing_page":"Alsjeblieft klik op de link wat wij naar jouw e-mail adres gestuurd hebben. Als je geen e-mail van ons hebt ontvangen dan kijk of die niet in de spam map is. Als je de e-mail niet kan vinden kan je de aanvraag nog een keer sturen.","subject":"Een stap nog om jouw account te activeren"},"reset_password_instructions":{"subject":"Reset wachtwoord aanwijzing."},"unlock_instructions":{"subject":"Open instructies"}},"mandatory":"* nodig","omniauth_callbacks":{"failure":"Autorisatie met  %{kind} mislukte. Fout: \"%{reason}\".","permission_missing":"Je hebt de benodigde toestemming niet ingewilligd.","success":"Succesvol goedgekeurd van %{kind} account"},"password_recovery":{"form":{"labels":{"email":"Email"},"submit":"Reset wachtwoord"},"headline":"Wachtwoord vergeten?"},"password_reset":{"email":{"comment":"Als je geen wachtwoord aangevraagd hebt dan kan je deze mail negeren.<br/>Jouw wachtwoordwordt niet veranderd tot dat je op de bovenstaande link klikt en een nieuw wachtwoord invuld.","headline":"Welkom %{email}","link":"Verander mijn wachtwoord","text":"Iemand heeft aangevraagd om jouw wachtwoord te veranderen. Je kan dat doen doordat je om de volgende link klikt:"},"form":{"labels":{"password":"Nieuw wachtwoord","password_confirmation":"Herhaal wachtwoord"},"submit":"Reset wachtwoord"},"headline":"Reset wachtwoord"},"passwords":{"link":"Wachtwoord vergeten?","send_instructions":"Je zal een email met de instructie \"hoe annuleer ik mijn wachtwoord in een paar minuten\" ontvangen. ","send_paranoid_instructions":"Als jou e-mail bestaat in ons databank, zal je een wachtwoord herstel link in de e-mail ontvangen.","updated":"Jouw wachtwoord is succesvol veranderd. Je bent nu ingeloggd.","updated_not_active":"Jouw wachtwoord is succesvol veranderd.","no_token":"You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided."},"registrations":{"destroyed":"Tot ziens! Jouw account werd succesvol verwijderd. Wij hopen jou ooit weer te zien. ","inactive_signed_up":"Je hebt succesvol aangemeld. Maar wij kunnen jou niet inloggen. Reden: \"%{reason}\"","link":"Aanmelden","reasons":{"inactive":"inactief","locked":"geblokkeerd","unconfirmed":"onbevestigd"},"signed_up":"Je bent succesvol ingeschreven. Als het niet mogelijk is, wij hebben een bevestiging naar jouw e-mail gestuurd.","updated":"Jouw account is succesvol geactualiseerd.","signed_up_but_inactive":"You have signed up successfully. However, we could not sign you in because your account is not yet activated.","signed_up_but_locked":"You have signed up successfully. However, we could not sign you in because your account is locked.","signed_up_but_unconfirmed":"A message with a confirmation link has been sent to your email address. Please open the link to activate your account.","update_needs_confirmation":"You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address."},"sessions":{"inactive":"Jouw account is nog niet geactiveerd.","invalid":"Ongeldig email of wachtwoord.","invalid_token":"Ongeldig authentificatie bewijs.","link":"Aanmelden","locked":"Jouw account is geblokkeerd.","new":{"no_osm_account":"Geen OpenStreetMap account?","osm_promo_text":"Deze wheelmap is gebaseerd op de geodata van OpenStreetMap (OSM). OpenStreetMap is een vrije wereldmap, gemaakt door mensen als jij. Het is zoals Wikipedia voor plattegronden. Om plaatsen te veranderen of nieuwe in te voegen heb je een OpenStreetMap account nodig en moet je er ingeloggd zijn.","promo_text_thank_you":"Dank je wel voor je ondersteuning!","sign_in_with":"Log in met %{kind}","sign_up_with_osm":"Registreer je nu.","wheelmap_promo_text":"Met jouw kennis over rolstoel toegankelijke plaatsen kan je mensen met fysieke beperkingen helpen om het dagelijkse leven beter te organiseren. Bovendien wordt de OpenStreetMap prezieser door nieuwe details.  "},"signed_in":"Succesvol aangemeld.","signed_out":"Succesvol uitgelogd.","timeout":"Jouw sessie is afgelopen, alsjeblieft log in om door te gaan.","unauthenticated":"Je moet aanmelden voordat je doorgaat.","unconfirmed":"Je moet jouw account bevestigen voordat je doorgaat."},"sign_in":{"form":{"labels":{"email":"Email","password":"Wachtwoord","remember_me":"Aangemeld blijven?"},"submit":"Inloggen"},"headline":"Inloggen"},"sign_out":{"headline":"Uitloggen"},"sign_up":{"email":{"confirm_my_account":"Bevestig mijn account","please_confirm":"Je kan jouw account door de volgende link bevestigen:","welcome":"Welkom %{email}!"},"form":{"labels":{"email":"Email","password":"Wachtwoord","password_confirmation":"Herhaal wachtwoord","wants_newsletter":"Ja, informeer mij over wheelmap. (Maar alsjeblieft niet meer dan een keer per maand.)"},"submit":"Aanmelden"},"headline":"Aanmelden"},"unlocks":{"link":"Geen instructie voor het vrijgeven ontvangen?","send_instructions":"Je zal over een paar minuten een e-mail met de instructie ontvangen, hoe je je account vrij kan geven. ","send_paranoid_instructions":"Als je account existeerd, dan ontvang je een mail met de  instructie, hoe je je account in een paar minuten vrij kan geven. ","unlocked":"Jouw account werd succesvol vrijgegeven. Je bent nu ingeloggd."}},"poi":{"category":{"accommodation":"Accomodatie","education":"Educatie","food":"Voedsel","government":"Overheid","health":"Gezondheid","leisure":"Vrije tijd","misc":"Overige","money_post":"Bank & Post","public_transfer":"Openbaar vervoer","shopping":"Winkelen","sport":"Sport","tourism":"Toerisme","unknown":"Onbekend"},"name":{"accommodation":{"beach_resort":"Strand hotel","bed_and_breakfast":"Bed en ontbijt","camp_site":"Kampeerplaats","caravan_site":"Kampeerplaats","chalet":"Berghut","dormitory":"Dormitory","guest_house":"Gasthuis","hostel":"Hostel","hotel":"Hotel","motel":"Motel"},"education":{"college":"Hogeschool/universiteit","driving_school":"Rijschool","kindergarten":"Kleuterschool","library":"bibliotheek","museum":"Museum","school":"School","university":"Universiteit"},"food":{"bar":"Bar","biergarten":"Biergarten","cafe":"Caf\u00e9 ","drinking_water":"Drinkwater","fast_food":"Fast Food","ice_cream":"Ijssalon","pub":"Kroeg","restaurant":"Restaurant"},"government":{"courthouse":"Het paleis van justitie","embassy":"Ambassade","government":"Overheidskantoor","police":"Politie","public_building":"Openbaar gebouw","townhall":"Stadshal"},"health":{"dentist":"Tandarts","doctors":"Artsen","hearing_aids":"Audicien (gehoorapperaat winkel)","hospital":"Ziekenhuis","medical_supply":"Medische verzorging","pharmacy":"Apotheek","social_facility":"Sociale voorziening","veterinary":"Dierenarts"},"leisure":{"arena":"Arena","brothel":"Bordeel","casino":"Casino","cinema":"bioscoop","community_center":"Wijkcentrum","gallery":"Galerij","nightclub":"Nachtclub","playground":"Speelplaats","sauna":"Sauna","stripclub":"Stripclub","theatre":"Theater","zoo":"Dierentuin"},"misc":{"company":"Bedrijf (zetel)","estate_agent":"Makelaar","insurance":"Verzekering","lawyer":"Advocaat","place_of_worship":"Kerk, religieuze plaats","toilets":"Toiletten"},"money_post":{"atm":"Pinautomaat","bank":"Bank","bureau_de_change":"Wisselkantor","post_box":"Brievenbus","post_office":"Postkantoor"},"public_transfer":{"aerodrome":"Vliegveld","bicycle_parking":"Fiets parkeerplaats","bicycle_rental":"Fiets verhuur","boatyard":"Werft","bus_station":"Bushalte","bus_stop":"Bushalte","cable_car":"Kabelbaan","car_rental":"Auto verhuur","car_sharing":"Car sharing / Auto verhuren en delen","chair_lift":"Stoeltjeslift","ferry":"Veerboot","ferry_terminal":"Veerboot haven","fuel":"Tankstation","halt":"Bushalte","light_rail":"Sprinter","parking":"Parkeren","parking_aisle":"Parkeerplaats","platform":"Perron","station":"Metro","subway_entrance":"Metro ingang","terminal":"Vliegveld terminal","tram_stop":"Tramhalte"},"shopping":{"alcohol":"Spiritualia","bakery":"Bakkerij","beauty":"Schoonheidssalon","beverages":"Dranken","bicycle":"Fietswinkel","books":"Boeken","butcher":"Slager","car_repair":"Autogarage","car_shop":"Auto winkel","chemist":"Apotheek","clothes":"Kleren","computer":"Computer","confectionery":"Zoetwaren winkel","convenience":"Commoditeit","deli":"Delicatessen","department_store":"Afdelingswinkel","doityourself":"Doe het zelf","dry_cleaning":"Stomerij ","electronics":"Elektronica","fabric":"Stoffen winkel","farm_shop":"Groenten winkel","florist":"Bloemenbinder","furniture":"Meubels","garden_centre":"Tuin center","gift":"Cadeau winkel","hairdresser":"Kapper","hardware":"Hardware","jewelry":"Juwelier","kiosk":"Kiosk","laundry":"Wasserij","mall":"Winkelcentrum","optician":"Opticien","organic":"Organische winkel","outdoor":"Buitensport winkel","pet":"Huisdier winkel","photo":"Foto","second_hand":"Tweedehands","shoes":"Schoenen","sports":"Sport","stationery":"Kantoorbenodigheden","supermarket":"Supermarkt","toys":"Speelgoed","travel_agency":"Reisbureau","video":"Videotheek"},"sport":{"pitch":"Sport velden","sports_centre":"Sport centrum","stadium":"Stadion","swimming":"Zwemmen","swimming_pool":"Zwembad"},"tourism":{"archaeological_site":"Archeologische kant ","arts_centre":"Kunst huis","artwork":"Kunstwerk","attraction":"Attractie","battlefield":"Slagveld","beach":"Strand","beacon":"Vuurtoren","castle":"kasteel","cave_entrance":"Holte ingang","information":"VVV Toeristen informatie","memorial":"Monument","theme_park":"Attractiepark","tower":"Toren","viewpoint":"Uitkijkpunt"},"unknown":{"unknown":"Onbekend"}}},"models":{"category":{"prompt":"Kies een categorie"},"node_type":{"prompt":"Choose a type"},"node":{"info_edit_position":"The location will appear on the Wheelmap as it is shown above. If the marker is not in the correct spot you can <a href=\"%{url}\">change its position on the OpenStreetMap.</a>","mail":{"subject":"[Wheelmap] Problem with %{headline}","body":"(Please only write in English or German.)\n\nHi Sozialhelden,\nsomething is wrong with location: %{url}\n\nThe problem is:"}}},"actions":{"send":"Verzenden","save":"Opslaan","cancel":"Annuleren"},"faq":{"answers":{"0":"U kunt altijd de markering van een plaats zelf veranderen. Kies gewoon de juiste markering en \"Save\" - klaar!","1":"As a logged in user you can add / correct all the details of a place. Click on \"Edit\" and correct or add information in the mask.","2":"U kunt meer informatie (bvb \"Deze plaats heeft een mobiele helling\") in de commentaar sectie toevoegen. Klik op \"Edit\" en \"add comment\""},"headline":"Is er een probleem met deze plaats?","questions":{"0":"The marking is wrong.","1":"The details of the place are incorrect or missing.","2":"Ik heb meer informatie over dit project."}},"header":{"navigation":{"about_wheelmap":"Over Wheelmap","choose_language":"Kies de taal","contact":"Contact","map":"Plattegrond","projects":"Projecten","blog":"Blog","feedback":"Feedback","home":"Start","how_to_add_a_place":"Hoe kan ik plaatsen toevoegen?","imprint":"Colofon ","logged_in_as":"Aangemeld als:","login":"Inloggen","logout":"Uitloggen","newsletter":"Nieuwsbrief","press":"Pers","profile":"Profiel","suggestions":"Adviezen","what_is_barrier_free":"Wat betekend \"wheelchair accessible\"?","what_is_wheelmap":"Wat is wheelmap?"},"toolbar":{"categories":"Categorie\u00ebn"},"meta":{"description":"Vind rolstoel toegankelijke plaatsen - wheelmap.org","homepage":"Startpagina / internetpagina","keywords":"rolstoel toegankelijk plaatsen vinden, zoek markering","search":"Zoeken"},"searchbar":{"add_place":"Voeg een andere plaats toe","find":"Vind","label":null,"placeholder":"Bijvoorbeeld Sunset Boulevard L.A. of Brandenburg Gate Berlin","title_add_place":"Voeg nu een nieuwe plaats op deze positie toe!"},"tagline":"Wheelmap logo","title":"Vind rolstoel toegangelijke plaatsen"},"home":{"index":{"overlay":{"button":"Ok\u00e9 laat ons beginnen.","categories":"Selecteer plaatsen via de categorie\u00ebn","filter":"Selecteer plaatsen met de Wheelchair toegang","headline":"Markeer en vind rolstoel toegankelijke plaatsen met Wheelmap.org - wereldwijd en gratis. Het is makkelijk:","lookup":"Zoek een speciale plaats","secondary_headline":"Ons stoplicht systeem om de rolstoel toegankelijke openbare ruimtes te markeren:"},"filter":{"category":"Kies categorie","deselect_all":"Los de hele selectie op","select_all":"Selecteer alles","wheelchair":"Rolstoel toegangelijk?"},"ie":{"action":{"ignore":"Negeren","upgrade":"Actualiseer Browser"},"warning":{"headline":"Wij excuseren!","message":"Je gebruikt blijkbaar Internet Explorer. Wheelmap heeft een standart-passend browser nodig om optimaal te werken. Alsjeblieft gebruik Firefox, Chrome, Safari or Opera"}},"link":{"node":{"create":"Voeg een nieuwe plaats toe"}},"popup":{"form":{"limited":"deels rolstoel toegankelijk","no":"niet rolstoel toegangelijk","save":"Actualiseren","unknown":"onbekende status","yes":"rolstoel toegankelijk"},"help":"rolstoel toegankelijk? (Hulp)","more":"meer..."}}},"nodes":{"new":{"form":{"legend":"locatie","location":"Please click on the map and place the marker at the exact position."},"header":{"title":"Nieuwe plaats | wheelmap.org"},"link":{"large_map":"Annuleren"}},"node_data":{"address":"adres","contact_details":"contactgegevens"},"node_edit":{"details":"Details","edit":"Redigeren"},"node_map":{"map":"Plattegrond"},"node_note":{"comment":"Commentaar"},"node_photos":{"add":"Toevoegen","photos_of_this_place":"Fotos van deze plaats:","upload":"Uploaden"},"node_similar":{"similar":"Similar places: %{name}"},"node_status":{"accessible_toilet":"rolstoeltoegankelijk toilet","premium":"%{name} says: this place is","wheelchair_accessibility":"Rolstoel toegangelijk?"},"node_streetview":{"streetview":"Streetview:"},"show":{"header":{"meta":{"description":"Find out if this place is wheelchair accessible on Wheelmap.org. Or add further information and photos to the place.","title":"This place is on Wheelmap.org: %{name}"},"title":"Plaats:  %{node} | wheelmap.org"},"share":{"email":"E-mail","facebook":"Facebook","text":"Ik heb dit plaats gevonden op Wheelmap.org: %{name}","twitter":"Twitter"},"link":{"back":"terug","large_map":"Verruimen","listing":"Alle vergelijkbare plaatsen '%{type}' in %{city}\n","upload":"Upload beeld"},"more_data_from":"Er is meer informatie over deze plaats, gecontroleerd door:","show-in-osm":"OpenStreetMap"},"create":{"flash":{"not_successfull":"Oops, jouw input was niet correct of niet compleet.","successfull":"Dank je, de invoer werd opgeslagen en zal straks online staan."}},"edit":{"header":{"title":"Bewerk plaats: %{node} | wheelmap.org"},"link":{"large_map":"&laquo; Annuleer"}},"errors":{"default":"Oops, er ging iets mis. Maar werden erover ge\u00efnformeerd!","not_authorized":"Excuus, authentificatie faalde","not_available":"Excuus, de pagina is tijdelijk niet beschikkbar.","not_existent":"Excuus, de plaats is niet meer beschikbaar.","not_found":"Excuus, pagina niet gevonden.","param_missing":"Alsjeblieft voeg een zoek term toe"},"flash":{"authorize_wheelmap":"Je hebt een OpenStreetMap account nodig om de data te veranderen."},"node":{"link":{"claim":"Werk je hier?","edit_node":"Bewerk plaats","report_bug":"Geef een probleem op"}},"update":{"flash":{"not_successfull":"Oops, jouw input was of niet correct of niet compleet.","successfull":"Dank je, de invoer werd succesvol opgeslagen en zal straks online staan."}},"update_wheelchair":{"successfull":"De statuus voor \"%{name}\" werd verandert naar \"%{status} rolstoel toegankelijk\" en zal straks online op de site staan. "}},"search":{"index":{"no-results":{"headline":"Sorry, we couldn\u2019t find a place called \"%{query}\".","hint":{"example":"<strong>bijvoorbeeld:</strong> London, United Kingdom","info":"Our search service only works with name and/or address information. Hence, please either search for the name of the place or an address, e.g. street name and/or city. Searching for a type of place, e.g. restaurant or cinema, does not work!","work_in_progress":"We work hard to make searching for places easier and more intuitive in the future."},"try_this":{"address":"Geef a.u.b. meer <strong>address details</strong>.","intro":"Probeer dit","spell_check":"Controleer a.u.b. de  <strong>spelling</strong> van je text"}},"results":{"ticker":{"one":"%{count} resultaat","other":"%{count} resultaat:"}},"search":{"for":"Zoek naar  \"%{q}\"","not_found":"Geen plaats gevonden!"}},"timeout":{"headline":"sorry, werkt niet","info":"Onze zoekdienst was tijdelijk buiten werk","repeat_search":"Herhaal de zoekopdracht"}},"users":{"profile":{"newsletter":{"title":"Nieuwsbrief","text":"Stay up to date with the newsletter from Wheelmap. No worries, we won't spam you. You'll hear from us once a month at most.","label":"Yes, keep me updated about Wheelmap."},"show":{"title":"Overview","text_html":"Hello there,<br>\nWelcome (back) to Wheelmap.org! We\u2019re happy to have you on board! You can browse our <a href=\"http://wheelmap.org/en/blog-2/\">Blog</a> or <a href=\"http://wheelmap.org/en/faqs/\">FAQs</a> if you want to get to know Wheelmap.org a bit better. Or you can learn more about the <a href=\"http://wheelmap.org/en/get-engaged/\">projects</a> we offer around Wheelmap.org and how you can get involved.<br>\nKeep in touch<br>\nTo stay in contact you can subscribe to our monthly newsletter and follow us on <a href=\"https://www.facebook.com/wheelmap\">Facebook</a> and <a href=\"https://twitter.com/wheelmap\">Twitter</a>. We\u2019re looking forward to hearing your opinion and starting a conversation with you!<br>\nAnd now, happy mapping!<br>\nYour Wheelmap team","greeting":{"anonymously":"Hello there","personalized":"Hello %{name}"},"overview":{"text":"You have","pois_marked":{"one":"marked %{count} place","other":"marked %{count} places"},"pois_added":{"one":"added %{count} place","other":"added %{count} places"},"pois_edited":{"one":"edited %{count} place","other":"edited %{count} placess"},"photos_uploaded":{"one":"uploaded %{count} photo","other":"uploaded %{count} photos"}}},"photos":{"title":"Photos","empty":"You haven't upload any photos yet."},"edit":{"title":"Profiel","legends":{"user_data":"Your account information"}},"widget":{"title":"Widget","height":"height","width":"width","center":"center","categories":"categories","legends":{"settings":"Settings","preview":"Preview","embed":"Embed this code","general":"Create your own widget for use on your websites"}}},"after_signup_edit":{"welcome":{"headline":"Je bent er bijna! Be\u00ebindigen je registratie voor je Wheelmap account hier:","set_password_for_mobile":"Je registratie bij OpenStreetMap is geslaagd.\nKies nu je email adres en je wachtwoord voor je Wheelmap account en dan ben je erbij! Je hebt deze email adres en het wachtword nodig om bij de Wheelmap app for iPone of Android in te loggen.","text":"Hoe kunnen wij contact met je opnemen? Je kan deze informatie later in je profiel veranderen."}},"edit":{"headline":{"your_images":"Jouw geupload beelden"}}},"application":{"require_no_user":{"notice":"Je bent al ingeloggd..."},"require_user":{"notice":"Je moet inloggen om de pagina te zien."}},"breadcrumbs":{"node":{"create":"Voeg een nieuwe plaats toe","edit":"Bewerk plaats"},"root":"wheelmap"},"common":{"close":"sluiten","skip":"Overslaan"},"form":{"show_fully_accessible_places":"rolstoel toegankelijk","show_limited_accessible_places":"deels rolstoel toegankelijk","show_places_without_status":"onbekende status","show_unaccessible_places":"niet rolstoel toegankelijk"},"formtastic":{"hints":{"email":"We treat your address confidentially, no spam. Promise!","lat":"Beweeg de marker op de kaart in de correcte positie","osm_username":"Nog geen lid op dit moment? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Maak nu een Openstreetmap account</a>\n","password":"(laat dit leeg als je het niet wil veranderen )","phone":"For example: +49 30 12345678","website":"Bijvoorbeeld: http://www.voorbeeld.com"},"labels":{"category":"Categorie:","centralkey":"Centrale sluitel","city":"Stad:","create":"Cre\u00eber plaats","email":"E-mail","finish":"Einde","housenumber":"Nee:","lat":"Bewegingsvrijheid","lon":"Lengtegraad","name":"Naam:","osm_password":"OSM wachtwoord","osm_username":"OSM account naam","password":"Wachtwoord","password_confirmation":"Herhaal wachtwoord","phone":"Telefoon:","postcode":"Postcode","privacy_policy":"Ik accepteer paragraaf 1 en 2 van het privacy overeenkomst.","reset":"Resetten","save":"Opslaan","street":"Straat:","terms":"Ik accepteer de voorwaarden.","type":"Invullen:","website":"Internetpagina:","wheelchair":"Rolstoel toegankelijkheid?","wheelchair_description":"Toegankelijkheid commentaar:","wheelchair_toilet":"Wheelchair bathroom:"},"titles":{"basic":"Basic data","optional":"Meer informatie <span class=\"addition\">(all fields are optional)</span>"}},"global":{"form_validation_error":"Alsjeblieft let op de fouten in de onderstaande lijst"},"how?":"Hoe?","landing_pages":{"index":{"wheelchair":{"limit":{"headline":"Beperkt rolstoel toegangelijk %{type} in %{city} (%{count})"},"no":{"headline":"Alles niet-rolstoel toegankelijk %{type} in %{city} (%{count})"},"unknown":{"headline":"All %{type} in %{city} met onbekende rolstoel status (%{count})"},"yes":{"headline":"Compleet rolstoel toegankelijk %{type} in %{city} (%{count})"}}}},"layouts":{"application":{"banner":{"alt":"Een project van Sozialhelden.de"}}},"node":{"address":{"city":"%{city} %{postcode}\n","street":"%{housenumber} %{street}\n"},"tags":{"phone":"Telefoon:","website":"Internetpagina"}},"oauth":{"application":{"connect":{"headline":"Je moet je account met open street map verbinden, dan kan je plaatsen bij wheelmap.org toevoegen of veranderen. "}},"callback":{"notice":"Jouw wheelmap account is nu verbonden met de OpenStreetMap account %{user}.\n"}},"or":"of","place":{"one":"%{count} plaats","other":"%{count} plaatsen"},"profile":{"edit":{"application":{"oauth":{"connected":"Status: verbonden","grant":"Nu verbinden","not_connected":"Status: Niet verbonden","revoke":"onderbroken"}},"headline":"Bewerk jouw profiel"}},"splash":{"countline":"%{count} plaatsen zijn al getekend.","headline":"Iedereen kan rolstoel toegankelijke plaatsen toevoegen!","start":"Start","step1":"Klik op een plaats die je kent","step2":"Markeer het en klik op opslaan.","step3":"Gelukt! Registreren is niet nodig.","what_is_wheelmap":"Wat is wheelmap?"},"statistics":"Statistieken","toiletstatus":{"no":"No wheelchair accessible toilet","unknown":"Toilet status unknown","yes":"Wheelchair accessible toilet","what_is":{"no":"Doorway's inner width min. 90 cm, clear space min. 150 x 150 cm, wheelchair-height toilet seat, folding grab rails and accessible hand basin.","yes":"Doorway's inner width min. 90 cm, clear space min. 150 x 150 cm, wheelchair-height toilet seat, folding grab rails and accessible hand basin.","unknown":"Help by marking the toilet status!"}},"user_sessions":{"create":{"activation":{"notice":"Jouw account is nu geactiveerd!"},"error":{"notice":"E-mail en wachtwoord passen niet. "},"notice":"Je bent in!"},"destroy":{"notice":"Tot zien en tot straks!"},"new":{"email":"E-mail adres","login":"Log in","login_with_twitter":"Log in met Twitter","password":"Wachtwoord","remember_me":"Aangemeld blijven"}},"wheelchairstatus":{"limited":"deels rolstoel toegankelijk","no":"niet rolstoel toegankelijk","unknown":"onbekende status","yes":"rolstoel toegankelijk"},"wheelmap":{"footer":{"a_project_of":"Een project van","based_on":"Gebaseerd op","become_a_supporter":"Wordt een ondersteuner","main_supporter":"Hoofd donateur"},"itunes":{"alt":"AppStore Logo / AppWinkel logo","title":"Download de iPhone App nu"},"logo":{"alt":"Wheelmap logo - vind rolstoel toegangelijke plaatsen","title":"Wheelmap - vind rolstoel toegangelijke plaatsen"},"what_is":{"fully_accessible":"Ingang drempelvrij, alle ruimtes drempelvrij, gehandicaptentoilet aanwezig  ","limited_accessible":"Ingang heeft een drempel (maximaal hoogte 7 cm), bijna alle kamers drempelvrij, toilet niet toegankelijk   ","not_accessible":"Ingang heeft hoge of meerdere treden, kamers zijn niet toegankelijk","unknown_accessible":"Hulp mee en markeer plaatsen!"}},"will_paginate":{"next_label":"Volgende &#8594;","page_entries_info":{"multi_page":"Laat %{model} %{from} - %{to} of %{count} in het geheel zien","multi_page_html":"Betoon %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> of <b>%{count}</b> in het geheel ","single_page":{"one":"Betoon 1 %{model}","other":"Betoon alle %{count} %{model}","zero":"Niet %{model} gevonden"},"single_page_html":{"one":"Betoon  <b>1</b> %{model}","other":"Betoon <b>all&nbsp;%{count}</b> %{model}","zero":"Niet %{model} gevonden"}},"page_gap":"&hellip;","previous_label":"&#8592; Volgende"},"apipie":{"resources":"Resources","resource":"Resource","description":"Description","no_docs_found":"No documentation found","no_docs_found_descr":"We have not found any documentation for your API.","follow_instructions_html":"Follow %{href} on how to describe your controllers.","follow_instructions_href":"further instructions","oops":"Oops!!","resource_not_found_html":"Resource %{res} not found.","method_not_found_html":"Method %{method} not found for resource %{resource}.","goto_homepage_html":"Try going to %{href}","goto_homepage_href":"%{app_name} API documentation homepage","required":"required","optional":"optional","nil_allowed":"nil allowed","param_name":"Param name","params":"Params","examples":"Examples","metadata":"Metadata","errors":"Errors","supported_formats":"Supported Formats","enable_javascript_html":"Please enable JavaScript to view the %{comments_href}.","comments_powered_by_disqus":"comments powered by %{disqus}","api_documentation":"API documentation"}};
