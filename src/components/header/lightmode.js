
const LightMode = (props) => {
    const { change, text } = props;
    return (
        <>
            <div className='mode-area mode-light' onClick={change}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                    <ellipse cx="7.5" cy="8" rx="7.5" ry="8" transform="matrix(-1 0 0 1 15 0)" fill="#FFE86E" />
                </svg>
            </div>
            <div className='mode' onClick={change}>{text}</div>
        </>
    )
}

export default LightMode;