var adam = {
	name: "Adam Sandler",
	age: 47,
	favourite_movie: "The Wedding Singer",
	quote: "That's your home! Are you too good for your home?!"
}
	console.log("Client: " + adam.name + " He is " + adam.age + " years old. His favourite quote is " + adam.quote + ". Have you seen my favourite movie: " +adam.favourite_movie);

var kristen = {
	name: "Kristen Bell",
	age: 33,
	quote: "Do you wanna build a snowman?",
	showAge: function(){
		console.log(this.age);
	}
}

var jim = {
	name: "Jim Carrey",
	age: 57,
	children: adam,
	quote: "...So you're telling me there's a chance? YEAH!",
	showQuote: function(){
		console.log(this.quote);
	}
}


jim.showQuote()



function Client(name, age, quote) {
	this.name = name,
	this.age = age,
	this.quote = quote
 }

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";


// //Just like your clients, JavaScript Objects are capable of some awesome stuff! 
// Not only can they hold simple information like strings and integers, 
// but properties can also store functions! Pick any of the client objects you created, 
// and assign it a property called showQuote that stores a function that will display 
// that client's quote. Test your code!














