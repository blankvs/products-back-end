//What is "next"
//Ours only used "db"
module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.create_products()
            .then( () => res.sendStatus(200) )
            .catch( err => {
                res.status(500).send({errorMessage: "Something Went Wrong."});
                console.log(err)
            });
    },
    getOne: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.reading_all_products()
            .then( () => res.sendStatus(200).send ( product ) )
            .catch( err => {
                res.status(500).send({errorMessage: "Something Went Wrong."});
                console.log(err)
            });
    },
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.reading_specific_product()
            .then( () => res.sendStatus(200).send ( product ) )
            .catch( err => {
                res.status(500).send({errorMessage: "Something Went Wrong."});
                console.log(err)
            });
    },
    update: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.updating_products()
            .then( () => res.sendStatus(200) )
            .catch( err => {
                res.status(500).send({errorMessage: "Something Went Wrong."});
                console.log(err)
            });
    },
    delete: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.deleting_products()
            .then( () => res.sendStatus(200) )
            .catch( err => {
                res.status(500).send({errorMessage: "Something Went Wrong."});
                console.log(err)
            });
    },
};