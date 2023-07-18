
const Skills = () => {
    return (
        <>
        <section>
        <h3>Skills</h3>
        <div className='skills'>
          <div className='skill'>
            <img src="img/javascript.png" alt='javascript' />
            <p>Javascript</p>
          </div>
          <div className='skill'>
            <img src="img/react.png" alt='react' />
            <p>React</p>
          </div>
          <div className='skill'>
            <div className='redux'>
              <img src="img/redux.png" alt='redux' />
            </div>
            <p>Redux</p>
          </div>
        </div>
        <div className='skills'>
          <div className='skill'>
            <img src="img/node.png" alt='node' />
            <p>Node</p>
          </div>
          <div className='skill'>
            <img src="img/code.png" alt='code' />
            <p>Vs Code</p>
          </div>
          <div className='skill'>
            <img src="img/figma.png" alt='figma' />
            <p>Figma</p>
          </div>
        </div>
      </section>
      </>
    )
}

export default Skills;