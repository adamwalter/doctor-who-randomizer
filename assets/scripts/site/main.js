(function() {
    var body, title, createTitle;

	var things = ['Alien','Aliens','Ambassadors','Androids','Angels','Arc','Ark','Army',
	'Assassin','Astronauts','Asylum','Barbarians','Beast','Bells','Blob','Brain','Carnival',
	'Caves','City','Claw','Colony','Creature','Crypt','Cult','Curse','Cyborgs','Dæmon','Day',
	'Dinosaurs','End','Enemy','Eye','Eyes','Face','Fangs','Fires','Forest','Frontier','Game',
	'Gate','Ghost','Giants','Hand','Hive','Horns','Invasion','Journey','Jungle','Keeper',
	'Library','Lizards','Maggots','Mark','Masque','Menace','Mind','Mirror','Monster','Mutants',
	'Nightmare','Operation','Phantoms','Pirates','Planet','Pods','Power','Pyramids','Ring','Robot',
	'Robots','Rocks','Seeds','Skeletons','Snakes','Sound','Space Pirates','Spiders','Spores','Stones',
	'Swamp','Talons','Tomb','Tunnels','Vampyres','Voyage','War','Warriors','Web','Wheel','Witches',
	'Wizard','Worms'];

	var thingsDesc = ['Andromeda','Blood','Death','Decay','Destruction','Doom','Eternity','Evil','Fear',
	'Fire','Fury','Horror','Insanity','Madness','Mars','Orion','Pain','Pluto','Power','Rage','Terror','Time'];

	var aliens = ['the Androids','the Autons','the Axons','the Aztecs','the Cybermen','the Daleks','Davros',
	'the Dinosaurs','the Doctor','the Dominators','the Drashigs','the Exxilons','the Fendahl','Gallifrey',
	'the Giants','the Ood','the Ice Warriors','the Judoon','the Krynoids','the Krotons','the Macra','the Mara',
	'the Marshmen','the Master','the Mind Robber','Meglos','the Monoids','Morbius','the Mutants','the Nimon',
	'the Ogrons','Omega','the Rani','Rassilon','the Robots','the Rutans','the Sea Devils','the Sensorites',
	'the Shadow','the Silence','the Silurians','the Slitheen','the Sontarans','the Space Pirates',
	'the Spiders','the Spores','Sutekh','the Swarm','the Sycorax','the Time Lords','the Vervoids','the Voord',
	'the War Lord','the War Machines','the Weeping Angels','the Werewolf','the Wirrn','the Zygons'];

	var aliensDesc = ['Army','Asylum','Attack','Birth','Claws','Colony','Conquest','Crypt','Curse',
	'Dawn','Death','Desolation','Destiny','Empire','Evil','Evolution','Extermination','Fires','Genesis',
	'Horns','Horror','Invasion','Kingdom','Land','Last','Legend','Lost Planet','Mind','Nightmare','Planet',
	'Power','Resurrection','Return','Revenge','Rise','Sanctuary','Sins','Terror','Treachery','Tomb',
	'Victory','Voyage','Wrath'];

	var doctors = ['hartnell', 'troughton', 'pertwee', 'tbaker', 'tbaker2', 'davison', 'cbaker', 'mccoy', 'eccleston',
	'tennant', 'smith', 'smith2'];

	/**
	 * Returns a random Doctor number
	 * @return integer 1-13
	 */
	function randomDoctor() {
		return doctors[Math.floor(Math.random() * doctors.length)];
	}

	/**
	 * Makes a catchy new title
	 * @return string A title
	 */
	function makeTitle() {
		var x, y,
		    words,
			theTitle,
			format = Math.floor(Math.random() * (2 - 1 + 1)) + 1;

		// Format 1: The X of Y
		if (format === 1) {

			x = things[Math.floor(Math.random() * things.length)];
			y = thingsDesc[Math.floor(Math.random() * thingsDesc.length)];
			theTitle = 'The ' + x + ' of ' + y;

		// Format 2: X of the Y
		} else {

			x = aliensDesc[Math.floor(Math.random() * aliensDesc.length)];
			y = aliens[Math.floor(Math.random() * aliens.length)];
			theTitle = x + ' of ' + y;

		}

		// Fix any widowed words
		words = theTitle.split(' ');
		words[words.length - 2] += '&nbsp;' + words[words.length - 1];
		words.pop();

		if (words[words.length - 1].length <= 15) {
			theTitle = words.join(' ');
		}

		return theTitle;
	}

	/**
	 * Sets new title
	 */
	function newTitle() {
		var newTitle = makeTitle(),
		    doctor = randomDoctor();

		body.className = doctor;
		title.innerHTML = newTitle;
	}

    function onDocumentReady() {
		body = document.getElementsByTagName('body')[0];
		title = document.getElementById('title');
		createTitle = document.getElementById('title-create');

		newTitle();

		createTitle.addEventListener('click', newTitle);
    }

    document.addEventListener('DOMContentLoaded', function() {
        onDocumentReady();
    });

})();
