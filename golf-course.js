class GolfCourse {
  constructor(name, difficulty, openings, features) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = [];
  }

  checkInGroup(group) {
    if (this.openings - group.length > 0) {
      this.openings -= group.length;
      var players = group.map((player) => player.name);
      this.currentlyPlaying.unshift(players.reverse());
      this.currentlyPlaying = this.currentlyPlaying.flat();
    }
  }

  recommendTees(golfer) {
    if (golfer.handicap < 11) {
      return 'You should play from the Difficult Tees.';
    } else if (golfer.handicap >= 11 && golfer.handicap < 15) {
      return 'You should play from the Middle Tees.';
    } else {
      return 'You should play from the Forward Tees.';
    }
  }
}

module.exports = GolfCourse;
