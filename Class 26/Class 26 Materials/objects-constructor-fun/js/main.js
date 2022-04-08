//Create a constructor with 4 properties and 3 methods

function TVShow(
  showName,
  showChannel,
  showLeadActors,
  showTagline,
  showDuration
) {
  this.seriesName = showName;
  this.seriesChannel = showChannel;
  this.seriesLeadActors = showLeadActors;
  this.seriesTagline = showTagline;
  this.seriesDuration = showDuration;
  this.showAdvert = function () {
    console.log(
      `Presenting the latest TV show titled... ${this.seriesName}. Catch now on ${this.seriesChannel}. And remember... ${this.seriesTagline}!`
    );
  };
  this.showBlurb = function () {
    console.log(
      `This show is the next best thing since sliced bread. Don't miss it.`
    );
  };
  this.showRatings = function () {
    console.log(`It's rated 5 stars!!`);
  };
}

let scandal = new TVShow(
  "Scandal",
  "ABC",
  ["Kerry Washington", "Tony Goldwyn"],
  "It's handled",
  "1 hour"
);
