const Masseuse = require('../models/masseuses')

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/massageme');


const masseuseData = [{
		name: 'Tom',
		email: "",
		bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisi lectus, mollis quis augue fermentum, tincidunt interdum tortor. Donec vehicula turpis rhoncus libero maximus, ac placerat nisl tristique. Proin vehicula, ipsum vitae ullamcorper aliquet, ipsum risus imperdiet enim, sit amet fermentum nisi quam eu orci.',
		avatar: '/assets/img/avatar/1.png'
	},
	{
		name: 'Lara',
		email: "",
		bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisi lectus, mollis quis augue fermentum, tincidunt interdum tortor. Donec vehicula turpis rhoncus libero maximus, ac placerat nisl tristique. Proin vehicula, ipsum vitae ullamcorper aliquet, ipsum risus imperdiet enim, sit amet fermentum nisi quam eu orci.',
		avatar: '/assets/img/avatar/2.png'
	},
	{
		name: 'Laura',
		email: "",
		bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisi lectus, mollis quis augue fermentum, tincidunt interdum tortor. Donec vehicula turpis rhoncus libero maximus, ac placerat nisl tristique. Proin vehicula, ipsum vitae ullamcorper aliquet, ipsum risus imperdiet enim, sit amet fermentum nisi quam eu orci.',
		avatar: '/assets/img/avatar/3.png'
	},
	{
		name: 'Tina',
		email: "",
		bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisi lectus, mollis quis augue fermentum, tincidunt interdum tortor. Donec vehicula turpis rhoncus libero maximus, ac placerat nisl tristique. Proin vehicula, ipsum vitae ullamcorper aliquet, ipsum risus imperdiet enim, sit amet fermentum nisi quam eu orci.',
		avatar: '/assets/img/avatar/4.png'
	},
	{
		name: 'Bast',
		email: "",
		bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisi lectus, mollis quis augue fermentum, tincidunt interdum tortor. Donec vehicula turpis rhoncus libero maximus, ac placerat nisl tristique. Proin vehicula, ipsum vitae ullamcorper aliquet, ipsum risus imperdiet enim, sit amet fermentum nisi quam eu orci.',
		avatar: '/assets/img/avatar/2.png'
	}
]


Masseuse.create(masseuseData, (err, masseuses) => {
	if (err) {
		console.error(err);
	}
	masseuses.forEach(masseuse => console.log(masseuse.name));
	mongoose.disconnect();
});