var dudeObj = {
  job: "Ninja",

  say: function (who) {
    return "Hey " + who + ", I am a " + this.job;
  },
};

var x = dudeObj.say("Dude"); // "Hey Dude, I am a Ninja"
console.log(x);

var programmerObj = { job: "Scripting guru" };

var y = dudeObj.say.call(programmerObj, "Dude");
console.log(y);
