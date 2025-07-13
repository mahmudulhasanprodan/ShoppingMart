import React from 'react'

const BillingForm = ({labelItem,InputType,InputPlaceholder,InputId,InputClass,className,OnChangeItem}) => {
  return (
    <>
      <div className={"flex flex-col gap-y-1"}>
        <div>
          <label htmlFor="labelItem" id="labelItem" className={className}>
            {labelItem}
          </label>
        </div>
        <div>
          <input
            type={InputType}
            placeholder={InputPlaceholder}
            id={InputId}
            className={InputClass}
            onChange={OnChangeItem}
          />
        </div>
      </div>
    </>
  );
}

export default BillingForm
