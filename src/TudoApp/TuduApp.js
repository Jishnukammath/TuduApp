import React, { Component } from 'react'
import "./TuduApp.css"


export class TuduApp extends Component {
    state={
        input:"",
        items:[]
    }
    handleChange=(event)=>{
        this.setState({
            input:event.target.value
        })
        
    }

    storeItems=(event)=>{
        event.preventDefault();
        const{input}=this.state;
        this.setState({
            items:[...this.state.items,input],
            input :""
        })

    }
    deleteitem=(index)=>{
        const allitems=this.state.items;
        allitems.splice(index,1)
        this.setState({
            items:allitems
        })

    }



    render() {
        const {input,items}=this.state;
     
        
        return (
            <div className="Tudu-container">
                
                <form className="input-section" onSubmit={this.storeItems}>
                    <h1>TuduApp</h1>
                    <input 
                    type="text"
                     onChange={this.handleChange}
                     value={input}
                      placeholder="enter items.."/>
                    
                </form>
                <ul>
                    {items.map((data,index)=>(
                    <li key={index}  >{data} <i className="fa fa-trash" aria-hidden="true" onClick={()=>this.deleteitem(index)}></i></li>
                    ))}
                   
                    
                </ul>
                
            </div>
        )
    }
}

export default TuduApp;
