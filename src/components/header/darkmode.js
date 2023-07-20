
const DarkMode = (props) => {
    const { change, text } = props;
    return (
        <>
            <div className='mode-area mode-dark' onClick={change}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 15 16" fill="none">
                    <ellipse cx="7.5" cy="8" rx="7.5" ry="8" transform="matrix(-1 0 0 1 15 0)" fill="#FFE86E" />
                </svg>
                <svg style={{ "marginLeft": "-10px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 13" fill="none">
                    <circle cx="6.5" cy="6.5" r="6.5" transform="matrix(-1 0 0 1 13 0)" fill="#3A3A3A" />
                </svg>
            </div>
            <div className='mode' onClick={change}>{text}</div>
        </>
    )
}

export default DarkMode;