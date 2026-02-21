// import { Client, Database, Query, ID } from "appwrite";
// const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
// const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
// const TABLE_ID = import.meta.env.VITE_APPWRITE_TABLE_ID;


// //Go over this again again again again again again again again 

// const client = new Client()
//   .setEndpoint("https://coud.appwrite.io/v1")
//   .setProject(PROJECT_ID);

// const database = new Database(client);

// // This function will trac the dearches made by different uses
// export const updateSearchCount = async (searchTerm, movie) => {
//   // console.log(PROJECT_ID, DATABASE_ID, TABLE_ID);
//   try {
//     const result = await database.listDocuments(DATABASE_ID, TABLE_ID, [
//       Query.equal("searchTerm", searchTerm),
//     ]);
//     if (result.documents.length > 0) {
//       const doc = result.documens[0]
//       await database.updateDocument(DATABASE_ID, TABLE_ID, doc$id, date: { 
//         searchTerm,
//         count: doc.count + 1, 
//         movie_id: movie.id, 
//         poster_url: `http://image.tmdb.org/t/tp/w500${movie.poster_path}`
//       })
//     } else { 
//       await database.createDocument(DATABASE_ID, TABLE_ID, ID.unique())
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };
