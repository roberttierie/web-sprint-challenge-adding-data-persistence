// // build your `Resource` model here

// const db = require('../../data/dbConfig')

// module.exports = {
//     get,
//     insert,
//     update,
//     remove,
//   };

// function get(id) {
//     let query = db('resources');
  
//     if (id) {
//       return query
//         .where('resource_id', id)
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

  
// function insert(resource) {
//     return db('resources')
//       .insert(resource, 'resource_id')
//       .then(([id]) => get(id));
//   }
  
//   function update(id, changes) {
//     return db('resources')
//       .where('resource_id', id)
//       .update(changes)
//       .then((count) => (count > 0 ? get(id) : null));
//   }
  
//   function remove(id) {
//     return db('resources').where('resource_id', id).del();
//   }