"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Connor J Webdale 
   Date: 3.5.19 
   
   Filename: hg_report.js
	
*/

// Writes information about the game that will be displayed in the web page in a variable named gameReport. 
var gameReport = "<h1>" + itemTitle + "</h1><h2>By: " + itemManufacturer + "</h2><img src='hg_" + itemID + ".png' alt='" + itemID + "' id='gameImg' /><table><tr><th><Product ID</th><td>" + itemID + "</td></tr><tr><th>List Price<?th><td>" + itemPrice + "</td></tr><tr><th>Platform</th><td>" + itemPlatform + "</td></tr><tr><th>ESRB Rating</th><td>" + itemESRB + "</td></tr><tr><th>Condition</th><td>" + itemCondition + "</td></tr><tr><th>Release</th><td>" + itemRelease + "</td></tr></table>" + itemSummary;

// Displays the value of the gameReport variable in the innerHTML of the first article element in the document. 
document.getElementsByTagName("ARTICLE")[0].innerHTML = gameReport;

// Creates a variable to be used to calculate the average customer rating of the game. 
var ratingsSum = 0;

// Declares a variable named ratingsCount equal to the length of the ratings array. 
var ratingsCount = ratings.length;

// Creates a for loop to loop through the contents of the ratings array. Each time through the loop, adds the value of the current ratings value to the value of the ratings array. 
for (let i = 0; i < ratings.length; i++) {
    ratingsSum += ratings[i];
}

// Declares the ratingsAvg variable, settings its value equal to the value of the ratingsSum variable divided by the valur of ratingsCount. 
var ratingsAvg = ratingsSum / ratingsCount;

// Declares a variable named ratingReport to display the reviews. 
var ratingReport = "<h1>Customer Reviews</h1><h2>" + ratingsAvg + " out of 5 stars (" + ratingsCount + " reviews)</h2>";

// Adds a for loop in which the counter goes from 0 to 2 in steps of 1. 
for (let i = 0; i <= 2; i++) {
    // Adds HTML code to the value of the ratingReport variable. 
    ratingReport += "<div class='review'><h1>" + ratingTitles[i] + "</h1><table><tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr><tr><th>Review Date</th><td>" + ratingDates[i] + "</td></tr><tr><th>Rating</th><td>";

    // Adds a nested for loop where the counter goes from 1 up to the value of the current customer rating of the game in increments of one. 
    for (let j = 0; j < ratings[i]; j++) {
        // Adds a star image each time through the loop. 
        ratingReport += "<img src='hg_star.png' />";
    }

    // Adds HTML code to the value of the ratingReport variable. 
    ratingReport += "</td></tr></table>" + ratingSummaries[i] + "</div>";
}

// Writes the value of the ratingReport value to the innerHTML of the first aside element in the document. 
document.getElementsByTagName("ASIDE")[0].innerHTML = ratingReport;