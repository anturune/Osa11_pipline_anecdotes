import React, { useEffect } from 'react'
//Vote funktio on "anecdoteReducer.js" filessä
//import { voteAnecdote } from './reducers/anecdoteReducer'
//import { useSelector, useDispatch } from 'react-redux'
//import { AnecdoteForm } from './components/AnecdoteForm'
import { AnecdoteList } from './components/AnecdoteList'
//import { Notification } from './components/Notification'
//import { Filter } from '../frontend/client/components/AnecdoteFilter'

//-----NÄMÄ KUN KÄYTETÄÄN useSelector ja useDispatch HOOKIEIDEN SIJAAN connect FUNKTIOITA ALKAA------
import ConnectedNotification from './components/Notification'
import ConnectedAnecdoteForm from './components/AnecdoteForm'
import ConnectedFilter from './components/AnecdoteFilter'
//-----NÄMÄ KUN KÄYTETÄÄN useSelector ja useDispatch HOOKIEIDEN SIJAAN connect FUNKTIOITA LOPPUU-----


//------------NÄMÄ TARVITAAN INITIAL TILAN LUOMISEKSI/db.json FILESTÄ DATAN HAKEMISEKSI ALKAA--------
//import anecdoteService from './services/anecdotes'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
//------------NÄMÄ TARVITAAN INITIAL TILAN LUOMISEKSI/db.json FILESTÄ DATAN HAKEMISEKSI LOPPUU--------



const App = () => {

  const dispatch = useDispatch()
  console.log('Tuleeko APP.js')
  useEffect(() => {
    dispatch(initializeAnecdotes())
    //Jos ei lisätä hakasulkeiden sisään "dispatch" tulee eslint herja
    //toimisi ilman "dispatch" tekstiä myös vaikka herja jäisikin
  }, [dispatch])


  //----KUN KÄYTETÄÄN CONNECTEDIA useSelector JA useDispatch HOOKIEN SIJAAN ALKAA--------
  return (
    <div>
      <ConnectedNotification />
      <h2>Filter anecdote</h2>
      <ConnectedFilter />
      <br></br>
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <h2>create new</h2>
      <ConnectedAnecdoteForm />
    </div>
  )
}
//----KUN KÄYTETÄÄN CONNECTEDIA useSelector JA useDispatch HOOKIEN SIJAAN LOPPUU--------

export default App