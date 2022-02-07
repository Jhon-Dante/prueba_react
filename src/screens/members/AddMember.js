import React from "react";
import Ethnicity from '../../services/modules/Ethnicity';
import Gender from '../../services/modules/Gender';
import Position from '../../services/modules/Position';
import Sickplan from '../../services/modules/Sickplan';
import Title from '../../services/modules/Title';
import Members from '../../services/modules/Members';
import UnionMemberShipStatus from '../../services/modules/UnionMemberShipStatus';
import { toast } from 'react-toastify';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { Link } from 'react-router-dom';


const races = [
    {'id': 1, name:'Asian'},
    {'id': 2, name:'American'},
    {'id': 3, name:'Caucasian'},
    {'id': 4, name:'Brown'},
    {'id': 5, name:'Afro-American'},
]

class AddMember extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            form:{
                title: '',
                lastname: '',
                firstname: '',
                middlename: '',
                suffix: '',
                address1: '',
                address2: '',
                zip_code: '',
                state: '',
                city: '',
                social_security: '',
                employee_number: '',
                iaff: '',
                member_status: '',
                date_birth: '',
                date_join: '',
                gender: '',
                race: '',
                original_hire: '',
                badge: '',
                position: '',
                sickplan: '',
                home_phone: '',
                cell_phone: '',
                email: '',
            },
            ethnicity:[],
            gender: [],
            sickplan: [],
            title:[],
            union_membership_Status:[],
        }
    }

    componentDidMount() {
        this.load();
    }

    load(){
        const { page, data } = this.state;

        Promise.all([
            Ethnicity.getEthnicity(),
            Gender.getGender(),
            Position.getPosition(),
            Sickplan.getSickplan(),
            Title.getTitle(),
            UnionMemberShipStatus.getUnionMemberShipStatus(),
        ]).then(response => {
            this.setState({
                ethnicity: response[0],
                gender: response[1],
                position: response[2],
                sickplan: response[3],
                title: response[4],
                union_membership_Status: response[5]
            });
        })
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

    SaveMember = (e) => {
        e.preventDefault();

        Members.addMember(this.state.form)
        .then(async response => {
            this.setState(state => ( {
                form:{
                    title: '',
                    lastname: '',
                    firstname: '',
                    middlename: '',
                    suffix: '',
                    address1: '',
                    address2: '',
                    zip_code: '',
                    state: '',
                    city: '',
                    social_security: '',
                    employee_number: '',
                    iaff: '',
                    member_status: '',
                    date_birth: '',
                    date_join: '',
                    gender: '',
                    race: '',
                    original_hire: '',
                    badge: '',
                    position: '',
                    sickplan: '',
                    home_phone: '',
                    cell_phone: '',
                    email: '',
                },
            }));
            toast.success(
                'Miembro Registrado!',
                { position: toast.POSITION.BOTTOM_RIGHT }
            )
        })
        .catch(
        //   () => Globals.showError()
            console.log('error')
        );

    }

    render(){
        const {
            form,
            ethnicity,
            gender,
            sickplan,
            title,
            union_membership_Status,
            races,
        } = this.state;
        return(
            <div className="container">
                <div className="header">
                    <Link className='link' to={'/'}>
                        <span>
                            <ArrowBackIcon sx={{ fontSize: 18 }}/>
                            Back to DashBoard
                        </span>
                    </Link><br/>
                    <span className="title"><strong>Add Member</strong></span>
                </div>
                <br />
                <br /><br />
                <div className="mt-4 mb-4 row justify-content-end">
                    <div className="col-md-8">
                        <form onSubmit={this.SaveMember} >
                            <div className="card">
                                <div className="card-body">
                                    <div className="row justifi-content-center">
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <span className="subtitle">Personal Info</span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Title</label>
                                                        <select name="title" className="form-select" onChange={this.handleInput} >
                                                            <option selected disabled>Select a Title</option>
                                                            {title?.map((Item, key) => {
                                                                return (
                                                                    <option
                                                                        key={key}
                                                                        value={Item.id}
                                                                    >
                                                                        {Item.name}
                                                                    </option>
                                                                );
                                                            })}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Last Name<span className="required">*</span></label>
                                                        <input name="lastname" type="text" className="form-control" placeholder="Last Name" onChange={this.handleInput} value={this.state.form.lastname}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>First Name<span className="required">*</span></label>
                                                        <input name="firstname" type="text" className="form-control" placeholder="First Name" onChange={this.handleInput} value={this.state.form.firstname}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Middle Name</label>
                                                        <input name="middlename" type="text" className="form-control" placeholder="Middle Name" onChange={this.handleInput} value={this.state.form.middlename}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Suffix (type in custom Suffix)</label>
                                                        <input name="suffix" type="text" className="form-control" placeholder="Suffix" onChange={this.handleInput} value={this.state.form.suffix}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Address <small>(1)</small></label>
                                                        <input name="address1" type="text" className="form-control" placeholder="Address (1)" onChange={this.handleInput} value={this.state.form.address1}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Address <small>(2)</small></label>
                                                        <input name="address2" type="text" className="form-control" placeholder="Address (2)" onChange={this.handleInput} value={this.state.form.address2}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Zip Code</label>
                                                        <input name="zip_code" type="number" maxLength="4" className="form-control" placeholder="Zip Code" onChange={this.handleInput} value={this.state.form.zip_code}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>State</label>
                                                        <input name="state" type="text" className="form-control" placeholder="State" onChange={this.handleInput} value={this.state.form.state}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>City</label>
                                                        <input name="city" type="text" className="form-control" placeholder="City" onChange={this.handleInput} value={this.state.form.city}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Social Security #<span className="required">*</span></label>
                                                        <input name="social_security" type="text" className="form-control" placeholder="Social Security" onChange={this.handleInput} value={this.state.form.social_security}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Employee Number</label>
                                                        <input name="employee_number" type="number" className="form-control" placeholder="Employee Number" onChange={this.handleInput} value={this.state.form.employee_number}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>IAFF<span className="required">*</span></label>
                                                        <input name="iaff" type="number" className="form-control" placeholder="IAFF" onChange={this.handleInput} value={this.state.form.iaff}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <span className="subtitle">Member Status</span>
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Initiated<span className="required">*</span></label>
                                                        <input
                                                            type="radio"
                                                            name="member_status"
                                                            value="1"
                                                            checked={this.state.form.member_status === 1}
                                                            onChange={this.handleInput}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Transferred In<span className="required">*</span></label>
                                                        <input
                                                            type="radio"
                                                            name="member_status"
                                                            value="2"
                                                            checked={this.state.form.member_status === 2}
                                                            onChange={this.handleInput}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <span className="subtitle">Demographics</span>
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Date of Birth <span className="required">*</span></label>
                                                        <input name="date_birth" type="date" className="form-control" onChange={this.handleInput} value={this.state.form.date_birth}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Join Date <span className="required">*</span></label>
                                                        <input name="date_join" type="date" className="form-control" onChange={this.handleInput} value={this.state.form.date_join}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Gender</label>
                                                        <select name="gender" className="form-select" onChange={this.handleInput}>
                                                            <option selected disabled>Select a Gender</option>
                                                            {gender?.map((Item, key) => {
                                                                return (
                                                                    <option
                                                                        key={key}
                                                                        value={Item.id}
                                                                    >
                                                                        {Item.name}
                                                                    </option>
                                                                );
                                                            })}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Race</label>
                                                        <select name="race" className="form-select" onChange={this.handleInput}>
                                                            <option selected disabled>Select a Race</option>
                                                            {!!races && races.map((Item, key) => {
                                                                return (
                                                                    <option
                                                                        key={key}
                                                                        value={Item.id}
                                                                    >
                                                                        {Item.name}
                                                                    </option>
                                                                );
                                                            })}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <span className="subtitle">Job Info</span>
                                                </div>
                                            </div>
                                            <div className="mt-3 row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Original Hire<span className="required">*</span></label>
                                                        <input name="original_hire" type="text" className="form-control" onChange={this.handleInput} value={this.state.form.original_hire}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Badge #</label>
                                                        <input name="badge" type="number" className="form-control" placeholder="Badge #" onChange={this.handleInput} value={this.state.form.badge}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Position</label>
                                                        <select name="position" className="form-select" onChange={this.handleInput}>
                                                            <option selected disabled>Select a Position</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Sick Plan<span className="required">*</span></label>
                                                        <select name="sickplan" className="form-select" onChange={this.handleInput}>
                                                            <option selected disabled>Select a Sick Plan</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <span className="subtitle">Contact Details</span>
                                                </div>
                                            </div>
                                            <div className="mt-3 row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Home Phone</label>
                                                        <input name="home_phone" type="number" className="form-control" placeholder="Home Phone" onChange={this.handleInput} value={this.state.form.home_phone}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Cell Phone<span className="required">*</span></label>
                                                        <input name="cell_phone" type="number" className="form-control" placeholder="Cell Phone" onChange={this.handleInput} value={this.state.form.cell_phone}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Email Address<span className="required">*</span></label>
                                                        <input name="email" type="number" className="form-control" placeholder="Email Address" onChange={this.handleInput} value={this.state.form.email}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-5 row">
                                                <div className="col-md-6">
                                                    <button  type="submit" className="btn btn-danger">Create</button>
                                                </div>
                                                <div className="col-md-6">
                                                    <button className="btn btn-light">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddMember;