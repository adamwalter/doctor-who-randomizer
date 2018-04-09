(function() {
    var body, title, createTitle, share;

	var things = ['Alien','Aliens','Ambassadors','Androids','Angels','Arc','Ark','Army','Assassin','Astronauts','Asylum',
	'Barbarians','Beasts','Bells','Black&nbsp;Hole','Blob','Brain','Carnival','Caves','City','Claw','Colony','Creature','Crypt','Cult','Curse',
	'Cyborgs','Dæmon','Day','Destroyers','Devils','Dinosaurs','Dragons','End','Enemy','Eye','Eyes','Face','Fangs','Fires',
	'Forest','Frontier','Game','Gate','Ghost','Giants','Guardians','Hand','Hive','Horns','Invasion','Journey','Jungle',
	'Keeper','Knights','Library','Lizards','Lords','Maggots','Mark','Masque','Menace','Mind','Mirror','Monster','Mutants',
	'Nightmare','Operation','Phantoms','Pirates','Planet','Pods','Power','Pyramids','Reapers','Ring','Robomen','Robot',
	'Robots','Rocks','Seeds','Shadow','Shadows','Sirens','Skeletons','Snakes','Sound','Space Pirates','Spiders','Spores',
	'Stones','Swamp','Swarm','Talons','Tomb','Tunnels','Vampyres','Voyage','War','Warriors','Web','Wheel','Witches','Wizard',
	'Worms','Zombies'];

	var thingsDesc = ['Akhaten','Alpha Centauri','Alzarius','Andromeda','Androzani','Argolis','Betelgeuse','Blood','Calufrax',
	'Crinoth','Death','Destruction','Deva Loka','Doom','Draconia','Eternity','Evil','Fear','Fire','Frontios','Fury','Horror',
	'Insanity','Karn','Madness','Mars','Mechanus','Metebelis','Necros','Orion','Pain','Peladon','Pluto','Power','Rage','Ravolox',
	'Ribos','Sarn','Skaro','Tara','Terror','Time','Traken','Trion','Varos','Vortis'];

	var aliens = ['the Abzorbaloff','the Adipose','Aggedor','Alpha Centauri','the Androids','the Animus','the Autons','the Axons',
	'the Aztecs','the Cybermen','the Daleks','Davros','the Dinosaurs','the Doctor','the Dominators','the Drashigs','Eldrad',
	'the Exxilons','the Fendahl','Fenric','the Foamasi','Gallifrey','the Giants','the Gundans','the Ice&nbsp;Warriors','the Judoon',
	'Karn','the Kraals','the Krynoids','the Krotons','the Macra','the Mara','the Marshmen','the Master','the Mechonoids',
	'the Mind&nbsp;Robber','Medusa','Meglos','the Menoptra','the Monoids','Morbius','the Movellans','the Mutants','the Nimon',
	'the Ogrons','Omega','the Ood','the Plasmavores','the Quarks','the Racnoss','the Rani','Rassilon','the Robots','the Rutans',
	'the Sea&nbsp;Devils','the Sensorites','the Shadow','the Silence','the Silurians','Skagra','the Slitheen','the Sontarans',
	'the Space&nbsp;Pirates','the Spiders','the Spiridons','the Spores','Sutekh','the Swarm','the Sycorax','the Terileptils',
	'the Time&nbsp;Lords','Trion','the Valeyard','the Vardans','the Vervoids','the Vogans','the Voord','the War&nbsp;Lord','the War&nbsp;Machines',
	'the Weeping&nbsp;Angels','Weng&#8209;Chiang','the Werewolf','the Wirrn','the Xeraphin','Xoanon','the Yeti','the Zarbi','the Zygons'];

	var aliensDesc = ['Army','Asylum','Attack','Birth','Claws','Colony','Conquest','Crypt','Curse','Dawn','Death','Desolation',
	'Destiny','Empire','Evil','Evolution','Extermination','Fires','Genesis','Horns','Horror','Invasion','Kingdom','Land','Last',
	'Legend','Lost Planet','Mind','Nightmare','Planet','Power','Resurrection','Return','Revenge','Rise','Sanctuary','Sins',
	'Terror','Treachery','Tomb','Victory','Voyage','Wrath'];

	var doctors = ['hartnell', 'troughton', 'pertwee', 'tbaker', 'tbaker2', 'davison', 'cbaker', 'mccoy', 'eccleston-tennant', 'smith', 'smith2', 'capaldi'];

	/**
	 * Returns a random Doctor number
	 * @return integer
	 */
	function randomDoctor() {
		return doctors[Math.floor(Math.random() * doctors.length)];
	}

	/**
	 * Makes a catchy new title
	 * @return string
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

	function convertCanvasToImage(canvas) {
		var image = new Image();
		image.src = canvas.toDataURL('image/png');
		return image;
	}

    function onDocumentReady() {
		body = document.getElementsByTagName('body')[0];
		title = document.getElementById('title');
		createTitle = document.getElementById('title-create');
		share = document.getElementById('share');

		newTitle();

		createTitle.addEventListener('click', function() {

			var button = this;

			newTitle();

			button.classList.add('spin');

			setTimeout(function() {
				button.classList.remove('spin');
			}, 500);

		});

		FastClick.attach(document.body);

		MicroModal.init({
			disableScroll: true,
			disableFocus: true,
			awaitCloseAnimation: true,
		});
    }

    document.addEventListener('DOMContentLoaded', function() {
        onDocumentReady();
    });

})();
