import React from 'react'

export default ({logo, title, subtitle, onClick, status}) => {
  let icon = 'redo'
  switch (status) {
    case 'success':
      icon = 'green check'
      break
    case 'loading':
      icon = 'blue spinner'
      break
    case 'invalid':
      icon = ''
      break
    case 'error':
      icon = 'red exclamation triangle'
      break
    default:
      icon = 'redo'
  }
  return (
    <header className='App-header'>
      <div className='wrapper ui container' style={{display: 'flex'}} >
        <a href='/storyliner/' style={{flex: 'none'}}>
          <img src={logo} alt="logo" className='ui image App-logo' />
        </a>
        <h1 className="ui header" style={{flexGrow: '1', margin: '0'}} >
            <span className='App-name' >
              {title}
            </span>
            <div className='sub header App-description'>
              {subtitle}
            </div>
        </h1>
        <div style={{flex: 'none'}} >
          <i className={`icon ${icon}`} onClick={onClick} />
        </div>
      </div>
    </header>
  )
}