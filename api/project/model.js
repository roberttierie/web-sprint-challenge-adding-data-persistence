// // // // build your `Project` model here
// // const db = require('../../data/dbConfig')

// // module.exports = router \


// const db = require('../../data/dbConfig')

// module.exports = {
//     get,
//     insert,
//     update,
//     remove,
//   };

// function get(id) {
//     let query = db('projects');
  
//     if (id) {
//       return query
//         .where('id', id)
//         .first()
//         .then((action) => {
//           if (action) {
//             return mappers.actionToBody(action);
//           } else {
//             return null;
//           }
//         });
//     } else {
//       return query.then((actions) => {
//         return actions.map((action) => mappers.actionToBody(action));
//       });
//     }
//   }

  
// function insert(project) {
//     return db('projects')
//       .insert(project, 'project_id')
//       .then(([id]) => get(id));
//   }
  
//   function update(id, changes) {
//     return db('projects')
//       .where('project_id', id)
//       .update(changes)
//       .then((count) => (count > 0 ? get(id) : null));
//   }
  
//   function remove(id) {
//     return db('projects').where('project_id', id).del();
//   }