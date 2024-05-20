/* eslint-disable react/prop-types */

const InputBox = ({label , placeholder , onChange}) => {
  return (
    <div className="px-2">
    <div className="text-sm font-medium text-left py-2 ">{label}</div>
    <div>
        <input onChange={onChange} className="w-full px-2 py-1 border " placeholder={placeholder} type="text" />
    </div>
    </div>
  )
}

export default InputBox