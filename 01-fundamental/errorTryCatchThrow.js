//TODO: need this function be stated before ? YES -> remember what used to happen to variables
/! existence of variable, functions, objects is noted, content IS NOT noted/
function tratarErroELancar(erro) {
  //! STUDY: AJAX request to save the error somewhere !
  // throw new Error("...") //! Only one throw may be defined at a time !
                            //* Error: reserverd word -> can't use it to name anything.
                            //? This line seems to be mistaken, compared to the others.
  // throw 10
  // throw true
  // throw 'A generic error message!'
   throw { //! 'catch' returns an object that contains all this info !
       nome: erro.name,
       msg: erro.message,
       date: new Date
   } //! Do note the object was only loosely declared.
   //* You could also work with an errorID, stuff like that.
}

function imprimirNomeGritado(obj) {
  try {
    // When in here, you already assume some error may come up !

    // By definition, this blick is for potentially dangerous code !

    console.log(obj.name.toUpperCase() + "!!!") //! WHAT IS A 'console.log' FAILURE ?

    //* THIS BLOCK IS MADE FOR AUTOMATIC ERROR DETECTION
    //TODO: thus, there must be some boolean lying around

  } catch (genericErrorLabel) {
    //* and this happens only if the error actually happens
    //* THIS BLOCK IS MADE FOR AUTOMATIC ERROR HANDLING

    //! In this test, you do get an error!

    //* First, learn about the error captured by catch:
    console.log('1. The error returned type: ' + typeof genericErrorLabel)
    console.log('2. Now printing the error: ' + genericErrorLabel)

    //! Now, actually doing something with the error:
    tratarErroELancar(genericErrorLabel) 

  } finally { //* This block is always executed in a try/catch operation.
    //?
    console.log("Is this try/catch template good enough ?");
  }
}

//! FUNCTION ARGUMENTS NEED BE IMPLEMENTED ONLY BEFORE FUNCTION IS CALLED
const obj = { name: "Roberto" }; //! PLAY: write 'name', 'neme', an see that it only works with 'name' ;-)
imprimirNomeGritado(obj);

/* IMPORTANT MESSAGE: avoid showing to the user:
1. messages revealing details about the app's infrastructure
2. big messages will frighten the user
3. messages in other languages, that make no sense to the user

4. COOL IDEA: the error may generate a HASH, and the user can
send you that HASH, and you'll know all the details about the
error that happened.

*/