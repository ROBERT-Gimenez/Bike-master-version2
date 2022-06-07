/* const {products} = require('../data/index')
 */const toThousand = n => n?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const removeAccents = (str) => {return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");}
const db = require('../database/models')

module.exports = {
    index: (req, res)=> {
        db.Producto.findAll()
        .then((product)=> {
          res.render('home' ,{
            css:'home.css',
            titulo: 'Bikesmasters',
			product,	
			toThousand,
            session:req.session
        }
        )  
        })
        .catch((error)=> {res.send(error)})
        
    },
    search: (req, res) => {
        let searchResult = [];
            products.forEach(product => {
                if(removeAccents(product.name.toLowerCase()).includes(req.query.keywords.toLowerCase())){
                    searchResult.push(product)
                }
            }
            );
            res.render ('products/searchResults',{
                titulo: 'Bikesmasters',
                css: 'home.css',
                resultado: searchResult ,
                keyword: req.query.keywords,
                toThousand,
                session: req.session
            })
            /* exports.findAll = (req, res) => {
                const title = req.query.title;
                var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
                Tutorial.findAll({ where: condition })
                  .then(data => {
                    res.send(data);
                  })
                  .catch(err => {
                    res.status(500).send({
                      message:
                        err.message || "Some error occurred while retrieving tutorials."
                    });
                  });
              }; */
        },
    Nosotros: (req, res)=> {
        res.render('admin/Nosotros' ,{
            css:'home.css',
            titulo: 'Bikesmasters',
			products,	
			toThousand,
            session:req.session
        }
        )
    }}