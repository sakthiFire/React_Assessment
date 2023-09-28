import { useEffect, useState } from 'react';
import './questions.css';
import VideoQuestion from './video-question/video';

function Questions(props: any) {

         
    const [isSelect, setIsSelect] = useState({
        video:false,
        multipleChoice:false
    });

    var keyFromPersonalInfo = props.keyFromParent;
    const select_menu = document.getElementById(keyFromPersonalInfo);
    const select_menu_txt: any = select_menu?.querySelector('.select-menu-txt');
    const options = select_menu?.querySelectorAll('.option');
    var selectedOption : any;

    useEffect(()=>{
        setIsSelect(isSelect);
        console.log('Use Effect',isSelect);
    },[isSelect]);

    options?.forEach((option: any) => {
        option.addEventListener('click', () => {
            selectedOption = option.querySelector('.option-txt')?.innerText;
            select_menu_txt.textContent = selectedOption;
            console.log(selectedOption)
            switch(selectedOption){
                case 'Video':
                    isSelect.video = true;
                    isSelect.multipleChoice = false;
                    break;
                case 'Multiple choice':
                    isSelect.video = false;
                    isSelect.multipleChoice = true;
                    break;
                default:
                    isSelect.video = false;
                    isSelect.multipleChoice = false;
            }
            
            select_menu?.classList.remove('active');
        })
    })

    const handleClick = () => {
        select_menu?.classList.toggle('active')
    }

 
    return (
        <>
            <p><small><strong>Type</strong></small></p>
            <div className="select" onClick={handleClick}>
                <p className='select-label'>
                    <small>
                        <strong>
                            <small className='select-menu-txt p-2'></small>
                        </strong>
                    </small>
                </p>
                <img src="../src/assets/uparrow.svg" alt="UpArrow" className='uparrow' />
            </div>
            <ul className="options d-none flex-column z-1 position-absolute ">
                <li className='option'>
                    <p >
                        <small className='option-txt'>Paragraph</small>
                    </p>
                </li>
                <li className='option'>
                    <p>
                        <small className='option-txt'>Yes/No</small>
                    </p>
                </li>
                <li className='option'>
                    <p>
                        <small className='option-txt'>File upload</small>
                    </p>
                </li>
                <li className='option'>
                    <p>
                        <small className='option-txt'>Multiple choice</small>
                    </p>
                </li>
                <li className='option'>
                    <p>
                        <small className='option-txt'>ShortAnswer</small>
                    </p>
                </li>
                <li className='option'>
                    <p>
                        <small className='option-txt'>Date</small>
                    </p>
                </li>
                <li className='option'>
                    <p>
                        <small className='option-txt'>Number</small>
                    </p>
                </li>
                <li className='option'>
                    <p>
                        <small className='option-txt'>Dropdown</small>
                    </p>
                </li>
                <li className='option'>
                    <p>
                        <small className='option-txt'>Video</small>
                    </p>
                </li>
            </ul>
            <div className='question-box  mt-3'>
                <p><small><strong>Question</strong></small></p>
                <input type="text" name="question" className='w-100' placeholder='Type here'/>
                <div id={keyFromPersonalInfo+keyFromPersonalInfo} className="video-duration w-100" style={{display:isSelect.video?'block':'none'}}>
                    <VideoQuestion keyFromQuestion={props.keyFromParent}/>
                </div>
                <div className='d-flex justify-content-between align-items-center '>
                    <div className="delete-btn d-flex" onClick={(event: any) => props.deleteQuestion(event.target.id)}>
                        <img src="../src/assets/cancel-svgrepo-com.svg" alt="" className='ms-4 mb-2' style={{ width: '15px', marginTop: '24.5px' }} />
                        <a className='text-decoration-none'><p className='text-danger ms-1 mt-4 mb-2'><strong><small><small key={keyFromPersonalInfo} id={keyFromPersonalInfo}>Delete & re-upload</small></small></strong></p></a>
                    </div>
                    <div className="save-btn">
                        <button><small>Save</small></button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Questions;