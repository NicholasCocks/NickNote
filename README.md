# NickNote
Nicknote is an elegant, fully functional full-stack Evernote clone built on React / Redux and Ruby on Rails. [Live link](https://nicknote.herokuapp.com/) :).

## Key Features && MVPs
 * Create, favorite, and move notes between notebooks.
 * Create notebooks.
 * Create tags for notes.
 * Search and filter notes by tag.
 * Autosave!
 * Rich text edting.

## Architecture & Technologies
  * Frontend: React / Redux, JavaScript, Node.js, Webpack, CKEditor 5 
  * Backend: Ruby on Rails, JBuilder, Postgresql, SQL
  
 ![nicknotegif.gif](/app/assets/images/nicknotegif.gif)
  
## Challenges & Solutions
Both of these solutions I chose to display because of how "simple" (read: 'needing a lot of upfront work to make the implementation easy) they turned out to be.

### Autosave
This was my favorite solution as the code for it is very short and elegant. A simple timer object is created when the notepad component mounts. Then when the user types the state is set to that user's input, and the timer (if there is one) is cleared and then set again; after 1 second the Ajax request to update the note fires.

There's some code that handles the display of autosave but the actual functionality is all here in less than 10 lines of code. It shows that spending a lot of time upfront thinking about a problem and plannig leads to clean short code later.

`
 updateField(field) {
        //debouncing
        clearTimeout(this.timer)
        
        //autosave
        if (!this.state.saved) {
            this.timer = setTimeout(() => {
                this.props.updateNote(this.state.note)
                this.setState({note: this.state.note, saved: true})
            }, 1000)
        }

        //statesave
        return e => this.setState({note: Object.assign({}, this.state.note, { [field]: e.currentTarget.value } ), saved: false}); 
    }
`
### Sharing the Notebook Component
'All Notes', 'Starred', 'Trash' 'Tags', and 'Notebooks' all share the same Notebook / Notepad component. This makes fixing bugs and adding features fast and straightforward as code only needs to be written in one place. This also means switching between views is incredibly fast as I can have all a user's note data be fetched on mounting and it is saved in Redux's Store until needed for any specific display. 

## Upcoming Additional Features
 * Searching for notes using multiple tags.
 * Sorting notebooks.
 * Templates for notes.
