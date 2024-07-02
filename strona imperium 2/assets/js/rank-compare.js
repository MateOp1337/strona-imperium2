class YesIcon extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0303 5.71967C21.3232 6.01256 21.3232 6.48744 21.0303 6.78033L9.53033 18.2803C9.38763 18.423 9.19346 18.5022 8.99167 18.5C8.78988 18.4977 8.59751 18.4142 8.45802 18.2684L2.95802 12.5184C2.6717 12.2191 2.68225 11.7443 2.98158 11.458C3.28091 11.1717 3.75567 11.1823 4.04198 11.4816L9.01192 16.6774L19.9697 5.71967C20.2626 5.42678 20.7374 5.42678 21.0303 5.71967Z" fill="#34C759"/>
            </svg>
        `;
    }
}

class NoIcon extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.71967 5.71967C6.01256 5.42678 6.48744 5.42678 6.78033 5.71967L12 10.9393L17.2197 5.71967C17.5126 5.42678 17.9874 5.42678 18.2803 5.71967C18.5732 6.01256 18.5732 6.48744 18.2803 6.78033L13.0607 12L18.2803 17.2197C18.5732 17.5126 18.5732 17.9874 18.2803 18.2803C17.9874 18.5732 17.5126 18.5732 17.2197 18.2803L12 13.0607L6.78033 18.2803C6.48744 18.5732 6.01256 18.5732 5.71967 18.2803C5.42678 17.9874 5.42678 17.5126 5.71967 17.2197L10.9393 12L5.71967 6.78033C5.42678 6.48744 5.42678 6.01256 5.71967 5.71967Z" fill="#FF3B30"/>
            </svg>
        `;
    }
}

class MinusIcon extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12.75C2 12.3358 2.33579 12 2.75 12H21.25C21.6642 12 22 12.3358 22 12.75C22 13.1642 21.6642 13.5 21.25 13.5H2.75C2.33579 13.5 2 13.1642 2 12.75Z" fill="#FFCC00"/>
            </svg>
        `;
    }
}

customElements.define('yes-icon', YesIcon);
customElements.define('no-icon', NoIcon);
customElements.define('minus-icon', MinusIcon);