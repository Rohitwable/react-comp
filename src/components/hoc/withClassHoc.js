import React from 'react';
//this hoc is just function that returns component function but not component
const withClassHoc = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    )
}
export default withClassHoc;