  var tit = new Array();
  var vid = new Array();
  len = vid.length;
  last = len -1;
  jj = 0; // global

  var tag = document.createElement('script');
  tag.src = "http://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  function onYouTubePlayerAPIReady() {
      player = new YT.Player('player', {
            width: '812',
            height:'516',
            videoId:vid[0],
            playerVars: { 'autoplay': 0, 'rel': 0, 'showinfo': 0, 'showsearch': 0, },
            events: {
              'onStateChange': onPlayerStateChange,
              'onError': onPlayerError
            }
  });}

  step = "n";
  function onPlayerError(error){
      if ( error ){
          if (step == "n") nextVideo();
          else backVideo()
  }}

  function onPlayerStateChange(event){
      if (event.data == 0) nextVideo();
  }

  function playVid(num){
      jj=num;
      showTit(num);
      ide = vid[num];
      player.loadVideoById(ide, "large");
  }

  function nextVideo(){
      step = "n";
      if(jj <= last){jj=jj+1};
      if (jj > last){jj=0};
      playVid(jj);
  }

  function backVideo(){
      step = "b";
      if(jj>=1){jj=jj-1;}
      if (jj==0){alert("Begin Of List");}
      playVid(jj);
  }

  function showTit(k){
      document.getElementById("vtitle").innerHTML = '<b>' + (k+1) + '/'+ vid.length + ' : ' + tit[k] + '</b>';
  }
  ////////// Search

  function searchQ(){
      term = document.getElementById('txt1').value;
      term= encodeURIComponent(term);
      page = 1; maxResults = 50;
      email = 'http://gdata.youtube.com/feeds/api/videos?' +
      'max-results=' + maxResults +
      '&format=5&start-index=' + (((page - 1) * maxResults) + 1) +
      '&q=' + term + '&v=2&alt=jsonc&callback=myCallback';
      var oldsearchS = document.getElementById('searchS');
      if (oldsearchS){ oldsearchS.parentNode.removeChild(oldsearchS);}
      var s = document.createElement('script');
      s.setAttribute('src', email );
      s.setAttribute('id', 'searchS');
      s.setAttribute('type', 'text/javascript');
      document.getElementsByTagName('head')[0].appendChild(s);
  }

  function myCallback(info){
      totalitems = info.data.totalItems;
      if(totalitems < maxResults){max=totalitems}else{max=maxResults}
      for( var i=0; i < max; i++){
          ide = info.data.items[i].id;
          title = info.data.items[i].title;
          title1 = title.replace(/"/g,"\u2036");
          tit.push(title1);
          vid.push(ide);
      }
      len = vid.length;
      last = len-1;
      alert( "SUCCESS! "+ vid.length + " clips found");
      showLinks();
  }

  function showLinks(){
      st = "";
      for(i=0;i<len;i++){
          st += '<b>'+(i+1)+':</b>&nbsp;&nbsp;<a href="#" onclick="playVid('+ i + ');return false">'+ tit[i] + '</a><br>';
      }
      document.getElementById('search-box').innerHTML = st;
    $("#search-box").show();
  };

$("#search-box").on("click", function(){
    $(this).hide()
})