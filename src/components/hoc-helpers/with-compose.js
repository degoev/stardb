const withCompose = (...params) => (component) => {
     return params.reduceRight((wrapped, f)=>f(wrapped) , component)
}

export default withCompose;