import React, {Component} from 'react';

import EventServiceClient from "../../services/EventServiceClient";
import UserServiceClient from "../../services/UserServiceClient";
import ReadEventHost from "./ReadEventHost";
import ReadEventAttendants from "./ReadEventAttendants";

class ReadEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: '',
            click: false,
            events: [],
            view_host:false,
            view_attendants:false
        };

        this.userService = UserServiceClient.instance;
        this.eventService = EventServiceClient.instance;
        this.handleChange=this.handleChange.bind(this);
        this.read_event_jumbo=this.read_event_jumbo.bind(this);
        this.handelViewHost=this.handelViewHost.bind(this);
    }

    componentDidMount() {
        this.eventService.read_all_events_service().then(res => this.setState({events: res}));
    }

    handleChange(new_index) {
        this.setState({index: new_index});
        this.setState({click: true});
        window.scrollTo(0,250);
    }

    render() {

       let  show=  this.state.click ? this.read_event_jumbo(this.state.index) : null;
        return (
            <div>
                {show}
                {this.state.events.map((event, index) =>
                    <div key={index }
                         className=  {event.priority===1? "card w-100 bg-warning": "card w-100" } >
                                <h3 className= "card-header"> {event.name} </h3>
                        <div className="card-body">
                            {event.priority===1? <h4>VIP Students Only </h4>:null}
                            <h4 className="card-title">{"Event Description:"}{event.description}
                                <button className="btn btn-info float-right"
                                        onClick={() => this.handleChange(index)}
                                > More Details
                                </button>
                            </h4>
                        </div>
                    </div>
                )
                }
            </div>)
    }

    handelViewHost(){
        this.setState({view_host:!this.state.view_host});
    }

    handelViewAttendants(){
        this.setState({view_attendants:!this.state.view_attendants});
    }

    read_event_jumbo(index) {
        let host = this.state.view_host?<ReadEventHost event_id={this.state.events[index].id}/>:null;
        let attendants=this.state.view_attendants? <ReadEventAttendants event_id={this.state.events[index].id}/>:null;
        return (
            <div className="jumbotron bg-white">
                <h1 >   {this.state.events[index].name}</h1>
                <h3 className="lead">
                    <div>{"Event Id:"}{this.state.events[index].id}</div>
                    <div>{"Name:"}{this.state.events[index].name}</div>
                    <div>{"Description:"}{this.state.events[index].description}</div>
                    <div>{"Game:"}{this.state.events[index].game}</div>
                    <div>{"Location:"}{this.state.events[index].location}</div>
                    <div>{"Date:"}{this.state.events[index].date}</div>
                    <div> {"Host By:"}    {this.state.events[index].host_name}  </div>
                    <div> {<button
                        onClick={()=>this.handelViewHost()}
                    >{this.state.view_host? "Hide Host Information":"See Host Information"} </button>}</div>
                    <div> {host}</div>

                    <div><button onClick={()=>this.handelViewAttendants()}
                    >{this.state.view_attendants? "Hide Attendants":"See Attendants" } </button> </div>
                    <div> {attendants}</div>

                </h3>
                <hr/>
            </div>

        )
    }


}


export default (ReadEvents);