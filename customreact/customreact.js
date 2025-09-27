function customRender(customElement,container){
    // const domElement = document.createElement(customElement.type);
    // domElement.innerHTML = customElement.children;
    // domElement.setAttribute('href', customElement.props.href);
    // domElement.setAttribute('target', customElement.props.target);

    // container.appendChild(domElement);

    const domElement = document.createElement(customElement.type);
    domElement.innerHTML = customElement.children;

    for(let prop in customElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop, customElement.props[prop]);
}
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children:'Click Me'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement,mainContainer);