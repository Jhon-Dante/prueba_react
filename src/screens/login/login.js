import React from "react";
import { useNavigate } from 'react-router-dom';
import Auth from "../../services/modules/Auth";
import { connect } from "react-redux";

class Login extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            form:{
                username: '',
                password: '',
            },
        };
      }

    handleInput = (e) => {
        let { name, value } = e.target;

        this.setState(state => ({
            form: {
                ...state.form,
                [name]: value
            }
        }));
    }
    
    authenticate = (e) => {
        e.preventDefault();

        Auth.auth(this.state.form)
        .then(async response => {
            const { data } = response;
            this.setState(state => ( {
                form:{
                    username: '',
                    password: '',
                },
            }));

            let user = data
            localStorage.setItem("user",user);
            const navigate = useNavigate()
            navigate("/add-members");

            return user;
        })
        .catch(
        //   () => Globals.showError()
            console.log('error')
        );
    }

    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className=" mt-5 row justify-content-center">
                        <div className="col-md-4">
                            <h2>
                                <span className="login_title">Login</span>
                            </h2>
                            <div className="card">
                                <div className="card-body">
                                <form onSubmit={this.authenticate} >
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" className="form-control" name="username" onChange={this.handleInput} value={this.state.form.username}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" name="password" onChange={this.handleInput} value={this.state.form.password}/>
                                    </div>
                                    <button className="mt-4 btn btn-danger">Log in</button>
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;