const { getAll, addOne, deleteOne } = require(`../controllers`)

module.exports = app => {
  // GET all burgers
  app.get(`/burgers`, (req, res) => {
    getAll()
      .then(movies => res.json(burgers))
      .catch(e => console.log(e))
  })
  // POST a burger
  // app.post(`/burgers`, (req, res) => {
  //   addOne()
  //     .then(_ => )
  // })
  // })
  // // DELETE a burger
  // app.delete(`/burgers/:id`, (req, res) => {
  //   deleteOne()
  // })
}