/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom'

const BottomWarning = ({linkText , to , label}) => {
  return (
    <div className="py-2 text-sm flex gap-1 justify-center">
        {label}
        <Link className='cursor underline' to={to}>{linkText}</Link>
    </div>
  )
}

export default BottomWarning