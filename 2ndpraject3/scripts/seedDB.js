const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/toolsDB"
);

const tools = [
	{
		category : "Cutting and Concrete",
		name : "Bolt Cutter 36",
		subclass : 96,
		four_hour : 8,
		daily : 12,
		weekly : 48,
		deposit : 25
	},
	{
		category : "Drills and Hammers",
		name : "11 LB Demolition Hammer",
		subclass : 204,
		four_hour : 39,
		daily : 56,
		weekly : 224,
		deposit : 50
	},
	{
		category : "Generators",
		name : "3000 Watt Generator",
		subclass : 302,
		four_hour : 43,
		daily : 62,
		weekly : 248,
		deposit : 250
	},
	{
		category : "Plumbing and Pumps",
		name : "Auto-Feed Drain Cleaner 100 x 5/8",
		subclass : 472,
		four_hour : 67,
		daily : 96,
		weekly : 384,
		deposit : 100
	},
	{
		category : "Fastening and Welding",
		name : "20V Brad Nailer",
		subclass : 548,
		four_hour : 20,
		daily : 29,
		weekly : 116,
		deposit : 75
	},
	{
		category : "Compactors",
		name : "Jumping Jack",
		subclass : 607,
		four_hour : 67,
		daily : 95,
		weekly : 380,
		deposit : 150
	},
	{
		category : "Paining and Decorating",
		name : "20V Cordless Paint Sprayer",
		subclass : 718,
		four_hour : 26,
		daily : 37,
		weekly : 148,
		deposit : 50
	},
	{
		category : "Lawn and Garden",
		name : "1 Man Auger",
		subclass : 820,
		four_hour : 54,
		daily : 77,
		weekly : 308,
		deposit : 100
	},
	{
		category : "Floor Care and Sanding",
		name : "Belt Sander",
		subclass : 932,
		four_hour : 17,
		daily : 24,
		weekly : 96,
		deposit : 50
	},
	{
		category : "Other",
		name : "150K-200K BTU Kerosene Heater",
		subclass : 260,
		four_hour : 33,
		daily : 47,
		weekly : 188,
		deposit : 50
	},
	{
		category : "Scaffolding",
		name : "10 high w/base plates-1 5/8",
		subclass : 23,
		four_hour : 40,
		daily : 57,
		weekly : 114,
		deposit : 150
	}
]

db.Tool
  .remove({})
  .then(() => db.Tool.collection.insertMany(tools))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });