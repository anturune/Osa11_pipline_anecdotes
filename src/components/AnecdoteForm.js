
import React from 'react'
//Tämä iport tarvitaan connect funktion käyttöön
import { connect } from 'react-redux'
//import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createNewNotification, removeNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'


//---------TÄLLAINEN KOMPONENTTI, KUN KÄYTETÄÄN connect FUNKTIOTA ALKAA-----------------------
//Uuden Anekdootin eristmäinen omaan komponenttiin ja exportattu muiden komponenttien/failien
//käyttöön
const AnecdoteForm = (props) => {
    
    //Muutetaan async/await, koska talletetaan uusi anecdote json serverille
    const addNewAnecdote = async (event) => {
        event.preventDefault()
        
        const content = event.target.newAnecdote.value
        event.target.newAnecdote.value = ''
        //Kun käytetään connect funktiota, "createAnecdote" ja "createNewNotification"
        //on välitetty propseina
        props.createAnecdote(content)
        console.log('UUSI ANEKDOOTTI', content)
        props.createNewNotification(`YOU CREATED: '${content}'`, 10)

    }

    return (
        <div>
            <form onSubmit={addNewAnecdote}>
                <div><input name="newAnecdote" /></div>
                <button type="submit">create</button>
            </form>
        </div>
    )
}
//Tässä mahdollistetaan importattu "createAnecdote" reducer välittäminen propseina
//AnecdoteForm -komponentille
const mapDispatchToProps = {
    createAnecdote,
    createNewNotification,
}
//Tällä välitetään "mapDispatchToProps" propsina AnecdoteForm-komponentille
//HUOM! Default arvo null, muuten ei toimi renderöinti
const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)
export default ConnectedAnecdoteForm

//------------------TÄLLAINEN KOMPONENTTI, KUN KÄYTETÄÄN connect FUNKTIOTA LOPPUU-----------------------


