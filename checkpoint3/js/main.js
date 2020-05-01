"use strict";
$(document).ready(function() {
  const main = $("main");

  // hammer/anvil elements
  const hammer = $("#hammer");
  const anvil = $("#anvil");

  // weapon elements
  const weaponImg = $("#weapon-img");
  const weaponName = $("#weapon-name");
  var swords = [
    "shortsword",
    "longsword",
    "fancy_longsword",
    "serrated_sword",
    "golden_rapier",
    "blood_shinto",
    "bronze_flamberge",
    "obsidian_sword",
    "gemmed_obsidian_sword",
    "diamond_longsword",
    "crystal_shortsword",
    "sapphire_scimitar",
    "golden_gladius",
    "shadow_blade",
    "demonic_greatsword"
  ];
  weaponName.text(swords[0]);

  // main ui elements
  const counter = $("#counter");
  const currentUpgradeList = $("#current-upgrades").children();
  const apprenticeStats = $("#apprentice-stats");
  const nextWeapon = $("#next-weapon-level");
  const announceWin = $("#max-level");
  const goldIconHTML =
    '<img id="currency-img" draggable="false" src="img/gold.png" alt="a pile of gold"> ';
  const log = $("#log");

  // upgrade costs
  const cost_HireApprentice = 200;
  const cost_ApprenUpgrade1 = 500;
  const cost_ApprenUpgrade2 = 2000;
  const cost_ApprenUpgrade3 = 6000;
  const cost_HammerUpgrade1 = 25;
  const cost_HammerUpgrade2 = 100;
  const cost_HammerUpgrade3 = 500;
  const cost_HammerUpgrade4 = 10000;

  // shop elements
  const hireApprentice = $("#hire-apprentice");
  const apprenticeUpgrade1 = $("#apprentice-upgrade-1");
  const apprenticeUpgrade2 = $("#apprentice-upgrade-2");
  const apprenticeUpgrade3 = $("#apprentice-upgrade-3");
  const hammerUpgrade1 = $("#hammer-upgrade-1");
  const hammerUpgrade2 = $("#hammer-upgrade-2");
  const hammerUpgrade3 = $("#hammer-upgrade-3");
  const hammerUpgrade4 = $("#hammer-upgrade-4");
  const shop = $("#shop");
  initShop();

  // counter/level variables
  var maxLevel = 15;
  var points = 0;
  var currency = 0;
  var playerHammerEfficiency = 1;
  var apprenticeHammerEfficiency = 1;
  var apprenticeEfficiency = apprenticeHammerEfficiency / 5;
  var currentLevel = 0;
  var numberOfClicksToNextLevel = 100;
  var levelIncrement = numberOfClicksToNextLevel;
  var timeout = 1000;
  var currentMultiplier = 1;
  nextWeapon.text("Next Weapon: " + numberOfClicksToNextLevel + "xp");

  // game state variables
  var playerHasApprentice = false;
  var apprenticeHasUpgrade1 = false;
  var apprenticeHasUpgrade2 = false;
  var apprenticeHasUpgrade3 = false;
  var playerHasHammerUpgrade1 = false;
  var playerHasHammerUpgrade2 = false;
  var playerHasHammerUpgrade3 = false;
  var playerHasHammerUpgrade4 = false;
  var playerHasReachedMaxLevel = false;

  // statistic trackers
  const stats_Player = $("#dynamic-player-stats");
  const stats_Apprentice = $("#dynamic-apprentice-stats");
  const stats_PlayerGold = $("#currency-text");
  $(stats_Player).append(playerHammerEfficiency);
  $(stats_Apprentice).append(apprenticeEfficiency);

  // log messages
  const log_LevelUp = "You finished a weapon!";

  // MASTER CLICK FUNCTIONS
  // ====================================================================
  anvil.mousedown(function() {
    playerSwingHammer();
    hammerAnimateDown();
  });

  anvil.mouseup(function() {
    hammerAnimateUp();
  });

  main.mouseup(function() {
    hammer.removeClass("down");
  });

  // SHOP FUNCTIONS
  // ====================================================================
  hireApprentice.click(function() {
    let unlocked = shop_checkLockStatus($(this));

    if (!unlocked) {
      return;
    }

    if (playerHasApprentice) {
      return;
    }

    if (currency >= cost_HireApprentice) {
      shop_hireApprentice();
    } else return;
  });
  apprenticeUpgrade1.click(function() {
    let unlocked = shop_checkLockStatus($(this));

    if (!unlocked) {
      return;
    }

    shop_checkLockStatus($(this));
    if (apprenticeHasUpgrade1) {
      return;
    }

    if (currency >= cost_ApprenUpgrade1) {
      shop_buyApprenticeUpgrade1();
    } else return;
  });
  apprenticeUpgrade2.click(function() {
    let unlocked = shop_checkLockStatus($(this));

    if (!unlocked) {
      return;
    }

    shop_checkLockStatus($(this));
    if (apprenticeHasUpgrade2) {
      return;
    }

    if (currency >= cost_ApprenUpgrade2) {
      shop_buyApprenticeUpgrade2();
    } else return;
  });
  apprenticeUpgrade3.click(function() {
    let unlocked = shop_checkLockStatus($(this));

    if (!unlocked) {
      return;
    }

    shop_checkLockStatus($(this));
    if (apprenticeHasUpgrade3) {
      return;
    }

    if (currency >= cost_ApprenUpgrade3) {
      shop_buyApprenticeUpgrade3();
    } else return;
  });

  hammerUpgrade1.click(function() {
    let unlocked = shop_checkLockStatus($(this));

    if (!unlocked) {
      return;
    }

    shop_checkLockStatus($(this));
    if (playerHasHammerUpgrade1) {
      return;
    }

    if (currency >= cost_HammerUpgrade1) {
      shop_buyHammerUpgrade1();
    } else {
      return;
    }
  });
  hammerUpgrade2.click(function() {
    let unlocked = shop_checkLockStatus($(this));

    if (!unlocked) {
      return;
    }

    shop_checkLockStatus($(this));
    if (playerHasHammerUpgrade2) {
      return;
    }

    if (currency >= cost_HammerUpgrade2) {
      shop_buyHammerUpgrade2();
    } else {
      return;
    }
  });
  hammerUpgrade3.click(function() {
    let unlocked = shop_checkLockStatus($(this));

    if (!unlocked) {
      return;
    }

    shop_checkLockStatus($(this));
    if (playerHasHammerUpgrade3) {
      return;
    }

    if (currency >= cost_HammerUpgrade3) {
      shop_buyHammerUpgrade3();
    } else {
      return;
    }
  });
  hammerUpgrade4.click(function() {
    let unlocked = shop_checkLockStatus($(this));

    if (!unlocked) {
      return;
    }

    shop_checkLockStatus($(this));
    if (playerHasHammerUpgrade4) {
      return;
    }

    if (currency >= cost_HammerUpgrade4) {
      shop_buyHammerUpgrade4();
    } else {
      return;
    }
  });

  function shop_hireApprentice() {
    currency -= cost_HireApprentice;
    playerHasApprentice = true;
    $(apprenticeUpgrade1).addClass("unlocked");
    currentUpgradeList.append("<li>Hired Apprentice</li>");
    $(apprenticeStats).removeClass("hidden");
    updateCounter();
    updateLog("", hireApprentice);
    apprenticeStart();
  }

  function shop_buyApprenticeUpgrade1() {
    apprenticeHammerEfficiency = 5;
    apprenticeEfficiency = apprenticeHammerEfficiency / 5;
    apprenticeHasUpgrade1 = true;
    currency -= cost_ApprenUpgrade1;
    $(apprenticeUpgrade2).addClass("unlocked");
    currentUpgradeList.append("<li>Apprentice Upgrade 1</li>");
    updateCounter();
    updateLog("", apprenticeUpgrade1);
  }
  function shop_buyApprenticeUpgrade2() {
    apprenticeHammerEfficiency = 10;
    apprenticeEfficiency = apprenticeHammerEfficiency / 5;
    apprenticeHasUpgrade2 = true;
    currency -= cost_ApprenUpgrade2;
    $(apprenticeUpgrade3).addClass("unlocked");
    currentUpgradeList.append("<li>Apprentice Upgrade 2</li>");
    updateCounter();
    updateLog("", apprenticeUpgrade2);
  }
  function shop_buyApprenticeUpgrade3() {
    apprenticeHammerEfficiency = 20;
    apprenticeEfficiency = apprenticeHammerEfficiency / 5;
    apprenticeHasUpgrade3 = true;
    currency -= cost_ApprenUpgrade3;
    currentUpgradeList.append("<li>Apprentice Upgrade 3</li>");
    updateCounter();
    updateLog("", apprenticeUpgrade3);
  }

  function shop_buyHammerUpgrade1() {
    playerHammerEfficiency = 2;
    currency -= cost_HammerUpgrade1;
    playerHasHammerUpgrade1 = true;
    $(hammerUpgrade2).addClass("unlocked");
    currentUpgradeList.append("<li>Hammer Upgrade 1</li>");
    updateCounter();
    updateLog("", hammerUpgrade1);
  }
  function shop_buyHammerUpgrade2() {
    playerHammerEfficiency = 4;
    currency -= cost_HammerUpgrade2;
    playerHasHammerUpgrade2 = true;
    $(hammerUpgrade3).addClass("unlocked");
    $(hireApprentice).addClass("unlocked");
    currentUpgradeList.append("<li>Hammer Upgrade 2</li>");
    updateCounter();
    updateLog("", hammerUpgrade2);
  }
  function shop_buyHammerUpgrade3() {
    playerHammerEfficiency = 8;
    currency -= cost_HammerUpgrade3;
    playerHasHammerUpgrade3 = true;
    $(hammerUpgrade4).addClass("unlocked");
    currentUpgradeList.append("<li>Hammer Upgrade 3</li>");
    updateCounter();
    updateLog("", hammerUpgrade3);
  }
  function shop_buyHammerUpgrade4() {
    playerHammerEfficiency *= 2;
    currency -= cost_HammerUpgrade4;
    playerHasHammerUpgrade4 = true;
    currentUpgradeList.append("<li>Hammer Upgrade 4</li>");
    updateCounter();
    updateLog("", hammerUpgrade4);
  }

  function shop_checkLockStatus(el) {
    if ($(el).hasClass("unlocked")) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * function: updateShop()
   * desc: changes shop item text to purchased if player has purchased that item,
   * also checks if player can afford items in the shop (red text if cannot, white if can)
   */
  function updateShop() {
    let costs = shop.find(".shop-cost");

    // changes hammer upgrade text to purchased if player has purchased
    if (playerHasHammerUpgrade1) {
      let cost = hammerUpgrade1.find(".shop-cost");
      cost.text("Purchased");
    }
    if (playerHasHammerUpgrade2) {
      let cost = hammerUpgrade2.find(".shop-cost");
      cost.text("Purchased");
    }
    if (playerHasHammerUpgrade3) {
      let cost = hammerUpgrade3.find(".shop-cost");
      cost.text("Purchased");
    }
    if (playerHasHammerUpgrade4) {
      let cost = hammerUpgrade4.find(".shop-cost");
      cost.text("Purchased");
    }

    // changes apprentice upgrade text to purchased if player has purchased
    if (playerHasApprentice) {
      let cost = hireApprentice.find(".shop-cost");
      cost.text("Purchased");
    }
    if (apprenticeHasUpgrade1) {
      let cost = apprenticeUpgrade1.find(".shop-cost");
      cost.text("Purchased");
    }
    if (apprenticeHasUpgrade2) {
      let cost = apprenticeUpgrade2.find(".shop-cost");
      cost.text("Purchased");
    }
    if (apprenticeHasUpgrade3) {
      let cost = apprenticeUpgrade3.find(".shop-cost");
      cost.text("Purchased");
    }

    // dynamic cost color control if player can purchase or not
    for (var i = 0; i < costs.length; i++) {
      let currentItemCost = $(costs[i]);
      let currentItem = $(currentItemCost).parent();

      let cost = currentItemCost.text();

      if (currency >= cost && shop_checkLockStatus(currentItem)) {
        currentItemCost.addClass("green");
      } else if (currentItemCost.text() === "Purchased") {
        currentItem.removeClass("unlocked");
        currentItemCost.addClass("green");
      } else {
        currentItemCost.removeClass("green");
        currentItemCost.addClass("red");
      }
    }
  }

  /**
   * function: initShop
   * desc: sets up preliminary shop status
   */
  function initShop() {
    updateUpgradeCost(hireApprentice, cost_HireApprentice);
    updateUpgradeCost(apprenticeUpgrade1, cost_ApprenUpgrade1);
    updateUpgradeCost(apprenticeUpgrade2, cost_ApprenUpgrade2);
    updateUpgradeCost(apprenticeUpgrade3, cost_ApprenUpgrade3);
    updateUpgradeCost(hammerUpgrade1, cost_HammerUpgrade1);
    updateUpgradeCost(hammerUpgrade2, cost_HammerUpgrade2);
    updateUpgradeCost(hammerUpgrade3, cost_HammerUpgrade3);
    updateUpgradeCost(hammerUpgrade4, cost_HammerUpgrade4);
    updateShop();
  }

  // HELPER/OTHER FUNCTIONS
  // ======================================================================

  /**
   * function: updateCounter()
   * desc: helper function that updates UI when needed
   */
  function updateCounter() {
    counter.text(Math.floor(points) + "xp");
    $(stats_PlayerGold).html(goldIconHTML + Math.floor(currency));
    updatePlayerStats();
    updateApprenticeStats();
    updateShop();
  }

  /**
   * fucntion: updateUpgradeCosts()
   * desc: sets upgrade cost element text to the value passed into function
   */
  function updateUpgradeCost(upgrade, cost) {
    let target = upgrade.find($(".shop-cost"));
    target.text(cost);
  }

  /**
   * function: apprenticeStart()
   * desc: function that starts automated hammers
   * */

  function apprenticeStart() {
    window.setInterval(function() {
      apprenticeSwingHammer();
    }, timeout * currentMultiplier);
  }

  /**
   * function: apprenticSwingHammer()
   * desc: function that swings the hammer for the apprentice, this is automated and called in apprenticeStart()
   */
  function apprenticeSwingHammer() {
    currency += apprenticeEfficiency;
    points += apprenticeEfficiency;
    updateCounter();
  }

  /**
   * function: playerSwingHammer()
   * desc: master function that handles most of the logic
   */
  function playerSwingHammer() {
    currency += playerHammerEfficiency;
    points += playerHammerEfficiency;
    updateCounter();

    // exit if player have reached highest level
    if (playerHasReachedMaxLevel) {
      return;
    }

    // level Up!
    if (points >= numberOfClicksToNextLevel) {
      numberOfClicksToNextLevel = Math.floor(numberOfClicksToNextLevel * 1.5);
      currentLevel++;
      updateLog(log_LevelUp);

      // remove hidden class from first weapon
      if (weaponImg.hasClass("hidden")) weaponImg.removeClass("hidden");

      // this if/else just handles file names
      if (currentLevel < 10) {
        weaponName.text(swords[currentLevel - 1]);
        weaponImg.attr("src", "img/sword_0" + currentLevel + ".png");
      } else {
        weaponName.text(swords[currentLevel - 1]);
        weaponImg.attr("src", "img/sword_" + currentLevel + ".png");
      }

      // annouce max level
      if (currentLevel === maxLevel && !playerHasReachedMaxLevel) {
        announceWin.addClass("show");
        playerHasReachedMaxLevel = true;
        nextWeapon.text("Next Weapon: ???");
        return;
      }

      numberOfClicksToNextLevel += levelIncrement;
      nextWeapon.text("Next Weapon: " + numberOfClicksToNextLevel);
    }
  }

  /**
   * function: updatePlayerStats()
   * desc: helper function that replaces text of player stats when needed
   */
  function updatePlayerStats() {
    stats_Player.text("xp/click: " + playerHammerEfficiency);
  }

  /**
   * function updateApprenticeStats()
   * desc: helper function that replaces text of player stats when needed
   */
  function updateApprenticeStats() {
    stats_Apprentice.text("xp/sec: " + apprenticeEfficiency);
  }

  /**
   * function: updateLog()
   * desc: helper function that replaces the log text with given str
   */
  function updateLog(str, item) {
    if (item) log.text(str + item.text());
    else log.text(str);
  }

  /**
   * function: hammerAnimateDown()
   * desc: function that triggers the animation down classes
   */
  function hammerAnimateDown() {
    hammer.toggleClass("down");
    shakeAnvil();
  }

  /**
   * function: hammerAnimateUp()
   * desc: function that triggers the animation up classes
   */
  function hammerAnimateUp() {
    hammer.toggleClass("down");
    shakeAnvil();
  }

  function shakeAnvil() {
    anvil.toggleClass("shake");
  }
});
