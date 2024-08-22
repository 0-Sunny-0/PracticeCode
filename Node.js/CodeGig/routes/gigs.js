const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');

// Get gig list
router.get('/', (req, res) => 
    Gig.findAll()
        .then(gigs => {
            res.render('gigs', {
                gigs: gigs
            });
        })
        .catch(err => console.log(err)));

// Add a gig
router.get('./add', (req, res) => {
    const data = {
        title: 'Looking for a React developer',
        technologies: 'react, javascript, html, css',
        budget: '$3000',
        description: 'random text for the description',
        contact_email: 'user1@gmail.com'
    }

    let = { title, technologies, budget, description, contact_email } = data;

    // INSERT into table
    Gig.create({
        title,
        technologies,
        budget,
        description,
        contact_email
    })
    .then(gig => res.redirect('/gigs'))
    .catch(err => console.log(err));
});

module.exports = router;