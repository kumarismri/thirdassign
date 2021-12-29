import React,{useState} from 'react'

const ComponentOne = () => {

    const[content, setContent] = useState(true);
    const[state,setState]=useState(
        {
            name:"",
            department:"",
            rating:"",
        }
    )

    const [secState,setSecstate]=useState([])

    const eventFunction=(event)=>{

        setState({...state,[event.target.name]:event.target.value})

    }

    const submitFun=(e)=>{
        e.preventDefault()
        setSecstate([...secState,{...state}])
        setContent(false)
    }
    return (
        <div className='parent'>
            {content?
            <>
            <h1>EMPLOYEE FEEDBACK FORM</h1>
            <form onSubmit={submitFun}>
                
                <label name="name">Name:</label>
                <input className="btn" type="text" name="name" value={state.name} onChange={eventFunction}/><br/><br/>
                
                
                <label name="department">Department:</label>
                <input className="btn" type="text" name="department" value={state.department} onChange={eventFunction}/><br/><br/>
            
   
                <label name="rating">Rating:</label>
                <input className="btn" type="number" name="rating" value={state.rating} onChange={eventFunction}/><br/><br/>
                
           
                <input className="btnn" type="submit"/>               
            </form></> :
            
            <><h1>EMPLOYEE FEEDBACK DATA</h1>
            <div className='card'>{        
                secState.map((value)=>{
                    return(
                        <div className="innerCard">Name:{value.name}| Department:{value.department}|Rating:{value.rating}</div>
                    )                 
                })
            }   
            </div>
            <button className='btnn' onClick={ ()=> setContent(true) }>GO BACK</button>
            </>
            }           
        </div>
    )
}

export default ComponentOne