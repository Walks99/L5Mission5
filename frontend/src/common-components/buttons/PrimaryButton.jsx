import styles from "./PrimaryButton.module.css";

// Red coloured button. Use prop to set text to display inside the button
// <PrimaryButton displayText=""></PrimaryButton>

export default function PrimaryButton(props) {
    const customSize = {
        width: `${props.width}`,
        height: `${props.height}`
    };

    return (
        <div 
            id={styles['primaryButton']}
            style={{width: `${props.width}px`, height: `${props.height}px`}}>

            {props.displayText}
        </div>
    );
}