//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

function NewTVShow(name, genre, channel, numberOfEpisodes, tagline) {
  this.name = name;
  this.genre = genre;
  this.channel = channel;
  this.numberOfEpisodes = numberOfEpisodes;
  this.tagline = tagline;

  this.showAdvert = function () {
    console.log(
      `Hello you are watching ${this.name} on ${this.channel}. Remember... ${this.tagline}!`
    );
  };

  this.whatEpisodeNumber = function () {
    console.log(
      `You are watching episode 2 of ${this.numberOfEpisodes}, enjoy!`
    );
  };

  this.displayShowName = function () {
    console.log(`The name of my favourite show is ${this.name}.`);
  };
}

prisonBreak = new NewTVShow(
  "Prison Break",
  "Action Drama",
  "ABC",
  23,
  "How far will you go to save your brother?"
);

prisonBreak.showAdvert("Prison Break");
