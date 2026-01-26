document.getElementById("codeasacanvas").innerHTML = `
<h3>Code as a Canvas Hackathon - 2026</h3>`

let pastContent = ``;
const pastEvents = new Map();   //date formatting so we can arrange in order
pastEvents.set("25/10/00",`<div class="event" id="codeshield"><h3>Codeshield Workshop with Medisec - October 2025</h3></div>`); 
pastEvents.set("25/08/00",`<div class="event" id="lumora"><h3>Joint Post with Lumora - August 2025</h3></div>`); 
pastEvents.set("25/07/00",`<div class="event" id="STEMHER"><h3>Joint Post with with STEMHER - July 2025</h3></div>`); 



const sortedKeys = [...pastEvents.keys()].sort();
for (const key of sortedKeys) {
    pastContent= pastContent+pastEvents.get(key);
}

document.getElementById("past").innerHTML=pastContent;
/*
Codeshield Workshop with Medisec - October 2025
Event details: 
Explored the intersection of cybersecurity & healthcare over 2 weekends 
Conducted several coding activities and interactive investigations
Organised & managed workshop logistics efficiently
Impact: 
Participants enhanced knowledge on cybersecurity particularly in healthcare
Gained practical coding and problem solving skills
Engaged 30+ participants who actively interacted with the workshop content
Achieved strong online engagement, with our Instagram post reaching 100 likes collectively on cherielle.code & medi_sec
Increased awareness of cybersecurity issues relating to healthcare systems
Joint Post with Lumora - August 2025
Event details: 
Collaboratively created a post on Instagram about ‘where AI can take you’
Designed and researched 3 slides, featuring cherielle aesthetics and deep insightful content from our respective teams
Impact: 
Instagram post received 80+ likes and around 10 comments collectively
Engaged the middle and high school community on how to use AI effectively
Joint Post with WA STEMHER - July 2025
Event details: 
Collaboratively created a post on Instagram about ‘all about interdisciplinary computer science’
Designed and researched 5 slides, featuring cherielle aesthetics and deep insightful content from our respective teams
Impact: 
Instagram post received 160+ likes and around 20 comments collectively
Engaged the middle and high school community on the benefits and career paths available in interdisciplinary computer science with different fields, including connections to fields like business and philosophy
Boosted public awareness of the many opportunities cherielle has to offer
Next Gen Tech Workshop Collab - February 2025
Event details: 
Partnered with next gen tech to provide digital literacy training for beginners
Designed presentations on fundamental digital software use & introductory to python for beginners
Enabled participants to apply their newly acquired skills by creating a fun game project: rock paper scissors
Impact: 
Participants developed foundational skills in digital software & python 
Created a supportive learning environment for beginners to collaborate
Achieved over 140 likes and several comments on Instagram posts & reels
Engaged 10+ attendees with keen interest in the workshop
Pinkgap Medicine Conference II - January 2025
Event details: 
Partnered with 9 other non-profit organisations to address medical issues
Developed a presentation on the role of tech wearables in medicine, featuring 2 speakers representing cherielle, sharing insights & volunteer opportunities
Impact:
Attracted over 250 attendees and featured approximately 12 speakers
The conference was recorded and published on YouTube for broader access
Instagram posts gained over 200 likes and 60 comments in total
Hour of Code Workshop with Pinkgap - November 2024
Event details: 
Introduced python basics to beginners particularly middle schoolers
Engaged over 10 participants, culminating in a final project showcase
Offered participants the chance to earn a $25 amazon gift card & $60 grant
Impact:
Participants learnt python basics and successfully built final projects
Instagram posts gained over 150 likes and 50 comments in total
*/