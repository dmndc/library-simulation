module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance.create_book()
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  },

  getOne: (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance.read_book()
      .then( book => res.status(200).send(book) )
      .catch( () => res.status(500).send() );
  },

  getAll: (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance.read_books()
      .then( books => res.status(200).send(books) )
      .catch( () => res.status(500).send() );
  },

  update: (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance.update_book()
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  },

  delete: (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance.delete_book()
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  }
};