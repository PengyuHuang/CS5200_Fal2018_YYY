import React, {Component} from 'react';

import {Container} from 'react-grid-system';

import './App.css'

import CreateUser from "./components/user/CreateUser";
import PostManager from "./components/post/PostManager";
import EventManager from "./components/event/EventManager";
import GameManager from "./components/game/GameManager";
import UpdateUser from "./components/user/UpdateUserAdmin";
import DeleteUser from "./components/user/DeleteUserAdmin";
import  UpdateUserCurrent from "./components/user/UpdateUserCurrent";
import AdManager from "./components/ad/AdManager";
import ReadUsersAdmin from "./components/user/ReadUsersAdmin";

const newURL='http://localhost:8080/api/findUserByCredentials/';
const URL='http://cs5200-fall2018-mei.us-east-2.elasticbeanstalk.com/api/findUserByCredentials/';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                username: "",
                password: "",
                email: "",
                type: "anonymous"
            },
            which: "home",
            section_user: "Log In"
        };
        this.handleLogIn = this.handleLogIn.bind(this);
        this.logIn = this.logIn.bind(this);
        this.anonymous_return=this.anonymous_return.bind(this);
    };


    render() {
        let component = null;
        switch (this.state.which) {
            case "games":
                component = <GameManager user={this.state.user}/>;
                break;
            case "events":
                component = <EventManager user={this.state.user}/>;
                break;
            case "posts":
                component = <PostManager user={this.state.user}/>;
                break;
            case "user":
                component = this.UserManager();
                break;
            case "home":
                component = <AdManager user={this.state.user}/>;
                break;
            default:
                component =
                    <div>
                        <div className="jumbotron jumbotron-fluid bg-white">
                            <h1>一二三，牵着手</h1>
                            <h1>四五六，抬起头</h1>
                            <h1>七八九，我先去睡个觉</h1>
                        </div>
                    </div>;
        }
        return (
            <Container>
                <div className="display-3">
                    <span>YYY</span>
                </div>
                <div>
                    <h6>Name: {this.state.user.username}</h6>
                </div>
                <div>
                    <h6>Role: {this.state.user.type}</h6>
                </div>

                <div className="btn-group d-flex " role="group">
                    <button className="btn btn-info w-100" onClick={() => this.setState({which: "home"})}>
                        Home
                    </button>
                    <button className="btn btn-info w-100" onClick={() => this.setState({which: "games"})}>
                        Games
                    </button>
                    <button className="btn btn-info w-100" onClick={() => this.setState({which: "events"})}>
                        Events
                    </button>
                    <button className="btn btn-info w-100" onClick={() => this.setState({which: "posts"})}>
                        Blog
                    </button>
                    <button className="btn btn-info w-100" onClick={() => this.setState({which: "user"})}>
                        User
                    </button>
                </div>
                {component}
            </Container>
        )
    }


    handleLogIn(username, password) {
        fetch(URL
            + username + "/" + password).then(res => res.json()).then(res => {
            if (res.length) {
                this.setState({user: res[0]});
                alert("Welcome Back!" + username);

            } else {
                alert("Wrong Credentials.")
            }
        });
    }

    logIn() {
        let username = "";
        let password = "";
        return (
            <div>

                <div className="form-group">
                    <label> Username: </label>
                    <input onChange={event => {
                        username = event.target.value
                    }}
                           type="text" className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label> Password: </label>
                    <input onChange={event => {
                        password = event.target.value
                    }}
                           type="password" className="form-control"
                    />
                </div>
                <button className="btn btn-info input-group-text" id="inputGroup-sizing-lg"
                        onClick={() => this.handleLogIn(username, password)}> Log In
                </button>

            </div>
        )
    }

    handleLogOut() {
        this.setState({
            user: {
                username: "",
                password: "",
                email: "",
                type: "anonymous"
            }
        });
        alert("We hope to see you soon.");

    }

    logOut() {
        return (
            <div>
                <h3>Welcome back {this.state.user.username}! </h3>
                <h3> You are logged in now, do you want to log out?</h3>
                <button className="btn btn-info input-group-text" id="inputGroup-sizing-lg"
                        onClick={() => this.handleLogOut()}

                > Yes, Log Out
                </button>
            </div>
        )
    }


    UserManager() {
        let component = null;
        switch (this.state.section_user) {
            case "Create New User":
                component = <CreateUser/>;
                break;
            case "Update An User":
                component = <UpdateUser/>;
                break;
            case "Edit Your Profile":
                component = <UpdateUserCurrent user={this.state.user}/>;
                break;
            case "Delete An User":
                component = <DeleteUser/>;
                break;
            case "Find All Users":
                component = <ReadUsersAdmin/>;
                break;

            default:
                component = this.state.user.type === "anonymous" ? this.logIn() : this.logOut();
        }

        let return_by_type = null;

        switch (this.state.user.type) {
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
            case "advertiser":
                return_by_type = this.organization_return();
                break;
            case "anonymous":
                return_by_type = this.anonymous_return();
                break;
            default:
                return_by_type = this.anonymous_return();
        }

        return (
            <Container>
                <div className="jumbotron jumbotron-fluid bg-white">
                    <h1>Welcome to YYY!</h1>
                    <h1>Create a profile and join us!</h1>
                    <h1>You can log in and manage your profile here!</h1>
                </div>
                {return_by_type}
                <h1><strong>
                    {
                        (this.state.user.type === "anonymous" && this.state.section_user === "Log In") ?
                            "Log In"
                            : (this.state.section_user === "Log In") ? "Log Out" :
                            this.state.section_user}
                </strong></h1>
                <hr/>
                {component}
            </Container>
        )
    }

     admin_return(){
        return(
            <div className="btn-group d-flex" role="group">
                <button className="btn btn-info w-100"
                        onClick={() => {this.setState({section_user: "Log In"})}}>
                    {this.state.user.type === "anonymous" ? "Log In" : "Log Out"}
                </button>
                <button className="btn btn-info w-100"
                        onClick={() => this.setState({section_user: "Edit Your Profile"})}>Edit Your Profile
                </button>
                <button className="btn btn-info w-100"
                        onClick={() => this.setState({section_user: "Find All Users"})}>Find All Users
                </button>
                <button className="btn btn-info w-100"
                        onClick={() => this.setState({section_user: "Create New User"})}>Create New User
                </button>
                <button className="btn btn-info w-100"
                        onClick={() => this.setState({section_user: "Update An User"})}>Update An User
                </button>
                <button className="btn btn-info w-100"
                        onClick={() => this.setState({section_user: "Delete An User"})}>Delete An User
                </button>

            </div>)
     }

    anonymous_return(){
        return(
            <div className="btn-group d-flex" role="group">
                <button className="btn btn-info w-100"
                        onClick={() => {this.setState({section_user: "Log In"})}}>
                    {this.state.user.type === "anonymous" ? "Log In" : "Log Out"}
                </button>
                <button className="btn btn-info w-100"
                        onClick={() => this.setState({section_user: "Create New User"})}>Create New User
                </button>
            </div>)
    }

    student_return(){
        return(
            <div className="btn-group d-flex" role="group">
                <button className="btn btn-info w-100"
                        onClick={() => {this.setState({section_user: "Log In"})}}>
                    {this.state.user.type === "anonymous" ? "Log In" : "Log Out"}
                </button>
                <button className="btn btn-info w-100"
                        onClick={() => this.setState({section_user: "Edit Your Profile"})}>Edit Your Profile
                </button>
                <button className="btn btn-info w-100"
                        onClick={() => this.setState({section_user: "Create New User"})}>Create New User
                </button>

            </div>)
    }
    organization_return(){
        return(
            <div className="btn-group d-flex" role="group">
                <button className="btn btn-info w-100"
                        onClick={() => {this.setState({section_user: "Log In"})}}>
                    {this.state.user.type === "anonymous" ? "Log In" : "Log Out"}
                </button>
                <button className="btn btn-info w-100"
                        onClick={() => this.setState({section_user: "Edit Your Profile"})}>Edit Your Profile
                </button>
                <button className="btn btn-info w-100"
                        onClick={() => this.setState({section_user: "Create New User"})}>Create New User
                </button>

            </div>)
    }
     
    
    
    

}

export default Home;

/*
    component = <div className="jumbotron-fluid bg-white">
                    <h1> 这是主页，我还没做好，这里可以放很多东西</h1>
                    <h1> 我是谁？我在哪？我在干什么？</h1>
                    <h1> 这不是QQ空间，真的不是。</h1>
                    <h1> 这也不是人人网！</h1>
                </div>
 */


