const Massage = require('../models/massage')

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })


const massageData = [{
		name: 'Relaxation',
		description: "Parfait pour se libérer de son stress. Votre praticien procédera à des mouvements fluides sur l'ensemble du corps pour un relâchement total des tensions tant physiques que psychiques.Parfait pour se libérer de son stress. Votre praticien procédera à des mouvements fluides sur l'ensemble du corps pour un relâchement total des tensions tant physiques que psychiques.",
		price: '60€',
		picture: '/static/assets/img/picture/relax.png'
	},
	{
		name: 'Deep-Tissue',
		description: "Idéal pour relâcher les tensions musculaires. Votre praticien vous offrira un massage profond pour détendre et rendre la souplesse à vos muscles noués.",
		price: '60€',
		picture: '/static/assets/img/picture/deep.png'
	},
	{
		name: 'Sportif',
		description: "Indiqué pour préparer le corps à une activité sportive ou pour améliorer la récupération après un effort physique. Votre praticien favorisera votre circulation sanguine par différentes techniques.",
		price: '60€',
		picture: '/static/assets/img/picture/sport.png'
	},
	{
		name: 'Massage assis',
		description: "Notre chaise spéciale s’adapte à des environnements variés. Elle nous permet de vous offrir une relaxation de qualité, quel que soit le lieu que vous choisissez.Pour toute réservation, merci de nous contacter à infos@massageme.be",
		price: '60€',
		picture: '/static/assets/img/picture/sit.png'
	},
]


Massage.create(massageData, (err, massages) => {
	if (err) {
		console.error(err);
	}
	massages.forEach(massage => console.log(massage.name));
	mongoose.disconnect();
});