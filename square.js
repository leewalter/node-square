module.exports = x => {
    const xx = x ** 2;
    const xxx = xx * x; 
    console.log(`Walter Lee first Knative serverless function with riff !`);
    console.log(`riff = Function as a Service (FaaS) for Kubernetes. The riff project builds on top of the Knative project’s build, serving and eventing features.`);
    console.log(`the square of ${x} is ${xx}`);
    console.log(`the cube of ${x} is ${xxx}`);
    return xx, xxx;
}
