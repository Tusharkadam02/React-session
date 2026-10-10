import React from "react";
import CardComp, { ButtonComp, InputComp } from "./01-components"

// Composition - building a bigger ui from smaller components

function CompositionExamples(){
    return <div>
        <p>Card Component</p>
        <CardComp />
    </div>;
}

export default CompositionExamples;