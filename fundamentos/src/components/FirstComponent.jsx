// Importação do React

import HierarchyComponent from "./HierarchyComponent";

const FirstComponent = () => {
    // JSX que define a estrutura do componente
    /*
        Comentário multilinha
    */
    return (
        <div>
            {/* JSX que define o conteúdo do componente */}
            <h1>This is the First Component</h1>
            <HierarchyComponent />
        </div>
    );
}

export default FirstComponent;