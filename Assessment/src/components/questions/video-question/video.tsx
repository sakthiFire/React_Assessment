import './video.css';

function VideoQuestion(props: any) {

    
    var keyFromQuestion = props.keyFromQuestion;
    const select_menu = document.getElementById(keyFromQuestion + keyFromQuestion);
    const select_menu_txt: any = select_menu?.querySelector('.video-select-menu-txt');
    const options = select_menu?.querySelectorAll('.video-option');

    options?.forEach((option: any) => {
        option.addEventListener('click', () => {
            let selectedOption = option.querySelector('.video-option-txt')?.innerText;
            select_menu_txt.textContent = selectedOption;
            select_menu?.classList.remove('active');
        })
    })

    const handleClick = () => select_menu?.classList.toggle('active');

    return (
        <div className="video-duration">
            <div className="additional-info">
                <input className='w-100 mt-3' type="text" name="additional-info" id="addtional-info" placeholder='Additional Information'/>
            </div>
            <div className="duration d-flex justify-content-between w-100 position-relative ">
                <input type="number" name="duration" id="duration" className='w-50 mt-3 duration-input' placeholder='Max duration (Sec/Min)'/>
                <div className="video-duration-dropdown mt-3">
                    <div className="video-select d-flex justify-content-between align-items-center" onClick={handleClick}>
                        <p className='video-select-label m-0'>
                            <small>
                                <strong>
                                    <small className='video-select-menu-txt p-2'>Select 'Seconds'/'minutes'</small>
                                </strong>
                            </small>
                        </p>
                        <img src="../src/assets/uparrow.svg" alt="UpArrow" className='uparrow' />
                    </div>
                    <ul className="video-options d-none flex-column z-1 position-absolute ">
                        <li className='video-option'>
                            <p >
                                <small className='video-option-txt'>Seconds</small>
                            </p>
                        </li>
                        <li className='video-option'>
                            <p>
                                <small className='video-option-txt'>Minutes</small>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default VideoQuestion;