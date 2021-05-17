//! A class should have a single primary responsability.

//! A class sould have only one reason to change, and that's
//!  related to its responsability.

//! Therefore, it's a bad idea to add more than one
//! responsability to a class.

class Journal
{
    constructor() {
        this.entries = {}; //* These are the journal entries.

    }

    //* Primary responsability: add & remove entries.
    addEntry(text) //! This is a method. 
    {
        let c = ++Journal.count;
        let entry = `${c}: ${text}`
        this.entr
    }
}

Journal.count = 0; //* We'll add to this, whenever we
                   //* add a new journal entry.

Journal.addEntry('I cried today.')
Journal.addEntry('I ate a bug.')



