describe('ANECDOTE END TO END TESTING', function () {
    //Testaan uuden anecdoten luomista
    //#newAnecdoteId ja #submit-buttonId "src/components/AnecdoteForm"
    it('a new anecdote can be created', function () {
        cy.visit('http://localhost:3001')
        cy.get('#newAnecdoteId').type('an anecdote created by cypress')
        cy.get('#submit-buttonId').click()
        //Tällä varmistetaan, että luotu anecdote tulee näkyville anecdotelistalle
        cy.contains('an anecdote created by cypress')
    })
    describe('Possible to vote', function () {
        //Ennen jokaista testiä luodaan uusi anecdote
        //Tässä kohtaa kun testataan votetusta, niin uuden anecdoten luominen tehdää
        //filestä "cypress/support/commands.js"
        beforeEach(function () {
            cy.createNewAnecdote({
                content: 'created by cypress'
            })

        })
        //Testataan votetusta
        it('possible to vote', function () {
            //Painetaan vote nappia
            cy.contains('vote').click()
            //Tarkastetaan, että löytyy luku 1 eli votetusten määrä
            cy.contains(1)

        })
    })
})