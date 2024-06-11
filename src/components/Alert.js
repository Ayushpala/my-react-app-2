import React from 'react'

export default function Alert(props) {
  const capitalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    <div>

    {props.alert && <div class={`alert alert-${props.alert.Type} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.alert.Type)}: {props.alert.msg} </strong> 
</div>}

    </div>
  )
}
