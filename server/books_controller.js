module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { title, author, description, img, in_stock } = req.body;

    dbInstance.create_book([ title, author, description, img, in_stock ])
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  },

  getOne: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { params } = req;

    dbInstance.read_book([ params.id ])
      .then( book => res.status(200).send(book) )
      .catch( () => res.status(500).send() );
  },

  getAll: (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance.read_books()
      .then( books => res.status(200).send(books) )
      .catch( () => res.status(500).send() );
  },

  // UPDATE FUNCTION NOT WORKING RIGHT
  update: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { title, author, description, img, in_stock } = req.body;
    const { params } = req;

    dbInstance.update_book([ params.id, title, author, description, img, in_stock ])
      .then( book => res.status(200).send(book) )
      .catch( () => res.status(500).send() );

    console.log(req.body);
  },

  delete: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { params } = req;

    dbInstance.delete_book( [params.id] )
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  }
};