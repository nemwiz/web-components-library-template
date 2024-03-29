/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ComponentButton {
        /**
          * Button text
         */
        "text": string;
        /**
          * Used to specify a type of the button. Can be "primary" or "secondary"
         */
        "type": string;
    }
    interface ComponentInput {
        /**
          * Unique id for this input field
         */
        "inputId": string;
        /**
          * Type of this input field it can be email, number, text, password etc.
         */
        "inputType": string;
        /**
          * Text for the label that shows above input field
         */
        "labelText": string;
        /**
          * Text that is used as a placeholder for the input field
         */
        "placeholderText": string;
    }
    interface ComponentLogin {
    }
    interface ComponentSpinner {
    }
}
declare global {
    interface HTMLComponentButtonElement extends Components.ComponentButton, HTMLStencilElement {
    }
    var HTMLComponentButtonElement: {
        prototype: HTMLComponentButtonElement;
        new (): HTMLComponentButtonElement;
    };
    interface HTMLComponentInputElement extends Components.ComponentInput, HTMLStencilElement {
    }
    var HTMLComponentInputElement: {
        prototype: HTMLComponentInputElement;
        new (): HTMLComponentInputElement;
    };
    interface HTMLComponentLoginElement extends Components.ComponentLogin, HTMLStencilElement {
    }
    var HTMLComponentLoginElement: {
        prototype: HTMLComponentLoginElement;
        new (): HTMLComponentLoginElement;
    };
    interface HTMLComponentSpinnerElement extends Components.ComponentSpinner, HTMLStencilElement {
    }
    var HTMLComponentSpinnerElement: {
        prototype: HTMLComponentSpinnerElement;
        new (): HTMLComponentSpinnerElement;
    };
    interface HTMLElementTagNameMap {
        "component-button": HTMLComponentButtonElement;
        "component-input": HTMLComponentInputElement;
        "component-login": HTMLComponentLoginElement;
        "component-spinner": HTMLComponentSpinnerElement;
    }
}
declare namespace LocalJSX {
    interface ComponentButton {
        /**
          * Button text
         */
        "text"?: string;
        /**
          * Used to specify a type of the button. Can be "primary" or "secondary"
         */
        "type"?: string;
    }
    interface ComponentInput {
        /**
          * Unique id for this input field
         */
        "inputId"?: string;
        /**
          * Type of this input field it can be email, number, text, password etc.
         */
        "inputType"?: string;
        /**
          * Text for the label that shows above input field
         */
        "labelText"?: string;
        /**
          * Text that is used as a placeholder for the input field
         */
        "placeholderText"?: string;
    }
    interface ComponentLogin {
    }
    interface ComponentSpinner {
    }
    interface IntrinsicElements {
        "component-button": ComponentButton;
        "component-input": ComponentInput;
        "component-login": ComponentLogin;
        "component-spinner": ComponentSpinner;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "component-button": LocalJSX.ComponentButton & JSXBase.HTMLAttributes<HTMLComponentButtonElement>;
            "component-input": LocalJSX.ComponentInput & JSXBase.HTMLAttributes<HTMLComponentInputElement>;
            "component-login": LocalJSX.ComponentLogin & JSXBase.HTMLAttributes<HTMLComponentLoginElement>;
            "component-spinner": LocalJSX.ComponentSpinner & JSXBase.HTMLAttributes<HTMLComponentSpinnerElement>;
        }
    }
}
