

//! Type the following lines at the browser console:

// 'document' points globally to the current web page object
// 'getElementsByTagName' returns an array from inside 'document'
// '[0]' ensures you get the 1st element from the array that's been returned.
// 'onclick' is gonna receive a callback that is executed when the user clicks something on said web page.


document.getElementsByTagName('body')[0].onclick 
= 
function //* This function just so happens to be a callback because of 'onclick'.
(e) //! 'e' is optional, because the properties of the event 'onclick' can either be declared or not, here, in the function signature.
    //* In other words, it can be said that the event 'onclick' is not being used.
    //? Is 'e' protected by JavaScript ? How could one use event properties like 'event.Target', ... ?
{
    console.log('O evento ocorreu!')
}

// Once you press 'enter' at the browse console, the callback will be registered.
// Once the callback is registered, the callback function is executed every time the event happens.
// If you refresh the page, the callback function will be gone, as it does not come from the server.

