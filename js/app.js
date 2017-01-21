angular.module("TypeCooker", []).controller("MainController", function() {
	this.food = [
	// replace ingredients with images later on
		{
			name: "Pico de Gallo",
			paragraph: "Stir the tomatoes, onion, cilantro, jalapeno pepper, lime juice, garlic, garlic powder, cumin, salt, and pepper together in a bowl. Refrigerate at least 3 hours before serving.",
			ingredients: ["a"],
			price: 50
		},
		{
			name: "Chicken Marsala",
			paragraph: "Season chicken breasts all over with salt and pepper.",
			ingredients: ["a","b"],
			price: 60
		},
		{
			name: "Slow Cooker Buffalo Chicken Sandwiches",
			paragraph: "Place the chicken breasts into a slow cooker, and pour in 3/4 of the wing sauce and the ranch dressing mix. Cover, and cook on Low for 6 to 7 hours. Once the chicken has cooked, add the butter, and shred the meat finely with two forks.",
			ingredients: ["a","b"],
			price: 50
		},
		{
			name: "Tender Italian Baked Chicken",
			paragraph: "In a bowl, mix the mayonnaise, Parmesan cheese, and garlic powder. Place bread crumbs in a separate bowl. Dip chicken into the mayonnaise mixture, then into the bread crumbs to coat. Arrange coated chicken on a baking sheet.",
			ingredients: ["a","b"],
			price: 70
		},
		{
			name: "Chicken Pot Pie IX",
			paragraph: "In a saucepan, combine chicken, carrots, peas, and celery. Add water to cover and boil for 15 minutes. Remove from heat, drain and set aside. In the saucepan over medium heat, cook onions in butter until soft and translucent. Stir in flour, salt, pepper, and celery seed.",
			ingredients: ["a","b"],
			price: 50
		},
		{
			name: "Roast Sticky Chicken-Rotisserie Style",
			paragraph: "In a small bowl, mix together salt, paprika, onion powder, thyme, white pepper, black pepper, cayenne pepper, and garlic powder. Remove and discard giblets from chicken. Rinse chicken cavity, and pat dry with paper towel.",
			ingredients: ["a","b"],
			price: 80
		},
		{
			name: "Meat Loaf",
			paragraph: "Combine eggs, milk, bread crumbs, onion, salt, sage, and mushrooms in a large bowl. Crumble ground beef over mixture and stir well to combine. Shape into a round loaf; place in a 5-quart slow cooker.",
			ingredients: ["a","b"],
			price: 70
		},
		{
			name: "Crab Cakes",
			paragraph: "Preheat oven broiler. Mix together crabmeat, bread crumbs, parsley, salt and pepper. Beat together egg, mayonnaise, hot sauce and mustard. Combine with other ingredients and mix well. Form into patties and place on a lightly greased broiler pan or baking sheet.",
			ingredients: ["a","b"],
			price: 90
		}
	]
});