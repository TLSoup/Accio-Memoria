const router = require('express').Router();
let UserModel = require('../models/users.model');

router.get('/', (req, res) => {
    const { email } = req.body;
    
    // return document searched by email
    if (email) {
        UserModel.find({ email })
        .then(document => {
            res.status(200).json(document);
        })
        .catch(err => {
            res.status(404).send(`Did not find the user. Error: ${err}`);
        });
    } else {
        UserModel.find()
        .then(document => {
            res.status(200).json(document);
        })
        .catch(err => {
            res.status(404).send(`Did not find the user. Error: ${err}`);
        }); 
    }
});

router.post('/createNewUser', (req, res) => {
    const { name, email, password, avatar } = req.body;
    let newUserDocument = new UserModel({ 
        name,
        email,
        password,
        avatar,
    });
    newUserDocument.save().then(document => {
        console.log(document);

        res.status(200).send(`Successfully created new user!`);
    }).catch(err => {
        res.status(400).send(`Failed to create the user. Error: ${err}`);
    });
});

router.patch('/', (req, res) => {
    const { email, newName, newEmail, newPassword, newAvatar } = req.body;
    let updatedUserDocument = {};

    //check for existence of object properties (order history will update itself after a purchase, so it is omitted here)
    if (newName) updatedUserDocument.name = newName;
    if (newEmail) updatedUserDocument.email = newEmail;
    if (newPassword) updatedUserDocument.password = newPassword;
    if (newAvatar) updatedUserDocument.avatar = newAvatar;

    //update document with _id, firstName, lastName, email, password
    UserModel.findOneAndUpdate({ email }, updatedUserDocument, { new: true })
        .then(document => {
            res.status(200).json(document);
        })
        .catch(err => {
            res.status(404).send(`Did not find user to update. Error: ${err}`);
        });
});

router.delete('/', (req, res) => {
    const { _id } = req.body;
    UserModel.findOneAndDelete({ _id })
        .then(document => {
            res.status(200).json(document);
        })
        .catch(err => {
            res.status(404).send(`Did not find user to delete. Error: ${err}`);
        });
});

module.exports = router;