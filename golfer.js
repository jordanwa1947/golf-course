class Golfer {
  constructor(attributes) {
    this.name = attributes.name;
    this.handicap = attributes.handicap;
    this.frustration = 0;
    this.confidence = 0;
  }

  calculateAvg() {
    var average = this.handicap + 72;
    return `I usually shoot a ${average} on average.`;
  }

  playRound(golfCourse) {
    if(golfCourse.difficulty == 'hard') {
      this.frustration += 500;
    } else if (golfCourse.difficulty == 'moderate') {
      this.frustration += 100;
    }
  }

  hitTheRange() {
    this.confidence += 10;
  }

  marvel(course) {
    return `I love the ${course.features[0]} and ${course.features[1]} on this course!`
  }

  whatYaShoot(score) {
    if (score > 0) {
      this.frustration += 20;
      return 'Doh!';
    } else if(score == 0){
      this.frustration -= 10;
      return 'Booyah!';
    } else {
      this.frustration += score * 10 - 10;
      return 'I AM THE GREATEST GOLFER ALIVE!';
    }
  }
}

module.exports = Golfer;
