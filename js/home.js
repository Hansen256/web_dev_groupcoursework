// Display current date and time
function showDateTime() {
    var now = new Date();
    var date = now.toDateString();
    var time = now.toLocaleTimeString();
    alert('Today is: ' + date + '\nCurrent time: ' + time);
}

// Show tourist attractions counter
function countAttractions() {
    var attractions = 10; // Total number of attractions
    alert('Uganda has over ' + attractions + ' major tourist attractions!\n\nVisit our Destinations page to explore them all.');
}

// Simple greeting based on time of day
function greetVisitor() {
    var hour = new Date().getHours();
    var greeting;
    
    if (hour < 12) {
        greeting = 'Good Morning!';
    } else if (hour < 18) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }
    
    alert(greeting + ' Welcome to Explore Uganda - The Pearl of Africa!');
}
