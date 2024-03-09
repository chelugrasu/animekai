var currentPage = null;
var episodes = [
    { seriesTitle: "Ninja Kamui", episodeTitle: "04. Nume episod", imageUrl: "https://i.guardstorage.net/posters/Gw6zeREaDZnVrxZPa4Jq.poster.jpg", videoUrl: "//embedv.net/e/6zeREaDZnVrxZPa" },
    { seriesTitle: "Solo Leveling", episodeTitle: "09. Îți ascundeai abilitățile", imageUrl: "https://i.guardstorage.net/posters/ekQNB7xA28Q9YE0WG9rY.poster.jpg", videoUrl: "//embedv.net/e/QNB7xA28Q9YE0WG" },
    // Add more episodes as needed
  ];
document.addEventListener("DOMContentLoaded", function() {
    currentPage = $('#landingPage'); 
    $('#landingPage').hide()
    $('#episodesPage').hide()
    $('#watchPage').hide()
   if(currentPage.attr('id') === 'landingPage'){
    $('#landingPage').fadeIn(500)
   }
   var episodesContainer = document.getElementById('episodesContainer')
   episodes.reverse()
   episodes.forEach((episode, index) => {
     const episodeHTML = `
         <div class="episode" onclick="showEpisode(${index})">
             <!-- Series content for the action genre -->
             <img class="episodeImage" src="${episode.imageUrl}" loading="lazy">
 
             <div class="bottomBar">
                 <p class="seriesTitle">${episode.seriesTitle}</p>
                 <p class="episodeTitle">${episode.episodeTitle}</p>
             </div>
         </div>
         `;
 
         episodesContainer.innerHTML += episodeHTML;
     })
});

function changePage(page){
    currentPage.fadeOut(250, function() {
        currentPage = $(`#${page}`);
        currentPage.fadeIn(250);
    });
}

function showEpisode(index){
    changePage('watchPage')
    $('.player').attr("src", episodes[index].videoUrl)
    $('.watchSeriesTitle').html(`${episodes[index].seriesTitle}: <span class="watchEpisodeTitle">${episodes[index].episodeTitle}</span>`)
}
