
//Annetaan initial arvo notification objectille
const initialState = { value: 'Mukavaa päivää' }


const notificationReducer = (state = initialState, action) => {

    switch (action.type) {

        //case 'VOTE_ANECDOTE_NOTE':
        //console.log('TULEEKO NOTIFICATIONIIN case VOTE', action.data)
        //return { ...state, value: 'ANECDOTE VOTED: ' + action.data.content }
        //Luodaan uusi Anecdote
        //case 'NEW_ANECDOTE_NOTE':
        //console.log('TULEEKO NOTIFICATIONIIN case NEW_ANECDOTE_NOTE', action.data)
        //return { ...state, value: 'NEW ANECDOTE ADDED: ' + action.data.content }

        //----NÄIN KUN LUODAAN AWAIT/ASYNC:llä ALKAA----------------------------------------------
        case 'NEW_NOTIFICATION':
            //Notificaation sisältö tulee alla olevast actionista ja action saa taas sisällönsä
            //"src/components/AnecdoteForm.js" filestä
            console.log('TULEEKO NOTIFICATIONIIN case NEW_ANECDOTE_NOTE', action.data)
            return { ...state, value: action.data.notification }
        //Poistetaan notificaatio 5sec jälkeen
        case 'REMOVE_NOTE':
            return { ...state, value: null }

        //----NÄIN KUN LUODAAN AWAIT/ASYNC:llä LOPPUU----------------------------------------------
        default:
            return state
    }
}



//------------ASYNC/AWAITILLA NOTIFICATION ALKAA-------------
//Lisätään ns. globaali muuttuja, jolla voidaan pitää yllä edellisen vote-nappulan
//painalluksen setTimeoutin ID:tä
let handleSetTimeOutId = null
export const createNewNotification = (notification, howLong) => {
    console.log('createNewNotification', notification)
    return async dispatch => {
        console.log('TIMEOUT ID:n ARVO', handleSetTimeOutId)
        await dispatch({
            type: 'NEW_NOTIFICATION',
            data: { notification }
        })
        //Ehtolause timeOutin clearaamiseen, kun painetaan useasti vote nappia 
        if (handleSetTimeOutId !== null) {
            console.log('KÄVIKÖ IFFISSÄ')
            clearTimeout(handleSetTimeOutId)
            handleSetTimeOutId = null
        }
        //Otetaan uusimman painalluksen timeout ID:n arvo talteen
        handleSetTimeOutId = setTimeout(() => {
            dispatch({ type: 'REMOVE_NOTE' })
        }, howLong * 1000)
        console.log('TIMEOUT ID:n ARVO', handleSetTimeOutId)
    }
}

//------------ASYNC/AWAITILLA NOTIFICATION LOPPUU-------------

export default notificationReducer
