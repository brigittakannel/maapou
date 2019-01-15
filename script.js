$(document).ready(function() {
  // close manual
  $('.game-info').click(function(event) {
    $('.game-manual').fadeIn().addClass('open');
  });
  $('.close').click(function(event) {
    if ($('.game-manual').hasClass('open')) {
      $('.game-manual').fadeOut();
    }
  });

  // Title reload page
  $('.header-title').click(function() {
    event.preventDefault()
    location.reload();
  });

  //Game 1 start
  $('.game-1').click(function() {
    $('.canvas').addClass('game-on game-1-start');
    $('.games.row, .logos').hide();
    $('.game-name h2').html(games[0]);
    $('.game-1-content .question h3').html(game1questions[level]);
    $('.game-1-content .option1').html(game1options[level][0]);
    $('.game-1-content .option2').html(game1options[level][1]);
    $('.game-1-content .option3').html(game1options[level][2]);
  });
  // Game 2 start
  $('.game-2').click(function() {
    $('.canvas').addClass('game-on game-2-start');
    $('.games.row, .logos').hide();
    $('.game-name h2').html(games[1]);
  });
  //Game 2 tabs switch logic
  $('.buttons div').click(function(event) {
    $('.buttons div').not(this).removeClass('active');
    $(this).addClass('active');
    if ($(this).hasClass('section-1')) {
      $('.maavarad-linnas, .game-2-test').removeClass('active');
      $('.maavarad-kodus').addClass('active');
      $('.game-nav').css('opacity', '0');
    } else if ($(this).hasClass('section-2')) {
      $('.maavarad-kodus, .game-2-test').removeClass('active');
      $('.maavarad-linnas').addClass('active');
      $('.game-nav').css('opacity', '0');
    } else {
      $('.game-nav').css('opacity', '1');
      $('.game-2-test').addClass('active');
      $('.game-2-test .question h3').html(game2questions[level]);
      $('.game-2-test .option1').html(game2options[level][0]);
      $('.game-2-test .option2').html(game2options[level][1]);
      $('.game-2-test .option3').html(game2options[level][2]);
      $('.maavarad-kodus, .maavarad-linnas').removeClass('active');
    }
  });

  // Game 1 logic
  var level = 0;
  var score = 0;
  var $status = $('.status p');
  $('.game-1-content .options div').click(function() {
    var $this = $(this);
    $('.game-nav').css('display', 'flex'); $status.show();
    // Question 1
    $('.next').removeClass('disabled');
    if(level == 0 && $this.hasClass('option3')) {
      $this.addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Õige vastus!');
      $status.html(game1texts[0]);
      score++;
    } else if (level == 0 && $this.not('.option3')) {
      $this.addClass('wrong');
      $('.option3').addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Vale vastus!');
      $status.html(game1texts[0]);
    }
    // Question 2
    else if (level == 1 && $this.hasClass('option2')) {
      $this.addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Õige vastus!');
      $status.html(game1texts[1]);
      score++;
    } else if (level == 1 && $this.not('.option2')) {
      $this.addClass('wrong');
      $('.option2').addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Vale vastus!');
      $status.html(game1texts[1]);
    }
    // Question 3
    else if (level == 2 && $this.hasClass('option1')) {
      $this.addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Õige vastus!');
      $status.html(game1texts[2]);
      score++;
    } else if (level == 2 && $this.not('.option1')) {
      $this.addClass('wrong');
      $('.option1').addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Vale vastus!');
      $status.html(game1texts[2]);
    }
    // Question 4
    else if (level == 3 && $this.hasClass('option1')) {
      $this.addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Õige vastus!');
      $status.html(game1texts[3]);
      score++;
    } else if (level == 3 && $this.not('.option1')) {
      $this.addClass('wrong');
      $('.option1').addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Vale vastus!');
      $status.html(game1texts[3]);
    }
    // Question 5
    else if (level == 4 && $this.hasClass('option2')) {
      $this.addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Õige vastus!');
      $status.html(game1texts[4]);
      score++;
    } else if (level == 4 && $this.not('.option2')) {
      $this.addClass('wrong');
      $('.option2').addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Vale vastus!');
      $status.html(game1texts[4]);
    }
    // Question 6
    else if (level == 5 && $this.hasClass('option3')) {
      $this.addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Õige vastus!');
      $status.html(game1texts[5]);
      score++;
    } else if (level == 5 && $this.not('.option3')) {
      $this.addClass('wrong');
      $('.option3').addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Vale vastus!');
      $status.html(game1texts[5]);
    }
    // Question 7
    else if (level == 6 && $this.hasClass('option1')) {
      $this.addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Õige vastus!');
      $status.html(game1texts[6]);
      score++;
    } else if (level == 6 && $this.not('.option1')) {
      $this.addClass('wrong');
      $('.option1').addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Vale vastus!');
      $status.html(game1texts[6]);
    }
    // Question 8
    else if (level == 7 && $this.hasClass('option1')) {
      $this.addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Õige vastus!');
      $status.html(game1texts[7]);
      score++;
    } else if (level == 7 && $this.not('.option1')) {
      $this.addClass('wrong');
      $('.option1').addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Vale vastus!');
      $status.html(game1texts[7]);
    }
    // Question 9
    else if (level == 8 && $this.hasClass('option3')) {
      $this.addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Õige vastus!');
      $status.html(game1texts[8]);
      score++;
    } else if (level == 8 && $this.not('.option3')) {
      $this.addClass('wrong');
      $('.option3').addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Vale vastus!');
      $status.html(game1texts[8]);
    }
    // Question 10
    else if (level == 9 && $this.hasClass('option1')) {
      $this.addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Õige vastus!');
      $status.html(game1texts[9]);
      score++;
    } else if (level == 9 && $this.not('.option1')) {
      $this.addClass('wrong');
      $('.option1').addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Vale vastus!');
      $status.html(game1texts[9]);
    }
    // Question 11
    if(level == 10 && $this.hasClass('option2')) {
      $this.addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Õige vastus!');
      $status.html(game1texts[10]);
      score++;
    } else if (level == 10 && $this.not('.option2')) {
      $this.addClass('wrong');
      $('.option2').addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Vale vastus!');
      $status.html(game1texts[10]);
    }
    // Question 12
    if(level == 11 && $this.hasClass('option3')) {
      $this.addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Õige vastus!');
      $status.html(game1texts[11]);
      score++;
    } else if (level == 11 && $this.not('.option3')) {
      $this.addClass('wrong');
      $('.option3').addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Vale vastus!');
      $status.html(game1texts[11]);
    }
    // Question 13
    if(level == 12 && $this.hasClass('option3')) {
      $this.addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Õige vastus!');
      $status.html(game1texts[12]);
      score++;
    } else if (level == 12 && $this.not('.option3')) {
      $this.addClass('wrong');
      $('.option3').addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Vale vastus!');
      $status.html(game1texts[12]);
    }
    // Question 14
    if(level == 13 && $this.hasClass('option3')) {
      $this.addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Õige vastus!');
      $status.html(game1texts[13]);
      score++;
    } else if (level == 13 && $this.not('.option3')) {
      $this.addClass('wrong');
      $('.option3').addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Vale vastus!');
      $status.html(game1texts[13]);
    }
    // Question 15
    if(level == 14 && $this.hasClass('option3')) {
      $this.addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Õige vastus!');
      $status.html(game1texts[14]);
      score++;
    } else if (level == 14 && $this.not('.option3')) {
      $this.addClass('wrong');
      $('.option3').addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Vale vastus!');
      $status.html(game1texts[14]);
    }
    // Question 16
    if(level == 15 && $this.hasClass('option1')) {
      $this.addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Õige vastus!');
      $status.html(game1texts[15]);
      score++;
    } else if (level == 15 && $this.not('.option1')) {
      $this.addClass('wrong');
      $('.option1').addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Vale vastus!');
      $status.html(game1texts[15]);
    }
    // Question 17
    if(level == 16 && $this.hasClass('option2')) {
      $this.addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Õige vastus!');
      $status.html(game1texts[16]);
      score++;
    } else if (level == 16 && $this.not('.option2')) {
      $this.addClass('wrong');
      $('.option2').addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Vale vastus!');
      $status.html(game1texts[16]);
    }
    // Question 18
    if(level == 17 && $this.hasClass('option3')) {
      $this.addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Õige vastus!');
      $status.html(game1texts[17]);
      score++;
    } else if (level == 17 && $this.not('.option3')) {
      $this.addClass('wrong');
      $('.option3').addClass('right');
      $('.options div').addClass('disabled');
      $('.status h4').html('Vale vastus!');
      $status.html(game1texts[17]);
    }
  });
  $(document).on('click', '.game-1-start .next', function() {
    console.log('clicked next');
    level++;
    $(this).addClass('disabled');
    if ( level > 0 && $(this).hasClass('over') ) {
      $('.prev').show();
      $(this).removeClass('disabled');
    }
    // Image questions 3, 8 ,17
    if (level == 2) {
      $('.image img').attr('src', 'images/fosforiit.png').fadeIn().parent().fadeIn();
    } else if (level == 7) {
      $('.image img').attr('src', 'images/turvas.jpg').addClass('turvas').fadeIn().parent().fadeIn();
    } else if (level == 16) {
      $('.image img').attr('src', 'images/põlevkivi.png').fadeIn().parent().fadeIn();
    } else {
      $('.image img').hide().parent().hide().removeClass('turvas');
    }
    if (level > 17) {
      // GAME 1 OVER
      $('.home, .game-over').css('display', 'flex');
      $('.next, .game-1-content').hide().addClass('over');
      $('.prev').css('display', 'flex');
      if (score <= 5) {
        $('.robot').fadeIn().attr('src', 'assets/bad.svg');
        $('.game-over h5').html('Mis juhtus?');
        $('.game-over p').html('Sul on kas väga halb päev või sa ei tea maapõuest mitte midagi. Mine uuri veel, mis seal toimub.');
        if (score == 1) {
          $('.game-over h6').html(score + " punkt");
        } else {
          $('.game-over h6').html(score + " punkti");
        }
      } else if (score >= 6 && score <= 9) {
        $('.robot').fadeIn().attr('src', 'assets/bad2.svg');
        $('.game-over h5').html('Võta end käsile!');
        $('.game-over p').html('Ilmselt pole geoloogia sinu lemmikteema! Aga tasub ikka teada, tegutse kohe!');
        $('.game-over h6').html(score + " punkti");
      } else if (score >= 10 && score <= 13) {
        $('.robot').fadeIn().attr('src', 'assets/better1.svg');
        $('.game-over h5').html('Päris hea!');
        $('.game-over p').html('Geoloogia on salapärane, eksole! Kaevu sellesse maailma sügavamalt ja uuri järele!');
        $('.game-over h6').html(score + " punkti");
      } else if (score >= 14 && score <= 16) {
        $('.robot').fadeIn().attr('src', 'assets/better2.svg');
        $('.game-over h5').html('Väga tubli!');
        $('.game-over p').html('Sinu teadmised on laialdased, aga mõned põnevad geoloogiateemad ootavad veel avastamist.');
        $('.game-over h6').html(score + " punkti");
      } else if (score >= 17 && score <= 18) {
        $('.robot').fadeIn().attr('src', 'assets/best.svg');
        $('.game-over h5').html('Hurraa!');
        $('.game-over p').html('Sa oled tõeline geoloog! Jaga kindlasti oma teadmisi ka teistega.');
        $('.game-over h6').html(score + " punkti");
      }
    } else {
      $('.status p, .status h4').html('');
      $('.game-1-content:not(.over) .options div').removeClass('right wrong disabled');
      console.log("Level:" + level + ", Score:" + score);
      $('.question h3').html(game1questions[level]);
      $('.option1').html(game1options[level][0]);
      $('.option2').html(game1options[level][1]);
      $('.option3').html(game1options[level][2]);
    }
    if ($('.game-1-content').hasClass('over')) {
      // GAME OVER BACKWARDS LOGIC
      $('.status h4').hide();
      $status.html(game1texts[level]);
      // Question 1
      $('.next').removeClass('disabled');
      if(level == 0) {
        $('.options div').addClass('disabled').hide();
        $('.option3').addClass('right').show();
      }
      // Question 2
      else if (level == 1) {
        $('.options div').addClass('disabled').hide();
        $('.option2').addClass('right').show();
      }
      // Question 3
      else if (level == 2) {
        $('.options div').addClass('disabled').hide();
        $('.option1').addClass('right').show();
      }
      // Question 4
      else if (level == 3) {
        $('.options div').addClass('disabled').hide();
        $('.option1').addClass('right').show();
      }
      // Question 5
      else if (level == 4) {
        $('.options div').addClass('disabled').hide();
        $('.option2').addClass('right').show();
      }
      // Question 6
      else if (level == 5) {
        $('.options div').addClass('disabled').hide();
        $('.option3').addClass('right').show();
      }
      // Question 7
      else if (level == 6) {
        $('.options div').addClass('disabled').hide();
        $('.option1').addClass('right').show();
      }
      // Question 8
      else if (level == 7) {
        $('.options div').addClass('disabled').hide();
        $('.option1').addClass('right').show();
      }
      // Question 9
      else if (level == 8) {
        $('.options div').addClass('disabled').hide();
        $('.option3').addClass('right').show();
      }
      // Question 10
      else if (level == 9) {
        $('.options div').addClass('disabled').hide();
        $('.option1').addClass('right').show();
      }
      // Question 11
      if(level == 10) {
        $('.options div').addClass('disabled').hide();
        $('.option2').addClass('right').show();
      }
      // Question 12
      if(level == 11) {
        $('.options div').addClass('disabled').hide();
        $('.option3').addClass('right').show();
      }
      // Question 13
      if(level == 12) {
        $('.options div').addClass('disabled').hide();
        $('.option3').addClass('right').show();
      }
      // Question 14
      if(level == 13) {
        $('.options div').addClass('disabled').hide();
        $('.option3').addClass('right').show();
      }
      // Question 15
      if(level == 14) {
        $('.options div').addClass('disabled').hide();
        $('.option3').addClass('right').show();
      }
      // Question 16
      if(level == 15) {
        $('.options div').addClass('disabled').hide();
        $('.option1').addClass('right').show();
      }
      // Question 17
      if(level == 16) {
        $('.options div').addClass('disabled').hide();
        $('.option2').addClass('right').show();
      }
      // Question 18
      if(level == 17) {
        $('.options div').addClass('disabled').hide();
        $('.option3').addClass('right').show();
      }
    }// Game over awnsers
  });
$(document).on('click', '.game-1-start .prev', function() {
    level--;
    $('.next').removeClass('disabled');
    $('.options div').removeClass('right wrong');
    // Image questions 3, 8 ,17
    if (level == 2) {
      $('.image img').attr('src', 'images/fosforiit.png').fadeIn().parent().fadeIn();
    } else if (level == 7) {
      $('.image img').attr('src', 'images/turvas.jpg').fadeIn().parent().fadeIn();
    } else if (level == 16) {
      $('.image img').attr('src', 'images/põlevkivi.png').fadeIn().parent().fadeIn();
    } else {
      $('.image img').hide().parent().hide();
    }
    $('.options div').addClass('disabled');
    $('.home, .game-over').css('display', 'none');
    $('.next, .game-1-content').show();
    if (level <= 0) {
      $(this).hide();
    }
    console.log(level);
    $('.question h3').html(game1questions[level]);
    $('.option1').html(game1options[level][0]);
    $('.option2').html(game1options[level][1]);
    $('.option3').html(game1options[level][2]);
    $('.status h4').hide();
    $status.html(game1texts[level]);
      // Question 1
      $('.next').removeClass('disabled');
      if(level == 0) {
        $('.options div').addClass('disabled').hide();
        $('.option3').addClass('right').show();
      }
      // Question 2
      else if (level == 1) {
        $('.options div').addClass('disabled').hide();
        $('.option2').addClass('right').show();
      }
      // Question 3
      else if (level == 2) {
        $('.options div').addClass('disabled').hide();
        $('.option1').addClass('right').show();
      }
      // Question 4
      else if (level == 3) {
        $('.options div').addClass('disabled').hide();
        $('.option1').addClass('right').show();
      }
      // Question 5
      else if (level == 4) {
        $('.options div').addClass('disabled').hide();
        $('.option2').addClass('right').show();
      }
      // Question 6
      else if (level == 5) {
        $('.options div').addClass('disabled').hide();
        $('.option3').addClass('right').show();
      }
      // Question 7
      else if (level == 6) {
        $('.options div').addClass('disabled').hide();
        $('.option1').addClass('right').show();
      }
      // Question 8
      else if (level == 7) {
        $('.options div').addClass('disabled').hide();
        $('.option1').addClass('right').show();
      }
      // Question 9
      else if (level == 8) {
        $('.options div').addClass('disabled').hide();
        $('.option3').addClass('right').show();
      }
      // Question 10
      else if (level == 9) {
        $('.options div').addClass('disabled').hide();
        $('.option1').addClass('right').show();
      }
      // Question 11
      if(level == 10) {
        $('.options div').addClass('disabled').hide();
        $('.option2').addClass('right').show();
      }
      // Question 12
      if(level == 11) {
        $('.options div').addClass('disabled').hide();
        $('.option3').addClass('right').show();
      }
      // Question 13
      if(level == 12) {
        $('.options div').addClass('disabled').hide();
        $('.option3').addClass('right').show();
      }
      // Question 14
      if(level == 13) {
        $('.options div').addClass('disabled').hide();
        $('.option3').addClass('right').show();
      }
      // Question 15
      if(level == 14) {
        $('.options div').addClass('disabled').hide();
        $('.option3').addClass('right').show();
      }
      // Question 16
      if(level == 15) {
        $('.options div').addClass('disabled').hide();
        $('.option1').addClass('right').show();
      }
      // Question 17
      if(level == 16) {
        $('.options div').addClass('disabled').hide();
        $('.option2').addClass('right').show();
      }
      // Question 18
      if(level == 17) {
        $('.options div').addClass('disabled').hide();
        $('.option3').addClass('right').show();
      }
  });

var games = [
  "Kas tunned maavarasid?",
  "Kus kasutame maavarasid?",
  "Mida arvad sina?"
]
var game1questions = [
"1 / 18 - Kivim, mida kasutatakse ehituskivide ja killustikuna on",
"2 / 18 - Tähtsaim klaasiliiva leiukoht asub",
"3 / 18 - Millise maavaraga on tegemist?",
"4 / 18 - Milline nimetatud maavaradest on Eestis kõige laiemalt levinud?",
"5 / 18 - Maavara, mida kasutatakse kütusena ja taimede kasvatamisel, on",
"6 / 18 - Maavara, millest toodetakse kergkruusa, on",
"7 / 18 - Põlevkivivarud asuvad",
"8 / 18 - Millise maavara kaevandamisega tegeletakse?",
"9 / 18 - Maavara, millest valmistatakse klaasi, on",
"10 / 18 - Tardkivim on",
"11 / 18 - Maavara, milles leiduvaid haruldasi muld-<br>metalle saaks kasutada arvutite valmistamisel, on",
"12 / 18 - Sinisavi kaevandatakse Eestis",
"13 / 18 - Kujutle, et oled Lõuna-Eesti ettevõtja, millist maavara saaksid seal kaevandada?",
"14 / 18 - Milline nimetatud maavaradest asub kõige sügavamal?",
"15 / 18 - Millises maavaras on kõige suurem metallide sisaldus?",
"16 / 18 - Milline maapõueressurss on taastuv?",
"17 / 18 - Millise maavaraga on tegemist?",
"18 / 18 - Millist maavara kaevandatakse Eestis kõige suuremas koguses?",
]
var game1options = [
  ["fosforiit",
  "liiv",
  "paekivi"],
  ["Saaremaal",
  "Lõuna-Eestis",
  "Põhja-Eestis"],
  ["Fosforiit",
  "Rauamaak",
  "Paekivi"],
  ["Liiv",
  "Fosforiit",
  "Põlevkivi"],
  ["paekivi",
  "turvas",
  "põlevkivi"],
  ["Kruus",
  "Lubjakivi",
  " Savi"],
  ["Kirde-Eestis",
  "Loode-Eestis",
  "Lõuna-Eestis"],
  ["Turvas",
  "Graptoliitargilliit",
  "Paekivi"],
  ["fosforiit",
  "savi",
  "liiv"],
  ["graniit",
  "liiv",
  "paekivi"],
  ["rauamaak",
  "fosforiit",
  "põlevkivi"],
  ["Kohtla-Nõmmel",
  "Lavassaares",
  "Kundas"],
  ["Põlevkivi",
  "Rauamaak",
  "Liiv"],
  ["Fosforiit",
  "Põlevkivi",
  "Rauamaak"],
  ["Graptoliitargilliit",
  "Fosforiit",
  "Rauamaak"],
  ["Maasoojus",
  "Liiv",
  "Paekivi"],
  ["Fosforiit",
  "Põlevkivi",
  "Graniit",],
  ["Savi",
  "Turvas",
  "Põlevkivi"]
]

var game1texts = [
'Ehituskivina kasutatav paekivi peab olema vastupidav ilmastikutingimustele, see tähendab hea külmakindlusega, vastupidav survele, löökidele ja kulumisele. Sellistele nõuetele vastab hästi Lasnamäe ja Uhaku lademetesse kuuluv paekivi. Tuntumad karjäärid on Harkus, Väos, Maardus ja Kunda-Arus.',
'Klaasiliiva leiukohad on Lõuna-Eestis Põlvamaal ja Võrumaal. Sealne liiv on sobiv klaasi tootmiseks, sest sisaldab suurel hulgal kvartsi. Kvarts on väga kõva ja seetõttu kulumisele vastupidav mineraal.',
'Fosforiit on 500 miljonit aastat tagasi mere põhja settinud organismide kodade jäänustest tekkinud kivim. Tööstust huvitab eelkõige selles sisalduv fosforiühend P<sub>2</sub>O<sub>5</sub>, mida leidub maavaras 6-25%. Ülejäänud osa on nõrgalt tsementeerunud liiv, millest on üsna lihtne kasulikke kodasid eraldada. ',
'Liiv on laialt kasutatav maavara ja seda leidub Eestis peaaegu kõikjal. Liivamaardlaid leidub ühtlaselt üle Eesti, kuid nende teke on olnud erinev. Näiteks Läänemere arengustaadiumitega seotud liiva- ja kruusamaardlad asuvad Lääne-Eestis ja saartel. Liustikujõe poolt tekitatud suuremad liivamaardlad asuvad Harjumaal ning kõrge kvartsisisaldusega liiva- ja kruusamaardlaid leiab rohkem Ida-Virumaal, Viljandi- ja Võrumaal.',
'Sõltuvalt turbatüübist on tal erinevaid kasutusalasid.  Hästilagunenud turvast kasutatakse peamiselt kütteturbana, vähem väetise ja komposti valmistamiseks ning meditsiinis. Vähelagunenud ehk rabaturvast kasutatakse eelkõige aianduses. Energeetikas on turba kasutamine pidevalt vähenenud ning seetõttu on vähenenud ka hästilagunenud turba kaevandamine.',
'Graanulitest koosnevat kergkruusa ehk keramsiiti valmistatakse savist, mida näiteks on kaevandatud Arumetsa maardlast Häädemeeste lähedal Pärnumaal.',
'Oma olemuselt on põlevkivi settekivim, mis tekkis umbes 450 miljonit aastat tagasi. Peamine põlevkivi teke toimus merelistes tingimustes, peaasjalikult merede kaldalähedastes vetes, lahtedes ja laguunides, samuti jõgede deltades ja mõningatel juhtudel magevee järvedes. Eesti aladel paiknevad põlevkivivarud just Kirde-Eestis.',
'Turba kaevandamine toimub enamasti suurtel väljakutel pinnase freesimise teel. Freesimiseks kasutatakse tavaliselt 6 – 9 m laiust traktori haakes järelveetavat teradega freesi.',
'Klaasi tootmiseks sulatatakse liiva koos lisaainetega kõrgel temperatuuril spetsiaalsetes ahjudes. Saadud segu valatakse kas valuvormidesse või lamedale pinnale, kus see jahtub ja muutub tahkeks klaasiks.',
'Tardkivimid on tekkinud magma tardumisel maakoores või maapinnal. Liiv ja paekivi on mõlemad settekivimid, mis on tekkinud erinevate kivimite murenemisel ja settimisel veekogude põhja.',
'Eesti fosforiit sisaldab mitmeid haruldasi muldmetalle , mis on asendamatud kaasaegsete elektroonika-seadmete tootmisel.',
'Eestis kaevandatakse tänapäeval savi vähestes kohtades, kuna ei ole palju tööstusi, mis seda maavara kasutaks. Suurim sinisavi kaevandus asub Kundas. Kohtla-Nõmmel kaevandatakse põlevkivi ja Lavassaares turvast.',
'Lõuna-Eestis on levinud erineva suurusega liivamaardlad. Põlevkivi leidub meil Kirde-Eestis. Rauamaaki saaks samuti kaevandada Ida-Virumaal, kuid hetkel seda ei tehta.',
'Siiani väga nappidel andmetel baseeruva Jõhvi rauamaagi varude suuruse hinnangu järgi leidub kuni 500 meetri sügavuseni 355 miljonit tonni rauda ja kuni 1000 meetri sügavuseni arvutatult üle 1,5 miljardi tonni rauda.',
'Eestis leiduva rauamaagi rauasisaldus on olemasoleva info põhjal kuni 30%. Graptoliitargilliit ja fosforiit nii suurel hulgal metalle ei sisalda.',
'Maapinna lähedane maasoojus, mida ka Eestis kasutatakse, tekib päikeseenergia salvestumisel maapinda. Sügavamal maapõues olev soojus pärineb peamiselt looduslike radioaktiivsete elementide lagunemisest ja osaliselt ka Maa tekkimise käigus kivimitesse salvestunud energiast.',
'Põlevkivi on peenkihiline musta või pruuni värvi settekivim, mis moodustus Ordoviitsiumi ajastu madalates meredes umbes 450 miljonit aastat tagasi. Põlevkivi koosneb enam-vähem 50% ulatuses iidsete sinivetikate jäänustest ja 50% ulatuses mereloomade lubikodadest.',
'Eestis kaevandatakse põlevkivi peamiselt puurimise ja lõhkamise abil umbes 15 miljonit tonni aastas. Turvast kaevandatakse alla 1 miljoni tonni aastas ja savi veel vähem – umbes 30 000 m3.',
]

// Game 2 logic
$('.game-2-test .options div').click(function() {
  console.log('clicked');
  var $this = $(this);
  $('.game-nav').css('display', 'flex'); $status.show();
  // Question 1
  $('.next').removeClass('disabled');
  if(level == 0 && $this.hasClass('option1')) {
    $this.addClass('right');
    $('.options div').addClass('disabled');
    $('.status h4').html('Õige vastus!');
    $status.html(game2texts[0]);
    score++;
  } else if (level == 0 && $this.not('.option1')) {
    $this.addClass('wrong');
    $('.option1').addClass('right');
    $('.options div').addClass('disabled');
    $('.status h4').html('Vale vastus!');
    $status.html(game2texts[0]);
  }
  // Question 2
  else if (level == 1 && $this.hasClass('option2')) {
    $this.addClass('right');
    $('.options div').addClass('disabled');
    $('.status h4').html('Õige vastus!');
    $status.html(game2texts[1]);
    score++;
  } else if (level == 1 && $this.not('.option2')) {
    $this.addClass('wrong');
    $('.option2').addClass('right');
    $('.options div').addClass('disabled');
    $('.status h4').html('Vale vastus!');
    $status.html(game2texts[1]);
  }
  // Question 3
  else if (level == 2 && $this.hasClass('option3')) {
    $this.addClass('right');
    $('.options div').addClass('disabled');
    $('.status h4').html('Õige vastus!');
    $status.html(game2texts[2]);
    score++;
  } else if (level == 2 && $this.not('.option3')) {
    $this.addClass('wrong');
    $('.option3').addClass('right');
    $('.options div').addClass('disabled');
    $('.status h4').html('Vale vastus!');
    $status.html(game2texts[2]);
  }
  // Question 4
  else if (level == 3 && $this.hasClass('option1')) {
    $this.addClass('right');
    $('.options div').addClass('disabled');
    $('.status h4').html('Õige vastus!');
    $status.html(game2texts[3]);
    score++;
  } else if (level == 3 && $this.not('.option1')) {
    $this.addClass('wrong');
    $('.option1').addClass('right');
    $('.options div').addClass('disabled');
    $('.status h4').html('Vale vastus!');
    $status.html(game2texts[3]);
  }
  // Question 5
  else if (level == 4 && $this.hasClass('option3')) {
    $this.addClass('right');
    $('.options div').addClass('disabled');
    $('.status h4').html('Õige vastus!');
    $status.html(game2texts[4]);
    score++;
  } else if (level == 4 && $this.not('.option3')) {
    $this.addClass('wrong');
    $('.option3').addClass('right');
    $('.options div').addClass('disabled');
    $('.status h4').html('Vale vastus!');
    $status.html(game2texts[4]);
  }
  // Question 6
  else if (level == 5 && $this.hasClass('option2')) {
    $this.addClass('right');
    $('.options div').addClass('disabled');
    $('.status h4').html('Õige vastus!');
    $status.html(game2texts[5]);
    score++;
  } else if (level == 5 && $this.not('.option2')) {
    $this.addClass('wrong');
    $('.option2').addClass('right');
    $('.options div').addClass('disabled');
    $('.status h4').html('Vale vastus!');
    $status.html(game2texts[5]);
  }
  // Question 7
  else if (level == 6 && $this.hasClass('option1')) {
    $this.addClass('right');
    $('.options div').addClass('disabled');
    $('.status h4').html('Õige vastus!');
    $status.html(game2texts[6]);
    score++;
  } else if (level == 6 && $this.not('.option1')) {
    $this.addClass('wrong');
    $('.option1').addClass('right');
    $('.options div').addClass('disabled');
    $('.status h4').html('Vale vastus!');
    $status.html(game2texts[6]);
  }
  // Question 8
  else if (level == 7 && $this.hasClass('option2')) {
    $this.addClass('right');
    $('.options div').addClass('disabled');
    $('.status h4').html('Õige vastus!');
    $status.html(game2texts[7]);
    score++;
  } else if (level == 7 && $this.not('.option2')) {
    $this.addClass('wrong');
    $('.option2').addClass('right');
    $('.options div').addClass('disabled');
    $('.status h4').html('Vale vastus!');
    $status.html(game2texts[7]);
  }
  // Question 9
  else if (level == 8 && $this.hasClass('option3')) {
    $this.addClass('right');
    $('.options div').addClass('disabled');
    $('.status h4').html('Õige vastus!');
    $status.html(game2texts[8]);
    score++;
  } else if (level == 8 && $this.not('.option3')) {
    $this.addClass('wrong');
    $('.option3').addClass('right');
    $('.options div').addClass('disabled');
    $('.status h4').html('Vale vastus!');
    $status.html(game2texts[8]);
  }
  // Question 10
  else if (level == 9 && $this.hasClass('option2')) {
    $this.addClass('right');
    $('.options div').addClass('disabled');
    $('.status h4').html('Õige vastus!');
    $status.html(game2texts[9]);
    score++;
  } else if (level == 9 && $this.not('.option2')) {
    $this.addClass('wrong');
    $('.option2').addClass('right');
    $('.options div').addClass('disabled');
    $('.status h4').html('Vale vastus!');
    $status.html(game2texts[9]);
  }
});
$(document).on('click', '.game-2-start .next', function() {
  level++;
  $(this).addClass('disabled');
  if ( level > 0 && $(this).hasClass('over') ) {
    $('.prev').show();
    $(this).removeClass('disabled');
  }
  if (level > 9) {
    // GAME 1 OVER
    $('.home, .game-over').css('display', 'flex');
    $('.next, .game-2-content').hide().addClass('over');
    $('.prev').css('display', 'flex');
    if (score <= 2) {
      $('.robot').fadeIn().attr('src', 'assets/bad.svg');
      $('.game-over h5').html('Mis juhtus?');
      $('.game-over p').html('Sul on kas väga halb päev või sa ei tea maapõuest mitte midagi. Mine uuri veel, mis seal toimub.');
      if (score == 1) {
        $('.game-over h6').html(score + " punkt");
      } else {
        $('.game-over h6').html(score + " punkti");
      }
    } else if (score >= 3 && score <= 4) {
      $('.robot').fadeIn().attr('src', 'assets/bad2.svg');
      $('.game-over h5').html('Võta end käsile!');
      $('.game-over p').html('Ilmselt pole geoloogia sinu lemmikteema! Aga tasub ikka teada, tegutse kohe!');
      $('.game-over h6').html(score + " punkti");
    } else if (score >= 5 && score <= 6) {
      $('.robot').fadeIn().attr('src', 'assets/better1.svg');
      $('.game-over h5').html('Päris hea!');
      $('.game-over p').html('Geoloogia on salapärane, eksole! Kaevu sellesse maailma sügavamalt ja uuri järele!');
      $('.game-over h6').html(score + " punkti");
    } else if (score >= 7 && score <= 8) {
      $('.robot').fadeIn().attr('src', 'assets/better2.svg');
      $('.game-over h5').html('Väga tubli!');
      $('.game-over p').html('Sinu teadmised on laialdased, aga mõned põnevad geoloogiateemad ootavad veel avastamist.');
      $('.game-over h6').html(score + " punkti");
    } else if (score >= 9 && score <= 10) {
      $('.robot').fadeIn().attr('src', 'assets/best.svg');
      $('.game-over h5').html('Hurraa!');
      $('.game-over p').html('Sa oled tõeline geoloog! Jaga kindlasti oma teadmisi ka teistega.');
      $('.game-over h6').html(score + " punkti");
    }
  } else {
    $('.status p, .status h4').html('');
    $('.game-2-content:not(.over) .options div').removeClass('right wrong disabled');
    console.log("Level:" + level + ", Score:" + score);
    $('.question h3').html(game2questions[level]);
    $('.option1').html(game2options[level][0]);
    $('.option2').html(game2options[level][1]);
    $('.option3').html(game2options[level][2]);
  }
  if ($('.game-2-content').hasClass('over')) {
    $('.status h4').hide();
    $status.html(game2texts[level]);
    // SHOW RIGHT ANSWER WHEN GOING BACK IN GAME?!
    // Question 1
    if(level == 0) {
      $('.options div').addClass('disabled').removeClass('wrong right').hide();
      $('.option1').addClass('right').show();
    }
    // Question 2
    else if (level == 1) {
      $('.options div').addClass('disabled').removeClass('wrong right').hide();
      $('.option2').addClass('right').show();

    }
    // Question 3
    else if (level == 2) {
      $('.options div').addClass('disabled').removeClass('wrong right').hide();
      $('.option3').addClass('right').show();

    }
    // Question 4
    else if (level == 3) {
      $('.options div').addClass('disabled').removeClass('wrong right').hide();
      $('.option1').addClass('right').show();

    }
    // Question 5
    else if (level == 4) {
      $('.options div').addClass('disabled').removeClass('wrong right').hide();
      $('.option3').addClass('right').show();

    }
    // Question 6
    else if (level == 5) {
      $('.options div').addClass('disabled').removeClass('wrong right').hide();
      $('.option2').addClass('right').show();

    }
    // Question 7
    else if (level == 6) {
      $('.options div').addClass('disabled').removeClass('wrong right').hide();
      $('.option1').addClass('right').show();

    }
    // Question 8
    else if (level == 7) {
      $('.options div').addClass('disabled').removeClass('wrong right').hide();
      $('.option2').addClass('right').show();

    }
    // Question 9
    else if (level == 8) {
      $('.options div').addClass('disabled').removeClass('wrong right').hide();
      $('.option3').addClass('right').show();

    }
    // Question 10
    else if (level == 9) {
      $('.options div').addClass('disabled').removeClass('wrong right').hide();
      $('.option2').addClass('right').show();

    }
  }

});
$(document).on('click', '.game-2-start .prev', function() {
  level--;
  $('.status h4').hide();
  $status.html(game2texts[level]);
  $('.next').removeClass('disabled');
  $('.options div').addClass('disabled');
  $('.home, .game-over').css('display', 'none');
  $('.next, .game-2-content').show();
  if (level <= 0) {
    $(this).hide();
  }
  // SHOW RIGHT ANSWER WHEN GOING BACK IN GAME?!
  // Question 1
  if(level == 0) {
    $('.options div').addClass('disabled').removeClass('wrong right').hide();
    $('.option1').addClass('right').show();
  }
  // Question 2
  else if (level == 1) {
    $('.options div').addClass('disabled').removeClass('wrong right').hide();
    $('.option2').addClass('right').show();

  }
  // Question 3
  else if (level == 2) {
    $('.options div').addClass('disabled').removeClass('wrong right').hide();
    $('.option3').addClass('right').show();

  }
  // Question 4
  else if (level == 3) {
    $('.options div').addClass('disabled').removeClass('wrong right').hide();
    $('.option1').addClass('right').show();

  }
  // Question 5
  else if (level == 4) {
    $('.options div').addClass('disabled').removeClass('wrong right').hide();
    $('.option3').addClass('right').show();

  }
  // Question 6
  else if (level == 5) {
    $('.options div').addClass('disabled').removeClass('wrong right').hide();
    $('.option2').addClass('right').show();

  }
  // Question 7
  else if (level == 6) {
    $('.options div').addClass('disabled').removeClass('wrong right').hide();
    $('.option1').addClass('right').show();

  }
  // Question 8
  else if (level == 7) {
    $('.options div').addClass('disabled').removeClass('wrong right').hide();
    $('.option2').addClass('right').show();

  }
  // Question 9
  else if (level == 8) {
    $('.options div').addClass('disabled').removeClass('wrong right').hide();
    $('.option3').addClass('right').show();

  }
  // Question 10
  else if (level == 9) {
    $('.options div').addClass('disabled').removeClass('wrong right').hide();
    $('.option2').addClass('right').show();

  }
  console.log(level);
  $('.question h3').html(game2questions[level]);
  $('.option1').html(game2options[level][0]);
  $('.option2').html(game2options[level][1]);
  $('.option3').html(game2options[level][2]);
});

var game2questions = [
'1 / 10	- Just see maavara on klaasi põhiline koostisosa.',
'2 / 10	- Mitmed kosmeetikat tootvad Eesti ettevõtted kasutavad oma toodetes seda maavara.',
'3 / 10	- Hetkel Eestis veel bensiini ei toodeta, aga sellest Eesti maavarast saaks seda teha.',
'4 / 10	- Just see Eestis leiduv maavara sisaldab mitmeid haruldasi muldmetalle, mis on asendamatud kaasaegsete elektroonikaseadmete tootmisel, kuid mille kasutuselevõtmine eeldab põhjalike uuringute tegemist.',
'5 / 10	- Kvaliteetsed ehitusmaavarad tagavad meile korralikud sõiduteed. Just seda maavara kulub teede ehitamisel kõige rohkem.',
'6 / 10	- Sellest maavarast saab toota taimedele väga vajalikku toitainet, ilma milleta taimed ei kasvaks.',
'7 / 10	- Sellest maavarast valmistatud õli kasutatakse mitmete keemiatoodete tootmisel. Selle saadusi võib leida lõhnaõlist, juukselakist ja -värvidest.',
'8 / 10	- See maavara sisaldab reeniumi, mida kasutatakse lennukite reaktiivmootorite osade valmistamisel.',
'9 / 10	- Paljud vanad Põhja-Eesti kirikud ja muud hooned on ehitatud just sellest materjalist.',
'10 / 10 - Kodu küttekulude vähendamiseks kasutavad paljud just seda ressurssi. ',
]
var game2options = [
  ['liiv',
  	'savi',
  	'graniit'],
  	['liiv',
  	'turvas',
  	'graptoliitargilliit'],
  ['turvas',
  	'fosforiit',
  	'põlevkivi'],
  	['fosforiit',
  	'põlevkivi',
  	'meremuda'],
  	['savi',
  	'lubjakivi',
  	'liiv'],
  	['graptoliitargilliit',
  	'fosforiit',
  	'savi'],
  	['põlevkivi',
  	'graptoliitargilliit',
  	'turvas'],
  	['põlevkivi',
  	'graptoliitargilliit',
  	'turvas'],
  	['turvas',
  	'savi',
  	'paekivi'],
  	['maatugi',
  	'maasoojus',
  	'põlevkivi']
]
var game2texts = [
'Klaasi tootmiseks sulatatakse liiva koos lisaainetega kõrgel temperatuuril spetsiaalsetes ahjudes. Saadud segu valatakse kas valuvormidesse või lamedale pinnale, kus see jahtub ja muutub tahkeks klaasiks.',
'Turvast kasutatakse vähesel määral ka erinevates kosmeetikatoodetes, kuna see sisaldab mitmeid bioaktiivseid aineid, millel on usutavasti hea mõju inimese nahale.',
'Põlevkiviõli tootmisel saaks lisaks toota ka bensiini, mida oleks pärast töötlemist võimalik autodes kasutada. Hetkel Eesti põlevkiviõli tootjad bensiini ei tooda. Samas näiteks juba 1920ndatel oli üheks põlevkivitööstuse oluliseks tooteks madalamargiline autobensiin.',
'Fosforiit sisaldab haruldasi muldmetalle, mis on vajalikud mitmesuguste seadmete valmistamiseks. Nende kasutusala ulatub mobiiltelefonidest hübriidautodeni ja tuulegeneraatoritest säästulampideni.',
'Suurem osa kaevandatavatest ehitusmaavaradest kasutatakse Eestis just teede ehitamiseks ja parandamiseks. Liiv ja kruus moodustavad peamise osa teede aluskonstruktsioonidest.',
'Fosforiidist saab toota fosforväetisi, mis sisaldavad taimede poolt omastatavas vormis fosforit. Fosfor on vajalik seemnete idanemiseks, juurdumiseks ja õiepungade arenguks.',
'Põlevkiviõli ja selle tootmisel tekkivaid kõrvalsaadusi on võimalik kasutada ka keemiatööstuse toorainena selles sisalduvate erinevate huvipakkuvate ühendite tõttu. Turbast ja graptoliitargilliidist õli ei toodeta, kuna seda saaks väga vähe ning graptoliitargilliidi puhul sisaldaks see ka palju kahjulikke ühendeid.  ',
'Keerulise nimega maavara, graptoliitargilliit sisaldab haruldasi keemilisi elemente – uraani, molübdeeni, vanaadiumi ja reeniumi. Viimast kasutatakse reaktiivmootorite komponentide sulamite koostises.',
'Paekivi kättesaadavus oli kõige parem just Põhja-Eestis, mistõttu kasutati seda laialdaselt ka ehitusmaterjalina. Esimeseks suurehituseks oli Paide loss, mis valmis 1265. aastal. Lisaks on paekivist ehitatud veel näiteks Haapsalu lossikirik, Padise klooster ja Kuressaare loss.',
'Maasoojus on taastuvenergia, mille kasutamine on tihti mõistlik kulude kokkuhoidmiseks. Praegu kasutatakse Eestis maapinna lähedast maasoojust näiteks maasoojuspumpadega majade kütmiseks.',
]

var game3states = [
['1.	Kas Eesti on maavarade poolest rikas riik?',
'Kuigi tihti räägitakse, et Eesti on maavarade poolest vaene, siis tegelikult ei ole see päris tõsi. Meil on palju kasutatavaid maavarasid, näiteks põlevkivi, liiv/kruus, paekivi ja turvas, ja mitmeid kasutamata ressursse, mida tasub lähemalt uurida, näiteks rauamaak, fosforiit ja graptoliitargilliit.'],

['2.	Kuidas hindad enda loodusteadmiste taset? Kas Sinu arvates on Sinu teadmised loodusõpetusest, sh maapõues leiduvatest varadest, head?',
'Küsitluse põhjal ei hinda Eesti inimesed oma teadmisi maapõue teemadest eriti kõrgeks. Heaks hindas neid vaid 19%, sealhulgas väga heaks 2%. 72% elanikest seevastu peab oma teadmisi halvaks (sealhulgas 20% väga halvaks). '],

['3.	Kas Eestis on kaevandamise alustamine lihtne ja igaüks võib kaevandada mida soovib ja kus soovib?',
'Eestis on kaevandamiseks vajalik kaevandamisluba, mis väljastatakse kooskõlas maapõueseadusega. See seadus reguleerib maapõue uurimist, kaitsmist ja kasutamist. Loa saamiseks tuleb läbida keeruline avalik protsess, mille käigus vaadatakse, kas selles kohas kaevandamine on keskkonnale ja inimestele vastuvõetav, mida arvavad sellest kohalikud ja alaga seotud riigiasutused.'],

['4.	Kas Sinu arvates arutavad Eesti inimesed piisavalt maavarade teemade üle? ',
'Otsused, kas ja milliseid maapõueressursse ning kui suure kaasneva keskkonnamõjuga me ühiskonnana oleme valmis kasutama, peavad olema teadmispõhised ja tasakaalus. Otsuste tegemisel peavad kaasa rääkima erinevate huvigruppide esindajad.'],

['5.	Kas Eestile on kasulik see, et siin leidub fosforiiti?',
'Maavarade olemasolu on reeglina ikkagi õnn. Nende kasutamisel peab siiski silmas pidama, et see ei põhjustaks vastuvõetamatuid keskkonnamõjusid ja oleks seejuures kasulik ka ühiskonnale laiemalt. Seega maavarad on olemuslikult meie rikkus, kuid me ei tohi neid kasutada selliselt, et keskkond saab rikutud ja maavara kasutamisest saadav kasu on minimaalne. Fosforiidi puhul vajavad veel mitmed küsimused vastuseid enne, kui selle kasutusele võtta saaks.'],

['6.	Põlevkivist saame elektrit, õli ja muid saadusi, samas toob selle kasutamine kaasa mitmeid negatiivseid keskkonnamõjusid. Kas Sinu arvates peaksime seetõttu põlevkivi kasutamise lõpetama?',
'Põlevkivi kasutamisega kaasneb hulgaliselt erinevaid regionaalseid ja üleriigilisi väljakutseid, mis vajavad lahendamist. Näiteks keskkonnaprobleemid, jäätmeteke, Ida-Virumaa majanduse ühekülgsus jms. Samas ei ole meil kohe terviklahendust põlevkivi asendamiseks energeetikas ja ka kehtestatud nõuded ei välista põlevkivi kasutamist. Seetõttu on mõistlik läheneda teemale selliselt, et ressursi kasutamist ei pea lõpetama, kui tegevus suudab vastata kehtivatele ja tulevikus potentsiaalselt karmistuvatele nõuetele. Seega põlevkivi kasutamine peab muutuma keskkonnasõbralikumaks ja säästlikumaks ning kui väliste tegurite tõttu (keskkonnanõuded, turg, alternatiivsete energiaallikate areng jms) see enam mõistlik ei ole, siis tänasel kujul kasutus ilmselt ajapikku hääbub ise.'],

['7.	Kas riik peaks investeerima maavarade uurimisse?',
'Kvaliteetse geoloogilise informatsiooni omamine on oluline peaaegu kõigi keskkonnakasutusega seotud tegevuste planeerimisel, riskide hindamisel ja tegevuste elluviimisel. Olulisemad neist on uute maavarade kasutuselevõtt, loodus- ja põhjaveekaitse, veevarustuse, jäätmekorralduse ja ehitiste planeerimine ning keskkonnamõju hindamine. Jätkuv uurimistegevus on oluline nii võimaluste kui ka ohtude teadmiseks ja nendest lähtudes otsuste tegemiseks.'],

['8.	Kas me peaksime üldse maavarasid kaevandama?',
'Maavarade kasutamine ei too kasu ainult sellele ettevõttele, mis sellega tegeleb, vaid ühiskonnale tervikuna. Ühelt poolt annab ressursside tootmine meie majandusele asendamatu tooraine ja teisalt toob riigile otsest ja kaudset tulu läbi erinevate tasude ning maksude, mis võimaldab pakkuda erinevaid teenuseid (nt haridus, pensionid, teadus, teedevõrk jne) ja loob töökohti inimestele.']
]
var game3stats = [
  'Teised nõustuvad täielikult.',
  'Teised pigem nõustuvad.',
  'Teised ei oska öelda.',
  'Teised pigem ei nõustu.',
  'Teised ei nõustu üldse.',
]
// Game 3 start
$('.game-3').click(function() {
  $('.canvas').addClass('game-on game-3-start');
  $('.game-3-content').show();
  $('.games.row, .logos').hide();
  $('.game-name h2').html(games[2]);
  $('.game-3-content .question h3').html(game3states[0][0]);
  $('.game-3-content .answer-text').html(game3states[0][1]);
});
// Game 3 logic
$(document).on('click', '.btn-submit', function() {
  $('#stats, .game-nav').css('display', 'flex');
  $('.next').removeClass('disabled');
  $(this).addClass('disabled');
  console.log(level);
});
$(document).on('click', '.game-3-start .next', function() {
  level++;
  console.log(level);
  $('.game-3-content .question h3').html(game3states[level][0]);
  $('.game-3-content .answer-text').html(game3states[level][1]);
  $('#stats').css('display', 'none');
  $('.btn-submit').removeClass('disabled');
  $(this).addClass('disabled');
  if (level == 7) {
    $(this).hide();
    $('.home').css('display', 'flex');
  }
});
var slider = $("#myRange");
$("#slider").submit(function(e){
  e.preventDefault()
  var currentValue = slider.prop('value');
  console.log("submit:" + currentValue);
  var $form = $(this);
  console.log(level + " " + currentValue);
 $.ajax({
  type     : "POST",
  url      : $form.attr('action'),
  dataType: "json",
  data     : JSON.stringify({
    question_no: level,
    answer_no: currentValue
  }),
  success  : function(data) {
    console.log(data);
    console.log("data count: " + data.cnt);
    $('#count').html(data.statistics.cnt);
    if (data.status == '1') {
      if (data.statistics.answer_no == '1') {
        $('#answer').html(game3stats[0]);
      } else if (data.statistics.answer_no == '2') {
        $('#answer').html(game3stats[1]);
      } else if (data.statistics.answer_no == '3') {
        $('#answer').html(game3stats[2]);
      } else if (data.statistics.answer_no == '4') {
        $('#answer').html(game3stats[3]);
      } else if (data.statistics.answer_no == '5') {
        $('#answer').html(game3stats[4]);
      }
    } else {
      $('.statistics').html('Ühendus puudub, proovi mõne aja pärast uuesti.');
    }

  }
 });
})
});
