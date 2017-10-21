(function () {

    // Change this to your GitHub username so you don't have to modify so many things.
    var fork = "Celahir";

    // Define our function responsible for extending the bot.
    function extend() {
        // If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
          return setTimeout(extend, 1 * 1000);
        }

        // Precaution to make sure it is assigned properly.
        var bot = window.bot;

        // Load custom settings set below
        bot.retrieveSettings();

        //Blahblahblag... I am gonna yiff here!

        // You can add more spam words to the bot. Just in case... 
        var spamWords = ['fuck', 'meh', 'idiot', 'škrr'];
        for (var i = 0; i < spamWords.length; i++) {
          window.bot.chatUtilities.spam.push(spamWords[i]);
        }

        // Example code for a bot command:
        bot.commands.baconCommand = {
          command: 'bacon',  // The command to be called. With the standard command literal this would be: !bacon
          rank: 'user', // Minimum user permission to use the command
          type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("/me Bacon!!!");
            }
          }
        };
        
        // Furry OwO command
        bot.commands.furryCommand = {
          command: 'furry',  
          rank: 'user', 
          type: 'exact', 
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("/me OwO What's this? http://whatarefurries.com/");
            }
          }
        };

        // Yi*f command
        bot.commands.yiffCommand = {
          command: 'yiff',  // The command to be called. With the standard command literal this would be: !bacon
          rank: 'user', // Minimum user permission to use the command
          type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("/me Are you sure? Here? In a public? :3");
            }
          }
        };
        
        // Time
        bot.commands.timeCommand = {
          command: 'time',  
          rank: 'user', 
          type: 'exact', 
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("/me Who cares about time? Just enjoy this moment of life and stop disturbing me when doing furry yoga!");
            }
          }
        };
        // Hello
        bot.commands.helloCommand = {
          command: 'gif, hello',  
          rank: 'bouncer', 
          type: 'exact', 
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("/me Master? Good to see you again!");
            }
          }
        };
        
        // Load the chat package again to account for any changes
        bot.loadChat();

      }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
      botName: "JerkBot 6001",
      language: "english",
      chatLink: "https://rawgit.com/Celahir/custom/master/lang/en.json",
      scriptLink: "https://rawgit.com/Celahir/source/master/basicBot.js",
      roomLock: false, // Requires an extension to re-load the script
      startupCap: 1, // 1-200
      startupVolume: 0, // 0-100
      startupEmoji: false, // true or false
      autowoot: true,
      autoskip: true,
      smartSkip: true,
      cmdDeletion: false,
      maximumAfk: 120,
      afkRemoval: false,
      maximumDc: 240000,
      bouncerPlus: true,
      blacklistEnabled: true,
      lockdownEnabled: false,
      lockGuard: false,
      maximumLocktime: 10,
      cycleGuard: false,
      maximumCycletime: 10,
      voteSkip: true,
      voteSkipLimit: 2,
      historySkip: true,
      timeGuard: true,
      maximumSongLength: 16,
      autodisable: false,
      commandCooldown: 20,
      usercommandsEnabled: true,
      skipPosition: 1,
      skipReasons: [
      ["theme", "This song does not fit the room theme. "],
      ["op", "This song is on the OP list. "],
      ["history", "This song is in the history. "],
      ["mix", "You played a mix, which is against the rules. "],
      ["sound", "The song you played had bad sound quality or no sound. "],
      ["nsfw", "The song you contained was NSFW (image or sound). "],
      ["unavailable", "The song you played was not available for some users. "]
      ],
      afkpositionCheck: 2,
      afkRankCheck: "ambassador",
      motdEnabled: true,
      motdInterval: 10,
      motd: "https://i.pinimg.com/originals/c5/dc/e9/c5dce9704ca80facf480ae8cb99dbd5c.jpg",
      filterChat: false,
      etaRestriction: false,
      welcome: true,
      opLink: null,
      rulesLink: "https://i.imgur.com/gvNGSb4.jpg",
      themeLink: "http://www.crossfitpacepatriotpride.com/wp-content/uploads/2016/06/Under-Construction1.jpg",
      fbLink: "http://www.crossfitpacepatriotpride.com/wp-content/uploads/2016/06/Under-Construction1.jpg",
      youtubeLink: null,
      website: "http://www.crossfitpacepatriotpride.com/wp-content/uploads/2016/06/Under-Construction1.jpg",
      intervalMessages: ["Woof!"],
      messageInterval: 18,
      songstats: false,
      commandLiteral: "!",
      blacklists: {
        NSFW: "https://rawgit.com/Celahir/custom/master/blacklists/NSFWlist.json",
        OP: "https://rawgit.com/Celahir/custom/master/blacklists/OPlist.json",
        BANNED: "https://rawgit.com/Celahir/custom/master/blacklists/BANNEDlist.json",
        TROLL: "https://rawgit.com/Celahir/custom/master/blacklists/troll.json"
      }
    }));

    // Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/Celahir/source/master/basicBot.js", extend);

}).call(this);
