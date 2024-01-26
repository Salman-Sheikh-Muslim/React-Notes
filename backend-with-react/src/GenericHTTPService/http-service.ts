import apiClient from "../services/api-client";

interface Entity {
    id: number;
}

/*
There are 2 ways we can define a endpoint. Endpoint is the URL where
we send request to the server.

The first way is to add the endpoint as a parameter in the function
and so when the function is called the endpoint will be supplied as an
argument.

The other ways is to add the endpoint as a property in this class.

    endpoint: string;

    Then we create a constructor which is called when we create an instance
    of this class.

    constructor(endpoint: string) {
        this.endpoint = endpoint; //assiging the endpoint property with endpoint parameter.
        
    }


 */


class HTTPService {

    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
        
    }


    /*when we call this function we wil
    do it like this:

    getAll<Users>() //In angle brackets supplying it an argument


    */

    //Defining a Generic Method


    //getAll<T>( endpoint: string) {
    getAll<T>() {
        //T in this context is called a generic type parameter; its a placeholder for a type.

        const controller = new AbortController();
   

       const request =  apiClient
       // .get<T[]>("/users", {
        .get<T[]>(this.endpoint + '/', {
          signal: controller.signal,
        });
        return { request, cancel: () => controller.abort() } 
    }


    deleteting(id: number){

    return apiClient.delete(this.endpoint + "/" + id);

    }

    addNew<T>(entity: T) //Changing the type to T also adding T in <> brackets.
    { 

  
      return apiClient
        .post(this.endpoint + "/", entity);
    }

   // modifyUpdate(id: number, updatedUser: {}){
    modifyUpdate<T extends Entity>(entity: T){



      return apiClient.patch(this.endpoint + "/" + entity.id, entity);
      /*
      Typescript compiler does not know that entity instance of type T have a property
      called id. To solve theis problem we need to add a constraint to type T.

      We need to tell Typescript compiler that objects of type T should have a property
      called id. We can do this by using an interface.

      interface Entity {
    id: number;
}

<T extends Entity>
      */


    }
    }

   /*
   export default new HTTPService(); 

   We do nor want to create a new instance of this class beacuse in it we need to pass
   the endpoint.

      export default new HTTPService('/uesrs');
      
      We do not want to harcode an endpoint beacuse with this our http service
      will n longer be reusable.

    */ 
    
    const create = (endpoint: string) => new HTTPService(endpoint);

    export default create; //exporting dunction to create instace of this class.