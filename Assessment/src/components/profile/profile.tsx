import { useState } from 'react';
import './profile.css'
import Questions from '../questions/questions';

function Profile(){

    const [questionList, setQuestionList] = useState<any>([]);

    const [isCheck, setCheck] = useState({
        eduaction:false,
        experience:false,
        resume:false
    })

    const handleChange = (e:any, name: string) => {
        if(name === 'education'){
            setCheck(previousState => {
                return {...previousState,eduaction: e.target.checked }
             });
        } else if(name === 'experience'){
            setCheck(previousState => {
                return {...previousState,experience: e.target.checked }
             });
        } else if(name === 'resume'){
            setCheck(previousState => {
                return {...previousState,resume: e.target.checked }
             });
        }
    }
    const handleClickOnAddQuestion = () => setQuestionList(questionList.concat(<Questions key={questionList.length}/>));
    
    const deleteQuestion = (id:any) => setQuestionList(questionList.filter((ques:any) => ques.key !== id));

    return(
        <div className="container-fluid profile">
            <div className="card mb-4 box-shadow subscription-transform" id="free">
                <div className="card-header d-flex align-items-center  ">
                    <h5 className="my-0 font-weight-normal">Profile</h5>
                </div>
                <div className="card-body">
                    <div className="input-form">
                        <div className='d-flex justify-content-between align-items-center '>
                            <small><label htmlFor="dateofbirth"><strong>Eduaction</strong></label></small>
                            <div className='d-flex'>
                                <div className='input-checkbox-radio internal me-5 form-check '>
                                    <input type="checkbox" name="Internal" className='form-check-input' />
                                    <label htmlFor="Internal"><small>Mandatory</small></label>
                                </div>
                                <div className='input-checkbox-radio hide form-check form-switch'>
                                    <input type="checkbox" name="phone_hide" className='form-check-input' role="switch" id="sliderSwitch" onChange={event => {handleChange(event, "education")}}/>
                                    <label htmlFor="sliderSwitch" className='from-check-label`'><small>{!isCheck.eduaction ? 'Hide' : 'Show'}</small></label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="input-form">
                        <div className='d-flex justify-content-between align-items-center '>
                            <small><label htmlFor="dateofbirth"><strong>Experience</strong></label></small>
                            <div className='d-flex'>
                                <div className='input-checkbox-radio internal me-5 form-check '>
                                    <input type="checkbox" name="Internal" className='form-check-input' />
                                    <label htmlFor="Internal"><small>Mandatory</small></label>
                                </div>
                                <div className='input-checkbox-radio hide form-check form-switch'>
                                    <input type="checkbox" name="phone_hide" className='form-check-input' role="switch" id="sliderSwitch" onChange={event => {handleChange(event, "experience")}}/>
                                    <label htmlFor="sliderSwitch" className='from-check-label`'><small>{!isCheck.experience ? 'Hide' : 'Show'}</small></label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="input-form">
                        <div className='d-flex justify-content-between align-items-center '>
                            <small><label htmlFor="dateofbirth"><strong>Resume</strong></label></small>
                            <div className='d-flex'>
                                <div className='input-checkbox-radio internal me-5 form-check '>
                                    <input type="checkbox" name="Internal" className='form-check-input' />
                                    <label htmlFor="Internal"><small>Mandatory</small></label>
                                </div>
                                <div className='input-checkbox-radio hide form-check form-switch'>
                                    <input type="checkbox" name="phone_hide" className='form-check-input' role="switch" id="sliderSwitch" onChange={event => {handleChange(event, "resume")}}/>
                                    <label htmlFor="sliderSwitch" className='from-check-label`'><small>{!isCheck.resume ? 'Hide' : 'Show'}</small></label>
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

export default Profile;