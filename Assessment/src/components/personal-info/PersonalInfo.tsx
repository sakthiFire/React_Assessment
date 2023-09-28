import { useState } from 'react';
import './PersonalInfo.css';
import Questions from '../questions/questions';

function PersonalInfo() {
    const [questionList, setQuestionList] = useState<any>([]);
    console.log('Very Start', questionList)
    const [isCheck, setCheck] = useState({
        firstname: false,
        lastname: false,
        email: false,
        phone: false,
        nationality: false,
        residence: false,
        idnumber: false,
        dateofbirth: false,
        gender: false
    });

    const handleChangeOnCheckbox = (event: any, name: string) => {
        switch (name) {
            case 'firstname':
                setCheck(previousState => {
                    return { ...previousState, firstname: event.target.checked }
                });
                break;
            case 'lastname':
                setCheck(previousState => {
                    return { ...previousState, lastname: event.target.checked }
                });
                break;
            case 'email':
                setCheck(previousState => {
                    return { ...previousState, email: event.target.checked }
                });
                break;
            case 'phone':
                setCheck(previousState => {
                    return { ...previousState, phone: event.target.checked }
                });
                break;
            case 'nationality':
                setCheck(previousState => {
                    return { ...previousState, nationality: event.target.checked }
                });
                break;
            case 'residence':
                setCheck(previousState => {
                    return { ...previousState, residence: event.target.checked }
                });
                break;
            case 'idnumber':
                setCheck(previousState => {
                    return { ...previousState, idnumber: event.target.checked }
                });
                break;
            case 'dob':
                setCheck(previousState => {
                    return { ...previousState, dateofbirth: event.target.checked }
                });
                break;
            case 'gender':
                setCheck(previousState => {
                    return { ...previousState, gender: event.target.checked }
                });
                break;
        }
    }

    const handleClickOnAddQuestion = () => {
        setQuestionList(questionList.concat(<Questions key={questionList.length}/>))
    }

    const deleteQuestion = (id:any) => {
        setQuestionList(questionList.filter((ques:any) => ques.key !== id));
    }

    
    return (
        <div className="container-fluid personal-info">
            <div className="card mb-4 box-shadow subscription-transform" id="free">
                <div className="card-header d-flex align-items-center  ">
                    <h5 className="my-0 font-weight-normal">Personal Information</h5>
                </div>
                <div className="card-body">
                    <div className="input-form">
                        <div className='d-flex justify-content-between align-items-center '>
                            <small><label htmlFor="firstname"><strong>First Name</strong></label></small>
                            <div className='d-flex'>
                                <div className='input-checkbox-radio internal me-5 form-check '>
                                    <input type="checkbox" name="Internal" className='form-check-input' />
                                    <label htmlFor="Internal"><small>Internal</small></label>
                                </div>
                                <div className='input-checkbox-radio hide form-check form-switch'>
                                    <input type="checkbox" name="firstname" className='form-check-input' role="switch" id="sliderSwitch" onChange={event => { handleChangeOnCheckbox(event, 'firstname') }} />
                                    <label htmlFor="sliderSwitch" className='from-check-label`'><small>{isCheck.firstname ? 'Show' : 'Hide'}</small></label>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="input-form">
                        <div className='d-flex justify-content-between align-items-center '>
                            <small><label htmlFor="lastname"><strong>Last Name</strong></label></small>
                            <div className='d-flex'>
                                <div className='input-checkbox-radio internal me-5 form-check '>
                                    <input type="checkbox" name="Internal" className='form-check-input' />
                                    <label htmlFor="Internal"><small>Internal</small></label>
                                </div>
                                <div className='input-checkbox-radio hide form-check form-switch'>
                                    <input type="checkbox" name="lastname" className='form-check-input' role="switch" id="sliderSwitch" onChange={event => { handleChangeOnCheckbox(event, 'lastname') }} />
                                    <label htmlFor="sliderSwitch" className='from-check-label`'><small>{isCheck.lastname ? 'Show' : 'Hide'}</small></label>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="input-form">
                        <div className='d-flex justify-content-between align-items-center '>
                            <small><label htmlFor="email"><strong>Email</strong></label></small>
                            <div className='d-flex'>
                                <div className='input-checkbox-radio internal me-5 form-check '>
                                    <input type="checkbox" name="Internal" className='form-check-input' />
                                    <label htmlFor="Internal"><small>Internal</small></label>
                                </div>
                                <div className='input-checkbox-radio hide form-check form-switch'>
                                    <input type="checkbox" name="email" className='form-check-input' role="switch" id="sliderSwitch" onChange={event => { handleChangeOnCheckbox(event, 'email') }} />
                                    <label htmlFor="sliderSwitch" className='from-check-label`'><small>{isCheck.email ? 'Show' : 'Hide'}</small></label>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="input-form">
                        <div className='d-flex justify-content-between align-items-center '>
                            <small><label htmlFor="phone"><strong>Phone</strong><small>(without dial code)</small></label></small>
                            <div className='d-flex'>
                                <div className='input-checkbox-radio internal me-5 form-check '>
                                    <input type="checkbox" name="Internal" className='form-check-input' />
                                    <label htmlFor="Internal"><small>Internal</small></label>
                                </div>
                                <div className='input-checkbox-radio hide form-check form-switch'>
                                    <input type="checkbox" name="phone_hide" className='form-check-input' role="switch" id="sliderSwitch" onChange={event => { handleChangeOnCheckbox(event, 'phone') }} />
                                    <label htmlFor="sliderSwitch" className='from-check-label`'><small>{isCheck.phone ? 'Show' : 'Hide'}</small></label>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="input-form">
                        <div className='d-flex justify-content-between align-items-center '>
                            <small><label htmlFor="nationality"><strong>Nationality</strong></label></small>
                            <div className='d-flex'>
                                <div className='input-checkbox-radio internal me-5 form-check '>
                                    <input type="checkbox" name="Internal" className='form-check-input' />
                                    <label htmlFor="Internal"><small>Internal</small></label>
                                </div>
                                <div className='input-checkbox-radio hide form-check form-switch'>
                                    <input type="checkbox" name="phone_hide" className='form-check-input' role="switch" id="sliderSwitch" onChange={event => { handleChangeOnCheckbox(event, 'nationality') }} />
                                    <label htmlFor="sliderSwitch" className='from-check-label`'><small>{isCheck.nationality ? 'Show' : 'Hide'}</small></label>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="input-form">
                        <div className='d-flex justify-content-between align-items-center '>
                            <small><label htmlFor="residence"><strong>Current Residence</strong></label></small>
                            <div className='d-flex'>
                                <div className='input-checkbox-radio internal me-5 form-check '>
                                    <input type="checkbox" name="Internal" className='form-check-input' />
                                    <label htmlFor="Internal"><small>Internal</small></label>
                                </div>
                                <div className='input-checkbox-radio hide form-check form-switch'>
                                    <input type="checkbox" name="phone_hide" className='form-check-input' role="switch" id="sliderSwitch" onChange={event => { handleChangeOnCheckbox(event, 'residence') }} />
                                    <label htmlFor="sliderSwitch" className='from-check-label`'><small>{isCheck.residence ? 'Show' : 'Hide'}</small></label>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="input-form">
                        <div className='d-flex justify-content-between align-items-center '>
                            <small><label htmlFor="idnumber"><strong>ID Number</strong></label></small>
                            <div className='d-flex'>
                                <div className='input-checkbox-radio internal me-5 form-check '>
                                    <input type="checkbox" name="Internal" className='form-check-input' />
                                    <label htmlFor="Internal"><small>Internal</small></label>
                                </div>
                                <div className='input-checkbox-radio hide form-check form-switch'>
                                    <input type="checkbox" name="phone_hide" className='form-check-input' role="switch" id="sliderSwitch" onChange={event => { handleChangeOnCheckbox(event, 'idnumber') }} />
                                    <label htmlFor="sliderSwitch" className='from-check-label`'><small>{isCheck.idnumber ? 'Show' : 'Hide'}</small></label>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="input-form">
                        <div className='d-flex justify-content-between align-items-center '>
                            <small><label htmlFor="dateofbirth"><strong>Date of Birth</strong></label></small>
                            <div className='d-flex'>
                                <div className='input-checkbox-radio internal me-5 form-check '>
                                    <input type="checkbox" name="Internal" className='form-check-input' />
                                    <label htmlFor="Internal"><small>Internal</small></label>
                                </div>
                                <div className='input-checkbox-radio hide form-check form-switch'>
                                    <input type="checkbox" name="phone_hide" className='form-check-input' role="switch" id="sliderSwitch" onChange={event => { handleChangeOnCheckbox(event, 'dob') }} />
                                    <label htmlFor="sliderSwitch" className='from-check-label`'><small>{isCheck.dateofbirth ? 'Show' : 'Hide'}</small></label>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="input-form">
                        <div className='d-flex justify-content-between align-items-center '>
                            <small><label htmlFor="gender"><strong>Gender</strong></label></small>
                            <div className='d-flex'>
                                <div className='input-checkbox-radio internal me-5 form-check '>
                                    <input type="checkbox" name="Internal" className='form-check-input' />
                                    <label htmlFor="Internal"><small>Internal</small></label>
                                </div>
                                <div className='input-checkbox-radio hide form-check form-switch'>
                                    <input type="checkbox" name="phone_hide" className='form-check-input' role="switch" id="sliderSwitch" onChange={event => { handleChangeOnCheckbox(event, 'gender') }} />
                                    <label htmlFor="sliderSwitch" className='from-check-label`'><small>{isCheck.gender ? 'Show' : 'Hide'}</small></label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="question">
                        {questionList.map((ques:any) =>  
                            <div id={ques.key} key={ques.key} className="select-menu position-relative"><Questions keyFromParent={ques.key} deleteQuestion={deleteQuestion}/></div>
                        )}
                    </div>
                    <div className="add-question mt-4 d-flex justify-content-start align-items-center">
                        <button className='btn' onClick={handleClickOnAddQuestion}><small><strong><img src="../src/assets/add-circle-svgrepo-com.svg" alt="" className='me-2' />Add a question</strong></small></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo;