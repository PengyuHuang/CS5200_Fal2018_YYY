import React, {Component} from 'react';
import CreateEvent from "./CreateEvent";
import UpdateEvent from "./UpdateEvent";
import DeleteEvent from "./DeleteEvent";
import ReadEventsNew from "./ReadEvents";
import JoinEventVIPStudent from "./JoinEventVIPStudent";
import QuitEvent from "./QuitEvent";
import JoinEventStudent from "./JointEventStudent";
import DeleteEventAdmin from "./DeleteEventAdmin";
import UpdateEventAdmin from "./UpdateEventAdmin";


class EventManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            which: 'Check All Events'
        };

    }

    anonymous_return(){
        return(
            <div>
            <div className="btn-group d-flex" role="group">
                <button className="btn btn-info w-100"
                        onClick={() => this.setState({which: "Check All Events"})} >Check All Events</button>

            </div>
            <hr/>
            <h3><strong>Log in to join an event!</strong></h3>
        <hr/>
        </div>


        )
    }
    organization_return(){
        return(
            <div className="btn-group d-flex" role="group">
                <button className="btn btn-info w-100"
                        onClick={() => this.setState({which: "Check All Events"})} >Check All Events</button>

                <button className="btn btn-info w-100"
                        onClick={() => this.setState({which: "Create An Event"})} >Create An Event</button>

                <button className="btn btn-info w-100"
                        onClick={() => this.setState({which: "Update An Event"})} >Update An Event</button>

                <button className="btn btn-info w-100"
                        onClick={() => this.setState({which: "Delete An Event"})} >Delete An Event</button>
            </div>
        )
    }


    student_return(){
        return(
            <div className="btn-group d-flex" role="group">
                <button className="btn btn-info w-100"
                        onClick={() => this.setState({which: "Check All Events"})} >Check All Events</button>

                <button  className="btn btn-info w-100"
                         onClick={() => this.setState({which: "Join An Event"})}> Join An Event</button>

                <button className="btn btn-info w-100"
                        onClick={() => this.setState({which: "Quit An Event"})}>Quit An Event</button>
            </div>
        )
    }
    admin_return(){
        return(
            <div className="btn-group d-flex" role="group">
                <button className="btn btn-info w-100"
                        onClick={() => this.setState({which: "Check All Events"})} >Check All Events</button>

                <button className="btn btn-info w-100"
                        onClick={() => this.setState({which: "Create An Event"})} >Create An Event</button>

                <button className="btn btn-info w-100"
                        onClick={() => this.setState({which: "Update An Event"})} >Update An Event</button>

                <button className="btn btn-info w-100"
                        onClick={() => this.setState({which: "Delete An Event"})} >Delete An Event</button>

                <button  className="btn btn-info w-100"
                         onClick={() => this.setState({which: "Join An Event"})}> Join An Event</button>

                <button className="btn btn-info w-100"
                        onClick={() => this.setState({which: "Quit An Event"})}>Quit An Event</button>
            </div>
        )
    }

    render() {

        let component = null;
        switch (this.state.which) {
            case "Check All Events":
                component = <ReadEventsNew user={this.props.user}/>;
                break;
            case "Create An Event":
                component = <CreateEvent user={this.props.user} />;
                break;
            case "Update An Event":
                component = this.props.user.type==="admin"? <UpdateEventAdmin user={this.props.user}/>:
                    <UpdateEvent user={this.props.user}/>;
                break;
            case "Delete An Event":
               component = this.props.user.type==="admin"? <DeleteEventAdmin user={this.props.user}/>:
               <DeleteEvent user={this.props.user}/>;
                break;
            case "Join An Event":
             component = this.props.user.type==="vip_student"?  <JoinEventVIPStudent user={this.props.user}/>:
                <JoinEventStudent user={this.props.user}/>;

                break;
            case "Quit An Event":
               component = <QuitEvent user={this.props.user}/>;
                break;
            default:
                component = <ReadEventsNew/>;
        }

        let return_by_type=null;
        switch (this.props.user.type) {
            case "admin":
                return_by_type = this.admin_return();
                break;
            case "student":
                return_by_type = this.student_return();
                break;
            case "vip_student":
                return_by_type = this.student_return();
                break;
            case "organization":
                return_by_type = this.organization_return();
                break;
            default:
                return_by_type = this.anonymous_return();
        }


        return (
            <div>
                <div className="jumbotron jumbotron-fluid bg-white">
                    <h1>Events! Game Events!Ready to have fun with your fellows?</h1>
                    <h1>Organizations can create and manager their events here.</h1>
                    <h1>Students can join events, some events are exclusive only for VIP.</h1>
                </div>
                {return_by_type}
                <h1><strong>{this.state.which}</strong></h1>
                <hr/>
                {component}
            </div>
        )

    }
}


export default EventManager;