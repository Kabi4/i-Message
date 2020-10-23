import React, { Component } from 'react'
import SidebarRoom from '../../Components/SidebarRoom/SidebarRoom';
import db from '../../Firebase/Firebase';
import "./SidebarRooms.css";
class SidebarRooms extends Component {
    state = {
        chats: []
    }
    componentDidMount(){
        db.collection("chats").onSnapshot(snapshot=>{
            this.setState({chats: snapshot.docs.map(ele=>{
                return{id: ele.id,
                data: ele.data()}
            })})
        })
    }
    render() {
        return (
            <div className="sidebarrooms">
                {this.state.chats.map(ele=>{
                    return <SidebarRoom key={ele.id} id={ele.id} data={ele.data} />
                })}
            </div>
        )
    }
}

export default SidebarRooms;