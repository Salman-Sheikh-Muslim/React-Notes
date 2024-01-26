//this file is being used in: Imroving-Readability-Of-API -After

import apiClient from "./api-client";

/*
This the proper place for user interface to be initialized beacuse this is were we 
have all the functionality for workinh with users.
*/

//Exporting this interface because we will need to use it in different components.
export interface User {
    id: number;
    name: string;
  }
/*
Creating a UserService class. It will deal with all the CRUD
operations related to users data.
*/
class UserService {

  //contains the logic for sending HTTP request to backend.
    getAllUsers() {
        const controller = new AbortController();
        
        // return apiClient
        //  .get<User[]>("/users", {
        //    signal: controller.signal,
        //  });

       const request =  apiClient
        .get<User[]>("/users", {
          signal: controller.signal,
        });
        return { request, cancel: () => controller.abort() } 
    }


    deleteUser(id: number){

    return apiClient.delete("/users/" + id);

    }

    addNewUser(user: User){

  
      return apiClient
        .post("/users", user);
    }

   // modifyUpdateUser(id: number, updatedUser: {}){
    modifyUpdateUser(user: User){



      return apiClient.patch("/users/" + user.id, user);


    }
    }

    export default new UserService(); //exporting a new instance of UserService class as a default object.
    
    